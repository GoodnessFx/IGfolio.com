export interface Project {
  name: string;
  gradient: string;
  desc: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  chains?: string[]; // Added to track chains for dynamic stats
}

export const projects: Project[] = [
  // HIGH IMPORTANCE - TOP TIER
  {
    name: "SHERLOCK",
    gradient: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    desc: "Multi-agent AI for market prediction via Bayesian updating and real-time signal processing.",
    tags: ["LangGraph", "Claude 3.5", "ChromaDB", "Three.js"],
    githubUrl: "https://github.com/GoodnessFx/SHERLOCK",
  },
  {
    name: "VIBRANIUM",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #0a0a0a 100%)",
    desc: "Autonomous smart contract guardian. Detects exploits in real-time and pauses vulnerable protocols.",
    tags: ["Next.js 14", "Solidity", "GPT-4o", "BullMQ", "Prisma"],
    githubUrl: "https://github.com/GoodnessFx/VIBRRANIUM",
    chains: ["Ethereum", "Base", "Arbitrum", "Polygon", "BSC"],
  },
  {
    name: "Mr. Money",
    gradient: "linear-gradient(135deg, #064e3b 0%, #022c22 100%)",
    desc: "Institutional-grade AI trading system using Claude Computer Use API for visual chart analysis.",
    tags: ["Claude API", "Playwright", "OANDA", "Bayesian Math"],
    githubUrl: "https://github.com/GoodnessFx/Mr-Money",
  },
  {
    name: "SHIPR",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)",
    desc: "Zero-backend engine that transforms natural language into production-ready Node.js backends.",
    tags: ["Next.js 15", "Railway", "GPT-4o", "Prisma"],
    githubUrl: "https://github.com/GoodnessFx/Shipr",
  },
  {
    name: "GHOST",
    gradient: "linear-gradient(135deg, #111827 0%, #030712 100%)",
    desc: "Autonomous B2B sales agent that prospects, qualifies, and books meetings 24/7.",
    tags: ["Next.js 14", "Playwright", "Clerk", "BullMQ"],
    githubUrl: "https://github.com/GoodnessFx/Ghost",
  },
  {
    name: "FOUND",
    gradient: "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
    desc: "AI outreach agent for developers. Hunts for roles in your stack and sends personalized outreach.",
    tags: ["Next.js 14", "GPT-4o", "BullMQ", "Playwright"],
    githubUrl: "https://github.com/GoodnessFx/Found",
  },
  {
    name: "TrustCore",
    gradient: "linear-gradient(135deg, #4a1535 0%, #1a0a1a 100%)",
    desc: "Universal smart contract escrow with ZK verification and AI proof validation across 6 industries.",
    tags: ["Solidity", "ZK", "React", "Supabase", "Hono"],
    githubUrl: "https://github.com/GoodnessFx/TrustCore",
    chains: ["Ethereum", "Polygon", "Base", "Arbitrum", "Optimism", "Avalanche"],
  },
  {
    name: "GatePass",
    gradient: "linear-gradient(135deg, #0d3d2e 0%, #091a14 100%)",
    desc: "Decentralized NFT ticketing with on-chain access control and multi-currency payment rails.",
    tags: ["Solidity", "ERC-721", "React", "Paystack", "WalletConnect"],
    githubUrl: "https://github.com/GoodnessFx/GatePass",
    liveUrl: "https://gate-pass-sric.vercel.app/",
    chains: ["Ethereum", "Polygon"],
  },
  {
    name: "K9",
    gradient: "linear-gradient(135deg, #0d2040 0%, #060e1a 100%)",
    desc: "AI on-chain intelligence — contract security scanner with rug-pull detection and alpha trading signals.",
    tags: ["React", "Viem", "TanStack Query", "Framer Motion"],
    githubUrl: "https://github.com/GoodnessFx/K9",
    liveUrl: "https://k9-91b4.vercel.app/",
    chains: ["Ethereum", "Base"],
  },
  {
    name: "KAI Finance POC",
    gradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
    desc: "Security research and Proof of Concept exploits for KAI Finance Yield Protocol on Sui.",
    tags: ["Move", "Sui", "Security Research", "POC"],
    githubUrl: "https://github.com/GoodnessFx/KAI-FINANCE-POC",
  },

  // MEDIUM IMPORTANCE
  {
    name: "AnyPay",
    gradient: "linear-gradient(135deg, #2d1f08 0%, #120d04 100%)",
    desc: "Universal value router bridging fiat, crypto, airtime, and mobile money across Africa and Asia.",
    tags: ["React", "Solidity", "Escrow", "Offline-First"],
    githubUrl: "https://github.com/GoodnessFx/AnyPay",
    chains: ["Polygon", "Celo"],
  },
  {
    name: "UpNext",
    gradient: "linear-gradient(135deg, #1a0d35 0%, #0a0618 100%)",
    desc: "Tokenized talent investment platform with revenue-share NFT contracts on Polygon.",
    tags: ["Solidity", "Polygon", "React", "AI Scoring"],
    githubUrl: "https://github.com/GoodnessFx/UpNext",
    chains: ["Polygon"],
  },
  {
    name: "Protocolpedia",
    gradient: "linear-gradient(135deg, #063030 0%, #021414 100%)",
    desc: "Interactive EVM learning hub with protocol architecture maps and audit contest tracking.",
    tags: ["React 18", "TypeScript", "OpenAI API", "Claude API"],
    githubUrl: "https://github.com/GoodnessFx/Protocolpedia",
    chains: ["Ethereum", "Polygon", "Base", "Arbitrum"],
  },
  {
    name: "Oya",
    gradient: "linear-gradient(135deg, #1a2a3a 0%, #0a141a 100%)",
    desc: "WhatsApp AI Assistant — production-ready agent built with Node.js, TypeScript, and Claude API.",
    tags: ["Node.js", "TypeScript", "Claude API", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/GoodnessFx/Oya",
  },
  {
    name: "Nostalgia",
    gradient: "linear-gradient(135deg, #78350f 0%, #451a03 100%)",
    desc: "AI-powered web editor for cinematic photo and video grading using 3D LUT generation.",
    tags: ["Expo", "FFmpeg", "Node.js", "LUT"],
    githubUrl: "https://github.com/GoodnessFx/Nostalgia",
  },
  {
    name: "LyricFlow",
    gradient: "linear-gradient(135deg, #831843 0%, #500724 100%)",
    desc: "Seamless music streaming and lyric synchronization platform.",
    tags: ["React", "Tailwind", "Audio API"],
    githubUrl: "https://github.com/GoodnessFx/LyricFlow",
  },

  // UTILITY / FOUNDATION
  {
    name: "LockIn",
    gradient: "linear-gradient(135deg, #0a1535 0%, #040810 100%)",
    desc: "AI-adaptive 97-day mobile growth and accountability app with curriculum generation.",
    tags: ["React Native", "Expo", "OpenAI API"],
    githubUrl: "https://github.com/GoodnessFx/LockInWeb",
  },
  {
    name: "Ruguard",
    gradient: "linear-gradient(135deg, #1a2a3a 0%, #0a141a 100%)",
    desc: "Security and risk management intelligence suite.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/Ruguard",
    chains: ["Ethereum", "Base"],
  },
  {
    name: "Agbede Foundation",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 100%)",
    desc: "Official platform for Professor R.I.S Agbede Foundation, managing programs and impact.",
    tags: ["React", "Vite", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/Professor-R.I.S-Agbede-Foundation",
  },
  {
    name: "G&G Procurement Service",
    gradient: "linear-gradient(135deg, #2a2a2a 0%, #121212 100%)",
    desc: "Leading procurement firm delivering strategic solutions and business development.",
    tags: ["React", "Tailwind", "Netlify"],
  },
  {
    name: "OffGrid",
    gradient: "linear-gradient(135deg, #1a3a2a 0%, #0a1a12 100%)",
    desc: "Decentralized systems and offline-first demos.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/OffSend",
    chains: ["Ethereum", "Polygon", "Base"],
  },
  {
    name: "Dapplify",
    gradient: "linear-gradient(135deg, #3a0a3a 0%, #1a041a 100%)",
    desc: "Dapp interface patterns and libraries.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/DApplify",
    chains: ["Ethereum", "Polygon", "Arbitrum"],
  },
  {
    name: "Recall",
    gradient: "linear-gradient(135deg, #0a3a2a 0%, #041a12 100%)",
    desc: "Knowledge recall and spaced repetition demo.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/Recall",
  },
];
