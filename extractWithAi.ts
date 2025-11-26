import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function extractWithAI(html: string) {
  const prompt = `
Extract the following from this HTML:

- headline
- summary (2–3 sentences)
- date (ISO if possible)
- author
- category/topic
- 3 key bullet points

Return ONLY valid JSON.

HTML:
${html}
  `;

  const response = await client.responses.create({
    model: "gpt-5.1",
    input: prompt,
  });

  try {
    return JSON.parse(response.output[0].content[0].text);
  } catch (e) {
    return null;
  }
}
