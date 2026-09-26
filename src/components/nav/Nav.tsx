import Link from "next/link";
import { AGENCY, PERSONAL, PORTFOLIO, getSite } from "@/lib/site";
export default async function Nav() {
  const { agency, name } = await getSite();
  const links = agency
    ? [
        { href: "/#services", label: "Focus areas" },
        { href: PORTFOLIO, label: "Portfolio ↗" },
        { href: PERSONAL, label: "Meet the founder ↗" },
      ]
    : [
        { href: "/projects", label: "Selected work" },
        { href: "/about", label: "About" },
        { href: "/resume", label: "Résumé" },
        { href: AGENCY, label: "My consulting practice ↗" },
      ];
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <nav className="wrap nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">
            {agency ? "HC" : "HH"}
            <span>•</span>
          </span>
          <span>{name}</span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <Link className="nav-contact" href="/#contact">
          Let&apos;s talk <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
