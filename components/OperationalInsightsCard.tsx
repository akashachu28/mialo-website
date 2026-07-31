"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cctv,
  Film,
  HardDrive,
  LayoutGrid,
  User,
  Zap,
  Camera,
  AudioLines,
  FileText,
  Radio,
  Database,
  Sparkles,
  CheckCircle2,
  Router
} from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

// --- Data Constants ---
const TRADITIONAL_NODES = [
  { id: 'cctv', icon: Cctv },
  { id: 'film', icon: Film },
  { id: 'hd', icon: HardDrive },
  { id: 'grid', icon: LayoutGrid },
  { id: 'user', icon: User },
  { id: 'zap-trad', icon: Zap },
];

const SOURCE_CARDS = [
  { id: 'camera', label: 'Camera', icon: Camera },
  { id: 'voice', label: 'Voice', icon: AudioLines },
  { id: 'docs', label: 'Documents', icon: FileText },
  { id: 'iot', label: 'IoT', icon: Router },
  { id: 'erp', label: 'ERP', icon: Database },
];

export default function OperationalIntelligenceCard() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden font-sans">
      <motion.div 
        className="max-w-7xl w-full relative flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-16 lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* --- Background SVG Connectors (Desktop Only) --- */}
        <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#93C5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="impactGradient" x1="740" y1="230" x2="840" y2="230" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="1" />
              </linearGradient>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#93C5FD" />
              </marker>
            </defs>

            {/* Traditional to Sources dashed line with arrow */}
            <path d="M 88 230 L 142 230" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" fill="none" markerEnd="url(#arrowhead)" />
            
            {/* Sources to Operational Moments splines */}
            <path d="M 380 90 C 450 90, 420 250, 480 250" stroke="url(#pathGradient)" strokeWidth="1" fill="none" className="opacity-70" />
            <path d="M 380 170 C 450 170, 420 250, 480 250" stroke="url(#pathGradient)" strokeWidth="1" fill="none" className="opacity-70" />
            <path d="M 380 250 L 480 250" stroke="url(#pathGradient)" strokeWidth="1" fill="none" className="opacity-70" />
            <path d="M 380 330 C 450 330, 420 250, 480 250" stroke="url(#pathGradient)" strokeWidth="1" fill="none" className="opacity-70" />
            <path d="M 380 410 C 450 410, 420 250, 480 250" stroke="url(#pathGradient)" strokeWidth="1" fill="none" className="opacity-70" />

            {/* Animated Glowing Dots on Source -> Ops Moments Paths */}
            <circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 380 90 C 450 90, 420 250, 480 250" />
            </circle>
            <circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 380 170 C 450 170, 420 250, 480 250" />
            </circle>
            {/* <circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 380 250 L 480 250" />
            </circle> */}
            <circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 380 330 C 450 330, 420 250, 480 250" />
            </circle>
            <circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 380 410 C 450 410, 420 250, 480 250" />
            </circle>

            {/* Ops Moments to Mialo Intelligence Sine Wave */}
            <path d="M 540 250 C 590 180, 630 320, 680 250 C 710 210, 740 250, 760 250" stroke="url(#pathGradient)" strokeWidth="1" fill="none" />
            
            {/* Animated Glowing Dot on Ops -> Mialo Path */}
            <motion.circle 
              r="3" 
              fill="#fff" 
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              animate={{
                offsetDistance: ["0%", "100%"]
              }}
              style={{
                offsetPath: 'path("M 540 250 C 590 180, 630 320, 680 250 C 710 210, 740 250, 760 250")',
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Mialo Intelligence to Impact Straight Line with Arrow */}
            {/* <path d="M 340 230 L 840 230" stroke="url(#pathGradient)" strokeWidth="1" fill="none"/> */}
            
            {/* Dotted feedback path starting from Mialo Intelligence */}
            <path d="M 740 230 L 840 230" stroke="url(#impactGradient)" strokeWidth="1" fill="none" className="opacity-70" />
          </svg>
        </div>

        {/* --- Column 1: Traditional Operations --- */}
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center">
          <h2 className="text-sm font-medium text-slate-400 leading-tight mb-6 text-center">
            Traditional<br/>Operations
          </h2>
          <div className="relative flex flex-col gap-4 py-4">
            {/* Left Bracket visual representation via border */}
            <div className="absolute -left-6 top-0 bottom-0 w-4 border-l border-y border-slate-700/50 rounded-l-xl opacity-50" />
            
            {/* Right border */}
            <div className="absolute -right-6 top-0 bottom-0 w-4 border-r border-y border-slate-700/50 rounded-r-xl opacity-50" />
            
            {TRADITIONAL_NODES.map((node) => (
              <motion.div
                key={node.id}
                whileHover={hoverScale}
                className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center text-slate-400 shadow-lg shadow-black/50"
              >
                <node.icon size={20} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Column 2: Sources & Convergence --- */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 flex-1 justify-center">
          
          {/* Source Cards */}
          <motion.div variants={itemVariants} className="relative flex flex-col gap-4 py-4">
             {/* Right Bracket visual representation */}
             <div className="absolute -right-6 top-0 bottom-0 w-4 border-r border-y border-slate-700/50 rounded-r-xl opacity-50 hidden lg:block" />
             <div className="absolute -left-6 top-0 bottom-0 w-4 border-l border-y border-slate-700/50 rounded-l-xl opacity-50 block lg:hidden" />
             
             {/* Left border */}
             <div className="absolute -left-6 top-0 bottom-0 w-4 border-l rounded-xl border-slate-600/60 hidden lg:block" />

            {SOURCE_CARDS.map((source, index) => (
              <div key={source.id} className="relative">
                {/* Horizontal connecting line from left border to card */}
                <div className="absolute right-full top-1/2 w-6 h-0 border-t-2 border-slate-600/60 hidden lg:block" style={{ transform: 'translateY(-50%)' }} />
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-40 px-4 py-3 rounded-2xl border border-slate-800/70 bg-slate-900/20 backdrop-blur-sm flex items-center gap-3 text-[#6C93FF] shadow-lg shadow-black/50 cursor-pointer hover:border-blue-500/30 hover:bg-slate-800/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]"
                  style={{ transition: "all 0.2s ease" }}
                >
                  <source.icon size={20} strokeWidth={1}  className="text-[#6C93FF]" />
                  <span className="text-sm font-medium">{source.label}</span>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Operational Moments Node */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mt-18 ml-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center border border-blue-900/50 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] shadow-lg shadow-blue-500/20 z-10 cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(96,165,250,0.4)]"
              style={{ transition: "all 0.2s ease" }}
            >
              <Zap size={24} strokeWidth={2} className="text-primary fill-primary" />
            </motion.div>
            <span className="mt-2 text-primary text-center leading-tight">
              Operational<br/>Moments
            </span>
          </motion.div>
        </div>

        {/* --- Column 3: Mialo Intelligence & Impact --- */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mialo Intelligence Node */}
          <motion.div variants={itemVariants} className="flex flex-col items-center relative mt-12 ml-12">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Pulsing Concentric Rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-blue-500/20 z-0"
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-blue-500/20 z-0"
                animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.25 }}
              />
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 rounded-full bg-slate-900 text-5xl pb-1 flex items-center justify-center shadow-[0_0_40px_rgba(96,165,250,0.4)] border border-blue-500/50 relative z-10 cursor-pointer hover:border-blue-500/60 hover:shadow-[0_0_50px_rgba(96,165,250,0.5)]"
                style={{ transition: "all 0.2s ease" }}
              >
                ✦
              </motion.div>
            </div>
            <span className="mt-2 text-primary text-center leading-tight">
              Mialo<br/>Intelligence
            </span>
          </motion.div>

          {/* Impact Pill */}
          <motion.div variants={itemVariants} className="flex items-center -ml-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-2 bg rounded-full border border-blue-900/50 bg-slate-900/40 backdrop-blur-sm flex items-center gap-2 text-primary shadow-lg shadow-blue-500/10 cursor-pointer hover:border-blue-500/40 hover:bg-slate-800/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]"
              style={{ transition: "all 0.2s ease" }}
            >
              <CheckCircle2 size={18} className="text-slate-300" />
              <span className="text-sm font-semibold">Impact</span>
            </motion.div>
          </motion.div>
          
        </div>
      </motion.div>
      <div className='text-[76px] min-w-[1200px] pt-[80px] font-medium leading-[1.02] tracking-[-0.02rem]' style={{ fontFamily: 'Boska, serif' }}>
        <h2 className='text-muted'>
            Recording is not <h2>understanding.</h2>
        </h2>
        <h2 className='text-primary'>
            Understanding <h2> enables action.</h2>
        </h2>
      </div>
      <p className='max-w-[560px] pt-[24px] text-sm text-muted'>
        Mialo transforms operational signals into real-time awareness, intelligent decisions and autonomous actions.
      </p>
    </div>
  );
}
