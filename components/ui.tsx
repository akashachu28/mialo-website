import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 *  Shared dark-theme primitives — see design.md.
 *  Used by /platform and / (home). Server components, no client JS.
 * ------------------------------------------------------------------ */

/* ---- Icons: stroke-only, 24px grid, one consistent style ---- */

const PATHS: Record<string, ReactNode> = {
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="M15.5 10l6-3.5v11l-6-3.5" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </>
  ),
  radio: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M9.2 9.2a4 4 0 0 0 0 5.6M14.8 9.2a4 4 0 0 1 0 5.6" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="7" rx="2" />
      <rect x="3.5" y="13" width="17" height="7" rx="2" />
      <path d="M7.5 7.5h.01M7.5 16.5h.01" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h4a3 3 0 0 1 3 3v4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  brain: (
    <path d="M12 5a3 3 0 0 0-6 .5A3 3 0 0 0 4 8.5 3 3 0 0 0 6 14v.5A3 3 0 0 0 12 17M12 5a3 3 0 0 1 6 .5A3 3 0 0 1 20 8.5 3 3 0 0 1 18 14v.5A3 3 0 0 1 12 17M12 5v12" />
  ),
  activity: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  ruler: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="1.5" />
      <path d="M7 8v3M12 8v4M17 8v3" />
    </>
  ),
  cloud: (
    <path d="M7 18a4 4 0 0 1 0-8 6 6 0 0 1 11.5 1.5A3.5 3.5 0 0 1 18 18z" />
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v3.5M10.5 13l-3.5 4M13.5 13l3.5 4" />
    </>
  ),
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  coins: (
    <>
      <circle cx="9" cy="9" r="5" />
      <path d="M14.5 6.5a5 5 0 1 1 0 11" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.7" />
    </>
  ),
  message: <path d="M4 5h16v11H8l-4 4z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6L9 17l-5-5" />,
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2l9.2-9.2M17 6l2.5 2.5M14.5 8.5L17 11" />
    </>
  ),
  crosshair: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  "trending-up": (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  loop: (
    <>
      <path d="M4 9a8 8 0 0 1 13.3-3.3L21 9M20 15a8 8 0 0 1-13.3 3.3L3 15" />
      <path d="M21 4v5h-5M3 20v-5h5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  blocks: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.2" />
      <rect x="13" y="3" width="8" height="8" rx="1.2" />
      <rect x="3" y="13" width="8" height="8" rx="1.2" />
      <rect x="13" y="13" width="8" height="8" rx="1.2" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9.5 21v-3h5v3" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V7l6 3v11z" />
      <path d="M9 21v-4M15 21v-4" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.6-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 10c0 5.4-7 10-7 10z" />
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
};

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  className,
  size = 20,
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/* ---- Layout ---- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-t border-line py-20 sm:py-[104px] ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* ---- Type ---- */

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C] ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
      {children}
    </span>
  );
}

export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.13em] text-faint ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  children,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full max-w-[720px] flex-col gap-5 ${
        center ? "mx-auto items-center text-center" : ""
      } ${className}`}
    >
      {/* <Eyebrow>{eyebrow}</Eyebrow> */}
      <h2
        className="w-full font-display text-[32px] font-medium leading-[1.12] tracking-[-0.025em] text-ice text-pretty sm:text-[40px]"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(32px, 7.2vw, 48px)",
          lineHeight: 1.1,
          letterSpacing: "-0.045em",
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p className="w-full max-w-[640px] text-[17px] leading-[1.62] text-gray-300 text-pretty">
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/* ---- Actions ---- */

export function ArrowLink({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center gap-[7px] text-[14px] font-medium text-ice transition-colors hover:text-[#97B4FF] ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        size={13}
        strokeWidth={1.8}
        className="transition-transform duration-150 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function PrimaryButton({
  children,
  arrow = true,
}: {
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <button
      className="group inline-flex items-center gap-[9px] bg-pista px-5 py-[11px] text-[14px] font-medium text-[#08090B] transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
      style={{
        clipPath:
          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
      }}
    >
      {children}
      {arrow ? (
        <Icon
          name="arrow"
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        />
      ) : null}
    </button>
  );
}

export function GhostButton({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex items-center border border-line-3 px-5 py-[11px] text-[14px] font-medium text-primary transition-[transform,color,border-color] duration-150 hover:-translate-y-0.5 hover:border-pista/40 hover:text-pista active:translate-y-0"
      style={{
        clipPath:
          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
      }}
    >
      {children}
    </button>
  );
}
