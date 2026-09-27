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
    label: "Mialo Technologies Pvt. Ltd.",
    address: "Block – H209, 1st Floor, Hustlehub Tech Park,\n 208, 27th Main Rd, ITI Layout, Sector 2,\n HSR Layout, Bengaluru, Karnataka 560102",
  },
  
];

export default function CompanySection5() {
  return (
    <>
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Our Offices */}
          <div className="flex flex-col gap-8">
            <h3 
              className="text-primary"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Our Offices
            </h3>
            <div className="flex flex-col gap-6">
              {OFFICES.map((o) => (
                <div
                  key={o.city}
                  className="flex flex-col gap-3"
                >
                  <h4 
                    className="text-primary"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {o.city}
                  </h4>
                  <p 
                    className="text-ice"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {o.label}
                  </p>
                  <p 
                    className="whitespace-pre-line text-muted"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: 1.6,
                      letterSpacing: "0em",
                    }}
                  >
                    {o.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Our Mission */}
          <div className="flex flex-col gap-8">
            <h3 
              className="text-primary"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Join Our Mission
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ice/30 bg-ice/10 text-ice">
                  <Icon name="users" size={22} />
                </span>
                <h4 
                  className="text-primary text-pretty"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(18px, 2vw, 22px)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Build the intelligence layer for the real world.
                </h4>
              </div>
              <p 
                className="text-muted text-pretty"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: 1.6,
                  letterSpacing: "0em",
                }}
              >
                We&apos;re looking for curious minds, bold thinkers and problem
                solvers.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
