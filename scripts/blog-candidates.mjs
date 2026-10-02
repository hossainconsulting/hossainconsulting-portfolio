// Lists blog/* tags in the watched project repos that have no post yet.
// Usage: node scripts/blog-candidates.mjs   -> JSON array on stdout
// A tag counts as covered once any post in src/lib/blog.ts carries
// source: { repo, tag } for it. BLOG_GIT_BASE overrides https://github.com
// (used for local testing).
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const config = JSON.parse(
  readFileSync(new URL("automation/blog-projects.json", root), "utf8"),
);
const blog = readFileSync(new URL("src/lib/blog.ts", root), "utf8");

const covered = new Set(
  [...blog.matchAll(/repo:\s*"([^"]+)",\s*tag:\s*"([^"]+)"/g)].map(
    ([, repo, tag]) => `${repo}@${tag}`,
  ),
);

const base = process.env.BLOG_GIT_BASE || "https://github.com";
const candidates = [];
const errors = [];
for (const repo of config.repos) {
  const url = `${base}/${config.owner}/${repo}.git`;
  let out;
  try {
    out = execFileSync(
      "git",
      ["ls-remote", "--tags", "--refs", url, `refs/tags/${config.tagPrefix}*`],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 60000 },
    );
  } catch (e) {
    errors.push({ repo, error: String(e.stderr || e.message).trim() });
    continue;
  }
  for (const line of out.split("\n").filter(Boolean)) {
    const [sha, ref] = line.split("\t");
    const tag = ref.replace("refs/tags/", "");
    if (!covered.has(`${repo}@${tag}`))
      candidates.push({ repo, tag, sha, url });
  }
}

console.log(JSON.stringify({ candidates, errors }, null, 2));
