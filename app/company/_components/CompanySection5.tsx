'use client'
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";

const NEWS_ITEMS = [
  {
    date: "May 15, 2025",
    title: "Mialo.ai powers operational intelligence for 250+ Harris Teeter stores",
    image: "/images/hustlehub.jpg",
  },
  {
    date: "Apr 28, 2025",
    title: "Mialo raises growth capital to scale its AI platform globally",
    image: "/images/hustlehub.jpg",
  },
  {
    date: "Mar 10, 2025",
    title: "Mialo.ai named among top AI innovators to watch",
    image: "/images/hustlehub.jpg",
  },
];

const OFFICES = [
  {
    city: "Bengaluru, India",
    label: "Global Headquarters",
    address: "Shppingboard, JP Nagar\nBengaluru - 560078, India",
    image: "/images/hustlehub.jpg",
  },
  {
    city: "Nairobi, Kenya",
    label: "Africa Operations",
    address: "Westcom Point, 5th Floor\nMahiga Mairu Ave, Nairobi, Kenya",
    image: "/images/hustlehub.jpg",
  },
  {
    city: "Dallas, USA",
    label: "North America",
    address: "2301 N. Central Expressway\nRichardson, TX 75080, USA",
    image: "/images/hustlehub.jpg",
  },
];

export default function CompanySection5() {
  return (
    <div className="bg-background px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: News & Press */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-sm text-ice uppercase tracking-wider mb-6">News & Press</h3>
            
            {NEWS_ITEMS.map((news, index) => (
              <div key={index} className="flex gap-4">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1">{news.date}</p>
                  <h4 className="text-sm text-slate-300 leading-relaxed mb-2">
                    {news.title}
                  </h4>
                  <a href="#" className="text-xs text-ice hover:text-blue-300 transition-colors">
                    Read more →
                  </a>
                </div>
              </div>
            ))}

            <a href="#" className="inline-flex items-center gap-2 text-sm text-ice hover:text-blue-300 transition-colors mt-4">
              View All News →
            </a>
          </motion.div>

          {/* Column 2: Our Offices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-sm text-ice uppercase tracking-wider mb-6">Our Offices</h3>
            
            {OFFICES.map((office, index) => (
              <div key={index} className="flex gap-4">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={office.image}
                      alt={office.city}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-base text-primary font-semibold mb-1">
                    {office.city}
                  </h4>
                  <p className="text-xs text-ice mb-2">{office.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              </div>
            ))}

            <a href="#" className="inline-flex items-center gap-2 text-sm text-ice hover:text-blue-300 transition-colors mt-4">
              View All Locations →
            </a>
          </motion.div>

          {/* Column 3: Join Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-sm text-ice uppercase tracking-wider mb-6">Join Our Mission</h3>
            
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-ice/10 border border-ice/20 flex items-center justify-center mb-6">
              <Users size={32} className="text-ice" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <h4 className="text-2xl font-bold text-primary leading-tight mb-4" style={{ fontFamily: 'Boska, serif' }}>
              Be part of a team that's building the intelligence layer for the real world.
            </h4>

            <p className="text-base text-slate-400 leading-relaxed mb-6">
              We're looking for curious minds, bold thinkers and problem solvers.
            </p>

            {/* CTA Button */}
            <a 
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-2 rounded-lg bg-ice hover:bg-ice/80 text-background text-sm font-medium transition-colors"
            >
              Explore Careers →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}