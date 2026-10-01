import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite, pageMetadata } from "@/lib/site";
import { findPost, findSeries, formatDate, siteKey } from "@/lib/blog";
import { Contact } from "@/components/Sections";
type Params = Promise<{ series: string; post: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const [{ series, post }, { agency, name }] = await Promise.all([
    params,
    getSite(),
  ]);
  const p = findPost(siteKey(agency), series, post);
  if (!p) return {};
  return pageMetadata(
    `/blog/${p.series}/${p.slug}`,
    `${p.title} | ${name}`,
    p.summary,
  );
}
export default async function PostPage({ params }: { params: Params }) {
  const [{ series, post }, { agency }] = await Promise.all([params, getSite()]);
  const site = siteKey(agency);
  const p = findPost(site, series, post);
  const s = findSeries(site, series);
  if (!p || !s) notFound();
  return (
    <main id="main">
      <article className="wrap section prose">
        <p className="eyebrow">
          <Link href="/blog">BLOG</Link> /{" "}
          <Link href={`/blog/${s.slug}`}>{s.name.toUpperCase()}</Link>
        </p>
        <h1 className="page-title">{p.title}</h1>
        <p className="fine">
          <time dateTime={p.date}>{formatDate(p.date)}</time>
        </p>
        {p.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <Link className="text-link" href={`/blog/${s.slug}`}>
          ← More from {s.name}
        </Link>
      </article>
      <Contact agency={agency} />
    </main>
  );
}
