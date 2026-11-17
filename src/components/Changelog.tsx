import { jobs } from "@/data/content";

export default function Changelog() {
  const now = jobs.filter((j) => j.isNow).length;
  const before = jobs.length - now;
  return (
    <section className="panel flex flex-col gap-5 p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <div className="flex min-w-0 flex-col gap-2.5" style={{ flex: "1 1 220px" }}>
          <h2 className="display">Changelog</h2>
          <span className="sub">My career journey, freshest brew first.</span>
          <div className="flex flex-wrap gap-2">
            <span className="pill" style={{ background: "var(--accent)" }}>{now} brewing now</span>
            <span className="pill">{before} served before</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/espresso.svg" alt="Espresso machine brewing two coffees" className="block h-auto max-w-full" style={{ flex: "0 1 300px", width: 300 }} />
      </div>

      {jobs.map((j) => (
        <div key={j.role + j.org} className="white flex flex-wrap items-start gap-x-5 gap-y-3 rounded-[20px] px-5 py-4">
          <div className="flex flex-col items-start gap-2" style={{ flex: "0 0 150px" }}>
            <span
              className="rounded-full border border-[#141414] px-2.5 py-[3px] text-[11px] font-bold tracking-[0.02em]"
              style={{ background: j.isNow ? "var(--accent)" : "var(--panel)" }}
            >
              {j.isNow ? "BREWING NOW" : "SERVED"}
            </span>
            <span className="text-[13px] font-medium">{j.date}</span>
          </div>
          <div className="flex min-w-0 flex-col gap-1.5" style={{ flex: "1 1 260px" }}>
            <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.025em]">{j.role}</h3>
            <span className="text-[15px] font-medium">{j.org}</span>
            {j.notes.map((n) => (
              <div key={n} className="flex items-start gap-2 text-[15px] leading-normal">
                <span className="flex-none font-medium">+</span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
