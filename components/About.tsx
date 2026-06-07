"use client";
import profile from "@/data/profile.json";

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

        {/* Left — text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
            <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
            <span className="section-label">About me</span>
          </div>

          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Infrastructure roots,<br />
            <span style={{ color: "var(--color-teal)" }}>software mindset</span>
          </h2>

          <p style={{ color: "var(--color-muted)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            {profile.longBio}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              ["Languages", "French (native) · English (professional)"],
              ["Location", profile.location],
              ["Currently", "NPower Canada Junior IT Analyst Program"],
            ].map(([key, val]) => (
              <div key={key} style={{ display: "flex", gap: "1rem", fontFamily: "var(--font-mono)", fontSize: 13 }}>
                <span style={{ color: "var(--color-teal)", minWidth: 90 }}>{key}</span>
                <span style={{ color: "var(--color-muted)" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo placeholder */}
        <div style={{ position: "relative" }}>
          <div style={{
            width: "100%", aspectRatio: "4/5", borderRadius: 8,
            background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "0.75rem", color: "var(--color-muted)",
          }}>
            <div style={{ fontSize: 48 }}>👤</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em" }}>PHOTO COMING SOON</span>
          </div>
          {/* Decorative corner */}
          <div style={{ position: "absolute", bottom: -16, right: -16, width: 80, height: 80, border: "2px solid var(--color-teal)", borderRadius: 4, opacity: 0.3 }} />
          <div style={{ position: "absolute", top: -16, left: -16, width: 48, height: 48, background: "var(--color-teal)", borderRadius: 4, opacity: 0.08 }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
