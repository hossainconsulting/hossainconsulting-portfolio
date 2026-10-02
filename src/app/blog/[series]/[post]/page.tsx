import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSite, pageMetadata, PERSONAL } from "@/lib/site";
import { findPost, findSeries, formatDate, siteKey } from "@/lib/blog";
import { Contact } from "@/components/Sections";
type Params = Promise<{ series: string; post: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const [{ series, post }, { agency, name, origin }] = await Promise.all([
    params,
    getSite(),
  ]);
  const p = findPost(siteKey(agency), series, post);
  if (!p) return {};
  const metadata = await pageMetadata(
    `/blog/${p.series}/${p.slug}`,
    `${p.title} | ${name}`,
    p.summary,
  );
  const images = p.image ? [{ url: origin + p.image.src, width: p.image.width, height: p.image.height, alt: p.image.alt }] : undefined;
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article" as const, publishedTime: p.date, authors: [PERSONAL], ...(images ? { images } : {}) }, twitter: { ...metadata.twitter, ...(images ? { images } : {}) } };
}
export default async function PostPage({ params }: { params: Params }) {
  const [{ series, post }, { agency, origin, name }] = await Promise.all([params, getSite()]);
  const site = siteKey(agency);
  const p = findPost(site, series, post);
  const s = findSeries(site, series);
  if (!p || !s) notFound();
  const url = `${origin}/blog/${p.series}/${p.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.summary,
    datePublished: p.date,
    mainEntityOfPage: url,
    url,
    ...(p.image ? { image: origin + p.image.src } : {}),
    author: { "@type": "Person", name: "Hemayet Hossain", url: `${PERSONAL}/about` },
    publisher: { "@type": agency ? "Organization" : "Person", name, url: origin },
  };
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className="wrap section prose">
        <p className="eyebrow">
          <Link href="/blog">BLOG</Link> /{" "}
          <Link href={`/blog/${s.slug}`}>{s.name.toUpperCase()}</Link>
        </p>
        <h1 className="page-title">{p.title}</h1>
        <p className="fine">
          By <a href={`${PERSONAL}/about`}>Hemayet Hossain</a> · <time dateTime={p.date}>{formatDate(p.date)}</time>
        </p>
        {p.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {p.image && <figure><Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} sizes="(max-width: 800px) 100vw, 800px" style={{ width: "100%", height: "auto" }} /><figcaption className="fine">Suggested workflow · AI-generated illustration · No client results claimed.</figcaption></figure>}
        {p.sections?.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </section>
        ))}
        {p.references && <nav aria-label="Article resources"><h2>Resources and next steps</h2><ul>{p.references.map((reference) => <li key={reference.url}>{reference.url.startsWith("/") ? <Link href={reference.url}>{reference.label}</Link> : <a href={reference.url}>{reference.label}</a>}</li>)}</ul></nav>}
        <Link className="text-link" href={`/blog/${s.slug}`}>
          ← More from {s.name}
        </Link>
      </article>
      <Contact agency={agency} />
    </main>
  );
}
