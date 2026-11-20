import type { ReactNode } from "react";
import Reveal from "./Reveal";
import StepSticker, { type StepIconName } from "@/stickers/StepSticker";

type Step = {
  title: string;
  desc: string;
  outcome: string;
  icon: StepIconName;
  checkBg?: string;
  accent: boolean;
  chip?: string;
};

const steps: Step[] = [
  {
    title: "Understand the problem",
    desc: "I start by listening. Who is it for, what's actually broken, and what does done look like? I get that clear before touching any code.",
    outcome: "Everyone's on the same page",
    accent: true,
    chip: "Start here",
    checkBg: "#ADD7C6",
    icon: "chat",
  },
  {
    title: "Design the flow",
    desc: "I sketch the screens and how people move through them, then turn it into something clickable so we can try it before it's built.",
    outcome: "Something you can click, not just imagine",
    accent: true,
    checkBg: "#C7B8EB",
    icon: "pen",
  },
  {
    title: "Build it properly",
    desc: "This is where I get my hands dirty. I build it to be reliable and secure, test as I go, and keep it simple enough to grow later.",
    outcome: "Features that actually work",
    accent: true,
    checkBg: "#AFCBE7",
    icon: "phone",
  },
  {
    title: "Ship and keep improving",
    desc: "I launch, watch how people really use it, and fix what hurts. Launch day is where the learning begins.",
    outcome: "A live product that keeps getting better",
    accent: false,
    icon: "plane",
  },
];

const Gem = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M2 9h20M9 3l3 6 3-6M12 21L9 9M12 21l3-12" />
  </svg>
);

export default function HowIWork() {
  const rows: ReactNode[] = [];
  steps.forEach((s, i) => {
    const rev = i % 2 === 1;
    rows.push(
      <Reveal key={`r${i}`} variant="flip" className={`row${rev ? " rev" : ""}`}>
        <div className="tile">
          <StepSticker name={s.icon} offset={i * 20} />
          {s.checkBg && (
            <span className="check" style={{ background: s.checkBg }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </span>
          )}
        </div>
        <div className="stub" />
        <div className="step" style={{ "--bg": s.accent ? "var(--accent)" : "#fff" } as React.CSSProperties}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.025em]">{s.title}</h3>
            {s.chip && (
              <span className="flex-none rounded-full border border-[#141414] bg-white px-3 py-[3px] text-[12px] font-medium">{s.chip}</span>
            )}
          </div>
          <p className="text-[15px] font-medium leading-normal">{s.desc}</p>
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <Gem />
            {s.outcome}
          </div>
        </div>
      </Reveal>,
    );
    if (i < steps.length - 1) {
      rows.push(
        <div key={`e${i}`} className={`elbow ${rev ? "b" : "a"}`}>
          <div />
          <div />
        </div>,
      );
    }
  });

  return (
    <section className="panel flex flex-col gap-6 p-7">
      <Reveal variant="title" className="flex flex-col gap-1.5">
        <h2 className="display">How I work</h2>
        <span className="sub">From first chat to launch day. I always start with the problem.</span>
      </Reveal>
      <div className="flow">{rows}</div>
    </section>
  );
}
