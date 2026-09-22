import Image from "next/image";
import { Container, Eyebrow, PrimaryButton, GhostButton } from "@/components/ui";

export default function ManufacturingSection4() {
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
        <Eyebrow>Ready to Transform Manufacturing</Eyebrow>
        <h2 className="max-w-[720px] font-display text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-balance text-primary sm:text-[38px]">
          Smarter factories start with intelligent operations.
        </h2>
        <p className="max-w-[560px] text-[15px] leading-[1.6] text-muted text-pretty">
          See how Mialo brings real-time intelligence to your manufacturing
          operations — catching issues before they cascade and optimizing every
          moment on the line.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <PrimaryButton>Request a demo</PrimaryButton>
          <GhostButton>Talk to manufacturing experts</GhostButton>
        </div>
      </Container>
    </section>
  );
}
