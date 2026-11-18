import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Works · Aditya Pratama" };

export default function WorksPage() {
  return (
    <div className="page">
      <Nav />

      <Reveal>
      <header className="panel flex flex-col items-start gap-3 p-8">
        <span className="pill px-3 tracking-[0.04em]" style={{ background: "var(--accent)" }}>SELECTED WORKS</span>
        <h1 className="display">
          Things I&apos;ve <span className="hl">built</span>.
        </h1>
        <p className="max-w-[520px] text-[16px] leading-normal text-[#6B6B6B]">Hover a frame to look closer.</p>
      </header>
      </Reveal>

      <main className="works-grid">
        {projects.map((p, i) => (
          <Reveal key={p.slug} variant="left" delay={(i % 3) * 0.09} className="h-full [&>*]:h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
