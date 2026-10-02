import { EMAIL, getSite, pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  return pageMetadata("/legal", "Website terms and notices", "Website terms, cookies, portfolio disclaimer and consumer rights.");
}

export default async function Legal() {
  const site = await getSite();
  return <main id="main" className="wrap section prose">
    <p className="eyebrow">{site.name.toUpperCase()} · WEBSITE INFORMATION</p>
    <h1 className="page-title">Terms & notices.</h1>
    <p>Updated 2 October 2026. These notices apply to {site.origin}.</p>
    <h2>About this website</h2>
    <p>{site.agency ? "Hossain Consulting is a developing CRM and automation practice presented by Hemayet Hossain. The website describes fixed-scope services that are available only by separately agreed written scope, and simulated portfolio work. It does not provide an online checkout or a live automation service." : "This is Hemayet Hossain’s professional portfolio, introducing his qualifications, learning projects and career interests."}</p>
    <h2>Website use</h2>
    <p>You may view this website and share links for legitimate personal or business purposes. Do not interfere with its operation, attempt unauthorised access or misuse another person’s information. Website content does not grant permission to use third-party trademarks or imply endorsement.</p>
    <h2>Portfolio and information disclaimer</h2>
    <p>Portfolio projects described as simulations use fictional scenarios. They are not evidence of paid client engagements or paid Salesforce or IT employment. Project status and limitations are described with each project. Examples are for information and learning and should be independently assessed before use in a production system.</p>
    <p>Information may change. No employment outcome, business result, uninterrupted availability or suitability for a particular project is promised by this website. Links to external websites are provided for reference; their operators control their content and services.</p>
    <h2>Copyright and project licences</h2>
    <p>Original website content belongs to its respective owner. Refer to each linked repository’s licence before reusing code or other materials. No licence for a linked project is created by this notice. Contact us about attribution, permission or a suspected rights infringement.</p>
    <h2>Cookies and similar technologies</h2>
    <p>The current website source does not install analytics, advertising pixels, tracking cookies or local-storage profiling. Hosting and security providers may process technical connection information or use technologies necessary to deliver and protect the site. External websites you choose to visit have their own cookie and privacy practices.</p>
    <p>You can manage cookies through your browser settings. A browser may retain its own cached files or preferences independently of this website. See the <a href="/privacy">privacy notice</a> for information about email enquiries and infrastructure providers.</p>
    <h2>Services, payments and cancellation</h2>
    {site.agency ? <>
    <p>No purchase or service contract is completed through this website, and an enquiry or booked call does not create an engagement. Work starts only under a written Client Service Agreement with a written scope and fixed price. The main terms are summarised below; the signed agreement prevails.</p>
    <ul>
      <li><strong>Cooling-off:</strong> new clients may cancel within 10 business days after signing, for any reason and at no cost. No payment is requested or accepted, and no work starts, during that period.</li>
      <li><strong>Payment:</strong> Hossain Consulting is registered for GST (ABN 23 732 235 722) and issues tax invoices. Prices are shown plus GST. Typically a 50% deposit is invoiced after cooling-off and 50% at handover, each due within 7 days. Bank transfer and PayID are free; any card or direct-debit fee is shown before you pay. No late fees are charged.</li>
      <li><strong>Free pilots:</strong> where a free pilot is agreed in writing, there is no charge, and the same duty of care applies.</li>
      <li><strong>Changes and cancellation:</strong> extra work is quoted in writing first. After cooling-off, either party may end an engagement with 5 business days&apos; written notice; you pay only for work completed, and any unused deposit is refunded within 7 days.</li>
      <li><strong>Your data:</strong> client account access and customer data are used only to deliver the agreed work. Confidential or customer data is not entered into AI tools without written permission.</li>
    </ul>
    </> : <>
    <p>No purchase, subscription or service contract is completed through this website. Booking a call or sending an enquiry does not create an employment or contractor engagement. Any role or contract is subject to a separate written offer or agreement. Hemayet Hossain is an Australian citizen and is open to roles in Australia and, subject to visa and relocation arrangements, overseas.</p>
    </>}
    <p>Nothing in these notices excludes, restricts or modifies any consumer guarantee, remedy or other right that cannot lawfully be excluded under the Australian Consumer Law or other applicable law. Where those rights apply, they take precedence over inconsistent wording.</p>
    <h2>Contact and updates</h2>
    <p>For website questions or concerns, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Revised notices will be dated on this website. A future business mailbox will be listed here only after it is operational.</p>
  </main>;
}
