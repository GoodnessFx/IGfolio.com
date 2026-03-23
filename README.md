# IGFOLIO — Smart Contract Engineer Portfolio

An elite, production-ready Web3 portfolio built with React 18, Vite, and Tailwind CSS v4. Designed for Goodness Iyamah (IG), specializing in Smart Contract Engineering, DeFi protocols, and full-stack Web3 development.

## 🚀 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4 (Native CSS-first theme configuration)
- **Animations:** Framer Motion (Scroll reveals, staggered entries, character-split headlines)
- **Icons:** Lucide React + Custom SVG Brand Icons (𝕏, etc.)
- **Fonts:** Space Grotesk (Headlines), DM Sans (Body), JetBrains Mono (Terminal/Code)
- **Form Handling:** AJAX-based contact form (formsubmit.co) with zero redirects

## 📂 Project Structure

```text
├── components/
│   ├── ui/                # Shared UI primitives (shadcn-inspired)
│   ├── About.tsx          # Professional bio & image card
│   ├── Competencies.tsx   # Terminal-style technical panel grid
│   ├── Contact.tsx        # AJAX-powered contact form
│   ├── Footer.tsx         # Minimal footer with dynamic year
│   ├── Hero.tsx           # Headline, dynamic stats & CTA
│   ├── Navigation.tsx     # Sticky glassmorphism header
│   ├── Projects.tsx       # Multi-grid project showcase
│   ├── Skills.tsx         # Categorized technical stack
│   └── Splash.tsx         # Terminal-style boot loader
├── data/
│   └── projects.ts        # Centralized source of truth for all projects
├── public/
│   └── images/            # Assets (ig.png, etc.)
├── App.tsx                # Application shell with splash logic
├── index.css              # Tailwind v4 theme & global utilities
└── main.tsx               # React entry point
```

## ✨ Core Features

### 1. Dynamic Stat Engine
The Hero section features a dynamic counting engine that calculates real-time stats (Projects Shipped, Chains Deployed) directly from the project data array.

### 2. Terminal Aesthetic
Incorporates a "Security-First" aesthetic using terminal-style cards and code-inspired typography, reflecting a deep focus on protocol security and formal verification.

### 3. Smooth Transitions
Utilizes Framer Motion for high-end scroll animations, staggered grid entry points, and a seamless splash screen transition.

### 4. Optimized Asset Management
Centralized project data allows for easy updates across the site, ensuring that new deployments are reflected immediately in both the stats and the showcase.

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GoodnessFx/IGfolio.com.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📄 License
© 2026 Goodness Iyamah. All rights reserved.
