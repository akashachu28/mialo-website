'use client'
import { motion } from "framer-motion";
import { Video, Mic, FileText, Radio, Database, Settings, Sparkles, Target, CheckCircle, Workflow, Users, ArrowRight, Eye, AstroidIcon, BrainCircuit, Astroid } from "lucide-react";

const OPERATIONAL_SIGNALS = [
  { icon: Video, label: "Cameras" },
  { icon: Mic, label: "Voice" },
  { icon: FileText, label: "Documents" },
  { icon: Radio, label: "Sensors" },
  { icon: Database, label: "Systems" },
  { icon: Settings, label: "Edge" },
];

const BUSINESS_ACTIONS = [
  { icon: Sparkles, label: "Insights" },
  { icon: Target, label: "Decisions" },
  { icon: CheckCircle, label: "Automation" },
  { icon: Users, label: "Workflows" },
];

const AI_MODELS = [
  { icon: Eye, label: "Vision AI" },
  { icon: AstroidIcon, label: "Voice AI" },
  { icon: FileText, label: "Document AI" },
  { icon: Database, label: "Enterprise Knowledge" },
  { icon: BrainCircuit, label: "Reasoning" },
  { icon: Astroid, label: "Operational Intelligence" },
];

export default function PlatformSection2() {
  return (
    <div className="bg-background px-6 py-20 flex flex-col items-center gap-[80px]">
      {/* First Section - The Intelligence Layer */}
      <div className="w-full max-w-7xl ">
        <div className="grid grid-cols-1 lg:flex gap-16 items-center">
          {/* Left - Text Content */}
          <div className="flex flex-col max-w-[500px] gap-6">
            <p className="font-semibold text-xs text-[#6C93FF] tracking-wider">
              THE INTELLIGENCE LAYER
            </p>
            <h2 
              className="text-[36px] text-primary font-medium leading-[1.08] tracking-[-0.02rem]"
              style={{ fontFamily: 'Boska, serif' }}
            >
              The missing layer between enterprise operations and intelligent action.
            </h2>
            <p className="text-sm leading-[1.55] text-muted">
              Mialo continuously observes operational signals, understands them using specialized AI models and enterprise knowledge, and delivers insights and automated workflows that drive real outcomes.
            </p>
          </div>

          {/* Right - Flow Diagram */}
          <div className="relative">
            <div className="relative z-10 flex items-center justify-between gap-4">
              {/* Operational Signals */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-slate-400 mb-2 font-medium">Operational Signals</p>
                <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-slate-700/30">
                  {OPERATIONAL_SIGNALS.map((signal, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:border-blue-500/30 hover:text-blue-400 transition-all">
                        <signal.icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] text-slate-500 text-center font-medium">{signal.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connecting Line and Pulse (Left) */}
              {/* Connecting Line with Arrow (Left) */}
              <div className="flex-1 max-w-[120px] flex items-center">
                <svg className="flex-1" height="1.5" viewBox="0 0 20 2" preserveAspectRatio="none">
                  <line 
                    x1="0" 
                    y1="1" 
                    x2="100" 
                    y2="1" 
                    stroke="#60A5FA" 
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
                <ArrowRight size={20} className="text-blue-400 flex-shrink-0" strokeWidth={1.5} />
              </div>

              {/* Mialo Intelligence Layer - Central */}
              <div className="relative flex flex-col items-center">
                <p className="text-xs text-slate-400 mb-4 font-medium">Mialo Intelligence Layer</p>
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(96,165,250,0.3)",
                      "0 0 60px rgba(96,165,250,0.5)",
                      "0 0 40px rgba(96,165,250,0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-blue-600/40 border border-blue-400/30 backdrop-blur-md flex items-center justify-center relative"
                >
                  <div className="absolute inset-3 rounded-full bg-slate-900/60 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">mialo</span>
                  </div>
                </motion.div>
              </div>

              {/* Connecting Line with Arrow (Right) */}
              <div className="flex-1 max-w-[120px] flex items-center gap-">
                <svg className="flex-1" height="1.5" viewBox="0 0 20 2" preserveAspectRatio="none">
                  <line 
                    x1="0" 
                    y1="1" 
                    x2="100" 
                    y2="1" 
                    stroke="#60A5FA" 
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
                <ArrowRight size={20} className="text-blue-400 flex-shrink-0" strokeWidth={1.5} />
              </div>

              {/* Business Action */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-slate-400 mb-2 font-medium">Business Action</p>
                <div className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-slate-700/30">
                  {BUSINESS_ACTIONS.map((action, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-slate-400 hover:border-blue-500/30 hover:text-blue-400 transition-all min-w-[140px]"
                    >
                      <action.icon size={18} strokeWidth={1.5} />
                      <span className="text-sm font-medium">{action.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - How Mialo Thinks */}
      <div className="w-full max-w-7xl ">
        <div className="grid grid-cols-1 lg:flex items-center justify-center gap-16">
          {/* Left - Text Content */}
          <div className="flex flex-col gap-6 max-w-[500px] ">
            <p className="font-semibold text-xs text-[#6C93FF] tracking-wider">
              HOW MIALO THINKS
            </p>
            <h2 
              className="text-[36px] text-primary font-medium leading-[1.08] tracking-[-0.02rem]"
              style={{ fontFamily: 'Boska, serif' }}
            >
              Operational intelligence built on specialized AI—not just large language models.
            </h2>
            <p className="text-sm leading-[1.55] text-muted">
              Different operational problems require different forms of intelligence. Mialo orchestrates specialized vision, voice, document and reasoning models together, using LLMs only where they add value.
            </p>
            <button className="flex text-sm items-center gap-2 text-[#6C93FF] hover:text-blue-400 transition-colors w-fit">
              Learn more about our approach <ArrowRight size={16} />
            </button>
          </div>

          {/* Right - AI Models in Single Row with Connecting Line */}
          <div className="relative">
            {/* Animated connecting line using CSS */}
            <div 
              className="absolute top-7 left-[8%] right-[8%] h-px z-0"
              style={{
                background: 'linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.8), rgba(59, 130, 246, 0.3))',
                backgroundSize: '10px 0.5px',
                backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 2px, rgba(96, 165, 250, 0.4) 10px, rgba(96, 165, 250, 0.8) 12px)',
              }}
            />

            {/* Animated pulse - using CSS animation for perfect circle */}
            <motion.div 
              className="absolute top-6 w-2 h-2 rounded-full bg-blue-400 z-0 shadow-[0_20px_10px_rgba(96,165,250,0.8)]"
              animate={{
                left: ['8%', '92%'],
                // opacity: [0.4, 1, 0.4],
              }}
              transition={{
                left: { duration: 8, repeat: Infinity, ease: 'linear' },
                opacity: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
              }}
            />

            <div className="grid  grid-cols-6 gap-2 relative z-10">
              {AI_MODELS.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-2 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border backdrop-blur-2xl border-blue-500/20 flex items-center justify-center text-blue-400">
                    <model.icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="text-xs text-center text-slate-300 font-medium leading-tight">
                    {model.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}