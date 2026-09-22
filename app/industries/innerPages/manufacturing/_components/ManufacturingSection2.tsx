import Image from "next/image";
import { Section, SectionHeader, Icon, type IconName } from "@/components/ui";

type UseCase = {
  icon: IconName;
  title: string;
  description: string;
  metrics: string;
};

const USE_CASES: UseCase[] = [
  {
    icon: "alert-triangle",
    title: "Quality control automation",
    description:
      "Computer vision inspects every component at line speed — flagging defects human eyes would miss.",
    metrics: "Defect rates down 34%",
  },
  {
    icon: "activity",
    title: "Predictive maintenance",
    description:
      "Vibration, temperature and acoustic signals predict failures days before they happen.",
    metrics: "Unplanned downtime reduced 48%",
  },
  {
    icon: "shield",
    title: "Safety compliance",
    description:
      "Real-time monitoring of PPE usage, zone intrusions and ergonomic risks across the floor.",
    metrics: "Incidents reduced 67%",
  },
  {
    icon: "trending-up",
    title: "Production optimization",
    description:
      "Bottlenecks identified and resolved in real time to keep throughput at peak levels.",
    metrics: "OEE improved by 23%",
  },
  {
    icon: "package",
    title: "Inventory intelligence",
    description:
      "Track raw material flow and work-in-progress with precision, reducing waste and stockouts.",
    metrics: "Carrying costs down 19%",
  },
  {
    icon: "users",
    title: "Workforce analytics",
    description:
      "Understand skill deployment, shift performance and training needs across teams.",
    metrics: "Labor efficiency up 15%",
  },
];

export default function ManufacturingSection2() {
  return (
    <Section>
      <div className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="Manufacturing Use Cases"
          title="Intelligence across every manufacturing moment."
          lead="From the line to the warehouse, Mialo brings real-time awareness to the systems that matter most."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-[14px] border border-line-2 bg-raise p-6 transition-colors hover:border-line-3"
            >
              <div className="flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-[11px] border border-ice/30 bg-ice/10 text-ice">
                  <Icon name={useCase.icon} size={20} />
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[17px] font-medium tracking-[-0.01em] text-primary">
                    {useCase.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.55] text-muted text-pretty">
                    {useCase.description}
                  </p>
                </div>

                <div className="mt-2 rounded-[8px] border border-green/20 bg-green/5 px-3 py-2">
                  <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-green">
                    {useCase.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
