# 🧠 Multi-Modal AI Agent

This project is a full-stack implementation of a **multi-modal AI assistant** built with:

- **Next.js 14** (App Router, TypeScript)
- **GPT-4o** for text + vision reasoning
- **LangChain** for agent logic and tool execution
- **Whisper API** for voice transcription
- **Redis + BullMQ** for queueing and background workers
- **Prometheus + Winston** for observability
- **Adaptive cost control**, multi-agent architecture, and token usage tracking

## ✨ Features

- 🔁 **Autonomous Agent Loop** – Think, plan, act pattern
- 🤖 **Multi-Agent Support** – SalesBot, SupportBot, etc. from same backend
- 🎤 **Voice & Vision Inputs** – Whisper + OpenAI Vision API
- 📦 **Async Processing** – BullMQ-based job queue
- 💰 **Cost Monitoring** – Token tracking and adaptive GPT model fallback
- 📈 **Prometheus Metrics** – Token usage, job count, system health
- 🔔 **Alerting** – Slack/Discord webhook alerts on failures
- 🚀 **Deployment Ready** – Vercel + Railway compatible

## 🧱 Project Structure

```structure
/src
  /app            → Next.js routes
  /components     → Reusable UI elements
  /agents         → Multi-agent logic (support, sales, etc.)
  /services       → LangChain, OpenAI, Redis, worker logic
  /workers        → BullMQ background worker
  /queue          → BullMQ queue setup
  /utils          → Token tracker, logger, alert system
  /metrics        → Prometheus config
/scripts          → CLI tools like token usage report
```

## 🛠️ Setup

```bash
pnpm install
pnpm dev
```

Configure `.env.local`:

```env
OPENAI_API_KEY=sk-xxx
NEXT_PUBLIC_OPENAI_MODEL=gpt-4o
WHISPER_API_KEY=sk-xxx
REDIS_URL=redis://default:yourpassword@host:port
ALERT_WEBHOOK_URL=https://hooks.slack.com/services/XXX
```

Start the worker:

```bash
npx ts-node workerRunner.ts
```

## 📊 Monitoring

- Visit `/api/metrics` for Prometheus scraping
- Ping `/api/health` for uptime monitoring
- Check `token-logs.json` or run CLI: `ts-node scripts/usageReport.ts`

## 📚 Roadmap

- [ ] Integrate LangGraph or ReAct for planning loops
- [ ] Deploy via Vercel/Render full stack
- [ ] Add frontend UI for each agent
- [ ] Slack/Telegram integrations

## 🧠 Built by Darshan Chobarkar

Open to contributions, suggestions, and future collaborations!

GitHub: [@dchobarkar](https://github.com/dchobarkar)  
LinkedIn: [dchobarkar](https://www.linkedin.com/in/dchobarkar/)
