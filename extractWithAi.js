import OpenAI from "openai";
console.log(process.env.OPENAI_API_KEY )
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function extractWithAI(source) {
  const prompt = `
I want you to summarize all of the articles/stories posted today by ${source}:
give me the following information for each article in a JSON array format:
- headline
- summary (3-4 sentences)
- date (ISO if possible)
- author
- category/topic
- 3 key bullet points

  `;

  const response = await client.responses.create({
    model: "gpt-5.1",
    input: prompt,
  });

  try {
    console.log(JSON.parse(response.output[0].content[0].text));
    return JSON.parse(response.output[0].content[0].text);
  } catch (e) {
    return null;
  }
}
