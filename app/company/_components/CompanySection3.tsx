import Image from "next/image";
import { Section, SectionHeader, Icon, type IconName } from "@/components/ui";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "target",
    title: "Our mission",
    body: "To make enterprise operations more intelligent by turning real-world signals into timely, useful action.",
  },
  {
    icon: "eye",
    title: "Our vision",
    body: "A future where every organization can understand what is happening across its operations and make better decisions as events unfold.",
  },
];

export default function CompanySection3() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-3 lg:gap-16">
        <div className="flex flex-col col-span-2  gap-8">
          {/* <SectionHeader eyebrow="Mission & Vision" title="Why Mialo exists." /> */}
          <h1
            className="text-pista"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 7.2vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
            }}
          >
            Why Mialo Exists
          </h1>

          <div className="flex">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex justify-center items-start gap-4 border-l px-2 border-line py-6 first:border-l-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-ice/30 bg-ice/10 text-ice">
                  <Icon name={p.icon} size={20} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="font-display text-[32px] font-medium tracking-[-0.01em] text-primary"
                    style={{
                      // fontSize: "1.6em",
                      fontWeight: 500,
                      fontFamily: "var(--font-boska), serif",
                      fontStyle: "italic",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.6] text-muted text-pretty"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="overflow-hidden rounded-[14px] border border-line-2 bg-panel">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/vision&mission.png"
              alt="A glowing globe wrapped in streams of light"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div> */}
      </div>
    </Section>
  );
}
