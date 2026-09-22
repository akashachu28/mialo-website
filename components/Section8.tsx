import { Container, Eyebrow, PrimaryButton, GhostButton } from "./ui";

export default function Section8() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(108,147,255,0.14), transparent 70%)",
        }}
      />
      <Container className="relative flex flex-col items-center gap-7 text-center">
        <Eyebrow>Get started</Eyebrow>
        <h2 className="max-w-[640px] font-display text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-balance text-primary sm:text-[40px]">
          Make your operations intelligent.
        </h2>
        <p className="max-w-[560px] text-[16px] leading-[1.6] text-muted text-pretty">
          See how the intelligence layer works inside your environment — with
          your signals, your systems and your outcomes.
        </p>
        <div className="mt-1 flex flex-wrap justify-center gap-3">
          <PrimaryButton>Request a demo</PrimaryButton>
          <GhostButton>Contact sales</GhostButton>
        </div>
      </Container>
    </section>
  );
}
