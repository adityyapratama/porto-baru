import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adit.dev · Aditya Pratama",
  description:
    "Junior software engineer who just loves to build. Portfolio of Aditya Pratama, Surabaya, Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
