import { EMAIL, GITHUB, PORTFOLIO, projects } from "@/lib/site";
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
              ? "Tell me about your business and the workflow you want to improve. We can discuss the scope, fit and next steps by email."
              : "Hiring for Salesforce administration or CRM support? I’d welcome a conversation about your team."}
          </p>
        </div>
        <a
          className="button light"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(agency ? "CRM and automation enquiry" : "Salesforce role enquiry")}`}
        >
          Email Hemayet <span>↗</span>
        </a>
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
