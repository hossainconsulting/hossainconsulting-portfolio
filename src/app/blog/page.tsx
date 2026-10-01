import Link from "next/link";
import { getSite, pageMetadata } from "@/lib/site";
import {
  blogIntro,
  latestPosts,
  postsIn,
  seriesFor,
  siteKey,
} from "@/lib/blog";
import { Contact } from "@/components/Sections";
import PostList from "@/components/PostList";
export async function generateMetadata() {
  const { agency } = await getSite();
  const copy = blogIntro[siteKey(agency)];
  return pageMetadata("/blog", copy.metaTitle, copy.metaDescription);
}
export default async function Blog() {
  const { agency } = await getSite();
  const site = siteKey(agency);
  const copy = blogIntro[site];
  const latest = latestPosts(site);
  return (
    <main id="main">
      <section className="wrap section">
        <p className="eyebrow">BLOG</p>
        <h1 className="page-title">
          {copy.title}
          <br />
          <em>{copy.em}</em>
        </h1>
        <p className="intro">{copy.intro}</p>
        <div className="cards">
          {seriesFor(site).map((s, i) => {
            const count = postsIn(s.slug).length;
            return (
              <Link
                className="card blog-card"
                href={`/blog/${s.slug}`}
                key={s.slug}
              >
                <span className="card-index">
                  {String(i + 1).padStart(2, "0")} ·{" "}
                  {count
                    ? `${count} post${count > 1 ? "s" : ""}`
                    : "Coming soon"}
                </span>
                <h2>{s.name}</h2>
                <p>{s.description}</p>
              </Link>
            );
          })}
        </div>
        {latest.length > 0 && <PostList heading="LATEST" posts={latest} />}
      </section>
      <Contact agency={agency} />
    </main>
  );
}
