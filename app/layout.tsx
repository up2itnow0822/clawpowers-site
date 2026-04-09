import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClawPowers",
  description: "ClawPowers gives AI agents real capabilities: payments, memory, RSI, wallets, swarm coordination, and skill execution.",
  metadataBase: new URL("https://clawpowers.ai"),
  openGraph: {
    title: "ClawPowers",
    description: "Payments, memory, RSI, wallets, swarm coordination, and skill execution in one launch-ready capability layer.",
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
