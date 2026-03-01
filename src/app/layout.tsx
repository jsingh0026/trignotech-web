import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Trignotech — Technology Consultancy",
  description:
    "Trignotech is your end-to-end technology partner — Salesforce, Full Stack, Mobile Apps, DevOps, Payment Integrations, and AI-powered Chatbots.",
  keywords: [
    "Salesforce development",
    "full stack development",
    "mobile app development",
    "DevOps",
    "AWS",
    "GCP",
    "AI chatbot",
    "SEO",
    "technology consultancy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
