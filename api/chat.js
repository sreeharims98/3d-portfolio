import fs from "fs";
import path from "path";

function buildSystemPrompt() {
  const resumeText = fs.readFileSync(
    path.join(process.cwd(), "api/data/resume.md"),
    "utf-8",
  );

  return `You are an assistant representing Sreehari.
Answer questions about them using ONLY the info below.
Keep answers concise and friendly. If something isn't covered, say you don't have that info.

--- RESUME/BIO ---
${resumeText}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: buildSystemPrompt() }] },
          contents: messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
        }),
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Gemini error body:", errorBody);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't process that.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
