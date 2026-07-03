"use client";
import domains from "@/data/domains.json";

const colorMap: Record<string, { accent: string; dim: string }> = {
  teal: { accent: "var(--color-teal)", dim: "var(--color-teal-dim)" },
  blue: { accent: "var(--color-blue)", dim: "var(--color-blue-dim)" },
  amber: { accent: "var(--color-amber)", dim: "var(--color-amber-dim)" },
};

const iconMap: Record<string, string> = {
  Brain: "🧠",
  Smartphone: "📱",
  GitBranch: "⚙️",
};

export default function Domains() {
  return (
    <section id="domains" style={{ padding: "8rem 2rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: "1rem" }}>
            <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
            <span className="section-label">What I build</span>
            <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Three domains,<br /><span style={{ color: "var(--color-teal)" }}>one mindset</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {domains.filter(domain => domain.featured).map((domain, i) => {
            const colors = colorMap[domain.color] || colorMap.teal;
            return (
              <div key={domain.slug}
                style={{
                  background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                  borderRadius: 8, padding: "2rem", position: "relative", overflow: "hidden",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = colors.accent;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Number */}
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: colors.accent, marginBottom: "1.5rem", letterSpacing: "0.1em" }}>0{i + 1}</div>

                {/* Icon */}
                <div style={{ fontSize: 36, marginBottom: "1rem" }}>{iconMap[domain.icon]}</div>

                {/* Name */}
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3, color: "var(--color-text)" }}>{domain.name}</h3>

                {/* Description */}
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>{domain.description}</p>

                {/* Link */}
                <a href={`#projects`} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: colors.accent, textDecoration: "none", letterSpacing: "0.05em", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  View projects <span>→</span>
                </a>

                {/* Bg glow */}
                <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: colors.dim, borderRadius: "0 8px 0 100%", pointerEvents: "none" }} />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #domains > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
