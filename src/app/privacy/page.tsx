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
      <p>Updated 1 October 2026.</p>
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
      <h2>Booking a call</h2>
      <p>
        “Book a call” buttons open Calendly, an external scheduling service. If
        you book, Calendly collects the details you enter (such as your name,
        email address and any notes) and shares them with me so I can prepare
        for and hold the call. Calendly and the video service you choose
        operate under their own privacy policies.
      </p>
      <h2>Hosting and external links</h2>
      <p>
        Vercel hosts the websites and Cloudflare provides domain services.
        Infrastructure providers may process connection information and
        operational logs to deliver and protect the sites. GitHub, LinkedIn and
        other linked sites operate under their own privacy policies.
      </p>
      <h2>Questions</h2>
      <p>Email enquiries are handled through Google’s email service. Information may be processed by infrastructure and email providers outside Australia under their own service arrangements. These providers’ processing is separate from the public portfolio content.</p>
      <p>You can choose what to include in an enquiry. Request access, correction or deletion of information you have sent using the contact below; explain which correspondence your request concerns. Some records may need to be retained to resolve an enquiry, meet a legal obligation or address a dispute. Please contact us first if you have a privacy concern so it can be investigated.</p>
      <p>This notice describes the current informational sites. New forms, analytics, subscriptions or services require a review of this notice before introduction. See also the <a href="/legal">website terms, cookie notice and portfolio disclaimer</a>.</p>
      <p>
        For questions about information you have sent or to request correction
        or deletion, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </main>
  );
}
