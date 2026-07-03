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
            ].map(([key, val]) => (
              <div key={key} style={{ display: "flex", gap: "1rem", fontFamily: "var(--font-mono)", fontSize: 13 }}>
                <span style={{ color: "var(--color-teal)", minWidth: 90 }}>{key}</span>
                <span style={{ color: "var(--color-muted)" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo placeholder */}
        <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-surface-2)", position: "relative" }}>
          <img
            src={profile.photo}
            alt={profile.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            onError={e => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;color:var(--color-muted)"><div style="font-size:48px">👤</div><span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em">PHOTO COMING SOON</span></div>';
              }
            }}
          />
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
