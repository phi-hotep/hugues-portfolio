import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hugues Bomokin — IT Professional & Solution Builder",
  description: "Bilingual IT professional specializing in AI automation, Flutter mobile development, and n8n workflow automation. Based in Toronto, Canada.",
  keywords: ["IT Automation", "AI Agents", "Flutter", "n8n", "Network Engineer", "Toronto"],
  openGraph: {
    title: "Hugues Bomokin — IT Professional & Solution Builder",
    description: "Building systems that think, automate, and scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        <div className="grid-bg" />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
