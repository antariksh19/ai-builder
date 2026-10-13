<div align="center">
  <!-- Replace with an actual GIF of the AI generating a website in real-time -->
  <img src="./public/og-image.png" alt="AI Website Builder Banner" width="100%">

  <h1>AI Website Builder 🤖🚀</h1>

  <p>An intelligent, Next.js-powered platform that automates the generation of responsive, modular website interfaces directly from natural language prompts.</p>

  <h3>🟢 <a href="https://your-live-deployment-link.vercel.app">Live Deployment Available Here</a></h3>
</div>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white" alt="Gemini API" />
</div>

---

## 🖥️ Application Preview

<div align="center">
  <!-- Replace this source with your actual recorded GIF showing a prompt turning into UI -->
  <img src="./public/demo.gif" alt="AI Builder UI Demo" width="800">
</div>

## 🚀 Overview

The AI Website Builder bridges the gap between natural language intent and functional frontend code. By integrating advanced LLM APIs (Gemini/Groq), the application intelligently parses user prompts, orchestrates the required UI components, and dynamically streams a fully responsive layout to the client in real-time.

### ✨ Key Technical Features

* **Dynamic Component Orchestration:** Utilizes a custom `componentMap.ts` to dynamically resolve and render modular React blocks (Hero, Features, Pricing, etc.) based on AI-generated JSON/code structures[cite: 11].
* **Real-Time Code Parsing:** Engineered a custom `generateHtml.tsx` utility engine that securely parses and translates LLM output into sanitized, renderable React/HTML code[cite: 11].
* **Next.js App Router API:** Employs Next.js serverless API routes (`app/api/generate/route.ts`) to securely handle AI prompt processing and stream responses back to the client[cite: 11].
* **Modular UI Architecture:** Built with a scalable, Tailwind-styled component library (`components/blocks/`) that allows the AI to assemble complex pages like Lego bricks[cite: 11].

## 📂 System Architecture

```text
ai-builder/
├── app/
│   ├── api/generate/         # Serverless API routes for LLM prompt processing[cite: 11]
│   ├── layout.tsx            # Next.js root layout[cite: 11]
│   └── page.tsx              # Main application interface[cite: 11]
│
├── components/
│   ├── blocks/               # Modular UI blocks (Hero, Navbar, Pricing, etc.)[cite: 11]
│   ├── componentMap.ts       # Component registry for dynamic AI rendering[cite: 11]
│   └── Skeleton.tsx          # Loading state UI components[cite: 11]
│
├── utils/
│   └── generateHtml.tsx      # Core parsing engine for translating LLM output[cite: 11]
│
├── check-models.js           # Utility script for verifying API model availability[cite: 11]
├── tailwind.config.ts        # Tailwind CSS configuration[cite: 11]
└── tsconfig.json             # TypeScript configuration[cite: 11]
```

## 🛠 System Setup & Local Development

### Prerequisites
* Node.js (v18+)
* npm, yarn, or pnpm
* Valid API Keys for Gemini/Groq

### Installation

**1. Clone the repository:**
```bash
git clone [https://github.com/antariksh19/ai-builder.git](https://github.com/antariksh19/ai-builder.git)
cd ai-builder
```

**2. Install dependencies:**
```bash
npm install
```

**3. Configure Environment Variables:**
Create a `.env.local` file in the root directory and securely add your API keys:
```env
NEXT_PUBLIC_API_KEY=your_gemini_or_groq_api_key_here
```
*(Run `node check-models.js` to verify your API connection and model availability prior to starting the server)[cite: 11].*

**4. Run the development server:**
```bash
npm run dev
```

**5. Open your browser:**
Navigate to `http://localhost:3000` to interact with the builder.

## 📫 Connect

* **LinkedIn:** [Antariksh Mohapatra](https://www.linkedin.com/in/antariksh-mohapatra/)
* **Email:** [antariksh19m@gmail.com](mailto:antariksh19m@gmail.com)
* **GitHub:** [@antariksh19](https://github.com/antariksh19)

## 📄 License
Distributed under the MIT License.
