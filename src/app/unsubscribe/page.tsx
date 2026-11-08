import { getSite, pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  return pageMetadata(
    "/unsubscribe",
    "Unsubscribe",
    "Ask to be removed from marketing email from this website.",
  );
}

export default async function Unsubscribe() {
  const site = await getSite();
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Unsubscribe request")}&body=${encodeURIComponent(
    `Please unsubscribe this email address from marketing messages from ${site.name}.\n\nEmail address to remove:\n`,
  )}`;

  return (
    <main id="main" className="wrap section prose">
      <p className="eyebrow">{site.name.toUpperCase()} · EMAIL PREFERENCES</p>
      <h1 className="page-title">Unsubscribe.</h1>
      <p>Updated 8 November 2026.</p>
      <p>
        To stop marketing email from {site.name}, send an unsubscribe request
        to <a href={`mailto:${site.email}`}>{site.email}</a>. This opens your
        email application. Nothing is submitted on this website.
      </p>
      <p>
        <a className="button" href={mailto}>
          Email an unsubscribe request <span>↗</span>
        </a>
      </p>
      <p>
        Include the email address you want removed. We act on unsubscribe
        requests within 5 working days.
      </p>
      <p>
        See the <a href="/privacy">privacy notice</a>
        {site.agency && (
          <>
            {" "}
            and our <a href="/terms">Terms and Conditions</a>
          </>
        )}
        .
      </p>
    </main>
  );
}
