'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ElementType, ReactNode } from 'react';

/* ------------------------------------------------------------------ *
 *  Shared motion — the site's single source for entrance and hover
 *  animation. Keep it restrained (see design.md §5): short fades,
 *  small travel, one idea per element. Every helper falls back to a
 *  plain element under `prefers-reduced-motion`.
 *
 *  Quick start
 *  -----------
 *    import { Reveal, RevealItem, HoverLift } from "@/components/animations";
 *
 *    // one block, fade + rise as it scrolls into view
 *    <Reveal><SomeSection /></Reveal>
 *
 *    // reveal children one after another (grids, lists)
 *    <Reveal stagger className="grid ...">
 *      {items.map((i) => (
 *        <RevealItem key={i.id} lift className="card">…</RevealItem>
 *      ))}
 *    </Reveal>
 *
 *    // subtle lift on hover, on its own
 *    <HoverLift className="card">…</HoverLift>
 *
 *  For anything bespoke, `import { motion } from "@/components/animations"`
 *  and drive it by hand with the presets below.
 * ------------------------------------------------------------------ */

/** Standard ease-out cubic bezier — calm, no overshoot. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = { fast: 0.28, base: 0.5, slow: 0.7 } as const;

/** Scroll trigger: fire once, a little before the block is fully in view. */
export const revealViewport = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.base, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/** Parent variants that release children in sequence. */
export const staggerParent = (gap = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren } },
});

type MotionTagName =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'ul'
  | 'li'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'a';

/* ---- Reveal: fade + rise on scroll ---- */

type RevealProps = {
  children: ReactNode;
  /** wrapper element (default `div`) */
  as?: MotionTagName;
  className?: string;
  /** seconds to wait before starting */
  delay?: number;
  /** stagger direct `<RevealItem>` children instead of moving as one block;
   *  pass a number to set the gap between them (seconds) */
  stagger?: boolean | number;
  /** vertical travel in px for the single-block form */
  y?: number;
  /** fraction that must be visible before firing (0–1) */
  amount?: number;
  /** re-run every time it re-enters the viewport */
  repeat?: boolean;
};

export function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  stagger = false,
  y = 24,
  amount = 0.2,
  repeat = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as as ElementType;
    return <Plain className={className}>{children}</Plain>;
  }

  const Tag = motion[as] as typeof motion.div;
  const viewport = { once: !repeat, amount };

  if (stagger !== false) {
    const gap = typeof stagger === 'number' ? stagger : 0.08;
    return (
      <Tag
        data-animate
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerParent(gap, delay)}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      data-animate
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.base, ease: EASE_OUT, delay },
        },
      }}
    >
      {children}
    </Tag>
  );
}

/* ---- RevealItem: a child of a `<Reveal stagger>` ---- */

type RevealItemProps = {
  children: ReactNode;
  as?: MotionTagName;
  className?: string;
  /** vertical travel in px */
  y?: number;
  /** also lift slightly on hover */
  lift?: boolean;
};

export function RevealItem({
  children,
  as = 'div',
  className,
  y = 18,
  lift = false,
}: RevealItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as as ElementType;
    return <Plain className={className}>{children}</Plain>;
  }

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      data-animate
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.base, ease: EASE_OUT },
        },
      }}
      whileHover={
        lift
          ? { y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}

/* ---- HoverLift: standalone hover affordance ---- */

type HoverLiftProps = {
  children: ReactNode;
  as?: MotionTagName;
  className?: string;
  /** vertical lift in px (negative = up) */
  y?: number;
  /** optional scale on hover */
  scale?: number;
};

export function HoverLift({
  children,
  as = 'div',
  className,
  y = -4,
  scale,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as as ElementType;
    return <Plain className={className}>{children}</Plain>;
  }

  const Tag = motion[as] as typeof motion.div;
  const hover: { y: number; scale?: number } = { y };
  if (scale) hover.scale = scale;

  return (
    <Tag
      className={className}
      whileHover={hover}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.6 }}
    >
      {children}
    </Tag>
  );
}

/* ---- escape hatch for one-off animation on any page ---- */

export { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'motion/react';
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
