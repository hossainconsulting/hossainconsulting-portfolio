import { notFound } from "next/navigation";
import { BOOK_CLIENT_CALL, EMAIL, getSite, pageMetadata } from "@/lib/site";
import { Contact } from "@/components/Sections";

export async function generateMetadata() {
  const { agency } = await getSite();
  if (!agency) return {};
  return pageMetadata(
    "/services",
    "Enquiry & Follow-up Setup | Hossain Consulting",
    "Preparing a fixed-scope Enquiry & Follow-up Setup service for trade and home-service businesses in New South Wales, Australia only. Enquire about scope, CRM suitability and launch availability.",
  );
}

const journey = [
  ["Enquire", "Email or book a free 20-minute introductory call to discuss your workflow, business needs, size and budget."],
  ["Check suitability", "We assess the CRM plan, access and current setup before accepting work."],
  ["Agree the scope", "Receive and approve a written scope, total price, software costs and timeline. Service availability and payment arrangements will be confirmed when ready."],
  ["Build & test", "Build and test the agreed enquiry pipeline and reminders with you."],
  ["Training & handover", "One training session and a written handover documenting the delivered work."],
  ["Support & access removal", "14 days of support after handover for delivered work only. We remove our access afterwards unless further work is agreed."],
];

export default async function Services() {
  const { agency } = await getSite();
  if (!agency) notFound();
  return (
    <main id="main">
      <section className="wrap section">
        <p className="eyebrow">SERVICES</p>
        <h1 className="page-title">Enquiry &amp; Follow-up Setup.</h1>
        <div className="honest-note">
          <p>We’re preparing to launch paid services. Payment processing and our service terms are still being finalised. You’re welcome to enquire; we’ll confirm when paid service bookings and payments are available.</p>
          <p>Legal review of the cooling-off period, charge date and cancellation/refund terms is still outstanding.</p>
        </div>
        <p className="intro">One fixed-scope package for trade and home-service businesses. Hossain Consulting serves clients in New South Wales, Australia only. Start with a free introductory call to discuss your enquiry process, needs and budget. We check the CRM plan, access and current setup before accepting work, then agree the scope in writing.</p>
        <div className="actions">
          <a className="button" href={BOOK_CLIENT_CALL}>Book a free 20-min introductory call <span>↗</span></a>
          <a className="text-link" href={`mailto:${EMAIL}?subject=${encodeURIComponent("CRM and automation enquiry")}`}>Enquire by email ↗</a>
        </div>
        <p className="fine">An introductory call or enquiry is not a paid service booking.</p>
      </section>
      <section className="wrap section">
        <article className="card">
          <h2>One package, agreed in writing.</h2>
          <p className="price">A$2,640 <small>including GST</small></p>
          <p className="price-note">Standard one-off price. Software subscriptions are separate.</p>
          <ul>
            <li>Up to five users</li>
            <li>One enquiry pipeline</li>
            <li>Three reminder automations</li>
            <li>One training session and a written handover</li>
            <li>14 days of support after handover, covering delivered work only</li>
          </ul>
          <p>Your legal remedies are unaffected. Additional work is quoted in writing and approved before it begins.</p>
        </article>
      </section>
      <section className="wrap section">
        <p className="eyebrow">LAUNCH PROJECTS</p>
        <h2>The first three clients.</h2>
        <div className="cards">
          <article className="card">
            <span className="card-index">01</span>
            <h3>One agreed small fix</h3>
            <p className="price">Free</p>
            <p>Up to two hours. A smaller scope than the full package, with no mandatory follow-on purchase.</p>
          </article>
          <article className="card">
            <span className="card-index">02</span>
            <h3>Full package</h3>
            <p className="price">A$825 <small>including GST</small></p>
            <p>The full Enquiry &amp; Follow-up Setup scope listed above.</p>
          </article>
          <article className="card">
            <span className="card-index">03</span>
            <h3>Full package</h3>
            <p className="price">A$1,650 <small>including GST</small></p>
            <p>The full Enquiry &amp; Follow-up Setup scope listed above.</p>
          </article>
        </div>
        <div className="honest-note">
          <p>We take launch clients one at a time. A place is allocated at signing and released if cancelled before work starts. The launch offer ends after three completed projects; thereafter the standard full-package price is A$2,640 including GST.</p>
          <p>Feedback, reviews, testimonials and case studies are optional and never affect fees or support. There are no rewards for reviews. Publication requires separate written permission, with disclosure of free or discounted work. We will not request Google reviews from the first three clients.</p>
        </div>
      </section>
      <section className="section shaded">
        <div className="wrap">
          <p className="eyebrow">YOUR CRM, ACCOUNT AND DATA</p>
          <h2>Choose tools that suit your business.</h2>
          <p>You own your CRM subscription, account and data, and pay the provider directly. Software costs are separate from the setup fee. Salesforce and GoHighLevel are our main platforms; HubSpot, ClickFunnels and ScalePlus may be considered where suitable.</p>
          <p>We recommend based on your needs, business size and budget, show the provider cost, and disclose any affiliate commission in writing.</p>
          <p>Client work takes place in the client’s account, never in Hemayet’s personal or test accounts. Invite us with only the access required for the agreed work. We never ask for passwords, card details or tokens.</p>
          <p>We may decline work if the CRM assessment identifies an unresolved technical or access issue. If we cannot proceed, we&apos;ll explain why in writing and refund any payment for work not delivered, subject to your legal rights.</p>
          <p>You receive a written handover. We remove our access after the support period unless further work is agreed.</p>
        </div>
      </section>
      <section className="wrap section" id="how-it-works">
        <p className="eyebrow">FROM ENQUIRY TO HANDOVER</p>
        <h2>The proposed service process.</h2>
        <ol className="steps">
          {journey.map(([title, description], i) => (
            <li key={title}>
              <strong>{String(i + 1).padStart(2, "0")} · {title}</strong>
              {description}
            </li>
          ))}
        </ol>
      </section>
      <section className="wrap section">
        <h2>A new practice, with documented learning.</h2>
        <p>Hossain Consulting is led by Hemayet Hossain, who holds four Salesforce certifications. Current portfolio projects are self-directed simulations; no paid CRM client work is claimed.</p>
        <p>We welcome inbound enquiries and do not make cold calls. No business outcome is guaranteed.</p>
      </section>
      <Contact agency />
    </main>
  );
}
