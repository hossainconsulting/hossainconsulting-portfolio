import type { Metadata } from "next";
import { AGENCY, EMAIL_AGENCY } from "@/lib/site";

const title = "Terms and Conditions | Hossain Consulting";
const description =
  "Terms for the Hossain Consulting website, website chat, demos and services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: AGENCY + "/terms" },
  openGraph: { title, description, url: AGENCY + "/terms" },
};

export default function Terms() {
  return (
    <main id="main" className="wrap section prose">
      <p className="eyebrow">HOSSAIN CONSULTING · TERMS</p>
      <h1 className="page-title">Terms and Conditions.</h1>
      <p>Last updated 4 November 2026.</p>
      <p>
        These terms apply to your use of the Hossain Consulting website
        (hossainconsulting.com), our website chat and our services. Hossain
        Consulting, ABN 23 732 235 722, Sydney NSW (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;).
      </p>

      <h2>1. Using our website and chat</h2>
      <ul>
        <li>Information on our website is general and may change.</li>
        <li>
          Our website chat answers common questions and collects your enquiry
          details. It may be automated. A person reviews enquiries and replies
          in business hours.
        </li>
        <li>
          Please don&apos;t share sensitive information (such as health or
          financial details) in the chat.
        </li>
      </ul>

      <h2>2. Demos</h2>
      <ul>
        <li>
          Any demo we show you is a demonstration only. It uses fictional
          details, is labelled as a demo and does not send, book or store
          anything for your business unless we&apos;ve agreed in writing.
        </li>
      </ul>

      <h2>3. Our services</h2>
      <ul>
        <li>
          We provide services under a written proposal or agreement that sets
          out the scope, price and timing. If that document conflicts with
          these terms, the document applies.
        </li>
        <li>
          Prices are in Australian dollars and include GST unless stated
          otherwise.
        </li>
        <li>
          Monthly services are month to month. You can cancel by giving notice
          before your next billing date.
        </li>
        <li>
          Setup fees cover work done and are not refundable once the work has
          started, except where the law requires a refund.
        </li>
      </ul>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>
          You give us accurate information and the access we need to do the
          work.
        </li>
        <li>
          You&apos;re responsible for the content you provide and for having
          the right to use it.
        </li>
      </ul>

      <h2>5. Australian Consumer Law</h2>
      <p>
        Nothing in these terms excludes, restricts or changes any right or
        remedy you have under the Australian Consumer Law that cannot lawfully
        be excluded.
      </p>

      <h2>6. Liability</h2>
      <p>
        To the extent the law allows, we are not liable for indirect or
        consequential loss. Where our liability can be limited, it is limited
        to resupplying the service or paying the cost of having it resupplied.
      </p>

      <h2>7. Privacy</h2>
      <p>
        We handle personal information under our{" "}
        <a href={AGENCY + "/privacy"}>Privacy Policy</a> at
        hossainconsulting.com/privacy.
      </p>

      <h2>8. Governing law</h2>
      <p>These terms are governed by the laws of New South Wales, Australia.</p>

      <h2>Contact</h2>
      <p>
        Hemayet Hossain, Hossain Consulting
        <br />
        Email: <a href={`mailto:${EMAIL_AGENCY}`}>{EMAIL_AGENCY}</a>
      </p>
      <p>
        See also our <a href="/legal">website notices</a>.
      </p>
    </main>
  );
}
