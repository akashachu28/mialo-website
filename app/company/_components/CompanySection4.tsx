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
    body: "Visionary leader with 25+ years in AI, enterprise software and scaling technology businesses.",
    image: "/images/vinod.png",
  },
  {
    name: "Amit Jain",
    title: "CTO",
    body: "AI and architecture expert passionate about building scalable, secure and innovative platforms.",
  },
  {
    name: "Gaurav Kaushik",
    title: "VP, Products",
    body: "Product leader focused on customer outcomes and building AI solutions with real-world impact.",
  },
  {
    name: "Priya Sharma",
    title: "VP, Engineering",
    body: "Engineering excellence advocate with deep expertise in distributed systems and cloud infrastructure.",
  },
  {
    name: "Rajesh Kumar",
    title: "VP, Sales",
    body: "Growth strategist committed to delivering exceptional value to enterprise customers globally.",
  },
  {
    name: "Anita Desai",
    title: "VP, People & Culture",
    body: "People-first leader building world-class teams and fostering an innovation-driven culture.",
  },
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
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="Leadership"
            title="The minds shaping the future of intelligent operations."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((m) => (
              <div
                key={m.name}
                className="flex flex-col gap-4 rounded-[14px] border border-line-2 bg-raise p-6 transition-colors hover:border-line-3"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-line-2 bg-panel">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center font-display text-[15px] font-medium text-muted">
                      {initials(m.name)}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-[16px] font-medium tracking-[-0.01em] text-primary">
                    {m.name}
                  </h3>
                  <Kicker className="text-ice">{m.title}</Kicker>
                </div>

                <p className="text-[13.5px] leading-[1.55] text-muted text-pretty">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -------- Customers -------- */}
      <Section>
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
      </Section>
    </>
  );
}
