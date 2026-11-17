import type { ReactNode } from "react";

type Step = {
  title: string;
  desc: string;
  outcome: string;
  icon: ReactNode;
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
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M26 20h30a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H44l-8 8V42h-10z" fill="#141414" transform="translate(-2 2)" />
        <path d="M8 8h30a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H20l-8 8V32H8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#FFC62B" stroke="#141414" strokeWidth="3" strokeLinejoin="round" />
        <path d="M12 15h22M12 22h14" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Design the flow",
    desc: "I sketch the screens and how people move through them, then turn it into something clickable so we can try it before it's built.",
    outcome: "Something you can click, not just imagine",
    accent: true,
    checkBg: "#C7B8EB",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="5" fill="#F2F2EF" stroke="#141414" strokeWidth="3" />
        <circle cx="46" cy="16" r="12" fill="#FFC62B" stroke="#141414" strokeWidth="3" />
        <path d="M4 36h24v24H4z" fill="#141414" />
        <path d="M4 60V44a8 8 0 0 1 8-8h16v24z" fill="#FFC62B" />
        <path d="M46 33l13 13-13 13-13-13z" fill="#FFC62B" stroke="#141414" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Build it properly",
    desc: "This is where I get my hands dirty. I build it to be reliable and secure, test as I go, and keep it simple enough to grow later.",
    outcome: "Features that actually work",
    accent: true,
    checkBg: "#AFCBE7",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="3" y="8" width="58" height="48" rx="4" fill="#FFFFFF" stroke="#141414" strokeWidth="3" />
        <path d="M3 20h58" stroke="#141414" strokeWidth="3" />
        <circle cx="10" cy="14" r="1.8" fill="#141414" />
        <circle cx="16" cy="14" r="1.8" fill="#141414" />
        <circle cx="22" cy="14" r="1.8" fill="#141414" />
        <path d="M20 28l-8 8 8 8M44 28l8 8-8 8M36 26l-8 20" fill="none" stroke="#141414" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ship and keep improving",
    desc: "I launch, watch how people really use it, and fix what hurts. Launch day is where the learning begins.",
    outcome: "A live product that keeps getting better",
    accent: false,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 3C42 12 44 24 42 38H22C20 24 22 12 32 3z" fill="#FF6F00" stroke="#141414" strokeWidth="3" strokeLinejoin="round" />
        <path d="M22 38L12 48V40l8-12zM42 38l10 10V40l-8-12z" fill="#FF6F00" stroke="#141414" strokeWidth="3" strokeLinejoin="round" />
        <path d="M28 42h8l-2 14a2 2 0 0 1-4 0z" fill="#FF6F00" stroke="#141414" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="32" cy="26" r="6" fill="#FFFFFF" stroke="#141414" strokeWidth="3" />
      </svg>
    ),
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
      <div key={`r${i}`} className={`row${rev ? " rev" : ""}`}>
        <div className="tile">
          {s.icon}
          {s.checkBg && (
            <span className="check" style={{ background: s.checkBg }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </span>
          )}
        </div>
        <div className="stub" />
        <div className="step" style={{ background: s.accent ? "var(--accent)" : "#fff" }}>
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
      </div>,
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
      <div className="flex flex-col gap-1.5">
        <h2 className="display">How I work</h2>
        <span className="sub">From first chat to launch day. I always start with the problem.</span>
      </div>
      <div className="flow">{rows}</div>
    </section>
  );
}
