"use client";

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
    <div className="white card flex min-w-0 flex-col gap-3 rounded-3xl p-4">
      <div className="white relative h-[170px] overflow-hidden rounded-2xl">
        <div className="shot fl rounded-[10px] text-[11px]" style={{ left: "6%", top: 26, width: "50%", height: 120, zIndex: 1 }}>[IMAGE 1]</div>
        <div className="shot fr rounded-[10px] text-[11px]" style={{ right: "6%", top: 32, width: "50%", height: 120, zIndex: 2 }}>[IMAGE 2]</div>
      </div>
      <h2 className="text-[21px] font-medium tracking-[-0.02em]">{project.title}</h2>
      <p className="text-[14px] leading-normal text-[#6B6B6B]">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="pill px-2.5">{t}</span>
        ))}
      </div>

      {project.hasDetail ? (
        <Link href={`/works/${project.slug}`} className="btn btn-line btn-accent mt-auto self-stretch text-[14px]">
          View details <Arrow />
        </Link>
      ) : (
        <button type="button" onClick={() => setNotice(true)} className="btn btn-line mt-auto self-stretch text-[14px]">
          View details <Arrow />
        </button>
      )}

      {notice && (
        <div role="status" className="flex items-start justify-between gap-2.5 rounded-[14px] border border-[#141414] bg-[#F2F2EF] px-3 py-2.5 text-[13px] font-medium leading-snug">
          <span>Not available yet. The details for this work are coming soon.</span>
          <button type="button" onClick={() => setNotice(false)} aria-label="Dismiss notice" className="h-7 w-7 flex-none rounded-lg border border-[#141414] bg-white p-0 text-[14px] font-medium leading-none">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
