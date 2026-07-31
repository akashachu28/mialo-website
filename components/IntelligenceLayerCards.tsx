'use client'
import { Layers, Blocks, UserCheck, Server, Shield } from "lucide-react";

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
  {
    id: "05",
    icon: Shield,
    title: "Security & Compliance",
    description: "Built with enterprise-grade security, privacy controls, and regulatory compliance standards.",
  },
];

export default function IntelligenceLayerCards() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.slice(0, 4).map((card) => (
          <div
            key={card.id}
            className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-[18px] p-8 flex flex-col h-full hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-200 group"
          >
            {/* Icon and Number */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-200">
                <card.icon size={24} className="text-blue-400" strokeWidth={1.5} />
              </div>
              <span className="text-slate-600 text-sm font-medium">{card.id}</span>
            </div>

            {/* Title */}
            <h3 className="text-white text-[21px] font-semibold mb-4 leading-tight">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-[16px] leading-relaxed flex-grow">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}