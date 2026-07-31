'use client'
import { Building2, Factory, Zap, Heart, Truck, Shield, ArrowRight } from "lucide-react";

const SECTORS = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Continuous oversight across risk, compliance, fraud and settlement operations.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Detect anomalies, protect uptime and orchestrate the line before issues cascade.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Balance load, predict failures and act on grid signals in real time.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Coordinate capacity, resources and care pathways with situational intelligence.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Sense disruption early and re-route operations to protect service levels.",
  },
  {
    icon: Shield,
    title: "Public Sector",
    description: "Turn fragmented operational data into accountable, auditable action.",
  },
];

export default function SectorCards() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {SECTORS.map((sector, index) => (
          <div
            key={index}
            className="relative group h-full"
          >
            {/* Outer glow effect */}
            <div 
              className="absolute inset-0 bg-blue-500/5 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                clipPath: 'polygon(0 45px, 45px 0, 100% 0, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0 100%)'
              }}
            />
            
            {/* Card with custom clip-path border shape */}
            <div 
              className="relative h-full bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40 backdrop-blur-md border border-blue-500/30 transition-all duration-300 group-hover:border-blue-400/60 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden"
              style={{
                clipPath: 'polygon(0 45px, 45px 0, 100% 0, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0 100%)'
              }}
            >
              {/* Glassy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              
              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card content */}
              <div className="relative p-[28px] h-full flex flex-col">
                {/* Header with icon and arrow */}
                <div className="flex items-start justify-between mb-[18px]">
                  <sector.icon 
                    size={32} 
                    className="text-blue-300/70 group-hover:text-blue-300 transition-all duration-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]" 
                    strokeWidth={1.5} 
                  />
                  <ArrowRight 
                    size={20} 
                    className="text-blue-400/60 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-[23px] font-semibold mb-[18px] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-[16px] leading-relaxed flex-grow">
                  {sector.description}
                </p>
              </div>

              {/* Corner accent on top-left cut */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-blue-400/40 group-hover:border-blue-400/70 transition-all duration-300" 
                   style={{ clipPath: 'polygon(0 45px, 45px 0, 45px 2px, 2px 45px, 0 45px)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}