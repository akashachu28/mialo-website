import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { Building2, PlaneTakeoff } from "lucide-react";

const METRICS = [
  { value: "10M+", label: "Events processed daily" },
  { value: "98%", label: "AI model accuracy" },
  { value: "2.5s", label: "Average time to decision" },
  { value: "+27%", label: "Operational impact" },
];

export default function IndustrySection3() {
  return (
    <section className="border-t border-line py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[104px]">
      <Container>
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-[18px] border border-line-2 mx-2 sm:mx-0">
          <div aria-hidden className="absolute inset-0">
            <Image
              src="/images/galaxyBanner.png"
              alt=""
              fill
              sizes="(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1180px) 85vw, 1100px"
              className="object-cover opacity-[0.25] sm:opacity-[0.28]"
            />
            <div className="absolute inset-0 bg-background/75 sm:bg-background/80" />
          </div>

          <div className="relative flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              {/* <Eyebrow>Proven at Scale</Eyebrow> */}
              <h2 className="max-w-full sm:max-w-[450px] md:max-w-[520px] font-display text-2xl sm:text-3xl md:text-[30px] lg:text-[32px] xl:text-[36px] font-medium leading-tight sm:leading-[1.15] md:leading-[1.12] tracking-tight text-primary text-pretty">
                Real impact. Proven at scale.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 border-t border-line pt-6 sm:pt-7 md:pt-8 lg:pt-9">
              {METRICS.map((m) => (
                <div key={m.value} className="flex flex-col gap-1.5 sm:gap-2">
                  <span className="font-display text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] xl:text-[32px] font-medium tracking-tight text-pista leading-tight">
                    {m.value}
                  </span>
                  <span className="text-xs sm:text-[13px] leading-relaxed text-muted">
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
