import Image from "next/image";
import { Container, Eyebrow, PrimaryButton, GhostButton } from "@/components/ui";

export default function IndustrySection4() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-[120px]">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/horizonBanner.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-background) 0%, transparent 45%, var(--color-background) 100%)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <Eyebrow>Our Vision</Eyebrow>
        <h2 className="max-w-[720px] font-display text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-balance text-primary sm:text-[38px]">
          A world where every operation is intelligent, connected and
          human-safe.
        </h2>
        <p className="max-w-[560px] text-[15px] leading-[1.6] text-muted text-pretty">
          We envision a future where organizations of every size can anticipate
          what is next, automate with confidence and create lasting impact.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <PrimaryButton>Learn more about Mialo</PrimaryButton>
          <GhostButton>Talk to experts</GhostButton>
        </div>
      </Container>
    </section>
  );
}
