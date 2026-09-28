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
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Text content */}
            <SectionHeader
              eyebrow="Our company"
              titleIce="Built around your operations"
              leadBlack="We start with the challenge you need to solve, then bring together the right AI capabilities and operational context. The result is intelligence that fits the way your teams work and helps them respond when it matters."
            />


          {/* Right side - Image */}
          <div className="relative">
            <img
              src="/images/about_us.png"
              alt="Built around your operations"
              className="w-full h-auto"
              style={{
                clipPath:
                  "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
              }}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-[720px] flex-col gap-5">
            {/* <Eyebrow>By the numbers</Eyebrow> */}
            <h2 className="font-display text-[32px] font-medium leading-[1.12] tracking-[-0.025em] text-gray-700 text-pretty sm:text-[40px]"
            style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(32px, 7.2vw, 60px)",
          lineHeight: 0.96,
          letterSpacing: "-0.045em",
        }}>
              Ten years in. 
            </h2>
            <h2 className="font-display text-[32px] font-medium leading-[1.12] tracking-[-0.025em] text-ice text-pretty sm:text-[40px]"
            style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(32px, 7.2vw, 60px)",
          lineHeight: 0.96,
          letterSpacing: "-0.045em",
        }}>
              A million signals a day. 
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="flex flex-col gap-2.5  border border-line-2 bg-gray-900 p-6"
                style={{
            clipPath: "polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px)",
          }}
              >
                <span className="font-display text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-pista">
                  {s.value}
                </span>
                {s.label ? (
                  <span className="text-[14px] font-medium text-ink">
                    {s.label}
                  </span>
                ) : null}
                <p className="text-[13px] leading-[1.55] text-muted text-pretty">
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
