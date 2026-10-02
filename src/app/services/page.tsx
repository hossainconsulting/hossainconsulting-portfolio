import { notFound } from "next/navigation";
import { BOOK_CLIENT_CALL, EMAIL, getSite, pageMetadata } from "@/lib/site";
import { Contact } from "@/components/Sections";

export async function generateMetadata() {
  const { agency } = await getSite();
  if (!agency) return {};
  return pageMetadata(
    "/services",
    "Services | Hossain Consulting",
    "Fixed-scope CRM and automation packages for trade and home-service businesses in Sydney. Start with a free 20-minute workflow chat.",
  );
}

const packages = [
  {
    n: "01",
    name: "Enquiry & follow-up setup",
    for: "Enquiries arrive by phone, text, email and web form, and some never get a reply.",
    get: [
      "One place to capture every new enquiry",
      "A simple pipeline from enquiry to quote to booked job",
      "Follow-up reminders so nothing goes quiet",
      "A short how-to guide for you and your team",
    ],
    scope:
      "Up to 5 users, 1 pipeline, 3 reminder automations, 1 training session, 14 days of support",
    founding: 1500,
    standard: 2400,
  },
  {
    n: "02",
    name: "CRM tidy-up & handover map",
    for: "You already have a CRM or spreadsheet, but nobody trusts what’s in it.",
    get: [
      "A map of how work moves through your business today",
      "Cleaned-up fields, ownership and statuses",
      "Clear handover points between office and field",
      "A written record of what changed and why",
    ],
    scope:
      "Process map, clean-up of up to 2,000 records, written change record",
    founding: 950,
    standard: 1500,
  },
  {
    n: "03",
    name: "AI-assisted admin trial",
    for: "You’re curious whether AI can save time on notes, summaries or replies, but want to try it safely.",
    get: [
      "One small AI-assisted workflow, tested on your real process",
      "A person stays in control of every customer-facing step",
      "Written limits: what it does well and where it fails",
      "A clear keep, change or drop recommendation",
    ],
    scope:
      "1 workflow over 2–3 weeks, a person approves every customer-facing step",
    founding: 1200,
    standard: 1800,
  },
];

const aud = (n: number) =>
  "$" + n.toLocaleString("en-AU", { maximumFractionDigits: 0 });
const incGst = (n: number) => aud(Math.round(n * 1.1));

const journey = [
  ["Book a free call", "Pick a 20-minute time online, or email if you prefer."],
  [
    "Free call",
    "We talk about the workflow that costs you the most time. No preparation needed.",
  ],
  [
    "Free workflow snapshot",
    "Within 3 business days: a one-page summary with up to 3 quick wins. Yours to keep, whether or not you go ahead.",
  ],
  [
    "Written scope & fixed quote",
    "What will be built, the price (+GST), the timeline and what’s not included. Nothing starts until you approve it.",
  ],
  [
    "Cooling-off",
    "New clients get 10 business days to change their mind after signing. No payment is taken and no work starts in that time.",
  ],
  [
    "Deposit & kick-off",
    "50% deposit on a tax invoice, due in 7 days. Bank transfer and PayID are free; card is also available. We agree a weekly check-in time.",
  ],
  [
    "Build & test",
    "Built in small steps. A short update every week, and you test each part before we move on.",
  ],
  [
    "Handover",
    "A live walkthrough, a how-to guide and a record of every change. The final 50% is invoiced at handover.",
  ],
  [
    "14 days of support",
    "Questions and fixes for anything in scope. After that, an optional care plan.",
  ],
];

export default async function Services() {
  const { agency } = await getSite();
  if (!agency) notFound();
  return (
    <main id="main">
      <section className="wrap section">
        <p className="eyebrow">SERVICES</p>
        <h1 className="page-title">
          Small, fixed-scope projects.
          <br />
          <em>No surprises.</em>
        </h1>
        <p className="intro">
          Each package starts with a free 20-minute call and a free one-page
          workflow snapshot. If it’s a good fit, you get a written scope and a
          fixed price before any work begins. Usually built in Salesforce, or a
          simpler tool if that suits your business better.
        </p>
        <div className="actions">
          <a className="button" href={BOOK_CLIENT_CALL}>
            Book a free 20-min call <span>↗</span>
          </a>
          <a
            className="text-link"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("CRM and automation enquiry")}`}
          >
            Prefer email? ↗
          </a>
        </div>
      </section>
      <section className="wrap section">
        <div className="cards">
          {packages.map((p) => (
            <article className="card" key={p.n}>
              <span className="card-index">{p.n}</span>
              <h2>{p.name}</h2>
              <p>
                <strong>Good for:</strong> {p.for}
              </p>
              <p>
                <strong>What you get:</strong>
              </p>
              <ul>
                {p.get.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <p className="package-meta">
                <strong>Includes:</strong> {p.scope}
              </p>
              <p className="price">
                {aud(p.founding)} <small>+ GST</small>
              </p>
              <p className="price-note">
                Founding-client price ({incGst(p.founding)} inc. GST). Standard
                price {aud(p.standard)} + GST.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="honest-note">
          <p>
            <strong>Optional care plan:</strong> up to 2 hours a month of fixes
            and small changes. $200 + GST a month for founding clients ($220
            inc. GST); standard $300 + GST. Cancel any month.
          </p>
          <p>
            Prices are for the scope listed. Anything extra is quoted in writing
            first. Software licences (for example Salesforce or ServiceM8) are
            paid by you directly to the provider, and I’ll tell you if a cheaper
            tool suits you better.
          </p>
        </div>
      </section>
      <section className="section shaded" id="how-it-works">
        <div className="wrap">
          <p className="eyebrow">FROM BOOKING TO HANDOVER</p>
          <h2>Every step, before you commit.</h2>
          <ol className="steps">
            {journey.map(([t, d], i) => (
              <li key={t}>
                <strong>
                  {String(i + 1).padStart(2, "0")} · {t}
                </strong>
                {d}
              </li>
            ))}
          </ol>
          <p className="fine">
            Hossain Consulting is registered for GST (ABN 23 732 235 722). All
            invoices are tax invoices.
          </p>
        </div>
      </section>
      <section className="wrap section">
        <p className="eyebrow">FOUNDING CLIENTS</p>
        <h2>Be one of the first.</h2>
        <div className="honest-note">
          <p>
            Hossain Consulting is a new practice. My portfolio work so far is
            self-directed and tested on fictional business scenarios. There are
            no paid client engagements to date.
          </p>
          <p>
            So my first 3 clients can choose a <strong>free pilot</strong>:
            the CRM tidy-up & handover map at no cost (normally $950 + GST).
            Bigger packages are at founding-client prices, about 35% below
            standard, until I have 3 published reviews. In return, I ask for
            honest feedback and, only if you agree, permission to describe the
            work. It can be anonymised if you prefer.
          </p>
          <p>
            If your problem isn’t a good fit for what I do, I’ll tell you on the
            call.
          </p>
        </div>
        <a className="button" href={BOOK_CLIENT_CALL}>
          Book a free 20-min call <span>↗</span>
        </a>
      </section>
      <Contact agency />
    </main>
  );
}
