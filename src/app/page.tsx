import { AGENCY, PERSONAL, GITHUB, getSite, pageMetadata } from "@/lib/site";
import { Contact, ProjectList, PortfolioLink } from "@/components/Sections";
export async function generateMetadata() {
  const s = await getSite();
  return pageMetadata(
    "/",
    s.agency
      ? "Hossain Consulting | CRM & Automation for Trade Businesses"
      : "Hemayet Hossain | Salesforce Administrator Candidate, Sydney",
    s.agency
      ? "Founder-led CRM and automation demos for trade and home-service businesses. Explore the work and discuss your workflow with Hemayet Hossain."
      : "Four Salesforce certifications, an IT degree and an operations perspective. Explore Hemayet Hossain’s self-directed Salesforce portfolio and career background.",
  );
}
export default async function Home() {
  const { agency } = await getSite();
  const schema = agency
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Hossain Consulting",
        url: AGENCY,
        founder: { "@type": "Person", name: "Hemayet Hossain", url: PERSONAL },
        areaServed: "Sydney NSW",
        email: "hossainconsulting@gmail.com",
      }
    : {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Hemayet Hossain",
        url: PERSONAL,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Central Queensland University",
        },
        sameAs: [GITHUB, "https://www.linkedin.com/in/hemayethossain/"],
        worksFor: {
          "@type": "Organization",
          name: "Hossain Consulting",
          url: AGENCY,
        },
      };
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      {agency ? (
        <>
          <section className="hero wrap">
            <div>
              <p className="eyebrow">
                <span className="dot" /> SYDNEY · CRM & AUTOMATION
              </p>
              <h1>
                Less admin.
                <br />
                More time for
                <br />
                <em>the actual work.</em>
              </h1>
              <p className="hero-copy">
                Practical CRM and automation ideas for trade and home-service
                businesses. Built and tested by Hemayet Hossain, one workflow at
                a time.
              </p>
              <div className="actions">
                <a className="button" href="#contact">
                  Discuss your workflow ↗
                </a>
                <a className="text-link" href="#services">
                  Explore the focus areas ↓
                </a>
              </div>
              <p className="fine">
                A developing practice. Current portfolio work is simulated, with
                no client engagements to date.
              </p>
            </div>
            <div className="system-card">
              <div className="system-top">
                <span>THE WORKFLOW</span>
                <span>01 — 03</span>
              </div>
              <h2>
                A clearer path
                <br />
                from enquiry
                <br />
                to next step.
              </h2>
              {[
                "Capture the enquiry",
                "Organise the information",
                "Make follow-up easier",
              ].map((t, i) => (
                <div className="workflow-step" key={t}>
                  <span>0{i + 1}</span>
                  {t}
                  <b>↘</b>
                </div>
              ))}
              <p>Illustrative workflow · not a live service</p>
            </div>
          </section>
          <section className="section wrap" id="services">
            <div className="section-head">
              <div>
                <p className="eyebrow">FOCUSED ON EVERYDAY WORK</p>
                <h2>
                  Small processes.
                  <br />
                  Worth getting right.
                </h2>
              </div>
              <p>
                Start with the business problem, then choose the tools. These
                are areas I am developing through demos and practical learning.
              </p>
            </div>
            <div className="cards">
              {[
                [
                  "01",
                  "Enquiries & follow-up",
                  "Explore ways to capture enquiries, organise customer details and keep the next action visible.",
                ],
                [
                  "02",
                  "CRM & organisation",
                  "Map information, ownership and handovers into a clear customer workflow.",
                ],
                [
                  "03",
                  "AI & practical testing",
                  "Try AI-assisted workflows against fictional scenarios, document limits and keep a human in control.",
                ],
              ].map(([n, t, d]) => (
                <article className="card" key={n}>
                  <span className="card-index">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="section shaded">
            <div className="wrap section-head">
              <div>
                <p className="eyebrow">MEET THE PERSON BEHIND THE WORK</p>
                <h2>Hi, I’m Hemayet.</h2>
              </div>
              <div>
                <p>
                  I’m a Sydney-based IT graduate with four Salesforce
                  certifications and a background in customer-facing operations.
                  I’m developing Hossain Consulting alongside my work in Coles
                  online fulfilment.
                </p>
                <a className="text-link" href={PERSONAL}>
                  My background & Salesforce portfolio ↗
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="hero wrap">
            <div>
              <p className="eyebrow">
                <span className="dot" /> SALESFORCE ADMINISTRATOR CANDIDATE ·
                SYDNEY
              </p>
              <h1>
                Technology makes
                <br />
                more sense with
                <br />
                <em>people in mind.</em>
              </h1>
              <p className="hero-copy">
                I’m Hemayet Hossain. I bring a frontline operations perspective
                to Salesforce, CRM and automation — and I’m building the
                evidence for my first paid Salesforce role.
              </p>
              <div className="actions">
                <a className="button" href="/projects">
                  Explore my work <span>↗</span>
                </a>
                <a className="text-link" href="/resume">
                  View my résumé ↗
                </a>
              </div>
              <div className="hero-note">
                <span className="line" /> Four Salesforce certifications. One
                practical mindset.
              </div>
            </div>
            <aside className="profile-card">
              <div className="profile-top">
                <span>HEMAYET / HOSSAIN</span>
                <span>SYD, AU</span>
              </div>
              <div className="monogram" aria-hidden>
                H<span>h</span>
                <i>•</i>
              </div>
              <div className="profile-bottom">
                <span>
                  OPERATIONS →<br />
                  SALESFORCE & AUTOMATION
                </span>
                <span>
                  Always
                  <br />
                  learning.
                </span>
              </div>
            </aside>
          </section>
          <div className="credential-strip">
            <div className="wrap credential-grid">
              <div>
                <strong>04</strong>
                <span>Salesforce certifications</span>
              </div>
              <div>
                <strong>BIT</strong>
                <span>Central Queensland University</span>
              </div>
              <div>
                <strong>Sydney</strong>
                <span>Customer & operational experience</span>
              </div>
            </div>
          </div>
          <section className="section wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">SELECTED WORK / 01—03</p>
                <h2>
                  Practice you can
                  <br />
                  look inside.
                </h2>
              </div>
              <p>
                Self-directed projects with fictional business scenarios. Read
                the implementation status, decisions and evidence behind the
                work.
              </p>
            </div>
            <ProjectList />
            <PortfolioLink />
          </section>
          <section className="section shaded">
            <div className="wrap section-head">
              <div>
                <p className="eyebrow">A DIFFERENT STARTING POINT</p>
                <h2>
                  I know the people
                  <br />
                  using the systems.
                </h2>
              </div>
              <div>
                <p>
                  My background spans customer service, independently managed
                  transport operations and Coles online fulfilment. It shapes
                  the questions I ask: is the information clear, does the
                  handover work, and can someone rely on the process?
                </p>
                <p>
                  I’m developing technical skills through Salesforce simulations
                  and documented learning, while building a new consulting
                  practice.
                </p>
                <div className="actions">
                  <a className="text-link" href="/about">
                    More about me ↗
                  </a>
                  <a className="text-link" href={AGENCY}>
                    Hossain Consulting ↗
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Contact agency={agency} />
    </main>
  );
}
