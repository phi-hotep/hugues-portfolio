import Link from "next/link";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <section style={{ padding: "8rem 2rem", maxWidth: 800, margin: "0 auto" }}>
      <Link
        href="/#projects"
        style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-teal)", textDecoration: "none", letterSpacing: "0.04em" }}
      >
        ← Back to projects
      </Link>

      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, margin: "1.5rem 0 1rem", letterSpacing: "-0.02em" }}>
        {project.title}
      </h1>

      <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        {project.description}
      </p>

      {project.outcome && (
        <div
          style={{
            padding: "12px 16px",
            background: "var(--color-surface-2)",
            borderRadius: 4,
            borderLeft: "2px solid var(--color-teal)",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted)", lineHeight: 1.6 }}>
            <span style={{ color: "var(--color-teal)" }}>→ </span>
            {project.outcome}
          </p>
        </div>
      )}

      <div
        style={{
          padding: "2rem",
          background: "var(--color-surface)",
          border: "1px dashed var(--color-border)",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-muted)", letterSpacing: "0.04em" }}>
          Full write-up coming soon.
        </p>
      </div>
    </section>
  );
}
