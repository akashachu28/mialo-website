import {
  Section,
  Container,
  Eyebrow,
  Kicker,
  ArrowLink,
  PrimaryButton,
  GhostButton,
  Icon,
} from "@/components/ui";

const NEWS = [
  {
    date: "May 15, 2025",
    title:
      "Mialo.ai powers operational intelligence for 250+ Harris Teeter stores",
  },
  {
    date: "Apr 28, 2025",
    title: "Mialo raises growth capital to scale its AI platform globally",
  },
  {
    date: "Mar 10, 2025",
    title: "Mialo.ai named among top AI innovators to watch",
  },
];

const OFFICES = [
  {
    city: "Bengaluru, India",
    label: "Global headquarters",
    address: "HustleHub, HSR Layout\nBengaluru 560078, India",
  },
  // {
  //   city: "Nairobi, Kenya",
  //   label: "Africa operations",
  //   address: "Westcom Point, 5th Floor\nMahiga Mairu Ave, Nairobi, Kenya",
  // },
  // {
  //   city: "Dallas, USA",
  //   label: "North America",
  //   address: "2301 N. Central Expressway\nRichardson, TX 75080, USA",
  // },
];

export default function CompanySection5() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* News & Press */}
          <div className="flex flex-col gap-6">
            <Kicker>News &amp; Press</Kicker>
            <div className="flex flex-col">
              {NEWS.map((n) => (
                <div
                  key={n.title}
                  className="flex flex-col gap-2 border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[11px] tracking-[0.1em] text-faint">
                    {n.date}
                  </span>
                  <h4 className="text-[14px] leading-[1.5] text-ink text-pretty">
                    {n.title}
                  </h4>
                  <ArrowLink>Read more</ArrowLink>
                </div>
              ))}
            </div>
            <ArrowLink>View all news</ArrowLink>
          </div>

          {/* Our Offices */}
          <div className="flex flex-col gap-6">
            <Kicker>Our Offices</Kicker>
            <div className="flex flex-col">
              {OFFICES.map((o) => (
                <div
                  key={o.city}
                  className="flex flex-col gap-1.5 border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <h4 className="font-display text-[15px] font-medium tracking-[-0.01em] text-primary">
                    {o.city}
                  </h4>
                  <Kicker className="text-ice">{o.label}</Kicker>
                  <p className="mt-1 whitespace-pre-line text-[12.5px] leading-[1.55] text-muted">
                    {o.address}
                  </p>
                </div>
              ))}
            </div>
            <ArrowLink>View all locations</ArrowLink>
          </div>

          {/* Join Our Mission */}
          <div className="flex flex-col gap-5">
            <Kicker>Join Our Mission</Kicker>
            <span className="flex h-11 w-11 items-center justify-center rounded-[11px] border border-ice/30 bg-ice/10 text-ice">
              <Icon name="users" size={20} />
            </span>
            <h4 className="font-display text-[20px] font-medium leading-[1.28] tracking-[-0.02em] text-primary text-pretty">
              Build the intelligence layer for the real world.
            </h4>
            <p className="text-[14px] leading-[1.6] text-muted text-pretty">
              We&apos;re looking for curious minds, bold thinkers and problem
              solvers.
            </p>
            <ArrowLink href="/careers" className="mt-1">
              Explore careers
            </ArrowLink>
          </div>
        </div>
      </Section>

      {/* -------- Closing CTA -------- */}
      <section className="relative overflow-hidden border-t border-line py-24 sm:py-[120px]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-[700px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(108,147,255,0.14), transparent 70%)",
          }}
        />
        <Container className="relative flex flex-col items-center gap-7 text-center">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="max-w-[620px] font-display text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-balance text-primary sm:text-[34px]">
            See what operational intelligence can do for your teams.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryButton>Talk to an expert</PrimaryButton>
            <GhostButton>Explore the platform</GhostButton>
          </div>
        </Container>
      </section>
    </>
  );
}
