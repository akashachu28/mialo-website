'use client'
import { Target, Key, Crosshair, TrendingUp, RefreshCw, ArrowRight, Server, Shield, UserCheck, Blocks, Layers } from "lucide-react";
import { Reveal, RevealItem } from "./animations";

const CARDS = [
  {
    id: "01",
    icon: Layers,
    title: "Intelligence Components",
    description: "Composable building blocks for sensing, reasoning and orchestration across any operational system.",
  },
  {
    id: "02",
    icon: Blocks,
    title: "Industry Accelerators",
    description: "Pre-built models and workflows that encode the operational patterns of your sector.",
  },
  {
    id: "03",
    icon: UserCheck,
    title: "Hybrid Intelligence",
    description: "Machine reasoning paired with human judgment, keeping experts in control of critical calls.",
  },
  {
    id: "04",
    icon: Server,
    title: "Enterprise Deployment",
    description: "Runs securely in your environment with the governance and controls your teams require.",
  },
  // {
  //   id: "05",
  //   icon: Shield,
  //   title: "Security & Compliance",
  //   description: "Built with enterprise-grade security, privacy controls, and regulatory compliance standards.",
  // },
];

export default function OperationalCards() {
  return (
    <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
      {CARDS.map((card) => (
        <RevealItem
          key={card.id}
          lift
          className="relative group h-full"
        >
          {/* Outer glow effect */}
          <div 
            className="absolute inset-0 bg-ice/50 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              clipPath: 'polygon(0 45px, 45px 0, 100% 0, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0 100%)'
            }}
          />
          
          {/* Card with custom clip-path border shape */}
          <div 
            className="relative h-full bg-gradient-to-br from-gray-900 via-gray-900/90 to-gray-900/75 backdrop-blur-md border border-blue-500/30 transition-all duration-300 group-hover:border-blue-400/60 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden"
            style={{
              clipPath: 'polygon(0 45px, 45px 0, 100% 0, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0 100%)'
            }}
          >
            {/* Glassy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-ice/10 via-transparent to-ice/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ice/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan transition-opacity duration-300" />
            
            {/* Card content */}
            <div className="relative p-[22px] h-full flex flex-col">
              {/* Header with number and arrow */}
              <div className="flex items-start justify-between mb-[18px]">
                {/* <span className="text-pista text-sm font-bold tracking-wider drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">{card.id}</span> */}
                {/* <ArrowRight 
                  size={18} 
                  className="text-pista group-hover:text-pista/80 group-hover:translate-x-1 transition-all duration-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" 
                /> */}
              </div>

              {/* Icon */}
              <div className="mb-[18px]">
                <card.icon 
                  size={30} 
                  className="text-pista group-hover:text-pista/40 transition-all duration-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-base font-semibold mb-[18px] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
            
            {/* Bottom accent lines with glow */}
            <div className="absolute bottom-0 left-0 flex gap-1.5 p-4">
              <div className="w-3 h-0.5 bg-pista shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <div className="w-3 h-0.5 bg-pista shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <div className="w-3 h-0.5 bg-pista shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <div className="w-3 h-0.5 bg-pista shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            </div>

            {/* Corner accent on top-left cut */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-blue-400/40 group-hover:border-blue-400/70 transition-all duration-300" 
                 style={{ clipPath: 'polygon(0 45px, 45px 0, 45px 2px, 2px 45px, 0 45px)' }} />
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}