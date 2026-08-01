'use client'
import { motion } from "framer-motion";
import { Eye, Mic, FileText, Radio, Ruler, Brain, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";

const INTELLIGENCE_DOMAINS = [
  {
    number: "01",
    icon: Eye,
    title: "Vision Intelligence",
    description: "Understand the world through computer vision. Detect, recognize and analyze visual data from cameras and images in real time.",
    image: "/images/visionIntelligence.png",
    stats: [
      { label: "Footfall", value: "2,345" },
    //   { label: "Peak Hour", value: "@ 13:6" },
      { label: "Occupancy", value: "78%" },
      { label: "Active Items", value: "heatmap" },
    ],
    customPanel: true,
  },
  {
    number: "02",
    icon: Mic,
    title: "Voice Intelligence",
    description: "Extract meaning from spoken words. Transcribe, understand and analyze voice conversations and audio signals.",
    image: "/images/voiceIntelligence.png",
    stats: [
      { label: "Intent", value: "Identified" },
      { label: "Sentiment", value: "Positive" },
      { label: "Language", value: "English" },
      { label: "Confidence", value: "92%" },
    ],
    customPanel: "voice",
  },
  {
    number: "03",
    icon: FileText,
    title: "Document Intelligence",
    description: "Digitize and understand documents of any kind. Extract, classify and structure information from unstructured data.",
    image: "/images/documentIntelligence.png",
    stats: [
      { label: "Invoice #", value: "INV-78291" },
      { label: "Date", value: "14 May 2025" },
      { label: "Vendor", value: "TechMart" },
      { label: "Total", value: "$12,400.00" },
    ],
    customPanel: "document",
  },
  {
    number: "04",
    icon: Radio,
    title: "Broadcast Intelligence",
    description: "Monitor and analyze broadcasts and media streams in real time to extract actionable insights at scale.",
    image: "/images/broadcastIntelligence.png",
    stats: [
      { label: "Channels", value: "128" },
      { label: "Alerts", value: "23" },
    //   { label: "Mentions", value: "1,245" },
    ],
    customPanel: "broadcast",
  },
  {
    number: "05",
    icon: Ruler,
    title: "Measurement Intelligence",
    description: "Measure and quantify physical assets and environments using AI-powered measurement models.",
    image: "/images/measurementIntelligence.png",
    stats: [
      { label: "Length", value: "120 cm" },
      { label: "Width", value: "80 cm" },
      { label: "Height", value: "60 cm" },
      { label: "Volume", value: "0.576 m³" },
    ],
    customPanel: "measurement",
  },
  {
    number: "06",
    icon: Brain,
    title: "Enterprise Intelligence",
    description: "Combine enterprise knowledge, context and workflows to deliver intelligent recommendations and automation.",
    image: "/images/enterpriseIntelligence.png",
    stats: [
      { label: "Risk Score", value: "Low" },
      { label: "Confidence", value: "96%" },
      { label: "Uptime", value: "Recommended" },
    ],
    customPanel: "enterprise",
  },
  {
    number: "07",
    icon: Cpu,
    title: "Edge Intelligence",
    description: "Run AI models close to where data is generated. Secure, reliable and real-time intelligence at the edge.",
    image: "/images/edgeIntelligence.png",
    stats: [
      { label: "Device Health", value: "All Good" },
      { label: "Latency", value: "18 ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    customPanel: "edge",
  },
];

export default function IntelligenceSection2() {
  return (
    <div className="bg-background px-6 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
        {INTELLIGENCE_DOMAINS.map((domain, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative flex items-center gap-8 px-6 rounded-2xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm hover:border-blue-500/30 transition-all overflow-hidden">
              {/* Left Side - Number and Icon */}
              <div className="flex flex-col items-center gap-3 px-0 pb-2">
                <p className="text-4xl font-bold text-blue-500/30" style={{ fontFamily: 'Boska, serif' }}>
                  {domain.number}
                </p>
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <domain.icon size={32} className="text-blue-400" strokeWidth={1.5} />
                </div>
              </div>

              {/* Middle - Content */}
              <div className="flex-1 flex flex-col gap-4 max-w-[380px] ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium text-primary" style={{ fontFamily: 'Boska, serif' }}>
                    {domain.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {domain.description}
                  </p>
                </div>
                
                <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors w-fit group">
                  Explore domain <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Side - Image and Stats */}
              <div className="relative flex items-center gap-4 ">
                {/* Image Preview with gradient overlays */}
                <div className="relative w-[550px] h-[180px] rounded-lg overflow-hidden ">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    fill
                    className="object-cover opacity-80" 
                  />
                  {/* Left gradient overlay */}
                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0B0E18] to-transparent pointer-events-none" />
                  {/* Right gradient overlay */}
                  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0B0E18] to-transparent pointer-events-none" />
                </div>

                {/* Stats Panel - different styles for different cards */}
                {domain.customPanel === true ? (
                  // Vision Intelligence - Custom Panel with Heatmap
                  <div className="absolute -right-22 flex gap-6 px-4 py-4 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    {/* Left Column */}
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500">{domain.stats[0].label}</span>
                        <span className="text-sm font-bold text-blue-400">{domain.stats[0].value}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500">{domain.stats[1].label}</span>
                        <span className="text-sm font-semibold text-primary">{domain.stats[1].value}</span>
                      </div>
                    </div>
                    
                    {/* Right Column with Occupancy and Heatmap */}
                    <div className="flex flex-col gap-2">
                      
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500">Employee Heatmap</span>
                        <div className="relative  h-[100px] w-[100px] rounded-md overflow-hidden">
                          <Image
                            src="/images/heatmap.png"
                            alt="Heatmap"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : domain.customPanel === "voice" ? (
                  // Voice Intelligence - Conversation Insights Panel
                  <div className="absolute -right-22 p-4 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    <h4 className="text-sm text-slate-400 mb-3">Conversation Insights</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {domain.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex flex-col gap-1">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className={`text-sm font-semibold ${
                            stat.value === "Positive" ? "text-emerald-400" : 
                            stat.value === "English" ? "text-emerald-400" : 
                            "text-primary"
                          }`}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : domain.customPanel === "document" ? (
                  // Document Intelligence - Extracted Data Panel
                  <div className="absolute -right-22 px-4 py-2 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    <h4 className="text-sm text-slate-400 mb-3">Extracted Data</h4>
                    <div className="flex flex-col gap-3">
                      {domain.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className="text-sm font-semibold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : domain.customPanel === "broadcast" ? (
                  // Broadcast Intelligence - Live Monitoring Panel with Graph
                  <div className="absolute -right-22 px-4 py-2 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    <h4 className="text-sm text-slate-400 mb-3">Live Monitoring</h4>
                    <div className="flex flex-col gap-3">
                      {domain.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className="text-sm font-semibold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                    {/* Mini Graph */}
                    <div className="relative h-12 mt-3">
                      <svg className="w-full h-full opacity-60" viewBox="0 0 300 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area under the line */}
                        <path
                          d="M0,45 L20,42 L40,38 L60,40 L80,35 L100,32 L120,30 L140,28 L160,25 L180,20 L200,23 L220,26 L240,22 L260,18 L280,20 L300,15 L300,60 L0,60 Z"
                          fill="url(#graphGradient)"
                        />
                        {/* Line */}
                        <path
                          d="M0,45 L20,42 L40,38 L60,40 L80,35 L100,32 L120,30 L140,28 L160,25 L180,20 L200,23 L220,26 L240,22 L260,18 L280,20 L300,15"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          className="opacity-70"
                        />
                      </svg>
                    </div>
                  </div>
                ) : domain.customPanel === "measurement" ? (
                  // Measurement Intelligence - Measurements Panel
                  <div className="absolute -right-22 px-4 py-2 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    <h4 className="text-sm text-slate-400 mb-3">Measurements</h4>
                    <div className="flex flex-col gap-3">
                      {domain.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className="text-sm font-semibold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : domain.customPanel === "enterprise" ? (
                  // Enterprise Intelligence - Decision Support Panel
                  <div className="absolute -right-22 p-4 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    <h4 className="text-sm text-slate-400 mb-3">Decision Support</h4>
                    <div className="flex flex-col gap-3">
                      {domain.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className="text-sm font-semibold text-emerald-400">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : domain.customPanel === "edge" ? (
                  // Edge Intelligence - Edge Status Panel
                  <div className="absolute -right-22 p-4 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[240px]">
                    <h4 className="text-sm text-slate-400 mb-3">Edge Status</h4>
                    <div className="flex flex-col gap-3">
                      {domain.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className={`text-sm font-semibold ${
                            stat.value === "All Good" ? "text-emerald-400" : "text-primary"
                          }`}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Default Stats Panel for other cards
                  <div className="absolute right-4 flex flex-col gap-2 p-4 rounded-lg bg-background/10 backdrop-blur-sm border border-slate-700/50 min-w-[160px]">
                    {domain.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500">{stat.label}</span>
                        <span className="text-sm font-semibold text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}