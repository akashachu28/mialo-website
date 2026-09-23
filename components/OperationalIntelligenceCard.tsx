/**
 * OperationalIntelligenceCard — Static intelligence flow visualization
 * Shows: Observe → Understand → Decide → Act
 * White theme with ice and pista accent colors
 */

import { Eye, Brain, Zap, Activity, ArrowRight } from "lucide-react";

const INPUTS = [
  { icon: "📹", label: "Camera/CCTV" },
  { icon: "🎤", label: "Voice Input" },
  { icon: "📄", label: "Documents" },
  { icon: "📡", label: "IoT Sensors" },
  { icon: "💼", label: "ERP Systems" },
];

const DECISIONS = [
  { label: "Predict" },
  { label: "Prioritize" },
  { label: "Detect" },
  { label: "Simulate" },
  { label: "Recommend" },
];

const ACTIONS = [
  { label: "Alert" },
  { label: "Notify" },
  { label: "Automate" },
  { label: "Integrate" },
  { label: "Escalate" },
];

export default function OperationalIntelligenceCard() {
  return (
    <div className="relative w-full bg-transparent px-8 py-12 sm:px-12 sm:py-16">
      {/* Square grid background pattern */}
      <div className="absolute inset-0 opacity-[0.2]" style={{
        backgroundImage: `
          linear-gradient(to right, #8DD4CC 1px, transparent 1px),
          linear-gradient(to bottom, #8DD4CC 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px"
      }} />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
        {/* 01 - OBSERVE */}
        <div className="flex flex-col space-y-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ice/10 border border-ice/20">
              <Eye className="w-5 h-5 text-ice" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[9px] font-mono text-ice uppercase tracking-[0.15em] opacity-70">Step 01</div>
              <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight">Observe</h3>
            </div>
          </div>
          
          {/* Items */}
          <div className="space-y-2">
            {INPUTS.map((input, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-gray-200 hover:border-ice/40 hover:bg-ice/5 transition-colors duration-200"
              >
                <span className="text-sm opacity-50 group-hover:opacity-70 transition-opacity">{input.icon}</span>
                <span className="text-xs text-gray-700 group-hover:text-gray-900 font-medium transition-colors">{input.label}</span>
              </div>
            ))}
          </div>
          
          {/* Connection arrow */}
          <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
            <ArrowRight className="w-3.5 h-3.5 text-ice/30" strokeWidth={2} />
          </div>
        </div>

        {/* 02 - UNDERSTAND */}
        <div className="flex flex-col space-y-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ice/10 border border-ice/20">
              <Brain className="w-5 h-5 text-ice" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[9px] font-mono text-ice uppercase tracking-[0.15em] opacity-70">Step 02</div>
              <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight">Understand</h3>
            </div>
          </div>
          
          {/* Central Intelligence Core */}
          <div className="flex-1 flex items-center justify-center py-6">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-ice/10 to-transparent blur-xl animate-pulse" />
              
              {/* Main circle */}
              <div className="relative w-28 h-28 rounded-full border-2 border-ice/30 flex items-center justify-center bg-ice/5">
                {/* Content */}
                <div className="text-center">
                  <div className="text-xl mb-1">🧠</div>
                  <div className="text-[10px] font-semibold text-ice tracking-tight">Intelligence</div>
                  <div className="text-[8px] text-gray-500 mt-0.5 tracking-wide">LAYER</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connection arrow */}
          <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
            <ArrowRight className="w-3.5 h-3.5 text-ice/30" strokeWidth={2} />
          </div>
        </div>

        {/* 03 - DECIDE */}
        <div className="flex flex-col space-y-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ice/10 border border-ice/20">
              <Zap className="w-5 h-5 text-ice" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[9px] font-mono text-ice uppercase tracking-[0.15em] opacity-70">Step 03</div>
              <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight">Decide</h3>
            </div>
          </div>
          
          {/* Items */}
          <div className="space-y-2">
            {DECISIONS.map((decision, idx) => (
              <div
                key={idx}
                className="flex items-center px-3 py-2.5 rounded-lg border border-gray-200 hover:border-ice/40 hover:bg-ice/5 transition-colors duration-200"
              >
                <span className="text-xs text-gray-700 hover:text-gray-900 font-medium transition-colors">{decision.label}</span>
              </div>
            ))}
          </div>
          
          {/* Connection arrow */}
          <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
            <ArrowRight className="w-3.5 h-3.5 text-pista/30" strokeWidth={2} />
          </div>
        </div>

        {/* 04 - ACT */}
        <div className="flex flex-col space-y-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pista/10 border border-pista/30">
              <Activity className="w-5 h-5 text-pista" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[9px] font-mono text-pista uppercase tracking-[0.15em] opacity-70">Step 04</div>
              <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight">Act</h3>
            </div>
          </div>
          
          {/* Items - Output actions with pista accent */}
          <div className="space-y-2">
            {ACTIONS.map((action, idx) => (
              <div
                key={idx}
                className="group flex items-center px-3 py-2.5 rounded-lg bg-pista/5 border border-pista/30 hover:border-pista/50 hover:bg-pista/10 transition-all duration-200"
              >
                <span className="text-xs text-gray-800 group-hover:text-gray-900 font-semibold transition-colors">{action.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
