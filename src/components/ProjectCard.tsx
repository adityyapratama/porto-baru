"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/content";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const [notice, setNotice] = useState(false);
  return (
    <div className="group white card flex overflow-hidden min-w-0 flex-col gap-3 rounded-3xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-xl bg-white text-[18px] font-medium">
            {project.icon ? (
              <Image src={project.icon} alt="" width={48} height={48} className="h-full w-full object-contain p-1.5" />
            ) : (
              project.title.charAt(0).toUpperCase()
            )}
          </div>
          <div className="flex min-w-0 flex-col items-start gap-1">
            <h2 className="text-[23px] font-medium leading-tight tracking-[-0.02em]">{project.title}</h2>
            {project.status && (
              <span className="pill px-2.5 text-[12px]" style={{ background: "var(--accent)" }}>{project.status}</span>
            )}
          </div>
        </div>
        <div className="flex flex-none items-center gap-1.5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="btn flex h-8 w-8 items-center justify-center rounded-lg border border-[#141414] bg-white">
              <Image src="/github.svg" alt="" width={16} height={16} />
            </a>
          )}
        </div>
      </div>
      <p className="text-[14px] leading-normal text-[#6B6B6B]">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="pill px-2.5">{t}</span>
        ))}
      </div>

      {notice && (
        <div role="status" className="flex items-start justify-between gap-2.5 rounded-[14px] border border-[#141414] bg-[#F2F2EF] px-3 py-2.5 text-[13px] font-medium leading-snug">
          <span>Not available yet. The details for this work are coming soon.</span>
          <button type="button" onClick={() => setNotice(false)} aria-label="Dismiss notice" className="h-7 w-7 flex-none rounded-lg border border-[#141414] bg-white p-0 text-[14px] font-medium leading-none">
            ×
          </button>
        </div>
      )}

      <div className="relative -mx-5 mt-auto h-[310px] flex-none overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          {project.image1 ? (
            <div className="absolute inset-0 flex items-center justify-center px-5 py-6">
              <Image
                src={project.image1}
                alt={`${project.title} preview`}
                width={project.image1Size?.[0] ?? 1400}
                height={project.image1Size?.[1] ?? 875}
                sizes="(max-width: 700px) 95vw, 900px"
                quality={95}
                className="h-auto max-h-full w-auto max-w-[88%] rounded-lg border border-[#141414]"
              />
            </div>
          ) : (
            <div className="shot rounded-lg text-[11px]" style={{ left: "12%", top: 60, width: "76%", height: 180, transform: "rotate(-3deg)" }}>[IMAGE]</div>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        {project.hasDetail ? (
          <Link href={`/works/${project.slug}`} className="btn btn-line btn-accent flex-1 text-[14px]">
            View details <Arrow />
          </Link>
        ) : (
          <button type="button" onClick={() => setNotice(true)} className="btn btn-line flex-1 text-[14px]">
            View details <Arrow />
          </button>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-line flex-1 text-[14px]">
            Visit system <Arrow />
          </a>
        )}
      </div>
    </div>
  );
}
