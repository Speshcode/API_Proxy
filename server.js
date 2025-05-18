require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔐 Ключ берётся из переменных окружения Render или .env
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("❌ Нет OPENAI_API_KEY в переменных окружения");
  process.exit(1);
}

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
    console.error("❌ Ошибка запроса в OpenAI:", error.response?.data || error.message);
    res.status(500).json({ error: "Ошибка обращения к OpenAI" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ GPT-прокси работает на http://0.0.0.0:${PORT}`);
});
