import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akmalojan — Backend & DevOps Engineer",
  description:
    "Backend & DevOps engineer specializing in scalable systems for Fintech, EduTech, and Web3 — from API design to cloud infrastructure on AWS and GCP.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
