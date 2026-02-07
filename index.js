import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAdaptiveResponse } from "./gemini.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/teach", async (req, res) => {
  try {
    const { input, context } = req.body;
    const reply = await getAdaptiveResponse(input, context);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: "AI response failed" });
  }
});

app.listen(3000, () => {
  console.log("LiveMentor AI server running on port 3000");
});
