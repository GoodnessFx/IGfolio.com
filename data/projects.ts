export interface Project {
  name: string;
  gradient: string;
  desc: string;
  tags: string[];
  section: "website" | "web3" | "other";
  githubUrl?: string;
  liveUrl?: string;
  chains?: string[];
}

export const websiteProjects: Project[] = [
  {
    name: "Goodman & Goldsmith",
    gradient: "linear-gradient(135deg, #3b2f24 0%, #15110d 100%)",
    desc: "Procurement and engineering company website built to present services clearly, strengthen credibility, and drive direct enquiries from prospects.",
    tags: ["React", "JavaScript", "CSS", "Vercel"],
    liveUrl: "https://www.goodmanandgoldsmith.com/",
    section: "website",
  },
  {
    name: "Sahn Plumbing",
    gradient: "linear-gradient(135deg, #0d3b66 0%, #071a2c 100%)",
    desc: "Service business website focused on fast contact, trust-building messaging, and a strong responsive experience for homeowners and commercial clients.",
    tags: ["React", "Vite", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/GoodnessFx/Sah-Dams-Plumbing-Solution",
    liveUrl: "https://sah-dams-plumbing-solution.vercel.app/",
    section: "website",
  },
  {
    name: "Jeshub International Ltd",
    gradient: "linear-gradient(135deg, #3b1d5a 0%, #12081d 100%)",
    desc: "Corporate business website built for a stronger digital presence, clearer service communication, and a polished modern frontend.",
    tags: ["React", "Vite", "Tailwind CSS", "TanStack Start"],
    githubUrl: "https://github.com/GoodnessFx/Jeshub-International-Ltd",
    liveUrl: "https://jeshub-international-ltd-rq76.vercel.app/",
    section: "website",
  },
  {
    name: "Export Trade Africa",
    gradient: "linear-gradient(135deg, #114b3a 0%, #081710 100%)",
    desc: "Trade-focused website for presenting services, opportunities, and export-related information in a clean, accessible layout.",
    tags: ["React", "Vite", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/GoodnessFx/Export-trade",
    liveUrl: "https://export-trade-pi.vercel.app/",
    section: "website",
  },
  {
    name: "Molecular Consultancy",
    gradient: "linear-gradient(135deg, #2d3142 0%, #0d1020 100%)",
    desc: "Consultancy website designed to communicate expertise, organize service information, and support professional lead generation.",
    tags: ["React", "Vite", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/GoodnessFx/Molecular-Consultancy",
    liveUrl: "https://molecular-consultancy.vercel.app/",
    section: "website",
  },
  {
    name: "FastiDent Dental Website",
    gradient: "linear-gradient(135deg, #0b4f6c 0%, #051c26 100%)",
    desc: "Healthcare website with a cleaner user journey, responsive layout, and clearer presentation of services and appointments.",
    tags: ["React", "Vite", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/GoodnessFx/FastiDent-Dental-Website",
    liveUrl: "https://fasti-dent-dental-website.vercel.app/",
    section: "website",
  },
  {
    name: "365 Fashion for Africa",
    gradient: "linear-gradient(135deg, #5c3520 0%, #1b0f08 100%)",
    desc: "Luxury fashion brand website built to showcase products, brand identity, and a premium visual experience online.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/GoodnessFx/365-Fashion-for-Africa-",
    liveUrl: "https://365-fashion-for-africa-psi.vercel.app/",
    section: "website",
  },
  {
    name: "IGfolio",
    gradient: "linear-gradient(135deg, #101828 0%, #05070d 100%)",
    desc: "My portfolio site, designed to present work with a modern editorial feel, smooth motion, and a strong emphasis on clarity.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://i-gfolio-com.vercel.app/",
    githubUrl: "https://github.com/GoodnessFx/IGfolio.com",
    section: "website",
  },
];

export const web3Projects: Project[] = [
  {
    name: "K9",
    gradient: "linear-gradient(135deg, #0d2040 0%, #060e1a 100%)",
    desc: "AI-powered on-chain intelligence platform for contract scanning, rug-pull detection, and signal discovery.",
    tags: ["React", "Viem", "TanStack Query", "Framer Motion"],
    githubUrl: "https://github.com/GoodnessFx/K9",
    liveUrl: "https://k9-91b4.vercel.app/",
    section: "web3",
    chains: ["Ethereum", "Base"],
  },
  {
    name: "GatePass",
    gradient: "linear-gradient(135deg, #0d3d2e 0%, #091a14 100%)",
    desc: "Decentralized NFT ticketing product with on-chain access control, wallet-based flows, and flexible payment rails.",
    tags: ["Solidity", "ERC-721", "React", "Paystack", "WalletConnect"],
    githubUrl: "https://github.com/GoodnessFx/GatePass",
    liveUrl: "https://gate-pass-sric.vercel.app/",
    section: "web3",
    chains: ["Ethereum", "Polygon"],
  },
  {
    name: "VIBRANIUM",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #0a0a0a 100%)",
    desc: "Autonomous smart contract guardian that monitors for exploits and helps pause vulnerable protocol behavior in real time.",
    tags: ["Solidity", "Next.js 14", "GPT-4o", "BullMQ", "Prisma"],
    githubUrl: "https://github.com/GoodnessFx/VIBRRANIUM",
    section: "web3",
    chains: ["Ethereum", "Base", "Arbitrum", "Polygon", "BSC"],
  },
  {
    name: "TrustCore",
    gradient: "linear-gradient(135deg, #4a1535 0%, #1a0a1a 100%)",
    desc: "Cross-industry smart contract escrow platform with verification workflows, AI-assisted validation, and strong trust guarantees.",
    tags: ["Solidity", "ZK", "React", "Supabase", "Hono"],
    githubUrl: "https://github.com/GoodnessFx/TrustCore",
    section: "web3",
    chains: ["Ethereum", "Polygon", "Base", "Arbitrum", "Optimism", "Avalanche"],
  },
  {
    name: "AnyPay",
    gradient: "linear-gradient(135deg, #2d1f08 0%, #120d04 100%)",
    desc: "Universal value routing concept bridging fiat, crypto, airtime, and mobile money for cross-border payment experiences.",
    tags: ["React", "Solidity", "Escrow", "Offline-First"],
    githubUrl: "https://github.com/GoodnessFx/AnyPay",
    section: "web3",
    chains: ["Polygon", "Celo"],
  },
  {
    name: "UpNext",
    gradient: "linear-gradient(135deg, #1a0d35 0%, #0a0618 100%)",
    desc: "Tokenized talent investment platform built around revenue-share NFT contracts and product-level participation mechanics.",
    tags: ["Solidity", "Polygon", "React", "AI Scoring"],
    githubUrl: "https://github.com/GoodnessFx/UpNext",
    section: "web3",
    chains: ["Polygon"],
  },
  {
    name: "Protocolpedia",
    gradient: "linear-gradient(135deg, #063030 0%, #021414 100%)",
    desc: "Interactive EVM learning hub for protocol architecture mapping, audit-contest tracking, and ecosystem education.",
    tags: ["React 18", "TypeScript", "OpenAI API", "Claude API"],
    githubUrl: "https://github.com/GoodnessFx/Protocolpedia",
    section: "web3",
    chains: ["Ethereum", "Polygon", "Base", "Arbitrum"],
  },
];

export const otherProjects: Project[] = [
  {
    name: "SHERLOCK",
    gradient: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    desc: "Multi-agent AI system for market prediction using Bayesian updating and real-time signal processing workflows.",
    tags: ["LangGraph", "Claude 3.5", "ChromaDB", "Three.js"],
    githubUrl: "https://github.com/GoodnessFx/SHERLOCK",
    section: "other",
  },
  {
    name: "Mr. Money",
    gradient: "linear-gradient(135deg, #064e3b 0%, #022c22 100%)",
    desc: "Institutional-style AI trading system using computer-use tooling for chart analysis and execution support.",
    tags: ["Claude API", "Playwright", "OANDA", "Bayesian Math"],
    githubUrl: "https://github.com/GoodnessFx/Mr-Money",
    section: "other",
  },
  {
    name: "LockIn",
    gradient: "linear-gradient(135deg, #0a1535 0%, #040810 100%)",
    desc: "AI-adaptive mobile growth and accountability product with dynamic curriculum generation and habit support.",
    tags: ["React Native", "Expo", "OpenAI API"],
    githubUrl: "https://github.com/GoodnessFx/LockInWeb",
    section: "other",
  },
  {
    name: "KAI Finance POC",
    gradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
    desc: "Security research and proof-of-concept exploit work for the KAI Finance yield protocol on Sui.",
    tags: ["Move", "Sui", "Security Research", "POC"],
    githubUrl: "https://github.com/GoodnessFx/KAI-FINANCE-POC",
    section: "other",
  },
];

export const projects: Project[] = [...websiteProjects, ...web3Projects, ...otherProjects];
