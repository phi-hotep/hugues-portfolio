"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#domains", label: "Domains" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.3s ease",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      background: scrolled ? "rgba(8,12,16,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
            HB<span style={{ color: "var(--color-teal)" }}>.</span>
          </span>
        </Link>

        {/* Desktop */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-muted)",
              textDecoration: "none", letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
            >{l.label}</a>
          ))}
          <a href="#contact" style={{
            fontFamily: "var(--font-mono)", fontSize: 12, padding: "8px 18px",
            border: "1px solid var(--color-teal)", color: "var(--color-teal)",
            borderRadius: 4, textDecoration: "none", letterSpacing: "0.05em",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-teal)"; e.currentTarget.style.color = "#080c10"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-teal)"; }}
          >Hire me</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text)", fontSize: 22, display: "none" }} className="mobile-menu-btn">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", padding: "1rem 2rem 1.5rem" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "0.75rem 0", color: "var(--color-muted)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: 14, borderBottom: "1px solid var(--color-border)" }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
