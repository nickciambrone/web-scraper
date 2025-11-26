import Parser from "rss-parser";
const parser = new Parser();

export async function fetchRSS(url: string) {
  try {
    const feed = await parser.parseURL(url);
    return feed.items.map(item => ({
      link: item.link,
      title: item.title,
      pubDate: item.pubDate,
    }));
  } catch (e) {
    return null;
  }
}
