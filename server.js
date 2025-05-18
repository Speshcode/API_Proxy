const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔐 Вставь свой OpenAI API-ключ здесь
const OPENAI_API_KEY = "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"; // или process.env.OPENAI_KEY из .env

app.post("/gpt", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: req.body.messages
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("OpenAI error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to connect to OpenAI" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Proxy server running at http://0.0.0.0:${PORT}`);
});
