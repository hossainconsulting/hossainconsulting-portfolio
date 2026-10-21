"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Explicit production hosts only: previews and localhost never send traffic.
const sites: Record<string, { ga: string; gtm: string }> = {
  "hossainconsulting.com": { ga: "G-4C52TQZB08", gtm: "GTM-WMCQ993" },
  "www.hossainconsulting.com": { ga: "G-4C52TQZB08", gtm: "GTM-WMCQ993" },
  "hemayethossain.com": { ga: "G-HS1897RD72", gtm: "GTM-PML7PHT5" },
  "www.hemayethossain.com": { ga: "G-HS1897RD72", gtm: "GTM-PML7PHT5" },
};

export default function SiteTracking() {
  const pathname = usePathname();
  useEffect(() => {
    const config = sites[window.location.hostname];
    if (!config) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) {
      // Google's queue expects an Arguments object.
      // eslint-disable-next-line prefer-rest-params -- gtag queue uses Arguments objects
      window.dataLayer!.push(arguments);
      void args;
    };
    if (!document.getElementById("site-google-analytics")) {
      window.gtag("js", new Date());
      window.gtag("config", config.ga, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      const ga = document.createElement("script");
      ga.id = "site-google-analytics";
      ga.async = true;
      ga.src = `https://www.googletagmanager.com/gtag/js?id=${config.ga}`;
      document.head.appendChild(ga);
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const gtm = document.createElement("script");
      gtm.id = "site-google-tag-manager";
      gtm.async = true;
      gtm.src = `https://www.googletagmanager.com/gtm.js?id=${config.gtm}`;
      document.head.appendChild(gtm);
    }
    // Do not forward query strings, fragments, form contents or contact details.
    window.gtag("event", "page_view", {
      send_to: config.ga,
      page_location: window.location.origin + pathname,
      page_referrer: document.referrer ? new URL(document.referrer).origin : "",
      page_title: document.title,
    });
  }, [pathname]);
  return null;
}
