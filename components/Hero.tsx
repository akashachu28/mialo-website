import { Container, Eyebrow, PrimaryButton, GhostButton } from "./ui";
import { Reveal, RevealItem } from "./animations";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 30% 0%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 30% 0%, #000 0%, transparent 75%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger className="flex flex-col items-start gap-7">
            {/* <RevealItem>
              <Eyebrow>Mialo</Eyebrow>
            </RevealItem> */}

            <RevealItem
              as="h1"
              className="font-display text-[46px] font-medium leading-[1.0] tracking-[-0.03em] text-balance text-primary sm:text-[5rem]"
            >
              Observe.
              <br />
              Understand.
              <br />
              <span className="text-pista italic text-[6rem] leading-[1rem] tracking-[-0.03rem] text-balance" style={{ fontFamily: "Boska, serif" }}>Act.</span>
            </RevealItem>

            <RevealItem
              as="p"
              className="font-display text-[19px] font-medium tracking-[-0.01em] text-primary/90 sm:text-[21px]"
            >
              The intelligence layer for enterprise operations.
            </RevealItem>

            <RevealItem
              as="p"
              className="max-w-[520px] text-[16px] leading-[1.62] text-muted text-pretty"
            >
              Every enterprise generates thousands of operational moments every
              day. Mialo continuously transforms those moments into intelligent
              actions and measurable business outcomes.
            </RevealItem>

            <RevealItem className="mt-1 flex flex-wrap gap-3">
              <PrimaryButton>Book a demo</PrimaryButton>
              <GhostButton>Learn more</GhostButton>
            </RevealItem>
          </Reveal>

          <Reveal delay={0.15} className="w-full min-w-0 scale-110">
            <HeroCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
