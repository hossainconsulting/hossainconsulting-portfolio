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
  },
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
          Each package starts with a free 20-minute call. If it’s a good fit,
          you get a written scope and a fixed price before any work begins.
          Usually built in Salesforce, or a simpler tool if that suits your
          business better.
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
                Fixed price, quoted after the free call
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section shaded">
        <div className="wrap">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Four steps. You decide at each one.</h2>
          <ol className="steps">
            <li>
              <strong>Free call</strong>20 minutes on the workflow that costs
              you the most time.
            </li>
            <li>
              <strong>Written scope</strong>What will be built, a fixed price
              and a timeline, agreed before work starts.
            </li>
            <li>
              <strong>Build & test</strong>Built in small steps and checked with
              you along the way.
            </li>
            <li>
              <strong>Handover</strong>A walkthrough, a short guide and a record
              of every change.
            </li>
          </ol>
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
            So I’m taking on a small number of founding clients at a reduced
            rate. In return, I ask for honest feedback and, only if you agree,
            permission to describe the work. It can be anonymised if you prefer.
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
