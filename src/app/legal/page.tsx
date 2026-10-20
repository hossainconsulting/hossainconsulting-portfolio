import workflowTerms from "@/content/workflow-terms.json";
import { getSite, pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  return pageMetadata(
    "/legal",
    "Website terms and notices",
    "Website use, portfolio information, service preparation status and consumer rights.",
  );
}

export default async function Legal() {
  const site = await getSite();
  return (
    <main id="main" className="wrap section prose">
      <p className="eyebrow">{site.name.toUpperCase()} · WEBSITE INFORMATION</p>
      <h1 className="page-title">Terms &amp; notices.</h1>
      <p>Updated 20 October 2026. These notices apply to {site.origin}.</p>
      <h2>About this website</h2>
      <p>
        {site.agency
          ? "Hossain Consulting is a developing CRM and automation practice presented by Hemayet Hossain. The website publishes website/organic marketing, paid advertising, email/SMS, CRM and workflow packages with standard prices, scope limits and explicit testing status. Paid availability remains subject to readiness and final written terms; portfolio work remains simulated."
          : "This is Hemayet Hossain’s professional portfolio, introducing his qualifications, learning projects and career interests."}
      </p>
      <h2>Website use</h2>
      <p>You may view this website and share links for legitimate personal or business purposes. Do not interfere with its operation, attempt unauthorised access or misuse another person’s information. Website content does not grant permission to use third-party trademarks or imply endorsement.</p>
      <h2>Portfolio and information</h2>
      <p>Portfolio projects described as simulations use fictional scenarios. They are not evidence of paid client engagements or paid Salesforce or IT employment. Project status and limitations are described with each project. Examples are for information and learning and should be independently assessed before use in a production system.</p>
      <p>Information may change. No employment outcome, business result, uninterrupted availability or suitability for a particular project is promised by this website. Links to external websites are provided for reference; their operators control their content and services.</p>
      <h2>Copyright and project licences</h2>
      <p>Original website content belongs to its respective owner. Refer to each linked repository’s licence before reusing code or other materials. No licence for a linked project is created by this notice. Contact Hemayet about attribution, permission or a suspected rights infringement.</p>
      <h2>Privacy, cookies and external services</h2>
      <p>Infrastructure and external services may process technical connection information or use cookies and similar technologies when you use their services. You can manage cookies through your browser settings. A browser may retain cached files or preferences independently of this website.</p>
      <p>See the <a href="/privacy">privacy notice</a> for information about website enquiries, introductory bookings and privacy requests. External websites have their own privacy and cookie practices.</p>
      <h2>{site.agency ? "Services, payments and service terms" : "Enquiries and engagements"}</h2>
      {site.agency ? (
        <>
          <p>We’re preparing to launch paid services. Payment processing and our service terms are still being finalised. You’re welcome to enquire; we’ll confirm when paid service bookings and payments are available.</p>
          <p>Legal review of the cooling-off period, charge date and cancellation/refund terms is still outstanding.</p>
          <p>A free introductory call or enquiry does not create a paid service booking or engagement. No purchase or service contract is completed through this website.</p>
          <p>Before accepting paid services, we will provide the finalised service terms in writing, together with the agreed scope, total price including GST, the software subscriptions you will need and the timeline. Payment timing, any cooling-off arrangements and cancellation/refund terms must be settled and provided before you agree to proceed.</p>
          <p>You buy and pay for any software, such as a CRM, email platform, advertising account, domain or hosting, directly from its provider, in your own name and with your own card. We do not resell tools, pass on their costs or hold your card details. You pay us only our own fees, through a payment provider we will name before payments open.</p>
          <h2>Client choice and referral commissions</h2>
          <p>We assess suitable existing tools first. Clients choose providers and subscribe in their own names, paying vendors and advertising platforms directly. Our own subscriptions or lifetime memberships do not imply free client licences or resale rights. We may earn a referral commission; any actual relationship is disclosed in writing with the recommendation and in the service agreement before you choose. Referral purchase is optional.</p>
          <h2>Scope, shared work and published prices</h2>
          <p>The <a href="/services">services catalogue</a> states quantities, optional care, extra usage costs and incomplete checks. Shared assets, connections, reminders, reports, meetings and care tasks are counted once in an itemised scope. No automatic recurring enrolment, budget increase or overage is authorised by an enquiry. New CRM offers use the standard A$2,640 setup price with no CRM launch discount or discounted slot, subject to confirming tax treatment before quotation. Earlier CRM launch-discount tiers are superseded for new offers; existing signed agreements remain unchanged. Separate Workflow Automation prices are unchanged.</p>
          <p>No fixed deposit percentage or setup-payment split is required by this website. Payment amounts, stages and due dates must be agreed in writing. Silence is not acceptance or permission for live activation. Publishing a catalogue does not establish that a service, provider feature or payment flow has passed testing.</p>
          <h2>Agreement, support and exit</h2>
          <p>Before paid work, agree acceptance cases, revisions, delivery dependencies, support dates/channels/hours, monitoring responsibilities, renewal/cancellation, unused allowances, defects and refunds, ownership/licences, data/log retention and offboarding. Included support does not overlap a second care charge. Fixes for agreed delivered-work defects are not silently charged as extras. Vendor cancellation and agency cancellation are separate; vendor payments/refunds remain directly with the vendor.</p>
          <h2>Workflow-specific options — subject to written agreement</h2>
          <div dangerouslySetInnerHTML={{ __html: workflowTerms.html }} />
          <p>Additional work is quoted in writing and approved before it begins. Website enquiries do not authorise access to your CRM or customer data; necessary access and information handling must be agreed in writing.</p>
        </>
      ) : (
        <>
          <p>No purchase, subscription or service contract is completed through this website. Booking a call or sending an enquiry does not create an employment or contractor engagement. Any role or contract is subject to a separate written offer or agreement. Hemayet Hossain is an Australian citizen and is open to roles in Australia and, subject to visa and relocation arrangements, overseas.</p>
          <p>Hossain Consulting is preparing to launch paid services. Payment processing and service terms are still being finalised, with legal review outstanding. See <a href="https://hossainconsulting.com/services">the agency catalogue and testing status</a>. Client-owned accounts, direct vendor billing and disclosed referral relationships apply to agency engagements, not employment enquiries. Contact the agency for an introductory enquiry; paid service availability and finalised written terms will be confirmed before accepting paid services.</p>
        </>
      )}
      <h2>Your legal rights</h2>
      <p>Nothing in these notices excludes, restricts or modifies any consumer guarantee, remedy or other right that cannot lawfully be excluded under the Australian Consumer Law or other applicable law. Where those rights apply, they take precedence over inconsistent wording.</p>
      <h2>Contact and updates</h2>
      <p>For website questions or concerns, email <a href={`mailto:${site.email}`}>{site.email}</a>. Revised notices will be dated on this website.</p>
    </main>
  );
}
