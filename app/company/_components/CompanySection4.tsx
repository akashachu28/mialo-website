'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const LEADERSHIP_TEAM = [
  {
    name: "Vinod Bhawnani",
    title: "Founder & CEO",
    description: "Visionary leader with 25+ years in AI, enterprise software and scaling technology businesses.",
    image: "/images/vinod.png",
  },
  {
    name: "Amit Jain",
    title: "CTO",
    description: "AI and architecture expert passionate about building scalable, secure and innovative platforms.",
    image: "/images/vinod.png",
  },
  {
    name: "Gaurav Kaushik",
    title: "VP, Products",
    description: "Product leader focused on customer outcomes and building AI solutions with real-world impact.",
    image: "/images/vinod.png",
  },
  {
    name: "Priya Sharma",
    title: "VP, Engineering",
    description: "Engineering excellence advocate with deep expertise in distributed systems and cloud infrastructure.",
    image: "/images/vinod.png",
  },
  {
    name: "Rajesh Kumar",
    title: "VP, Sales",
    description: "Growth strategist committed to delivering exceptional value to enterprise customers globally.",
    image: "/images/vinod.png",
  },
  {
    name: "Anita Desai",
    title: "VP, People & Culture",
    description: "People-first leader building world-class teams and fostering innovation-driven culture.",
    image: "/images/vinod.png",
  },
];

export default function CompanySection4() {
  return (
    <div className="bg-background  py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-xs font-semibold text-ice uppercase tracking-wider mb-4">Leadership Team</p>
          <h2 className="text-4xl md:text-5xl font-medium text-primary max-w-3xl mx-auto leading-[1.08] tracking-[-0.02rem]" style={{ fontFamily: 'Boska, serif' }}>
            Meet the minds shaping the future of intelligent operations
          </h2>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0E18] to-transparent z-10 pointer-events-none" />
        
        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0E18] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex">
          {/* First set of cards */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920], // Adjust based on card width * number of cards
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {LEADERSHIP_TEAM.map((member, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm hover:border-blue-500/30 transition-all"
              >
                {/* Image */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-primary mb-1" style={{ fontFamily: 'Boska, serif' }}>
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-sm text-ice font-semibold mb-3">
                  {member.title}
                </p>

                {/* Description */}
                <p className="text-sm font-medium text-muted leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Duplicate set for seamless loop */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {LEADERSHIP_TEAM.map((member, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm hover:border-blue-500/30 transition-all"
              >
                {/* Image */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-primary mb-1" style={{ fontFamily: 'Boska, serif' }}>
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-sm text-blue-400 mb-3">
                  {member.title}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trusted Organizations Section */}
      <div className="max-w-[1200px] mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <p className="text-xs font-semibold text-ice uppercase tracking-wider mb-8">
            Trusted by Organizations Worldwide
          </p>

          {/* Customer Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-8">
            {/* Harris Teeter */}
            <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="relative w-full h-full">
                <Image
                  src="/images/harris-teeter.png"
                  alt="Harris Teeter"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Levi's */}
            <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="relative w-full h-full">
                <Image
                  src="/images/levis.png"
                  alt="Levi's"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Tata */}
            <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tata.png"
                  alt="Tata"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Jindal */}
            <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="relative w-full h-full">
                <Image
                  src="/images/jindal.png"
                  alt="Jindal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Communications Authority of Kenya */}
            <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="relative w-full h-full">
                <Image
                  src="/images/ca-kenya.png"
                  alt="Communications Authority of Kenya"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Kalro */}
            <div className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="relative w-full h-full">
                <Image
                  src="/images/kalro.png"
                  alt="Kalro"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div>
            <a 
              href="/customers" 
              className="inline-flex items-center gap-2 text-sm text-ice hover:text-blue-300 transition-colors"
            >
              View All Customers →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}