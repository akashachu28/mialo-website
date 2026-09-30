"use client";

import Image from "next/image";
import { Section, SectionHeader, Kicker, ArrowLink } from "@/components/ui";

type Leader = {
  name: string;
  title: string;
  body: string;
  image?: string;
};

const LEADERSHIP: Leader[] = [
  {
    name: "Vinod Bhawnani",
    title: "Founder & CEO",
    body: "Visionary leader with 25+ years in enterprise software, AI and scaling technology businesses.",
    image: "/images/vinod.png",
  },
  // {
  //   name: "Amit Jain",
  //   title: "CTO",
  //   body: "AI and architecture expert passionate about building scalable, secure and innovative platforms.",
  // },
  // {
  //   name: "Gaurav Kaushik",
  //   title: "VP, Products",
  //   body: "Product leader focused on customer outcomes and building AI solutions with real-world impact.",
  // },
  // {
  //   name: "Priya Sharma",
  //   title: "VP, Engineering",
  //   body: "Engineering excellence advocate with deep expertise in distributed systems and cloud infrastructure.",
  // },
  // {
  //   name: "Rajesh Kumar",
  //   title: "VP, Sales",
  //   body: "Growth strategist committed to delivering exceptional value to enterprise customers globally.",
  // },
  // {
  //   name: "Anita Desai",
  //   title: "VP, People & Culture",
  //   body: "People-first leader building world-class teams and fostering an innovation-driven culture.",
  // },
];

const CUSTOMERS = [
  "Harris Teeter",
  "Levi's",
  "Tata",
  "Jindal",
  "Communications Authority of Kenya",
  "KALRO",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function CompanySection4() {
  return (
    <>
      {/* -------- Leadership -------- */}
      <Section>
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-14">
          <SectionHeader
            eyebrow="Leadership"
            titlePista="The minds shaping the future of intelligent operations."
          />

          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
            {LEADERSHIP.map((m) => (
              <div
                key={m.name}
                className="flex flex-col gap-4 sm:gap-5 md:gap-6 border border-ice/30 bg-raise p-6 sm:p-7 md:p-8 transition-colors hover:border-line-3"
                style={{
                  clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
                }}
              >
                <div className="relative h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 overflow-hidden rounded-full border border-line-2 bg-panel">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, 80px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center font-display text-base sm:text-lg md:text-[18px] font-medium text-muted">
                      {initials(m.name)}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="font-display text-base sm:text-lg md:text-[18px] font-medium tracking-tight text-primary">
                    {m.name}
                  </h3>
                  <Kicker className="text-ice text-[10px] sm:text-[11px]">{m.title}</Kicker>
                </div>

                <p className="text-xs sm:text-sm md:text-[14px] leading-relaxed text-muted text-pretty">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -------- Customers -------- */}
      {/* <Section>
        <SectionHeader
          className="mb-12"
          eyebrow="Customers"
          title="Trusted where operations cannot fail."
        />

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {CUSTOMERS.map((c) => (
            <span
              key={c}
              className="font-display text-[17px] font-medium tracking-tight text-faint"
            >
              {c}
            </span>
          ))}
        </div>

        <ArrowLink href="/customers" className="mt-10">
          View all customers
        </ArrowLink>
      </Section> */}
    </>
  );
}
