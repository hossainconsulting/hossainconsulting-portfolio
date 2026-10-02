import { pageMetadata, EMAIL, BOOK_RECRUITER_CALL } from "@/lib/site";
export async function generateMetadata() {
  return pageMetadata(
    "/resume",
    "Résumé & Credentials | Hemayet Hossain",
    "Hemayet Hossain’s Salesforce credentials, education, employment background and contact details for recruitment.",
  );
}
const hiringSteps = [
  [
    "Book a chat",
    "Choose a 20-minute time online, or email me. I reply within 2 business days.",
  ],
  [
    "Intro call",
    "Tell me about the role and team. I’ll give honest answers about my experience level, including what I haven’t done yet.",
  ],
  [
    "Portfolio walkthrough",
    "I can screen-share any project, then explain the decisions, the evidence and what I’d do differently.",
  ],
  [
    "Practical task",
    "Happy to complete a hands-on admin exercise or technical interview, so you can see how I work.",
  ],
  [
    "Credentials & references",
    "I can show my Salesforce certifications through Salesforce’s own verification, and provide referees on request.",
  ],
  [
    "Offer & start",
    "We agree a start date that allows proper notice for my current role. I’m an Australian citizen; for overseas roles, we discuss visa sponsorship and relocation up front.",
  ],
];

export default function Resume() {
  return (
    <main id="main" className="wrap section">
      <p className="eyebrow">RECRUITMENT</p>
      <h1 className="page-title">
        Hemayet Hossain.
        <br />
        <em>A practical perspective.</em>
      </h1>
      <p className="intro">
        Salesforce Administrator candidate · Sydney, NSW
        <br />
        Bachelor of Information Technology · Four Salesforce certifications
        <br />
        Australian citizen · Open to roles in Australia and overseas
      </p>
      <div className="actions">
        <a className="button" href={BOOK_RECRUITER_CALL}>
          Book a 20-min chat ↗
        </a>
        <a
          className="text-link"
          href={`mailto:${EMAIL}?subject=Resume%20request`}
        >
          Request my application résumé ↗
        </a>
        <a
          className="text-link"
          href="https://github.com/hossainconsulting/hemayet-hossain-resume"
        >
          Résumé repository ↗
        </a>
      </div>
      <div className="prose">
        <h2>Salesforce credentials</h2>
        <ul>
          <li>Salesforce Certified Platform Administrator</li>
          <li>Salesforce Certified Platform Administrator II</li>
          <li>Salesforce Certified Platform App Builder</li>
          <li>Salesforce Certified Agentforce Specialist</li>
        </ul>
        <p>
          The Administrator and Advanced Administrator names in older documents
          correspond to the labels recorded in my current credential evidence.
        </p>
        <a
          className="text-link"
          href="https://github.com/hossainconsulting/salesforce-user-lifecycle-sop"
        >
          Credential evidence & practical case study ↗
        </a>
        <h2>Employment & education</h2>
        <p>
          <strong>Coles Online Hub Store, Alexandria</strong>
          <br />
          Customer Delivery Driver & Yard Marshal · August 2024–present
        </p>
        <p>
          Earlier experience includes PH Pacific (2022–2024), Creation
          Limousines (2015–2022), 13cabs / Silver Service (2006–2015), Coles
          Express (2004–2006) and Barra Security (2000–2003).
        </p>
        <p>
          <strong>Bachelor of Information Technology</strong>
          <br />
          Central Queensland University, Sydney · 2003
        </p>
        <h2>Technical experience</h2>
        <p>
          Self-directed Salesforce simulations and learning projects. I am
          seeking my first paid Salesforce or IT role; the technical portfolio
          does not represent client engagements.
        </p>
      </div>
      <section className="section" id="hiring-process">
        <p className="eyebrow">FOR RECRUITERS & HIRING MANAGERS</p>
        <h2>From first chat to offer.</h2>
        <p className="intro">
          What to expect at each step, so there are no surprises on either side.
        </p>
        <ol className="steps">
          {hiringSteps.map(([t, d], i) => (
            <li key={t}>
              <strong>
                {String(i + 1).padStart(2, "0")} · {t}
              </strong>
              {d}
            </li>
          ))}
        </ol>
        <div className="actions">
          <a className="button" href={BOOK_RECRUITER_CALL}>
            Book a 20-min chat ↗
          </a>
          <a className="text-link" href="/projects">
            Review the projects first ↗
          </a>
        </div>
      </section>
    </main>
  );
}
