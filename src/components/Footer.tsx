import Link from "next/link";
import { site } from "@/data/content";

export default function Footer({ variant = "home" }: { variant?: "home" | "detail" }) {
  return (
    <footer id="contact" className="panel flex flex-col gap-5 p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <div className="flex min-w-0 flex-col gap-1.5" style={{ flex: "1 1 280px" }}>
          <div className="text-[30px] font-medium leading-[1.1] tracking-[-0.04em]">
            {variant === "detail" ? "Want something like this " : "Got an idea? Let's "}
            <span className="hl" style={{ padding: "0 6px", borderRadius: 6 }}>{variant === "detail" ? "built" : "build"}</span>
            {variant === "detail" ? "?" : " it."}
          </div>
          <span className="text-[15px] leading-normal text-[#6B6B6B]">
            Open to collaborations, freelance work and full-time roles.
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {variant === "detail" && (
            <Link href="/works" className="btn btn-line">More works</Link>
          )}
          <a href={`mailto:${site.email}`} className="btn btn-line btn-accent">Say hello</a>
        </div>
      </div>
      <div className="h-px bg-[#141414] opacity-20" />
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[14px] text-[#6B6B6B]">
        <span>© 2026 Aditya Pratama · Surabaya, Indonesia</span>
        <nav aria-label="Social" className="flex flex-wrap gap-x-5 gap-y-2 font-medium text-[#141414]">
          <a href={site.instagram} className="border-b border-[#141414]">Instagram</a>
          <a href={site.github} className="border-b border-[#141414]">GitHub</a>
          <a href={site.linkedin} className="border-b border-[#141414]">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
