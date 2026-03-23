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
    name: "G&G Procurement Service",
    gradient: "linear-gradient(135deg, #2a2a2a 0%, #121212 100%)",
    desc: "Leading procurement firm delivering strategic solutions, business development, and learning & development...",
    tags: ["React", "Tailwind", "Netlify"],
  },
  {
    name: "LockIn Web",
    gradient: "linear-gradient(135deg, #3a2a0a 0%, #1a1404 100%)",
    desc: "Platform for disciplined growth with focus tracking and analytics.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/LockInWeb",
  },
  {
    name: "Tersor Concept",
    gradient: "linear-gradient(135deg, #2a1a3a 0%, #120d1a 100%)",
    desc: "Concept site showcasing innovative product design and branding.",
    tags: ["React", "Tailwind"],
  },
  {
    name: "LinkUp",
    gradient: "linear-gradient(135deg, #1a1a3a 0%, #0a0a1a 100%)",
    desc: "Social directory and connection hub.",
    tags: ["React", "Tailwind"],
  },
  {
    name: "Easy Build",
    gradient: "linear-gradient(135deg, #3a1a0a 0%, #1a0d04 100%)",
    desc: "Quick scaffolding and build workflow demos.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/EasyBuild",
  },
  {
    name: "SellForce",
    gradient: "linear-gradient(135deg, #0a2a3a 0%, #04141a 100%)",
    desc: "Sales enablement and pipeline visualizations.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/SELLFORCE",
  },
  {
    name: "GlowUp",
    gradient: "linear-gradient(135deg, #2a0a3a 0%, #12041a 100%)",
    desc: "Brand elevation and UI polish demos.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/GoodnessFx/GlowUp",
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
  {
    name: "Oya",
    gradient: "linear-gradient(135deg, #1a2a3a 0%, #0a141a 100%)",
    desc: "WhatsApp AI Assistant — production-ready agent built with Node.js, TypeScript, and Claude API.",
    tags: ["Node.js", "TypeScript", "Claude API", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/GoodnessFx/Oya",
  },
];
