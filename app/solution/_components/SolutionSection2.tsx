'use client'
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Shield, Radio, FileText, Mic, Ruler, ArrowRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FEATURED_SOLUTIONS = [
  {
    icon: ShoppingCart,
    title: "RetailSense",
    description: "AI-powered retail analytics for smarter stores and happier customers.",
    features: [
      "Footfall & Traffic Analytics",
      "Customer Behavior Analysis",
      "Queue & Wait Time Monitoring",
      "Planogram Compliance"
    ],
    image: "/images/industryVision.png",
  },
  {
    icon: Shield,
    title: "SensiLance",
    description: "AI for safety, security and perimeter intelligence.",
    features: [
      "Intrusion Detection",
      "PPE & Safety Compliance",
      "Perimeter Monitoring",
      "Vehicle & ANPR"
    ],
    image: "/images/industryVision.png",
  },
  {
    icon: Radio,
    title: "BroadcastSense",
    description: "Real-time broadcast & media intelligence and monitoring.",
    features: [
      "Real-time Content Monitoring",
      "Ad Detection & Measurement",
      "Compliance & Policy Monitoring",
      "Media Analytics & Insights"
    ],
    image: "/images/industryVision.png",
  },
];

const MORE_SOLUTIONS = [
  {
    icon: FileText,
    title: "DocSense",
    description: "Intelligent document processing and enterprise knowledge extraction.",
    features: [
      "Document Classification",
      "Data Extraction (OCR)",
      "Table & Field Recognition",
      "Knowledge Capture",
      "Workflow Automation",
      "RAG-powered Search"
    ],
    image: "/images/industryVision.png",
  },
  {
    icon: Mic,
    title: "VoxCore",
    description: "Voice AI platform for real-time conversations and automation.",
    features: [
      "Automatic Speech Recognition",
      "Wake Word Detection",
      "Text-to-Speech (TTS)",
      "Voice Agents",
      "Real-time Transcription",
      "Multi-language Support"
    ],
    image: "/images/industryVision.png",
  },
  {
    icon: Ruler,
    title: "MeasureSense",
    description: "AI-powered measurement and dimensioning at scale.",
    features: [
      "Dimension Extraction",
      "Area & Volume Calculation",
      "As-built Documentation",
      "3D Reconstruction",
      "Quality Verification",
      "Report Generation"
    ],
    image: "/images/industryVision.png",
  },
];

export default function SolutionSection2() {
  const [showAllSolutions, setShowAllSolutions] = useState(false);

  return (
    <div className="bg-background px-6 py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-blue-400 mb-3 uppercase tracking-wider">Featured Solutions</p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SOLUTIONS.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-2xl overflow-hidden border border-slate-800/70 hover:border-blue-500/30 transition-all"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay - only on left side, transparent on right */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col p-6 z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <solution.icon size={24} className="text-blue-400" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-2 mb-6">
                  {solution.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                      <span className="text-sm text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="mt-auto flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors w-fit group">
                  Watch Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Additional Solutions - Animated */}
          <AnimatePresence>
            {showAllSolutions && MORE_SOLUTIONS.map((solution, idx) => (
              <motion.div
                key={`more-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden border border-slate-800/70 hover:border-blue-500/30 transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay - only on left side, transparent on right */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-6 z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <solution.icon size={24} className="text-blue-400" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col gap-2 mb-6">
                    {solution.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="mt-auto flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors w-fit group">
                    Watch Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More Solutions Section */}
        <div className="mt-8 relative flex items-center justify-between p-8 rounded-2xl bg-slate-900/40 border border-slate-800/70 overflow-hidden">
          {/* Background Image - 70% width, full height, positioned on the right */}
          <div className="absolute right-0 top-0 w-[100%] h-full">
            <Image
              src="/images/solutionsBanner.png"
              alt="Solutions Banner"
              fill
              className="object-cover"
            />
            {/* Gradient overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="relative z-10">
            <p className="text-sm text-blue-400 mb-2 uppercase tracking-wider">More Solutions</p>
            <h2 className="text-3xl font-medium text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>
              Six solutions.
            </h2>
            <h2 className="text-3xl font-medium text-blue-400 mb-3" style={{ fontFamily: 'Boska, serif' }}>
              One intelligence.
            </h2>
            <p className="text-sm text-slate-400 max-w-md">
              Explore the complete Mialo solution suite built for real-world operations.
            </p>
          </div>
          <button 
            onClick={() => setShowAllSolutions(!showAllSolutions)}
            className="relative z-10 flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
          >
            {showAllSolutions ? (
              <>
                Show less
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                View all solutions
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
