#!/bin/bash
curl -X POST https://your-server.com/gpt \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      { "role": "system", "content": "Ты — UX Copilot. Определи блоки интерфейса." },
      { "role": "user", "content": "Хочу личный кабинет с профилем, статистикой и меню." }
    ]
  }'
