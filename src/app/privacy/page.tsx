import { pageMetadata, EMAIL } from "@/lib/site";
export async function generateMetadata() {
  return pageMetadata(
    "/privacy",
    "Website Privacy | Hemayet Hossain & Hossain Consulting",
    "How these websites handle information and contact enquiries.",
  );
}
export default function Privacy() {
  return (
    <main id="main" className="wrap section prose">
      <p className="eyebrow">WEBSITE INFORMATION</p>
      <h1 className="page-title">Privacy.</h1>
      <p>Updated 26 September 2026.</p>
      <p>
        These websites introduce Hemayet Hossain and Hossain Consulting. This
        version has no account registration, enquiry form, advertising pixels or
        site-installed analytics.
      </p>
      <h2>When you contact me</h2>
      <p>
        Email links open your email application. If you send an enquiry, I
        receive the information you choose to include and use it to respond and
        discuss your request. Please do not send passwords, payment details or
        sensitive customer records.
      </p>
      <h2>Hosting and external links</h2>
      <p>
        Vercel hosts the websites and Cloudflare provides domain services.
        Infrastructure providers may process connection information and
        operational logs to deliver and protect the sites. GitHub, LinkedIn and
        other linked sites operate under their own privacy policies.
      </p>
      <h2>Questions</h2>
      <p>
        For questions about information you have sent or to request correction
        or deletion, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </main>
  );
}
