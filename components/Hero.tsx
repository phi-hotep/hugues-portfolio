"use client";
import { useEffect, useState } from "react";

const roles = ["IT Professional", "AI Agent Builder", "Flutter Developer", "n8n Automation Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 2rem", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 720 }}>
        {/* Mono label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
          <div style={{ width: 32, height: 1, background: "var(--color-teal)" }} />
          <span className="section-label">Available for hire · Ottawa, Canada</span>
        </div>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "var(--color-text)" }}>
          Hugues<br />
          <span style={{ color: "var(--color-teal)" }}>Bomokin</span>
        </h1>

        {/* Rotating role */}
        <div style={{ height: 40, marginBottom: "1.5rem", overflow: "hidden" }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--color-muted)", letterSpacing: "0.02em",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-10px)",
          }}>
            <span style={{ color: "var(--color-teal)" }}>&gt; </span>{roles[roleIndex]}
          </p>
        </div>

        {/* Bio */}
        <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "var(--color-muted)", maxWidth: 560, marginBottom: "3rem" }}>
          I design IT systems the way an engineer should: <span style={{ color: "var(--color-text)" }}>understand the problem, find the simplest path, then automate it so it scales without me</span>. 10+ years of telecom infrastructure taught me how systems work, and how they fail. Technology doesn&apos;t stand still and neither do I: right now that means mastering how AI fits into real IT operations.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects" style={{
            padding: "14px 32px", background: "var(--color-teal)", color: "#080c10",
            borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: 14,
            letterSpacing: "0.05em", transition: "all 0.2s", fontFamily: "var(--font-mono)",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >View Projects →</a>
          <a href="#contact" style={{
            padding: "14px 32px", border: "1px solid var(--color-border-hover)", color: "var(--color-text)",
            borderRadius: 4, textDecoration: "none", fontSize: 14, fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em", transition: "all 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--color-teal)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-border-hover)")}
          >Get in touch</a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
          {[["10+", "Years in Telecom"], ["3", "Domains"], ["6+", "Projects"]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}>{num}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.08em", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
