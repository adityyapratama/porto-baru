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
};

export const projects: Project[] = [
  {
    slug: "smart-unair",
    title: "SMaRT UNAIR",
    hasDetail: true,
    desc: "Curriculum digitalization for Universitas Airlangga: design system, Next.js frontend, AdonisJS API.",
    tags: ["Next.js", "AdonisJS", "Design System"],
  },
  {
    slug: "poltekkes-malang",
    title: "Poltekkes Malang systems",
    hasDetail: false,
    desc: "Integrated campus software built on contract: single sign-on, SPMI and OBE.",
    tags: ["SSO", "SPMI", "OBE"],
  },
  {
    slug: "jagadtix",
    title: "Jagadtix",
    hasDetail: false,
    desc: "A ticketing platform in production, built for high-concurrency ticket sales.",
    tags: ["Production", "Ticketing"],
  },
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
  email: "[YOUR EMAIL]",
  instagram: "https://instagram.com/[YOUR-USERNAME]",
  github: "https://github.com/[YOUR-USERNAME]",
  linkedin: "https://linkedin.com/in/[YOUR-USERNAME]",
};
