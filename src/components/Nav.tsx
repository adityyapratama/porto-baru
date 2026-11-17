"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const onWorks = pathname.startsWith("/works");
  return (
    <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-3" style={{ flex: "0 0 100%" }}>
      <Link href="/" className="text-[20px] font-bold tracking-[-0.02em]">
        Adit<span className="font-medium text-[#6B6B6B]">.dev</span>
      </Link>
      <div className="nav-pill">
        <Link href="/" className="btn" aria-current={!onWorks ? "page" : undefined}>About</Link>
        <Link href="/works" className="btn" aria-current={onWorks ? "page" : undefined}>Works</Link>
      </div>
    </nav>
  );
}
