import { site } from "@/data/content";

function Coffee() {
  return (
    <svg className="coffee" viewBox="0 0 256 256" width="46" height="46" role="img" aria-label="Steaming cup of coffee">
      <g fill="#141414">
        <path transform="translate(188 116)" d="M0 0H20C43 0 54 12 54 30C54 50 41 62 20 62H0Z" />
        <path transform="translate(66 104)" d="M0 0H128V80C128 101 115 112 94 112H34C13 112 0 101 0 80Z" />
        <path transform="translate(44 224)" d="M0 0H188L174 18H14Z" />
      </g>
      <path transform="translate(30 211)" d="M0 0H192L177 18H16Z" fill="#F79AC0" stroke="#141414" strokeWidth="8" strokeLinejoin="round" />
      <path transform="translate(178 102)" d="M0 0H19C40 0 52 13 52 32C52 52 39 65 19 65H0Z M4 19V46H18C27 46 33 41 33 32C33 24 27 19 18 19Z" fill="#FF8357" fillRule="evenodd" stroke="#141414" strokeWidth="7" strokeLinejoin="round" />
      <g transform="translate(53 79)">
        <path transform="translate(0 17)" d="M0 0H128V78C128 101 116 113 93 113H35C12 113 0 101 0 78Z" fill="#FFC62B" stroke="#141414" strokeWidth="9" strokeLinejoin="round" />
        <path transform="translate(16 33)" d="M0 0V61C0 72 4 78 12 80" fill="none" stroke="#FFF3C1" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round" />
        <ellipse cx="64" cy="18" rx="64" ry="18" fill="#FFF3C1" stroke="#141414" strokeWidth="9" />
        <path transform="translate(13 13.75)" d="M0 11.25C14 -3.75 85 -3.75 102 11.25C78 25.25 23 25.25 0 11.25Z" fill="#784530" />
      </g>
      <g transform="translate(94 25)" fill="none" stroke="#141414" strokeWidth="9" strokeLinecap="square" strokeLinejoin="round">
        <path className="steam s2" pathLength={100} d="M0 36C3.33 32 6.67 28 10 24C6.67 20 3.33 16 0 12C3.33 8 6.67 4 10 0" />
        <path className="steam s1" transform="translate(40 0)" pathLength={100} d="M0 36C3.33 32 6.67 28 10 24C6.67 20 3.33 16 0 12C3.33 8 6.67 4 10 0" />
      </g>
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: site.instagram,
    bg: "#FFC9DC",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: site.github,
    bg: "#D9CCFF",
    icon: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    bg: "#BDE3FF",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <aside className="left">
      <header className="panel flex flex-col gap-[18px] p-7">
        <div
          className="photo flex items-center justify-center text-center text-[14px] font-medium"
          style={{
            alignSelf: "flex-start",
            width: 180,
            height: 210,
            boxSizing: "border-box",
            border: "1px solid #141414",
            borderRadius: 18,
            background: "#D9CCFF center / cover",
            padding: 12,
            margin: "2px 0 6px 4px",
          }}
        >
          [YOUR PHOTO]
        </div>

        <h1 className="h1-hero">Hi, I&apos;m Adit.</h1>

        <div
          className="inline-flex max-w-full items-center gap-3"
          style={{ alignSelf: "flex-start", boxSizing: "border-box", padding: "8px 16px 8px 8px", background: "var(--accent)", border: "1px solid #141414", borderRadius: 14 }}
        >
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-[10px] border border-[#141414] bg-white">
            <Coffee />
          </div>
          <span className="text-[15px] font-medium leading-tight">Let&apos;s sit down and have a coffee together.</span>
        </div>

        <p className="text-[18px] font-medium leading-[1.4]">
          Junior software engineer who just <span className="hl" style={{ padding: "0 4px", borderRadius: 0 }}>loves to build</span>.
          Hand me a real problem and I&apos;ll turn it into something that works.
        </p>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="btn inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#141414]"
              style={{ background: s.bg }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </header>
    </aside>
  );
}
