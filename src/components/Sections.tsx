import {
  BOOK_CLIENT_CALL,
  BOOK_RECRUITER_CALL,
  EMAIL_AGENCY,
  EMAIL_PERSONAL,
  GITHUB,
  PORTFOLIO,
  projects,
} from "@/lib/site";
export function ProjectList() {
  return (
    <div className="projects">
      {projects.map((p) => (
        <a className="project" href={`${GITHUB}/${p.slug}`} key={p.slug}>
          <div className="project-number">{p.number}</div>
          <div>
            <p className="eyebrow">{p.type}</p>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="project-end">
            <span className="status">{p.status}</span>
            <span className="arrow" aria-hidden>
              ↗
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
export function Contact({ agency = false }: { agency?: boolean }) {
  return (
    <section className="contact-band" id="contact">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">
            {agency
              ? "START WITH A CONVERSATION"
              : "OPEN TO THE RIGHT OPPORTUNITY"}
          </p>
          <h2>
            {agency
              ? "What takes up too much of your day?"
              : "Let’s build something useful."}
          </h2>
          <p>
            {agency
              ? "Tell me about your business and the workflow you want to improve. We can discuss scope, fit and next steps on a free introductory call or by email. Payment processing and service terms are still being finalised, with legal review outstanding. This is an introductory enquiry, not a paid service booking."
              : "Hiring for Salesforce administration or CRM support? I’d welcome a conversation about your team."}
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="button light"
            href={agency ? BOOK_CLIENT_CALL : BOOK_RECRUITER_CALL}
          >
            {agency ? "Book a free 20-min call" : "Book a 20-min chat"}{" "}
            <span>↗</span>
          </a>
          <a
            className="text-link"
            href={`mailto:${agency ? EMAIL_AGENCY : EMAIL_PERSONAL}?subject=${encodeURIComponent(agency ? "CRM and automation enquiry" : "Salesforce role enquiry")}`}
          >
            Or email Hemayet ↗
          </a>
        </div>
      </div>
    </section>
  );
}
export function PortfolioLink() {
  return (
    <a className="text-link" href={PORTFOLIO}>
      Explore the shared portfolio ↗
    </a>
  );
}
