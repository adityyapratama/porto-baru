import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { projectDetail } from "@/data/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(projectDetail).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const d = projectDetail[slug as keyof typeof projectDetail];
  return { title: d ? `${d.title} ${d.highlight} · Work detail` : "Work detail" };
}

export default async function WorkDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const d = projectDetail[slug as keyof typeof projectDetail];
  if (!d) notFound();

  const meta = [
    ["ROLE", d.role],
    ["TIMELINE", d.timeline],
    ["TEAM", d.team],
  ];

  return (
    <div className="page">
      <Nav />

      <Link href="/works" className="btn btn-line self-start !min-h-11 !px-3.5 !py-2 text-[14px]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
          <path d="M20 12H4M11 5l-7 7 7 7" />
        </svg>
        All works
      </Link>

      <header className="panel flex flex-col gap-4 p-8">
        <span className="pill self-start px-3 tracking-[0.04em]" style={{ background: "var(--accent)" }}>{d.kicker}</span>
        <h1 className="display">
          {d.title} <span className="hl">{d.highlight}</span>
        </h1>
        <p className="max-w-[680px] text-[17px] leading-[1.6] text-[#6B6B6B]">{d.summary}</p>
        <div className="meta-grid">
          {meta.map(([k, v]) => (
            <div key={k} className="white flex flex-col gap-1 rounded-[20px] px-[18px] py-3.5">
              <span className="text-[12px] font-medium tracking-[0.04em] text-[#6B6B6B]">{k}</span>
              <span className="text-[16px] font-medium">{v}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {d.stack.map((s) => (
            <span key={s} className="pill px-3 text-[13px]">{s}</span>
          ))}
        </div>
      </header>

      <section aria-label="Gallery" className="white relative h-[360px] overflow-hidden rounded-[32px]">
        <div className="shot fl rounded-2xl text-[13px]" style={{ left: "8%", top: 44, width: "44%", height: 260, zIndex: 1 }}>[IMAGE 1]</div>
        <div className="shot fr rounded-2xl text-[13px]" style={{ right: "8%", top: 56, width: "44%", height: 260, zIndex: 2 }}>[IMAGE 2]</div>
      </section>

      <section className="detail-grid">
        <div className="panel card flex min-w-0 flex-col gap-3.5 p-7">
          <h2 className="text-[32px] font-medium leading-none tracking-[-0.035em]">What I did</h2>
          {d.did.map((item) => (
            <div key={item} className="white flex items-start gap-2.5 rounded-2xl px-4 py-3 text-[15px] leading-[1.55] text-[#6B6B6B]">
              <span className="flex-none font-medium text-[#141414]">+</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="panel card flex min-w-0 flex-col gap-3.5 p-7">
          <h2 className="text-[32px] font-medium leading-none tracking-[-0.035em]">Outcome</h2>
          <p className="text-[15px] leading-[1.55] text-[#6B6B6B]">{d.outcome}</p>
          <h3 className="mt-2 text-[22px] font-medium tracking-[-0.025em]">What I learned</h3>
          <p className="text-[15px] leading-[1.55] text-[#6B6B6B]">{d.learned}</p>
        </div>
      </section>

      <Footer variant="detail" />
    </div>
  );
}
