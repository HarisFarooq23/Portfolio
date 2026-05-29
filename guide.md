Run locally (PowerShell)
Directory (always use the repo root):

c:\Users\HP\Downloads\portfolio\HarisFarooq
First time only — install dependencies:

cd c:\Users\HP\Downloads\portfolio\HarisFarooq
pnpm install
Start the site (required env vars: PORT and BASE_PATH):

cd c:\Users\HP\Downloads\portfolio\HarisFarooq
$env:PORT="5173"
$env:BASE_PATH="/"
pnpm --filter @workspace/portfolio run dev
Open http://localhost:5173/ in your browser.

Stop the server with Ctrl+C.

Prerequisites: Node.js (you have v22) and pnpm (npm install -g pnpm if needed).

Deploy to Vercel
This is a pnpm monorepo; the site lives in artifacts/portfolio and builds to artifacts/portfolio/dist/public.

Option A — Vercel website (recommended)
Push the repo to GitHub (or GitLab/Bitbucket).
Go to vercel.com → Add New Project → import the repo.
Use these project settings:
Setting	Value
Framework Preset
Vite (or Other)
Root Directory
. (repo root)
Install Command
pnpm install
Build Command
pnpm --filter @workspace/portfolio run build
Output Directory
artifacts/portfolio/dist/public
Environment variables (Project → Settings → Environment Variables):
Name	Value
PORT
5173 (any valid port; Vite reads it at build time)
BASE_PATH
/
Deploy. Vercel will build and host the static files.

Client-side routing (wouter): add a rewrite so all paths serve index.html:

Project → Settings → Redirects → add:
Source: /(.*)
Destination: /index.html
Or add a vercel.json at the repo root:
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
Option B — Vercel CLI
cd c:\Users\HP\Downloads\portfolio\HarisFarooq
npm i -g vercel
vercel login
vercel
Follow the prompts; set the same build/output paths and env vars as in the table above.

Quick reference
Task	Directory	Command
Install
c:\Users\HP\Downloads\portfolio\HarisFarooq
pnpm install
Dev server
Same
$env:PORT="5173"; $env:BASE_PATH="/"; pnpm --filter @workspace/portfolio run dev
Production build
Same
$env:PORT="5173"; $env:BASE_PATH="/"; pnpm --filter @workspace/portfolio run build