import { pageMetadata } from "@/lib/site";
export async function generateMetadata() {
  return pageMetadata(
    "/skills",
    "Skills & Certifications | Hemayet Hossain",
    "Salesforce certifications and practical learning areas in administration, automation and CRM.",
  );
}
export default function Skills() {
  return (
    <main id="main" className="wrap section">
      <p className="eyebrow">SKILLS & DEVELOPMENT</p>
      <h1 className="page-title">
        Build understanding.
        <br />
        <em>Then build evidence.</em>
      </h1>
      <div className="cards">
        {[
          [
            "Salesforce administration",
            "User access, permission sets, data quality, objects, fields, validation, reports and dashboards.",
          ],
          [
            "Workflow & documentation",
            "Flow automation practice, process analysis, testing notes and operational procedures.",
          ],
          [
            "Developing capability",
            "AI-assisted development, integration concepts, Git and automation workflow design. These are learning areas, not claims of commercial delivery.",
          ],
        ].map(([t, d]) => (
          <article className="card" key={t}>
            <h2>{t}</h2>
            <p>{d}</p>
          </article>
        ))}
      </div>
      <p className="intro">
        My four Salesforce credentials cover Administrator, Advanced
        Administrator, Platform App Builder and Agentforce Specialist. See the
        résumé page for the current credential record.
      </p>
      <a className="button" href="/resume">
        Résumé & credentials ↗
      </a>
    </main>
  );
}
