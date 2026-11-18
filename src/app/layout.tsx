import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from '@/components/smooth-scroll'

export const metadata: Metadata = {
  title: "Adit.dev · Aditya Pratama",
  description:
    "Junior software engineer who just loves to build. Portfolio of Aditya Pratama, Surabaya, Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
