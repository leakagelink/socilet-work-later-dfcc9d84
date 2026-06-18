import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Your Account — Socilet" },
      { name: "description", content: "Request deletion of your Socilet account and associated data. Learn what data is deleted and how to submit a request." },
    ],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <main className="flex min-h-dvh flex-col px-5 pt-6 pb-28">
      {/* Header */}
      <div className="mb-6">
        <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
          ← Back to home
        </Link>
        <h1 className="mt-4 text-2xl font-bold tracking-tight font-display">
          Delete Your Account
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Last updated: June 18, 2026
        </p>
      </div>

      {/* Steps Card */}
      <section className="rounded-2xl bg-gradient-card p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold mb-3">How to request account deletion</h2>
        <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
          <li>
            <span className="text-foreground font-medium">Log in</span> to your Socilet account.
          </li>
          <li>
            Go to <span className="text-foreground font-medium">Profile</span> from the bottom navigation.
          </li>
          <li>
            Tap <span className="text-foreground font-medium">Support</span> and create a new ticket.
          </li>
          <li>
            Subject: <span className="text-foreground font-medium">"Request Account Deletion"</span>
          </li>
          <li>
            Submit the ticket — our team will process your request within <span className="text-foreground font-medium">7 business days</span>.
          </li>
        </ol>
      </section>

      {/* Alternative method */}
      <section className="rounded-2xl bg-gradient-card p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold mb-2">Alternative: Email us</h2>
        <p className="text-sm text-muted-foreground mb-3">
          You can also email us directly from the email address associated with your account:
        </p>
        <a
          href="mailto:support@socilet.in?subject=Request%20Account%20Deletion"
          className="inline-flex rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Email support@socilet.in
        </a>
      </section>

      {/* Data deletion info */}
      <section className="rounded-2xl bg-gradient-card p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold mb-3">What data is deleted</h2>
        <p className="text-sm text-muted-foreground mb-3">
          When your account is deleted, the following data is permanently removed:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Profile information (name, email, phone, company, avatar)</li>
          <li>Saved project estimates and cost calculations</li>
          <li>Support tickets and messages</li>
          <li>Referral codes and referral history</li>
          <li>Push notification tokens and device info</li>
          <li>Notifications and in-app alerts</li>
          <li>User roles and permissions</li>
        </ul>
      </section>

      {/* Data kept */}
      <section className="rounded-2xl bg-gradient-card p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold mb-3">What data may be retained</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Some records may be kept for legal, financial, or operational reasons:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>
            <span className="text-foreground font-medium">Lead inquiries</span> — submitted via public forms (not tied to your account after deletion)
          </li>
          <li>
            <span className="text-foreground font-medium">Payment records</span> — if applicable, retained per Indian tax laws for 7 years
          </li>
          <li>
            <span className="text-foreground font-medium">Anonymized analytics</span> — aggregated usage data with no personal identifiers
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          All retained data is anonymized or dissociated from your identity.
        </p>
      </section>

      {/* Timeline */}
      <section className="rounded-2xl bg-gradient-card p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold mb-3">Deletion timeline</h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">Request review:</span> Within 2 business days
          </p>
          <p>
            <span className="text-foreground font-medium">Account deactivation:</span> Immediate upon approval
          </p>
          <p>
            <span className="text-foreground font-medium">Full data purge:</span> Within 30 days
          </p>
          <p>
            <span className="text-foreground font-medium">Grace period:</span> 14 days — you can cancel deletion by logging in
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl bg-gradient-card p-5 shadow-card">
        <h2 className="text-lg font-semibold mb-2">Questions?</h2>
        <p className="text-sm text-muted-foreground mb-3">
          If you have any questions about account deletion or data handling, contact us:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:support@socilet.in"
            className="inline-flex rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            support@socilet.in
          </a>
        </div>
      </section>

      {/* Footer note */}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        This page is maintained by Socilet to answer common privacy and data deletion questions.
      </p>
    </main>
  );
}
