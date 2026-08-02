'use client'
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

export default function CompanySection3() {
  return (
    <div className="bg-background px-24">
      <div className="mx-auto">
        {/* Single Container with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-slate-800/70"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/vision&mission.png"
              alt="Vision & Mission"
              fill
              className="object-cover"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-12">
            {/* Section Header */}
            <p className="text-xs font-semibold text-ice uppercase tracking-wider mb-12">Our Mission & Vision</p>

            {/* Mission & Vision Rows */}
            <div className="flex flex-col gap-10 max-w-2xl">
              {/* Our Mission */}
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-ice/10 border border-ice/20 backdrop-blur-sm flex items-center justify-center">
                  <Target size={32} className="text-ice" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-primary mb-3" style={{ fontFamily: 'Boska, serif' }}>
                    Our Mission
                  </h3>
                  <p className="text-base text-muted leading-[1.08]">
                    To empower enterprises with a unified intelligence layer that observes, understands and acts—transforming how the world operates in real time.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-ice/10 border border-ice/20 backdrop-blur-sm flex items-center justify-center">
                  <Eye size={32} className="text-ice" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-primary mb-3" style={{ fontFamily: 'Boska, serif' }}>
                    Our Vision
                  </h3>
                  <p className="text-base text-muted leading-[1.08]">
                    A world where every operational decision is intelligent, every action is optimized and every organization is future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
