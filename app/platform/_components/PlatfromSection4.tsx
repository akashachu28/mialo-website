'use client'
import { motion } from "framer-motion";
import { Eye, Mic, FileText, Radio, Ruler, Brain, Cpu, Cloud, Network, Database, ShieldCheck, Repeat, Gauge, Users, BookOpen, Activity, Clock, MessageSquare, ArrowRight } from "lucide-react";

// Intelligence Domains
const INTELLIGENCE_DOMAINS = [
  {
    icon: Eye,
    title: "Vision Intelligence",
    description: "See, identify and understand the physical world.",
    link: "Explore"
  },
  {
    icon: Mic,
    title: "Voice Intelligence",
    description: "Understand conversations and spoken events in real time.",
    link: "Explore"
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Extract, classify and search enterprise documents.",
    link: "Explore"
  },
  {
    icon: Radio,
    title: "Broadcast Intelligence",
    description: "Monitor TV, radio and media streams with AI insights.",
    link: "Explore"
  },
  {
    icon: Ruler,
    title: "Measurement Intelligence",
    description: "Accurately measure real-world objects at scale.",
    link: "Explore"
  },
  {
    icon: Brain,
    title: "Enterprise Intelligence",
    description: "AI assistants, RAG and copilots for enterprise knowledge.",
    link: "Explore"
  },
  {
    icon: Cpu,
    title: "Edge Intelligence",
    description: "Run intelligence anywhere operations take place.",
    link: "Explore"
  },
];

// Deploy Anywhere Options
const DEPLOY_OPTIONS = [
  {
    icon: Cpu,
    title: "Edge",
    description: "On-device inference with low latency.",
    level: "Edge"
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Elastic scale with availability.",
    level: "Regional Edge"
  },
  {
    icon: Network,
    title: "Hybrid",
    description: "Best of edge and cloud together.",
    level: "Private Cloud"
  },
  {
    icon: Database,
    title: "Command Center",
    description: "Complete control within your VPC.",
    level: "Enterprise"
  },
];

// Enterprise Ready Features
const ENTERPRISE_FEATURES = [
  { icon: ShieldCheck, title: "Enterprise Security" },
  { icon: Repeat, title: "Open APIs" },
  { icon: Gauge, title: "Existing Camera Support" },
  { icon: Database, title: "ERP / CRM Integration" },
  { icon: Users, title: "Human-in-the-loop Workflows" },
  { icon: BookOpen, title: "Scalable Architecture" },
  { icon: Activity, title: "Role Based Access" },
  { icon: Clock, title: "Observability & Monitoring" },
];

// Business Outcomes
const BUSINESS_OUTCOMES = [
  { icon: ShieldCheck, title: "Safer Operations" },
  { icon: Activity, title: "Higher Productivity" },
  { icon: Clock, title: "Faster Decisions" },
  { icon: Brain, title: "Reduced Costs" },
  { icon: Users, title: "Improved Customer Experience" },
  { icon: FileText, title: "Better Compliance" },
  { icon: Eye, title: "Operational Visibility" },
  { icon: MessageSquare, title: "Continuous Learning" },
];

export default function PlatformSection4() {
  return (
    <div className="bg-background px-6 py-20 flex flex-col gap-20">
      {/* Intelligence Domains Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <p className="font-semibold text-xs text-[#6C93FF] tracking-wider uppercase">
            INTELLIGENCE DOMAINS
          </p>
          <h2 
            className="text-[36px] text-primary font-medium leading-[1.1] tracking-[-0.02rem]"
            style={{ fontFamily: 'Boska, serif' }}
          >
            Specialized intelligence domains. One unified platform.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTELLIGENCE_DOMAINS.map((domain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm hover:border-blue-500/30 transition-all cursor-pointer"
            >
              <domain.icon size={32} className="text-[#6C93FF]" strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-primary">{domain.title}</h3>
                <p className="text-sm text-muted leading-[1.5]">{domain.description}</p>
              </div>
              <button className="flex items-center gap-2 text-sm text-[#6C93FF] hover:text-blue-400 transition-colors w-fit">
                {domain.link} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deploy Anywhere & Enterprise Ready Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Deploy Anywhere */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xs text-[#6C93FF] tracking-wider uppercase">
              DEPLOY ANYWHERE
            </p>
            <h3 
              className="text-[28px] text-primary font-medium leading-[1.1] tracking-[-0.02rem]"
              style={{ fontFamily: 'Boska, serif' }}
            >
              Deploy where your operations demand.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {DEPLOY_OPTIONS.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-blue-500/30 transition-all"
              >
                <option.icon size={28} className="text-[#6C93FF]" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-primary">{option.title}</h4>
                  <p className="text-xs text-muted leading-[1.4]">{option.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-[#6C93FF]"></div>
                  <span className="text-xs text-muted">{option.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enterprise Ready */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xs text-[#6C93FF] tracking-wider uppercase">
              ENTERPRISE READY
            </p>
            <h3 
              className="text-[28px] text-primary font-medium leading-[1.1] tracking-[-0.02rem]"
              style={{ fontFamily: 'Boska, serif' }}
            >
              Designed for enterprise scale from day one.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ENTERPRISE_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-blue-500/30 transition-all"
              >
                <feature.icon size={20} className="text-[#6C93FF]" strokeWidth={1.5} />
                <span className="text-sm text-primary">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Outcomes Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <p className="font-semibold text-xs text-[#6C93FF] tracking-wider uppercase">
            BUSINESS OUTCOMES
          </p>
          <h2 
            className="text-[36px] text-primary font-medium leading-[1.1] tracking-[-0.02rem]"
            style={{ fontFamily: 'Boska, serif' }}
          >
            Operational intelligence that delivers measurable outcomes.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {BUSINESS_OUTCOMES.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-blue-500/30 transition-all cursor-pointer text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <outcome.icon size={24} className="text-[#6C93FF]" strokeWidth={1.5} />
              </div>
              <p className="text-xs text-primary font-medium leading-tight">{outcome.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}