import HeroManufacturing from "./_components/HeroManufacturing";
import ManufacturingSection2 from "./_components/ManufacturingSection2";
import ManufacturingSection3 from "./_components/ManufacturingSection3";
import ManufacturingSection4 from "./_components/ManufacturingSection4";

export const metadata = {
  title: "Manufacturing Intelligence — Mialo",
  description:
    "Optimize manufacturing operations with AI-powered intelligence. Detect line anomalies, ensure safety compliance, and maximize uptime before issues cascade.",
};

export default function Manufacturing() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroManufacturing />
      <ManufacturingSection2 />
      <ManufacturingSection3 />
      <ManufacturingSection4 />
    </div>
  );
}
