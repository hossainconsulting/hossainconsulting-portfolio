import { pageMetadata, EMAIL } from "@/lib/site";
export async function generateMetadata() {
  return pageMetadata(
    "/resume",
    "Résumé & Credentials | Hemayet Hossain",
    "Hemayet Hossain’s Salesforce credentials, education, employment background and contact details for recruitment.",
  );
}
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
      </p>
      <div className="actions">
        <a className="button" href={`mailto:${EMAIL}?subject=Resume%20request`}>
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
    </main>
  );
}
