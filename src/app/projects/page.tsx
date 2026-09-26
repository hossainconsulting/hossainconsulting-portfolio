import { ProjectList, Contact, PortfolioLink } from "@/components/Sections";
import { pageMetadata } from "@/lib/site";
export async function generateMetadata() {
  return pageMetadata(
    "/projects",
    "Selected Work | Hemayet Hossain",
    "Self-directed Salesforce and AI portfolio projects, with clear status and links to source evidence.",
  );
}
export default function Projects() {
  return (
    <main id="main">
      <section className="wrap section">
        <p className="eyebrow">WORK IN THE OPEN</p>
        <h1 className="page-title">
          The projects.
          <br />
          <em>The learning.</em>
        </h1>
        <p className="intro">
          Fictional business scenarios. Real practice and documentation. These
          projects are not client engagements, and planned features are not
          completed implementations.
        </p>
        <ProjectList />
        <PortfolioLink />
      </section>
      <Contact />
    </main>
  );
}
