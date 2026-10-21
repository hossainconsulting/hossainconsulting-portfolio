import { pageMetadata, getSite } from "@/lib/site";

export async function generateMetadata() {
  return pageMetadata(
    "/privacy",
    "Website Privacy | Hemayet Hossain & Hossain Consulting",
    "Information about website enquiries, introductory call bookings and privacy requests.",
  );
}

export default async function Privacy() {
  const site = await getSite();
  return (
    <main id="main" className="wrap section prose">
      <p className="eyebrow">{site.name.toUpperCase()} · WEBSITE INFORMATION</p>
      <h1 className="page-title">Privacy.</h1>
      <p>Updated 18 October 2026.</p>
      <p>
        This notice covers website enquiries and introductory call bookings for
        Hemayet Hossain and Hossain Consulting at hemayethossain.com and
        hossainconsulting.com. Contact Hemayet about privacy using the email
        address below.
      </p>
      <h2>Enquiries and correspondence</h2>
      <p>
        Email links open your email application. When you send an enquiry,
        Hemayet receives your email address and the information you choose to
        include, such as your name, contact details, business enquiry or role
        opportunity. This information is used to respond, discuss your request
        and handle related correspondence.
      </p>
      <p>
        Share only what is needed for the enquiry. Please do not send passwords,
        card details, access tokens or sensitive customer records. You can make
        an initial enquiry without supplying client CRM data. Without a way to
        contact you or enough context, it may be difficult to respond.
      </p>
      <h2>Introductory call bookings</h2>
      <p>
        Booking links open Calendly, an external scheduling service. Review the
        information requested on its booking page before submitting it.
        Information you provide for a booking is used to arrange and prepare
        for the call. A free introductory call is separate from a paid service
        booking.
      </p>
      <p>
        Calendly’s
        <a href="https://calendly.com/legal/privacy-notice"> privacy notice</a>
        {" "}explains its information practices and its role in processing
        booking information for customers. Any external
        meeting service used for a call has its own information-handling
        arrangements.
      </p>
      <h2>Website analytics</h2>
      <p>We use Google Analytics 4 and Google Tag Manager to understand visits to our websites and blogs. The personal website and portfolio use separate reporting from the agency website and blog. Google may process browser, device, approximate location and page interaction information, and Analytics may use cookies. We do not intentionally send names, email addresses, enquiry contents or URL query strings from these websites to Analytics. Advertising personalisation is disabled in our website configuration.</p>
      <p>You can block analytics through browser controls or Google’s <a href="https://tools.google.com/dlpage/gaoptout">Analytics opt-out browser add-on</a>. See <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its services</a>.</p>
      <h2>Website delivery and external services</h2>
      <p>
        These websites use Vercel for hosting and Cloudflare for domain
        services. Email sent to hemayet@hossainconsulting.com or
        hemayet@hemayethossain.com is routed through Google’s mail service. Introductory bookings use Calendly.
      </p>
      <p>
        Visiting a website involves technical connection information, such as
        an IP address and browser request information. Infrastructure providers
        may process this information to deliver and protect the websites.
        Email, scheduling and other external services also handle information
        through their own systems.
      </p>
      <p>
        Links to GitHub, social profiles and other websites take you to external
        services. Their privacy and cookie practices apply when you use them.
        You can manage cookies through your browser settings. This notice does
        not describe every external service’s processing.
      </p>
      {site.agency && (
        <>
          <h2>Free checklist and email updates</h2>
          <p>
            We are preparing a free enquiry checklist for trade and home-service
            businesses. It will be offered on a page within our evidence
            portfolio at portfolio.hossainconsulting.com. Before sign-ups open,
            we will confirm the collection page, email provider and applicable
            privacy notice and terms here.
            We do not collect sign-ups for email updates until we confirm here
            that they are open.
          </p>
          <p>
            When it is available, you will be asked to tick a box agreeing to
            receive the checklist and related emails. We will keep your name,
            email address, business name and trade, the time you agreed, the
            wording you agreed to and the page you used. We use this only to
            send the checklist and the emails you agreed to, and to reply to
            you. We do not sell your details. Every email will have an
            unsubscribe link, and we will act on it promptly.
          </p>
          <p>
            We keep subscriber details while you are subscribed and for up to 24
            months after your last interaction, plus a record that you
            unsubscribed so we do not email you again. We will use an email
            platform to send these emails. It will store your details and may
            process them in the United States or other countries. We will name
            the provider here before sign-ups open.
          </p>
          <h2>Payments for our own fees</h2>
          <p>
            Payment processing is not available yet. When it is, you will pay
            Hossain Consulting&apos;s own fees through a payment provider, which
            we will name here first. We do not ask for or store your
            full card details. The selected payment provider may supply transaction references, payment status and limited billing information; the actual provider, fields and retention will be named before payments open. You subscribe to your own tools, such as a CRM, advertising
            account, domain or hosting, in your own name and with your own card,
            and you pay those providers directly.
          </p>
        </>
      )}
      <h2>Overseas processing</h2>
      <p>
        Calendly’s privacy notice states that information it collects may be
        processed and stored in the United States or other countries where
        Calendly or its service providers operate. Review its
        <a href="https://calendly.com/legal/privacy-notice"> privacy notice</a>
        {" "}before using the booking service. Our NSW service area does not mean
        that information stays in NSW or Australia.
      </p>
      <h2>Prospective agency marketing, CRM and workflow services</h2>
      <p>
        Website enquiries do not authorise access to advertising, marketing, CRM, automation accounts or customer data.
        Before any client work is accepted, the scope, necessary access and
        handling of client information must be agreed in writing. Clients own
        their subscriptions, advertising assets, accounts and data, and pay vendors directly. Publishing package information does not activate email/SMS, advertising pixels, AI processing, payments or access to client systems.
      </p>
      <p>
        Client work uses the client’s account, never Hemayet’s personal or test
        accounts. Invite access with only the permissions needed for agreed
        work; do not send passwords, card details or tokens. Access is removed
        after the agreed support period unless further work is agreed.
        Publishing a testimonial or case study requires separate written permission.
      </p>
      <h2>Service-specific information and referral links</h2>
      <p>Before agency work uses personal information, the written scope must identify necessary data fields and purpose, delegated access, processing providers/locations, execution-log redaction, retention/deletion, monitoring responsibilities and access removal. Our agency demonstrations use synthetic data; client work stays in approved client-controlled systems. A proposed service is not evidence that its processing has begun.</p>
      <p>We may recommend external vendors and earn referral commissions. Actual referral relationships are disclosed with the recommendation and agreement; your choice remains independent. An external vendor may use referral attribution or cookies under its own practices. No new referral tracker or client-data sharing is introduced by this catalogue update; actual tracking or processing changes require notice review before activation.</p>
      {!site.agency && <p>Paid agency services, vendor subscriptions and any future agency-fee payment processing belong to Hossain Consulting, separate from recruitment enquiries on this personal site. See the <a href="https://hossainconsulting.com/privacy">agency privacy notice</a> and <a href="https://hossainconsulting.com/services">services catalogue</a> for the relevant current information.</p>}
      <h2>Access, correction, deletion and complaints</h2>
      <p>
        To ask about information you have sent, request access or correction,
        or ask for deletion, email
        <a href={`mailto:${site.email}`}> {site.email}</a>. Identify the correspondence or
        booking concerned and the action you are requesting. Please do not
        include unnecessary sensitive information.
      </p>
      <p>
        Hemayet may ask for enough information to verify that the request
        relates to you. Some records may need to be retained for a legal
        obligation or dispute. If a request cannot be fulfilled, Hemayet will
        explain the reason and discuss available next steps.
      </p>
      <p>
        For a privacy complaint, use the same email address and describe your
        concern and the outcome you seek. Hemayet will review the concern and
        respond. You can also consult the
        <a href="https://www.oaic.gov.au/privacy/privacy-complaints"> OAIC’s privacy complaint information</a>
        {" "}about available external complaint options.
      </p>
      <h2>Changes to this notice</h2>
      <p>
        This notice is dated when revised. New forms, payment collection,
        analytics or client-data workflows require a review of the notice and
        relevant collection information before introduction. See also the
        <a href="/legal"> website terms and notices</a>.
      </p>
    </main>
  );
}
