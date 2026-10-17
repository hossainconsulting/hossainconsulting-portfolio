import { notFound } from "next/navigation";
import { getSite, pageMetadata } from "@/lib/site";
import Catalogue from "./Catalogue";
import "./catalogue.css";

export async function generateMetadata() {
  const { agency } = await getSite();
  if (!agency) return {};
  return pageMetadata("/services", "Services and pricing | Hossain Consulting", "Websites and organic marketing, paid advertising, email and SMS, Salesforce-focused CRM and workflow automation packages for NSW businesses. Read prices, quantities, extra costs and testing status.");
}

export default async function Services() {
  const { agency } = await getSite();
  if (!agency) notFound();
  return <Catalogue />;
}
