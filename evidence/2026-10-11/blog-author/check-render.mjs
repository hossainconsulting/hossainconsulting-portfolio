import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";

function fetch(url, options) {
  return new Promise((resolve, reject) => {
    http.get(url, { headers: options.headers }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => { body += chunk; });
      response.on("end", () => resolve({ status: response.statusCode, text: async () => body }));
    }).on("error", reject);
  });
}

const results = [];
for (const [host, route, phrase] of [
  ["hemayethossain.com", "/blog/working-in-public/why-i-am-writing-in-public", "software prototypes"],
  ["hossainconsulting.com", "/blog/the-automation-brief/every-enquiry-gets-a-reply", "developing CRM and automation practice"],
]) {
  const response = await fetch(`http://localhost:3114${route}`, { headers: { Host: host } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes('aria-labelledby="blog-author-heading"'));
  assert.ok(html.includes(phrase));
  assert.ok(html.includes('rel="author"'));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.author.name, "Hemayet Hossain");
  assert.equal(schema.author.url, "https://hemayethossain.com/about");
  assert.equal(schema.author.sameAs.length, 2);
  assert.ok(schema.author.description.includes(phrase));
  assert.equal(schema.url, `https://${host}${route}`);
  const about = await fetch("http://localhost:3114/about", { headers: { Host: "hemayethossain.com" } });
  assert.equal(about.status, 200);
  const wrongHost = host === "hemayethossain.com" ? "hossainconsulting.com" : "hemayethossain.com";
  const wrongSite = await fetch(`http://localhost:3114${route}`, { headers: { Host: wrongHost } });
  const wrongHtml = await wrongSite.text();
  assert.ok(wrongHtml.includes("This page could not be found."));
  assert.ok(!wrongHtml.includes('id="blog-author-heading"'));
  results.push({ host, route, status: response.status, author: schema.author, wrongSiteStatus: wrongSite.status, wrongSiteNotFound: true, aboutStatus: 200 });
  console.log(`PASS ${host}: author bio, metadata identity, heading, About link and wrong-site notFound`);
}
fs.writeFileSync("evidence/2026-10-11/blog-author/render-results.json", JSON.stringify(results, null, 2) + "\n");
