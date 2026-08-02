'use client'
import { motion } from "framer-motion";
import { Globe, Users, Activity, Rocket } from "lucide-react";

const COMPANY_STATS = [
  {
    icon: Globe,
    value: "10+",
    label: "Years of Innovation",
    description: "A decade of building AI solutions for real-world operational challenges.",
  },
  {
    icon: Users,
    value: "100+",
    label: "Enterprise Customers",
    description: "Enterprises and government organizations across continents.",
  },
  {
    icon: Activity,
    value: "1B+",
    label: "Signals Processed Daily",
    description: "From cameras, sensors, voices, documents and more—at the edge and in the cloud.",
  },
  {
    icon: Rocket,
    value: "Built for Impact",
    label: "",
    description: "Our mission is to help enterprises operate safer, smarter and more efficiently every day.",
  },
];

export default function CompanySection2() {
  return (
    <div className="bg-background px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Stats Row with Vertical Separators */}
        <div className="flex items-start justify-between gap-12">
          {COMPANY_STATS.map((stat, index) => (
            <div key={index} className="flex items-start gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col gap-3"
              >
                {/* Icon */}
                <stat.icon size={32} className="text-ice mb-2" strokeWidth={1.5} />

                {/* Value */}
                <h3 
                  className="text-5xl font-medium text-primary mb-1"
                  style={{ fontFamily: 'Boska, serif' }}
                >
                  {stat.value}
                </h3>

                {/* Label */}
                {stat.label && (
                  <p className="text-xl leading-[1.08] tracking-[0.01rem] font-medium text-primary mb-2"
                  style={{ fontFamily: 'Boska, serif' }}>
                    {stat.label}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm font-medium text-faint max-w-xs">
                  {stat.description}
                </p>
              </motion.div>

              {/* Vertical Separator (except after last item) */}
              {index < COMPANY_STATS.length - 1 && (
                <div className="h-50 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}