import Link from 'next/link';
import { NAV_LINKS } from '@/utils/constants';

export default function Nav() {
  return (
    <nav aria-label="Main navigation" className="border-b bg-white text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          Hemayet
        </Link>
        <ul className="flex flex-wrap gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
