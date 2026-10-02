// Checks content ownership and article rendering without a running Next.js server.
// Framework imports are stubbed; this is not an end-to-end or browser check.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createRequire } from "node:module";
const requireDependency = createRequire(import.meta.url);
let host = "hemayethossain.com";
const cache = new Map();
function load(file) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute);
  const compiledModule = { exports: {} };
  cache.set(absolute, compiledModule.exports);
  const code = ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const localRequire = (name) => {
    if (name === "next/headers") return { headers: async () => new Headers({ host }) };
    if (name === "next/navigation") return { notFound: () => { throw new Error("NOT_FOUND"); } };
    if (name === "next/link") return { default: ({ children, ...props }) => React.createElement("a", props, children) };
    if (name === "next/image") return { default: (props) => React.createElement("img", props) };
    if (name.startsWith("@/")) {
      const base = path.resolve("src", name.slice(2));
      return load(fs.existsSync(base + ".ts") ? base + ".ts" : base + ".tsx");
    }
    return requireDependency(name);
  };
  new Function("require", "module", "exports", code)(localRequire, compiledModule, compiledModule.exports);
  cache.set(absolute, compiledModule.exports);
  return compiledModule.exports;
}
(async () => {
  const blog = load("src/lib/blog.ts");
  const article = load("src/app/blog/[series]/[post]/page.tsx");
  const sitemap = load("src/app/sitemap.ts").default;
  const cases = [
    ["hemayethossain.com", "personal", "forward-notes", "salesforce-to-forward-deployed-engineer"],
    ["hossainconsulting.com", "agency", "crm-that-works", "quote-follow-up-workflow-for-tradies"],
  ];
  for (const [domain, site, series, post] of cases) {
    host = domain;
    const params = Promise.resolve({ series, post });
    const html = renderToStaticMarkup(await article.default({ params }));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(html.includes("Resources and next steps"));
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema["@type"], "BlogPosting");
    assert.equal(schema.author.name, "Hemayet Hossain");
    assert.ok(schema.url.startsWith("https://" + domain));
    const metadata = await article.generateMetadata({ params });
    assert.equal(metadata.alternates.canonical, schema.url);
    assert.equal(metadata.openGraph.type, "article");
    if (site === "agency") {
      assert.ok(metadata.openGraph.images[0].url.startsWith("https://" + domain));
      assert.ok(fs.existsSync("public" + blog.findPost(site, series, post).image.src));
    }
    const urls = await sitemap();
    assert.ok(urls.every((entry) => entry.url.startsWith("https://" + domain)));
    assert.equal(urls.find((entry) => entry.url === schema.url).lastModified, "2026-10-02T00:00:00Z");
    const other = site === "personal" ? "agency" : "personal";
    assert.equal(blog.findPost(other, series, post), undefined);
    host = site === "personal" ? "hossainconsulting.com" : "hemayethossain.com";
    await assert.rejects(article.default({ params }), /NOT_FOUND/);
    console.log(`PASS: ${domain} article, metadata, sitemap and cross-site rejection`);
  }
  host = "untrusted.example";
  assert.ok((await sitemap()).every((entry) => entry.url.startsWith("https://hemayethossain.com")));
  console.log("PASS: unknown host cannot inject sitemap origin");
})().catch((error) => { console.error(error); process.exitCode = 1; });
