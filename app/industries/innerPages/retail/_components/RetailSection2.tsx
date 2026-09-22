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
    icon: "users",
    title: "Customer flow analytics",
    description:
      "Understand how shoppers move through your store — hotspots, dwell time and conversion zones.",
    metrics: "Conversion up 18%",
  },
  {
    icon: "package",
    title: "Shelf intelligence",
    description:
      "Real-time detection of out-of-stocks, misplaced products and planogram compliance issues.",
    metrics: "Stockouts reduced 42%",
  },
  {
    icon: "shopping-bag",
    title: "Queue management",
    description:
      "Monitor checkout wait times and trigger staff alerts to optimize customer experience.",
    metrics: "Wait times down 35%",
  },
  {
    icon: "alert-circle",
    title: "Loss prevention",
    description:
      "Detect suspicious behavior patterns and shrinkage events in real time across all locations.",
    metrics: "Shrinkage reduced 28%",
  },
  {
    icon: "bar-chart-2",
    title: "Promotional effectiveness",
    description:
      "Measure customer engagement with displays, end-caps and promotional zones.",
    metrics: "ROI increased 24%",
  },
  {
    icon: "clock",
    title: "Staff optimization",
    description:
      "Align staffing levels with foot traffic patterns to maximize service and minimize costs.",
    metrics: "Labor costs down 16%",
  },
];

export default function RetailSection2() {
  return (
    <Section>
      <div className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="Retail Use Cases"
          title="Intelligence across every retail moment."
          lead="From the entrance to checkout, Mialo delivers real-time awareness of the moments that drive performance."
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
