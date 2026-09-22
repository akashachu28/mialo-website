import { Section, Eyebrow } from "@/components/ui";

const STATS: { value: string; label?: string; body: string }[] = [
  {
    value: "10+",
    label: "Years of innovation",
    body: "A decade of building AI solutions for real-world operational challenges.",
  },
  {
    value: "100+",
    label: "Enterprise customers",
    body: "Enterprises and government organizations across continents.",
  },
  {
    value: "1B+",
    label: "Signals processed daily",
    body: "From cameras, sensors, voices and documents — at the edge and in the cloud.",
  },
  {
    value: "Built for impact",
    body: "Our mission is to help enterprises operate safer, smarter and more efficiently every day.",
  },
];

export default function CompanySection2() {
  return (
    <Section>
      <div className="flex flex-col gap-12">
        <div className="flex max-w-[720px] flex-col gap-5">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="font-display text-[32px] font-medium leading-[1.12] tracking-[-0.025em] text-primary text-pretty sm:text-[40px]">
            Ten years in. A billion signals a day.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-2.5 rounded-[14px] border border-line-2 bg-raise p-6"
            >
              <span className="font-display text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-primary">
                {s.value}
              </span>
              {s.label ? (
                <span className="text-[14px] font-medium text-ink">{s.label}</span>
              ) : null}
              <p className="text-[13px] leading-[1.55] text-muted text-pretty">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
