'use client'
import { motion } from "framer-motion";
import { Eye, Brain, Zap, MapPin, Database, Server, Cpu, FileText, Radio, ChevronRight } from "lucide-react";
import Image from "next/image";
import bgImage from "../../../public/images/comonentImage.png"
const DATA_SOURCES = [
  { icon: Eye, label: "Vision", position: "top-0 right-[20%]" },
  { icon: MapPin, label: "IoT / Location", position: "top-[10%] right-[5%]" },
  { icon: Radio, label: "Voice", position: "top-[35%] right-0" },
  { icon: FileText, label: "Documents", position: "bottom-[35%] right-0" },
  { icon: Radio, label: "Sensors", position: "bottom-[10%] right-[10%]" },
  { icon: Cpu, label: "Edge Echonet", position: "bottom-0 left-[25%]" },
  { icon: Server, label: "Enterprise Systems", position: "top-[25%] left-0" },
];

const STEPS = [
  { icon: Eye, label: "Observe" },
  { icon: Brain, label: "Understand" },
  { icon: Zap, label: "Act" },
];

export default function PlatformSection3() {
  return (
    <div className="bg-[#020307] px-6 py-[12px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="flex flex-col gap-8 py-10 max-w-[500px]">
            <div className="flex flex-col gap-6">
              <p className="font-semibold text-xs text-[#6C93FF] tracking-wider uppercase">
                MULTIMODAL INTELLIGENCE
              </p>
              <h2 
                className="text-[36px] text-primary font-medium leading-[1.1] tracking-[-0.02rem]"
                style={{ fontFamily: 'Boska, serif' }}
              >
                Every operational signal contributes to a complete picture.
              </h2>
              <p className=" text-sm leading-[1.6] text-muted">
                Mialo fuses information from cameras, conversations, documents, IoT devices, enterprise systems and edge hardware to create a unified understanding of operations.
              </p>
            </div>

            {/* Action Steps */}
            <div className="flex items-center gap-4">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3  py-3 rounded-xl"
                  >
                    <step.icon size={20} className="text-[#6C93FF]" strokeWidth={1} />
                    <span className="text-sm font-medium text-primary">{step.label}</span>
                  </motion.button>
                  {idx < STEPS.length - 1 && (
                    <ChevronRight size={20} className="text-slate-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Multimodal Diagram */}
          <div className="relative flex items-center justify-center h-full">
            {/* Central Mialo Circle */}

            <div className="w-full h-full  flex justify-center">
            <Image
                src={bgImage}
                alt="Mialo"
                fill
                className="object-contain"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}