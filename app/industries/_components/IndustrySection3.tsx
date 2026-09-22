import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";

const METRICS = [
  { value: "2.4B+", label: "Events processed daily" },
  { value: "98.7%", label: "AI model accuracy" },
  { value: "2.3s", label: "Average time to decision" },
  { value: "+27%", label: "Operational impact" },
];

export default function IndustrySection3() {
  return (
    <section className="border-t border-line py-20 sm:py-[104px]">
      <Container>
        <div className="relative overflow-hidden rounded-[18px] border border-line-2">
          <div aria-hidden className="absolute inset-0">
            <Image
              src="/images/galaxyBanner.png"
              alt=""
              fill
              sizes="(max-width: 1180px) 100vw, 1100px"
              className="object-cover opacity-[0.28]"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>

          <div className="relative flex flex-col gap-9 p-8 sm:p-12">
            <div className="flex flex-col gap-5">
              <Eyebrow>Proven at Scale</Eyebrow>
              <h2 className="max-w-[520px] font-display text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-primary text-pretty sm:text-[36px]">
                Real impact. Proven at scale.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-9 sm:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.value} className="flex flex-col gap-2">
                  <span className="font-display text-[32px] font-medium tracking-[-0.02em] text-ice">
                    {m.value}
                  </span>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
