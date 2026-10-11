import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSite, pageMetadata } from "@/lib/site";
import { BLOG_AUTHOR } from "@/lib/blog-author";
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
  return { ...metadata, authors: [{ name: BLOG_AUTHOR.name, url: BLOG_AUTHOR.url }], openGraph: { ...metadata.openGraph, type: "article" as const, publishedTime: p.date, authors: [BLOG_AUTHOR.url], ...(images ? { images } : {}) }, twitter: { ...metadata.twitter, ...(images ? { images } : {}) } };
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
    author: { "@type": "Person", name: BLOG_AUTHOR.name, url: BLOG_AUTHOR.url, description: BLOG_AUTHOR.bios[site], sameAs: BLOG_AUTHOR.sameAs },
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
          By <a href={BLOG_AUTHOR.url} rel="author">{BLOG_AUTHOR.name}</a> · <time dateTime={p.date}>{formatDate(p.date)}</time>
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
        <section aria-labelledby="blog-author-heading">
          <h2 id="blog-author-heading">About the author</h2>
          <p><a href={BLOG_AUTHOR.url} rel="author">{BLOG_AUTHOR.name}</a><br /><span className="fine">{BLOG_AUTHOR.byline}</span></p>
          <p>{BLOG_AUTHOR.bios[site]}</p>
          <p className="fine">{BLOG_AUTHOR.sameAs.map((url, index) => (
            <span key={url}>{index > 0 && " · "}<a href={url}>{index === 0 ? "LinkedIn" : "Trailblazer"}</a></span>
          ))}</p>
        </section>
        <Link className="text-link" href={`/blog/${s.slug}`}>
          ← More from {s.name}
        </Link>
      </article>
      <Contact agency={agency} />
    </main>
  );
}
