import { Section, Eyebrow, SectionHeader } from "@/components/ui";

const STATS: { value: string; label?: string; body: string }[] = [
  {
    value: "10+",
    label: "Years of innovation",
    body: "A decade of building AI solutions for real-world operational challenges.",
  },
  {
    value: "50+",
    label: "Enterprise customers",
    body: "Enterprises and government organizations across continents.",
  },
  {
    value: "10M+",
    label: "Signals processed daily",
    body: "From cameras, sensors, voices and documents - at the edge and in the cloud.",
  },
  {
    value: "Built for impact",
    body: "Our mission is to help enterprises operate safer, smarter and more efficiently every day.",
  },
];

export default function CompanySection2() {
  return (
    <div>
      {/* New section with heading and description */}
      <Section>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <SectionHeader
              eyebrow="Our company"
              titleIce="Built around your operations"
              leadBlack="We start with the challenge you need to solve, then bring together the right AI capabilities and operational context. The result is intelligence that fits the way your teams work and helps them respond when it matters."
            />
          </div>

          {/* Right side - Image */}
          <div className="relative order-1 lg:order-2 mx-4 sm:mx-0">
            <img
              src="/images/about_us.png"
              alt="Built around your operations"
              className="w-full h-auto"
              style={{
                clipPath:
                  "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
              }}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <div className="flex max-w-full sm:max-w-[600px] md:max-w-[720px] flex-col gap-3 sm:gap-4 md:gap-5 px-4 sm:px-0">
            <h2 
              className="text-gray-700 text-pretty"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 6vw, 60px)",
                lineHeight: "clamp(1.1, 0.96, 0.96)",
                letterSpacing: "-0.045em",
              }}
            >
              Ten years in. 
            </h2>
            <h2 
              className="text-ice text-pretty -mt-2 sm:-mt-3"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 6vw, 60px)",
                lineHeight: "clamp(1.1, 0.96, 0.96)",
                letterSpacing: "-0.045em",
              }}
            >
              A million signals a day. 
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 sm:px-0">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="flex flex-col gap-2 sm:gap-2.5 border border-line-2 bg-gray-900 p-4 sm:p-5 md:p-6"
                style={{
                  clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                }}
              >
                <span className="font-display text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] font-medium leading-tight tracking-tight text-pista">
                  {s.value}
                </span>
                {s.label ? (
                  <span className="text-xs sm:text-sm md:text-[14px] font-medium text-ink">
                    {s.label}
                  </span>
                ) : null}
                <p className="text-xs sm:text-[13px] leading-relaxed text-muted text-pretty">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
