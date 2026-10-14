import { pageMetadata, EMAIL, getSite } from "@/lib/site";

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
      <p>Updated 14 October 2026.</p>
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
      <h2>Website delivery and external services</h2>
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
      <h2>Prospective CRM work</h2>
      <p>
        Website enquiries do not authorise access to your CRM or customer data.
        Before any client work is accepted, the scope, necessary access and
        handling of client information must be agreed in writing. Clients own
        their CRM subscription, account and data, and pay their provider directly.
      </p>
      <p>
        Client work uses the client’s account, never Hemayet’s personal or test
        accounts. Invite access with only the permissions needed for agreed
        work; do not send passwords, card details or tokens. Access is removed
        after the agreed support period unless further work is agreed.
        Publishing a testimonial or case study requires separate written permission.
      </p>
      <h2>Access, correction, deletion and complaints</h2>
      <p>
        To ask about information you have sent, request access or correction,
        or ask for deletion, email
        <a href={`mailto:${EMAIL}`}> {EMAIL}</a>. Identify the correspondence or
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
