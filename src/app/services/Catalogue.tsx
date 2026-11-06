"use client";

import type { MouseEvent } from "react";
import catalogue from "@/content/services-catalogue.json";

export default function Catalogue({ bookingUrl }: { bookingUrl: string }) {
  function toggleDetails(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("button#expand, button#collapse");
    if (!button) return;
    event.currentTarget.querySelectorAll<HTMLDetailsElement>("details").forEach(detail => {
      detail.open = button.id === "expand";
    });
  }
  // Build-time, reviewed catalogue content only; never receives visitor HTML.
  const html = catalogue.html.replaceAll("__BOOKING_URL__", bookingUrl);
  return <div id="top" className="service-catalogue" onClick={toggleDetails} dangerouslySetInnerHTML={{ __html: html }} />;
}
