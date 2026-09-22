import Image from "next/image";
import { Section, SectionHeader, Icon, type IconName } from "@/components/ui";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "target",
    title: "Our mission",
    body: "To empower enterprises with a unified intelligence layer that observes, understands and acts — transforming how the world operates in real time.",
  },
  {
    icon: "eye",
    title: "Our vision",
    body: "A world where every operational decision is intelligent, every action is optimized and every organization is future-ready.",
  },
];

export default function CompanySection3() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeader eyebrow="Mission & Vision" title="Why Mialo exists." />

          <div className="flex flex-col">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 border-t border-line py-6 first:border-t-0 first:pt-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-ice/30 bg-ice/10 text-ice">
                  <Icon name={p.icon} size={20} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[18px] font-medium tracking-[-0.01em] text-primary">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-muted text-pretty">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-line-2 bg-panel">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/vision&mission.png"
              alt="A glowing globe wrapped in streams of light"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
