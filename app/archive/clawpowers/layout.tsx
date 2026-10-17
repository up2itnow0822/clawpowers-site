import Link from "next/link";

export default function ClawPowersArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative z-30 border-b border-white/10 bg-black/85 px-4 py-2 text-center text-[11px] uppercase tracking-[0.18em] text-[#8A8A8A]">
        Archived ClawPowers preview
        <span className="mx-2 text-[#FF8A00]">/</span>
        <Link href="/" className="text-[#FF8A00] transition hover:text-white">
          Return to AI Agent Economy
        </Link>
      </div>
      {children}
    </>
  );
}
