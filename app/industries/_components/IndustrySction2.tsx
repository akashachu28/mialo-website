import Image from "next/image";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  ArrowLink,
  Icon,
  type IconName,
} from "@/components/ui";

const STEPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "eye", title: "Observe", body: "Capture data from any source in real time." },
  { icon: "brain", title: "Understand", body: "AI models analyze and surface what matters." },
  { icon: "target", title: "Decide", body: "Contextual insight for faster, smarter decisions." },
  { icon: "zap", title: "Act", body: "Trigger actions and automate workflows." },
  { icon: "loop", title: "Learn", body: "Continuously learn and improve outcomes." },
];

type Industry = {
  icon: IconName;
  label: string;
  blurb: string;
  image: string;
  alt: string;
  href?: string;
};

const INDUSTRIES: Industry[] = [
  {
    icon: "coins",
    label: "Retail",
    blurb: "Footfall, dwell time and shelf compliance across every store.",
    image: "/images/industryVision.png",
    alt: "A retail floor with shopper detection zones and a movement heatmap",
    href: "/industries/innerPages/retail",
  },
  {
    icon: "factory",
    label: "Manufacturing",
    blurb: "Line anomalies, safety and uptime - caught before they cascade.",
    image: "/images/manufacture.png",
    alt: "A robotic welding arm throwing sparks on a factory line",
    href: "/industries/innerPages/manufacturing",
  },
  {
    icon: "heart",
    label: "Healthcare",
    blurb: "Situational awareness across capacity, workflow and patient safety.",
    image: "/images/medical.png",
    alt: "A clinician reviewing AI diagnostic overlays beside a patient bed",
  },
  {
    icon: "building",
    label: "Government",
    blurb: "Fragmented operational data made accountable and auditable.",
    image: "/images/government.png",
    alt: "A government operations centre with a civic network overlay",
  },
  {
    icon: "truck",
    label: "Logistics",
    blurb: "Disruption sensed early, so operations re-route in time.",
    image: "/images/logistics.png",
    alt: "A forklift loading a truck at a warehouse dock",
  },
  {
    icon: "zap",
    label: "Energy & Utilities",
    blurb: "Grid, generation and field signals read in real time.",
    image: "/images/energy.png",
    alt: "A power plant and solar array with live efficiency readouts",
  },
];

export default function IndustrySection2() {
  return (
    <>
      {/* -------- How Mialo works -------- */}
      <Section>
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="How Mialo Works"
            title="From data to decisions. In real time."
            // lead="Every operational moment follows the same loop - observe, understand, decide, act and learn - running continuously across your sources."
          />
          <p className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 -mt-10 text-pretty">
            Every operational moment follows the same loop - observe, understand, decide, act and learn - running continuously across your sources.
          </p>

          <div className="relative bg-ice py-3 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
          style={{
                  clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
                }}
          >
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                {/* Dotted line between icons (not after last one) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute top-[46px] hidden h-px lg:block z-0 pointer-events-none"
                    style={{
                      left: "calc(50% + 32px)",
                      width: "calc(100vw / 5 - 120px)",
                      background:
                        "repeating-linear-gradient(90deg, var(--color-pista) 0 6px, transparent 6px 14px)",
                    }}
                  />
                )}
                
                <span className="font-mono text-[10px] tracking-[0.1em] text-pista relative z-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-[11px] border border-white/30 bg-white/10 text-white relative z-10">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="font-display text-[15px] font-medium text-pista relative z-10">
                  {s.title}
                </span>
                <span className="max-w-[190px] text-[12.5px] leading-[1.5] text-white/90 text-pretty relative z-10">
                  {s.body}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -------- Industries we empower -------- */}
      <Section>
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="Industries We Empower"
            title="Operational intelligence, tuned to your world."
            // lead="The same intelligence layer, adapted to the signals, constraints and outcomes that define each sector."
          >
            <p className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 mt-5 text-pretty">
            Every operational moment follows the same loop - observe, understand, decide, act and learn - running continuously across your sources.
          </p>
            {/* <ArrowLink>Explore all industries</ArrowLink> */}
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const CardContent = (
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#08090B] via-[#08090B]/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-ice/30 bg-background/60 text-ice backdrop-blur-sm">
                      <Icon name={industry.icon} size={18} />
                    </span>
                    <h3 className="font-display text-[19px] font-medium tracking-[-0.01em] text-primary">
                      {industry.label}
                    </h3>
                    <p className="text-[12.5px] leading-[1.5] text-ink text-pretty">
                      {industry.blurb}
                    </p>
                  </div>
                </div>
              );

              return industry.href ? (
                <Link
                  key={industry.label}
                  href={industry.href}
                  className="group relative overflow-hidden  border border-line-2 bg-raise transition-colors hover:border-line-3"
                  style={{
                  clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
                }}
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={industry.label}
                  className="group relative overflow-hidden border border-line-2 bg-raise transition-colors hover:border-line-3"
                  style={{
                  clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
                }}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
