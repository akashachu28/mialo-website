import Image from "next/image";
import Link from "next/link";
import { Container, Kicker, PrimaryButton, GhostButton } from "@/components/ui";

const PANEL = [
  {
    title: "Customer behavior intelligence",
    body: "Track footfall, dwell time and conversion patterns in real time across every store.",
  },
  {
    title: "Shelf compliance",
    body: "Out-of-stock, planogram violations and pricing errors — detected and fixed faster.",
  },
  {
    title: "Loss prevention",
    body: "Shrinkage patterns and suspicious activity spotted before they become losses.",
  },
];

export default function HeroRetail() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-40">
      {/* dot-grid backdrop, faded from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
            <Link href="/industries" className="hover:text-primary transition-colors">
              Industries
            </Link>
            <span className="text-line-3">/</span>
            <span className="text-ice">Retail</span>
          </span>

          <h1 className="max-w-[1080px] font-display text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[60px]">
            Intelligence for every{" "}
            <span className="text-ice">store moment.</span>
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.62] text-ink text-pretty">
            Mialo transforms retail operations with real-time intelligence —
            understanding customer behavior, optimizing shelf compliance and
            preventing losses across every location.
          </p>

          <div className="mt-1.5 flex flex-wrap gap-3">
            <PrimaryButton>Request a demo</PrimaryButton>
            <GhostButton>Talk to an expert</GhostButton>
          </div>
        </div>

        {/* retail intelligence panel */}
        <div className="mt-16 overflow-hidden rounded-[18px] border border-line-2 bg-linear-to-b from-panel to-raise">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <Kicker>Retail Intelligence</Kicker>
            <Kicker className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_10px_#00E599] motion-safe:animate-blink" />
              Live
            </Kicker>
          </div>

          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/images/industryVision.png"
              alt="A retail floor with shopper detection zones and a movement heatmap"
              fill
              sizes="(max-width: 1180px) 100vw, 1100px"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {PANEL.map((p, i) => (
              <div
                key={p.title}
                className={`p-7 sm:p-8 ${
                  i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <Kicker className="text-ice">{p.title}</Kicker>
                <p className="mt-3 text-[14px] leading-[1.6] text-muted text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
