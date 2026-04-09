import { Card, SiteShell } from "../components";

export default function Page() {
  return (
    <SiteShell eyebrow="license" title="License and commercial-use guidance">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">Why this page matters</h2>
          <p className="text-base leading-7 text-slate-600">
            Soft-launch visitors need quick clarity on what they can use, what is open, and where the commercial boundaries live. This page should keep that explanation simple and linked to the underlying repos.
          </p>
        </Card>
        <Card>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">Current guidance</h2>
          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            <li>Reference the repo-specific license files directly.</li>
            <li>Call out MIT and BSL 1.1 surfaces where applicable.</li>
            <li>Clarify commercial expectations without legal fog.</li>
            <li>Point users to the exact repository documents for final terms.</li>
          </ul>
        </Card>
      </div>
    </SiteShell>
  );
}
