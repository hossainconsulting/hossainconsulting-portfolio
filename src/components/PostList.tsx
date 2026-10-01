import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";
export default function PostList({
  heading,
  posts,
}: {
  heading: string;
  posts: Post[];
}) {
  return (
    <div className="post-list">
      <p className="eyebrow">{heading}</p>
      {posts.map((p) => (
        <Link
          className="post-item"
          href={`/blog/${p.series}/${p.slug}`}
          key={`${p.series}/${p.slug}`}
        >
          <time dateTime={p.date}>{formatDate(p.date)}</time>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}
