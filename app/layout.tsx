import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Agent Economy LLC — Building the financial rails for the agentic economy",
  description:
    "AI Agent Economy LLC. Building the financial rails for the agentic economy. Our new site is on the way.",
  metadataBase: new URL("https://ai-agent-economy.com"),
  applicationName: "AI Agent Economy LLC",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AI Agent Economy LLC",
    description: "Building the financial rails for the agentic economy.",
    url: "https://ai-agent-economy.com",
    siteName: "AI Agent Economy LLC",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1660,
        height: 514,
        alt: "AI Agent Economy LLC — Building the financial rails for the agentic economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Economy LLC",
    description: "Building the financial rails for the agentic economy.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "https://ai-agent-economy.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
