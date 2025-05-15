# 🧠 OpenAI Proxy for UI Copilot

A lightweight Node.js proxy server to securely access the OpenAI API from a Figma plugin without exposing your API key.

## 🔧 Setup

1. Clone the repo:
```bash
git clone https://github.com/your-username/openai-proxy.git
cd openai-proxy
```

2. Install dependencies:
```bash
npm install
```

3. Add your `.env` file:
```env
OPENAI_KEY=sk-...
```

4. Start the server:
```bash
npm start
```

## 🚀 Deploy

You can deploy this server to Render.com, Railway.app or any Node.js hosting.

## 🔁 Example curl request
```bash
curl -X POST https://your-server.com/gpt \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      { "role": "system", "content": "Ты — UX Copilot. Определи блоки интерфейса." },
      { "role": "user", "content": "Хочу личный кабинет с профилем, статистикой и меню." }
    ]
  }'
```
