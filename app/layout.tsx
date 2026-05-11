import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClawPowers",
  description: "ClawPowers soft-launch preview: pinned payments, memory, RSI, wallet helpers, swarm coordination, and skill execution for agent builders.",
  metadataBase: new URL("https://clawpowers.ai"),
  openGraph: {
    title: "ClawPowers",
    description: "Pinned soft-launch preview for payments, memory, RSI, wallet helpers, swarm coordination, and skill execution.",
    url: "https://clawpowers.ai",
    siteName: "ClawPowers",
    type: "website",
  },
  alternates: {
    canonical: "https://clawpowers.ai",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
