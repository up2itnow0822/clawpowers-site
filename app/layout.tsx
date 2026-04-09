import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClawPowers",
  description: "ClawPowers gives AI agents real capabilities: payments, memory, RSI, wallets, swarm coordination, and skill execution.",
  metadataBase: new URL("https://clawpowers.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
