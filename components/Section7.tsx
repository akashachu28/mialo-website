import { Section, SectionHeader } from "./ui";

const LOGOS = ["IBM", "Cisco", "Samsung", "Dell", "Oracle"];

const METRICS = [
  { value: "42%", label: "Faster time from signal to action" },
  { value: "3.1x", label: "Return on operational intelligence" },
  { value: "24/7", label: "Continuous monitoring and response" },
];

export default function Section7() {
  return (
    <Section>
      <SectionHeader
        className="mb-12"
        eyebrow="Customers"
        title="Trusted where operations cannot fail."
      />

      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        {LOGOS.map((l) => (
          <span
            key={l}
            className="font-display text-[17px] font-medium tracking-tight text-faint"
          >
            {l}
          </span>
        ))}
      </div>

      <figure className="mt-12 rounded-2xl border border-line-2 bg-raise p-8 sm:p-10">
        <blockquote className="font-display text-[20px] font-medium leading-[1.4] tracking-[-0.02em] text-primary text-pretty sm:text-[24px]">
          “Mialo turned our operational data from something we reported on into
          something that acts. We move from signal to decision in seconds, not
          meetings.”
        </blockquote>
        <figcaption className="mt-7 flex flex-col gap-0.5">
          <span className="text-[15px] font-medium text-primary">
            Elena Marsh
          </span>
          <span className="text-[13px] text-faint">
            Chief Operating Officer, Global Manufacturing Group
          </span>
        </figcaption>

        <div className="mt-9 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.value} className="flex flex-col gap-2">
              <span className="font-display text-[34px] font-medium tracking-[-0.02em] text-primary">
                {m.value}
              </span>
              <span className="text-[13px] leading-[1.5] text-muted">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </figure>
    </Section>
  );
}
