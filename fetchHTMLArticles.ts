import * as cheerio from "cheerio";

export async function fetchHTMLArticles(url: string) {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);

  const links = $("a")
    .map((_, a) => $(a).attr("href"))
    .get()
    .filter((href) => href && href.includes("/20")); // captures most news articles by year

  // Normalize to absolute URLs
  const absolute = links.map((l) =>
    l.startsWith("http") ? l : url.replace(/\/$/, "") + l
  );

  // Deduplicate
  return [...new Set(absolute)];
}
