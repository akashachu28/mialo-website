import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Circle, BarChart2 } from "lucide-react";
import { Container, Kicker } from "@/components/ui";

const META = [
  {
    icon: Circle,
    label: "Client",
    value: "A Singapore Based Food Manufacturing Company",
  },
  {
    icon: BarChart2,
    label: "Industry",
    value: "Food & Beverage Manufacturing",
  },
];

export default function HeroInboundPallet() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Grid texture */}
      <div aria-hidden className="absolute inset-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-pista) 1px, transparent 1px), linear-gradient(90deg, var(--color-pista) 1px, transparent 1px)",
            backgroundSize: "62px 62px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Full-bleed background image */}
      <div className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-50">
        <Image
          src="/images/Automated Pallet Inspection System.png"
          alt="Automated inbound pallet inspection with AI overlay"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Left-side fade so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,9,11,0.92) 0%, rgba(8,9,11,0.65) 50%, rgba(8,9,11,0.15) 100%)",
          }}
        />
        {/* Top & bottom fades */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,9,11,0.75) 0%, transparent 40%, rgba(8,9,11,0.7) 100%)",
          }}
        />
      </div>

      <Container className="relative">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 sm:mb-10 flex items-center gap-1.5 text-[13px] text-ink"
        >
          <Link
            href="/case-studies"
            className="hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-faint shrink-0" strokeWidth={2} />
          <span className="text-primary truncate">
            Automated Inbound Pallet Inspection
          </span>
        </nav>

        {/* Content */}
        <div className="flex flex-col gap-5 sm:gap-6 max-w-[680px]">
          {/* Category pill */}
          <span className="inline-flex w-fit items-center rounded-md border border-pista/40 bg-pista/10 px-3 py-1">
            <Kicker className="text-pista text-[11px] tracking-widest">
              Food &amp; Beverage
            </Kicker>
          </span>

          {/* Title */}
          <h1
            className="text-primary text-balance"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(30px, 6vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Automated Inbound
            <br />
            Pallet Inspection
          </h1>

          {/* Description */}
          <p
            className="text-ink text-pretty"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(15px, 2.5vw, 19px)",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
            }}
          >
            Read labels, check against SAP and ensure traceability.
          </p>

          {/* Meta row */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-6 sm:gap-10">
            {META.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line-2 bg-panel/80 backdrop-blur-sm text-pista">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-medium text-muted tracking-wide">
                    {label}
                  </span>
                  <span
                    className="text-ink text-pretty max-w-[200px]"
                    style={{ fontSize: "clamp(12px, 1.5vw, 14px)", lineHeight: 1.5 }}
                  >
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
