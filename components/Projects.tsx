"use client";
import domainsData from "@/data/domains.json";
import projectsData from "@/data/projects.json";
import { useState } from "react";

const colorMap: Record<string, string> = {
  "automation-ai": "var(--color-teal)",
  "flutter": "var(--color-blue)",
  "n8n": "var(--color-amber)",
  "mobile-apps": "var(--color-blue)",
};

const typeLabel: Record<string, string> = {
  "code": "Code",
  "workflow": "Workflow",
  "case-study": "Case Study",
};

function isValidLink(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function ProjectLinkSlot({
  href,
  label,
  color,
  external = false,
}: {
  href?: string | null;
  label: string;
  color: string;
  external?: boolean;
}) {
  if (!isValidLink(href)) {
    return (
      <span
        aria-disabled="true"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.04em",
          color: "var(--color-muted)",
          padding: "2px 8px",
          borderRadius: 4,
          border: "1px dashed var(--color-border)",
          background: "rgba(255,255,255,0.03)",
          cursor: "not-allowed",
          userSelect: "none",
        }}
      >
        {label} — Coming soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ fontFamily: "var(--font-mono)", fontSize: 12, color, textDecoration: "none", letterSpacing: "0.04em" }}
    >
      {label} →
    </a>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projectsData : projectsData.filter(p => p.domain === active);

  return (
    <section id="projects" style={{ padding: "8rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.75rem" }}>
            <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
            <span className="section-label">Portfolio</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Selected <span style={{ color: "var(--color-teal)" }}>work</span></h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {([{ slug: "all", name: "All" }, ...domainsData] as { slug: string; name: string }[]).map(d => {
            const isActive = active === d.slug;
            const dAccent = d.slug === "all" ? "var(--color-teal)" : colorMap[d.slug] || "var(--color-teal)";
            return (
              <button key={d.slug} onClick={() => setActive(d.slug)}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: 12, padding: "8px 16px",
                  borderRadius: 4, border: "1px solid",
                  borderColor: isActive ? dAccent : "var(--color-border)",
                  background: isActive ? `${dAccent}18` : "transparent",
                  color: isActive ? dAccent : "var(--color-muted)",
                  cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.04em",
                }}
              >{d.name.split(" ")[0]}</button>
            );
          })}
        </div>
      </div>

      {/* Project grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {filtered.map(project => {
          const accent = colorMap[project.domain] || "var(--color-teal)";
          const domain = domainsData.find(d => d.slug === project.domain);
          return (
            <div key={project.id}
              style={{
                background: "var(--color-surface)", border: "1px solid var(--color-border)",
                borderRadius: 8, overflow: "hidden", transition: "border-color 0.2s, transform 0.2s",
                display: "flex", flexDirection: "column",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = accent;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Thumbnail */}
              <div style={{ height: 180, background: "var(--color-surface-2)", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.1em" }}>[ THUMBNAIL ]</div>
                )}
                {project.featured && (
                  <div style={{ position: "absolute", top: 12, right: 12, fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 8px", borderRadius: 3, background: `${accent}22`, color: accent, border: `1px solid ${accent}44`, letterSpacing: "0.08em" }}>FEATURED</div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {/* Domain badge + type */}
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "2px 8px", borderRadius: 3, background: `${accent}18`, color: accent, border: `1px solid ${accent}33`, letterSpacing: "0.08em" }}>
                    {domain?.name.split(" ")[0] || project.domain}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted)", letterSpacing: "0.06em" }}>{typeLabel[project.type]}</span>
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3, color: "var(--color-text)" }}>{project.title}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted)", lineHeight: 1.7, flex: 1 }}>{project.description}</p>

                {/* Outcome */}
                {project.outcome && (
                  <div style={{ padding: "8px 12px", background: "var(--color-surface-2)", borderRadius: 4, borderLeft: `2px solid ${accent}` }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", lineHeight: 1.5 }}>
                      <span style={{ color: accent }}>→ </span>{project.outcome}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.5rem", borderTop: "1px solid var(--color-border)" }}>
                  <ProjectLinkSlot href={project.repo} label="GitHub" color={accent} external />
                  <ProjectLinkSlot href={project.demo} label="Live Demo" color="var(--color-muted)" external />
                  <ProjectLinkSlot href={project.caseStudy} label="Case Study" color={accent} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
