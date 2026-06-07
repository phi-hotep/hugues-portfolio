# Hugues Bomokin — Portfolio

Personal portfolio website built with Next.js, static JSON data, deployed to Cloudflare Pages.

## Tech Stack

- **Framework**: Next.js 15 (static export)
- **Styling**: CSS variables + Tailwind CSS
- **Fonts**: Syne (display) + DM Mono
- **Data**: Local JSON files in `/data`
- **Deployment**: Cloudflare Pages

## Local Setup

### Prerequisites
- Node.js v18+
- npm

### Install & Run

```bash
# Clone your repo
git clone https://github.com/YOUR_USERNAME/hugues-portfolio.git
cd hugues-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Updating Your Portfolio

### Add a new project
Edit `data/projects.json` and add a new object:

```json
{
  "id": "my-new-project",
  "title": "Project Title",
  "description": "What you built and why.",
  "domain": "automation-ai",
  "tags": ["Python", "API"],
  "type": "code",
  "outcome": "One-line impact statement",
  "thumbnail": "/images/my-project.png",
  "repo": "https://github.com/...",
  "featured": false
}
```

**Domain options**: `automation-ai` | `flutter` | `n8n`  
**Type options**: `code` | `workflow` | `case-study`

Push to GitHub → Cloudflare auto-deploys in ~30 seconds.

### Update your profile
Edit `data/profile.json` — name, bio, email, social links.

### Add a photo
Drop your photo at `public/images/profile.jpg`.

## Cloudflare Pages Deployment

### First-time setup

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**
3. Connect your GitHub account and select this repo
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Click **Save and Deploy**

Every `git push` to `main` triggers an automatic redeploy.

### Build command (manual)

```bash
npm run build
# Output is in /out folder
```

## Project Structure

```
hugues-portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles + CSS variables
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Domains.tsx
│   ├── Projects.tsx     # Filterable project grid
│   └── Contact.tsx
├── data/
│   ├── profile.json     # Your info
│   ├── domains.json     # Three domains
│   └── projects.json    # All projects
└── public/
    └── images/          # Project thumbnails + profile photo
```
