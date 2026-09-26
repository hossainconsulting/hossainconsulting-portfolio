import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import { AGENCY, PERSONAL, EMAIL, GITHUB, getSite } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  title: "Hemayet Hossain",
  description: "Salesforce administration, CRM and automation in Sydney.",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const s = await getSite();
  return (
    <html lang="en-AU">
      <body className={s.agency ? "agency" : "personal"}>
        <Nav />
        {children}
        <footer className="footer">
          <div className="wrap footer-top">
            <div>
              <Link className="footer-brand" href="/">
                {s.name}
                <span>•</span>
              </Link>
              <p>Sydney, NSW · Australia</p>
              {s.agency && <p>ABN 23 732 235 722</p>}
            </div>
            <div className="footer-links">
              <a href={s.agency ? PERSONAL : AGENCY}>
                {s.agency ? "Meet the founder" : "Hossain Consulting"} ↗
              </a>
              <a href={GITHUB}>GitHub ↗</a>
              <a href="https://www.linkedin.com/in/hemayethossain/">
                LinkedIn ↗
              </a>
              <a href={`mailto:${EMAIL}`}>Email ↗</a>
              <a href="/privacy">Privacy</a>
            </div>
          </div>
          <div className="wrap footer-bottom">
            <span>
              © {new Date().getFullYear()} {s.name}
            </span>
            <span>Built with care. Documented with evidence.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
