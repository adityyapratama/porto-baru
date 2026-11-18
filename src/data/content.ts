export type Job = {
  isNow: boolean;
  date: string;
  role: string;
  org: string;
  notes: string[];
};

export const jobs: Job[] = [
  {
    isNow: true,
    date: "Feb 2026 – Present",
    role: "Software Developer Intern",
    org: "Direktorat Sistem Informasi dan Digitalisasi, Unair",
    notes: [
      "Played a key role in the Curriculum Digitalization Project by designing and implementing a scalable Design System for academic process digitalization.",
      "Collaborated cross-functionally to deliver reliable end-to-end features, optimize performance, and maintain clean, scalable architecture standards.",
    ],
  },
  {
    isNow: true,
    date: "Nov 2024 – Present",
    role: "Co-Founder",
    org: "Evop Tech",
    notes: [
      "Co-founded a student-led software house delivering real-world web projects while continuing studies.",
      "Collaborated with teams to develop and deliver client projects based on problems and business requirements.",
    ],
  },
  {
    isNow: false,
    date: "Aug 2026 - Present",
    role: "Freelance Developer",
    org: "Poltekkes Malang",
    notes: ["Built integrated campus software: SSO, SPMI and OBE."],
  },
];

export type Project = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  hasDetail: boolean;
  icon?: string;
  image1?: string;
  image2?: string;
  /** Natural [width, height] of each screenshot, so frames keep the image's own proportions. */
  image1Size?: [number, number];
  image2Size?: [number, number];
  github?: string;
  demo?: string;
  /** Short status badge shown on the card, e.g. "Paused for now". */
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "evop",
    title: "EVOP",
    hasDetail: false,
    desc: "A student-led software house building real-world web projects for clients. The team is taking a temporary break and will be back soon.",
    tags: ["Software house", "Student-led"],
    status: "Temporarily paused",
    icon: "/work/evop/icon.svg",
    image1: "/work/evop/shot-2.webp",
    image1Size: [1400, 1611],
  },
  {
    slug: "smart-unair",
    title: "SMaRT UNAIR",
    hasDetail: false,
    desc: "A design system for digitizing academic processes at UNAIR, with a Next.js frontend and AdonisJS API.",
    tags: ["Next.js","AdonisJS","Design System"],
    demo: "https://smart.unair.ac.id/",
    icon: "/work/smart-unair/icon.webp",
    image1: "/work/smart-unair/desktop.webp",
    image2: "/work/smart-unair/shot-2.webp",
    image1Size: [1400, 875],
    image2Size: [1400, 1400],
  },
  {
    slug: "spmi",
    title: "E-SPMI Poltekkes Malang",
    hasDetail: false,
    desc: "Internal quality assurance system for Poltekkes Malang: self-evaluation, desk evaluation, visitation and audit follow-up in one workspace.",
    tags: ["SPMI", "SSO", "Contract"],
    icon: "/work/spmi/logo.png",
    image1: "/work/spmi/desktop.webp",
    image2: "/work/spmi/shot-2.webp",
    image1Size: [1400, 875],
    image2Size: [799, 902],
  },
  {
    slug: "arsiva",
    title: "Arsiva",
    hasDetail: false,
    desc: "A free, browser-based gamified learning platform that teaches the history and culture of Tulungagung through quizzes, stories, puzzles and articles.",
    tags: ["Gamified learning", "Education", "Next.js"],
    demo: "https://arsiva.id/",
    icon: "/work/arsiva/icon.png",
    image1: "/work/arsiva/desktop.webp",
    image2: "/work/arsiva/shot-2.webp",
    image1Size: [1274, 796],
    image2Size: [515, 971],
  },
  {
    slug: "jagadtix",
    title: "Jagatix",
    hasDetail: false,
    desc: "A ticketing system for events like concerts and festivals.",
    tags: ["Production","Ticketing"],
    demo: "https://jagadtix.id/",
    icon: "/work/jagadtix/icon.svg",
    image1: "/work/jagadtix/desktop.webp",
    image2: "/work/jagadtix/shot-2.webp",
    image1Size: [1400, 875],
    image2Size: [1200, 2489],
  },
  {
    slug: "carID",
    title: "CarID",
    hasDetail: false,
    desc: "A used-car marketplace website for Surabaya. A UI/UX design project.",
    tags: ["UI/UX","Marketplace"],
    icon: "/work/carID/icon.svg",
    image1: "/work/carID/shot-2.webp",
    image2: "/work/carID/shot-2.webp",
    image1Size: [1400, 785],
    image2Size: [1400, 785],
  },
];

/** Earlier list entries without screenshots, kept for reference. Not shown on /works. */
export const otherProjects: Project[] = [
  {
    slug: "go-orchestrator",
    title: "Go orchestrator",
    hasDetail: false,
    desc: "A provider-agnostic Go library for Claude and Gemini with a planner and executor design.",
    tags: ["Go", "Claude", "Gemini"],
  },
  {
    slug: "semantic-opac-search",
    title: "Semantic OPAC search",
    hasDetail: false,
    desc: "Thesis: SBERT-based semantic search for a university library catalog.",
    tags: ["SBERT", "Search", "Thesis"],
  },
];

export const projectDetail = {
  "smart-unair": {
    kicker: "WORK DETAIL",
    title: "SMaRT",
    highlight: "UNAIR",
    summary:
      "Curriculum digitalization for Universitas Airlangga: a design system, a Next.js frontend and an AdonisJS REST API that move academic processes online.",
    role: "Software Developer Intern",
    timeline: "Feb 2026 – Present",
    team: "Team of two",
    stack: ["Next.js", "Tailwind CSS", "AdonisJS", "REST API", "Design System"],
    did: [
      "Designed and implemented a scalable design system for digitalizing academic processes.",
      "Built responsive Next.js and Tailwind interfaces integrated with the backend APIs.",
      "Worked closely with the backend developer to ship reliable end-to-end features.",
      "Kept performance, clean architecture and scalability in focus throughout.",
    ],
    outcome:
      "[ADD RESULTS: who uses it, how many users or study programs, what got faster or easier]",
    learned: "[ADD ONE OR TWO LESSONS FROM THIS PROJECT]",
  },
} as const;

export const site = {
  email: "helloadityapratamaa@gmail.com",
  instagram: "https://www.instagram.com/adityyapraatama/",
  github: "https://github.com/adityyapratama",
  linkedin: "https://www.linkedin.com/in/aditya-pratama-adityya/",
};
