# AI Website Generator 🤖

An intelligent, prompt-to-website generation engine built with Next.js and Llama 3. This application transforms natural language descriptions into fully functional, responsive, and downloadable websites.

## 🔗 Live Demo
[Insert your Vercel URL here]

## ✨ Key Features
- **Natural Language Processing:** Converts prompts (e.g., "A modern portfolio for a photographer") into structured code.
- **Dynamic Theming:** AI automatically generates color palettes (primary, background, text) that match the vibe of the request.
- **Component Architecture:** Assembles sites using modular blocks (Hero, Features, Pricing, Navbar, Footer).
- **Code Export:** One-click download of the generated site as a standalone HTML file.

## 🛠️ Technical Stack
- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS
- **AI Engine:** Llama-3.3-70b-versatile (via Groq API) - *Chosen for sub-second latency and strict JSON adherence.*
- **State Management:** React Hooks (useState)
- **Utilities:** `sonner` (notifications), `lucide-react` (icons)

## 🏗️ System Architecture

### 1. The "Lego" System
Instead of generating raw, unstable HTML, the AI acts as an architect. It outputs a **JSON Schema** that references pre-built, high-quality React components.
- **Input:** "A dark mode crypto landing page"
- **AI Output:** `[ { "type": "Hero", "props": { "title": "Future of Finance"... } } ]`
- **Render Engine:** Maps `type: "Hero"` -> `<HeroComponent />`

### 2. Prompt Engineering Strategy
We utilize a "System Prompt" that enforces:
- **Strict JSON Mode:** To prevent markdown hallucinations.
- **Theme Constraints:** Requiring hex codes for background/text to ensure high contrast.

### 3. API Endpoints
**POST** `/api/generate`
- **Body:** `{ "prompt": "string" }`
- **Response:**
  ```json
  {
    "theme": { "primary": "#3b82f6", "background": "#ffffff", "text": "#000000" },
    "layout": [
       { "type": "Navbar", "props": { ... } },
       { "type": "Hero", "props": { ... } }
    ]
  }
