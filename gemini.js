import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getAdaptiveResponse(input, context) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `
You are LiveMentor AI, an adaptive real-time teaching agent.
Student context: ${context}
Student input: ${input}

Adapt explanation based on clarity, engagement, and pacing.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
