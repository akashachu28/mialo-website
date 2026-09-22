import HeroSolution from "./_components/HeroSolution";
import SolutionSection1 from "./_components/SolutionSection1";
import SolutionSection2 from "./_components/SolutionSection2";

export const metadata = {
  title: "Solutions — Mialo",
  description:
    "Pre-built AI solutions powered by the Mialo Intelligence Layer — fast time-to-value and measurable outcomes across retail, safety, broadcast, documents, voice and measurement.",
};

export default function Solution() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroSolution />
      <SolutionSection1 />
      <SolutionSection2 />
    </div>
  );
}
