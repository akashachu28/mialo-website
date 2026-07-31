'use client'
import { Target, Key, Crosshair, TrendingUp, RefreshCw, ArrowRight } from "lucide-react";

const CARDS = [
  {
    id: "01",
    icon: Target,
    title: "Operational Signals",
    description: "Sensor, system and human events captured in real time.",
  },
  {
    id: "02",
    icon: Key,
    title: "Operational Intelligence",
    description: "Context, correlation and reasoning across every source.",
  },
  {
    id: "03",
    icon: Crosshair,
    title: "Operational Actions",
    description: "Decisions executed automatically or with a human in the loop.",
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Business Outcomes",
    description: "Measurable impact on cost, risk, speed and revenue.",
  },
  {
    id: "05",
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Every outcome feeds back to sharpen the next decision.",
  },
];

export default function OperationalCards() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[18px]">
        {CARDS.map((card) => (
          <div
            key={card.id}
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 animate-scan transition-opacity duration-300" />
              
              {/* Card content */}
              <div className="relative p-[22px] h-full flex flex-col">
                {/* Header with number and arrow */}
                <div className="flex items-start justify-between mb-[18px]">
                  <span className="text-blue-400 text-base font-bold tracking-wider drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">{card.id}</span>
                  <ArrowRight 
                    size={18} 
                    className="text-blue-400/60 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" 
                  />
                </div>

                {/* Icon */}
                <div className="mb-[18px]">
                  <card.icon 
                    size={36} 
                    className="text-blue-300/70 group-hover:text-blue-300 transition-all duration-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-base font-semibold mb-[18px] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
              
              {/* Bottom accent lines with glow */}
              <div className="absolute bottom-0 left-0 flex gap-1.5 p-4">
                <div className="w-3 h-0.5 bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <div className="w-3 h-0.5 bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <div className="w-3 h-0.5 bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <div className="w-3 h-0.5 bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
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