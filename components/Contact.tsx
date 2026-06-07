"use client";
import profile from "@/data/profile.json";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "8rem 2rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: "1rem" }}>
          <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
          <span className="section-label">Get in touch</span>
          <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
        </div>

        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.5rem", lineHeight: 1.1 }}>
          Let&apos;s build<br /><span style={{ color: "var(--color-teal)" }}>something together</span>
        </h2>

        <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--color-muted)", lineHeight: 1.8, marginBottom: "3rem", maxWidth: 480, margin: "0 auto 3rem" }}>
          Open to IT roles, automation consulting, and Flutter projects. Bilingual (FR/EN), based in Toronto, available immediately.
        </p>

        {/* Email CTA */}
        <a href={`mailto:${profile.email}`} style={{
          display: "inline-block", padding: "16px 40px",
          background: "var(--color-teal)", color: "#080c10",
          borderRadius: 4, textDecoration: "none", fontWeight: 700,
          fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.05em",
          transition: "opacity 0.2s", marginBottom: "3rem",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          {profile.email}
        </a>

        {/* Social links */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
          {[
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-teal)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
            >{label} ↗</a>
          ))}
        </div>

        {/* Footer */}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", marginTop: "4rem", letterSpacing: "0.08em", opacity: 0.5 }}>
          © {new Date().getFullYear()} Hugues Bomokin · Built with Next.js · Deployed on Cloudflare Pages
        </p>
      </div>
    </section>
  );
}
