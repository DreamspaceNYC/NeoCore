# TikTok Viral Studio

A Next.js + Chakra UI web app for automating TikTok repost workflows powered by Codex CLI.

## Getting Started

### Prerequisites

- Node.js >=16
- `codex` CLI installed and configured
- TikTok API credentials (see `.env.example`)

### Installation

```bash
cd tiktok-viral-studio
npm install
cp .env.example .env.local
# Edit .env.local with your TikTok credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checker

## API Endpoints

- `GET /api/trends?limit=<number>` - Fetch trending TikTok clips via Codex CLI.
- `POST /api/go-viral` - Run the super-command: trending → download → watermark → caption → schedule.

## Usage

Use the web UI to configure and trigger the "Go Viral" workflow. Under the hood, API routes invoke Codex CLI commands.