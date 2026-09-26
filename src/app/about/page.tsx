import { Contact } from "@/components/Sections";
import { AGENCY, pageMetadata } from "@/lib/site";
export async function generateMetadata() {
  return pageMetadata(
    "/about",
    "About Hemayet Hossain | Salesforce & Operations",
    "IT graduate, Salesforce-certified career changer and founder of a developing consulting practice in Sydney.",
  );
}
export default function About() {
  return (
    <main id="main">
      <section className="wrap section">
        <p className="eyebrow">ABOUT HEMAYET</p>
        <h1 className="page-title">
          A practical path
          <br />
          <em>into technology.</em>
        </h1>
        <div className="prose">
          <p className="intro">
            I’m an IT graduate and Salesforce-certified professional based in
            Sydney, working towards my first paid Salesforce or IT role.
          </p>
          <p>
            I currently work as a Customer Delivery Driver and Yard Marshal in
            Coles online fulfilment. Before that, I worked in customer service
            and independently managed transport operations. Clear communication,
            careful records and reliable processes have been part of my
            day-to-day work for years.
          </p>
          <p>
            My Bachelor of Information Technology is from Central Queensland
            University, Sydney (2003). In 2026, I earned four Salesforce
            certifications and continued building practical skills through
            self-directed projects.
          </p>
          <h2>Learning through the work</h2>
          <p>
            My portfolio uses simulated business scenarios to practise
            Salesforce administration, data quality, access management,
            automation and documentation. I keep planned work separate from
            completed work and link to supporting evidence where it exists.
          </p>
          <h2>Hossain Consulting</h2>
          <p>
            I am developing a consulting practice focused on CRM and AI
            automation for trade and home-service businesses. Current work is
            demo-based, with no client engagements to date.
          </p>
          <a className="button" href={AGENCY}>
            Explore Hossain Consulting ↗
          </a>
        </div>
      </section>
      <Contact />
    </main>
  );
}
