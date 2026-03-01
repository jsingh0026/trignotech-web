import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const siteUrl = "https://trignotech.com";
const siteTitle = "Trignotech — Technology Consultancy";
const siteDescription =
  "Trignotech is your end-to-end technology partner — Salesforce, Full Stack, Mobile Apps, DevOps, Payment Integrations, and AI-powered Chatbots.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Trignotech",
  },
  description: siteDescription,
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
  authors: [{ name: "Trignotech", url: siteUrl }],
  creator: "Trignotech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Trignotech",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
