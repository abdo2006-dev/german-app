# GermanCards — Spaced Repetition German Learning App

A production-ready German learning web app with proper spaced repetition (SM-2 algorithm), grammar lessons (A1–C1), AI-powered speaking topics, and study task management.

## Features

- **SRS Flashcard Review** — SM-2 algorithm with new/learning/review/relearning states, properly interleaved new cards, daily limits
- **Grammar Lessons** — A1 to C1 structured lessons with explanations, examples, and interactive quizzes  
- **Speaking Topics** — AI-generated speaking prompts via Groq, personalized to your learned vocabulary
- **Study Task Manager** — Lightweight to-do list for tracking daily study goals
- **Statistics** — Activity heatmap, streak, accuracy, weak cards, leech detection
- **Import** — Paste tab-separated or comma-separated vocabulary lists

## Quick Start (Local)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import in [Vercel](https://vercel.com) → New Project
3. Add environment variable: `GROQ_API_KEY` (get one at https://console.groq.com)
4. Deploy

The build command is `npm run build` and the output directory is `dist`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | For speaking topics | Your Groq API key — only used server-side, never exposed to the browser |

See `.env.example` for the template.

## Architecture

- **Frontend**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui
- **State**: Zustand with localStorage persistence
- **Routing**: React Router v6
- **API**: Vercel serverless functions (`/api/speaking-topics.ts`)
- **SRS**: SM-2 variant with learning steps, relearning, leech detection

## SRS Algorithm

Cards cycle through four states:
- `new` → first time seen, shown up to the deck's `newCardsPerDay` limit
- `learning` → progressing through learning steps (default: 1 min, 10 min)
- `review` → mature cards with growing intervals
- `relearning` → lapsed review cards working back through lapse steps

New cards are interleaved with due review cards (5 due : 1 new ratio) to keep reviews fresh without front-loading.

Leech detection triggers at 8 lapses by default and marks cards for extra attention.
