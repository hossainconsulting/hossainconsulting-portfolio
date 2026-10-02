import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite, pageMetadata } from "@/lib/site";
import { findSeries, postsIn, siteKey } from "@/lib/blog";
import { Contact } from "@/components/Sections";
import PostList from "@/components/PostList";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const [{ series: slug }, { agency, name }] = await Promise.all([
    params,
    getSite(),
  ]);
  const s = findSeries(siteKey(agency), slug);
  if (!s) return {};
  return pageMetadata(`/blog/${s.slug}`, `${s.name} | ${name}`, s.description);
}
export default async function SeriesPage({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const [{ series: slug }, { agency }] = await Promise.all([params, getSite()]);
  const s = findSeries(siteKey(agency), slug);
  if (!s) notFound();
  const list = postsIn(s.slug);
  return (
    <main id="main">
      <section className="wrap section">
        <p className="eyebrow">
          <Link href="/blog">BLOG</Link> / SERIES
        </p>
        <h1 className="page-title">{s.name}</h1>
        <p className="intro">{s.description}</p>
        {list.length ? (
          <PostList heading="ALL POSTS" posts={list} />
        ) : (
          <p className="fine">
            No posts in this series yet. The first one is on its way.
          </p>
        )}
        <Link className="text-link" href="/blog">
          ← All series
        </Link>
      </section>
      <Contact agency={agency} />
    </main>
  );
}
