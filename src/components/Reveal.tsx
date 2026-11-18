"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const revealVariants = {
  rise: {
    hidden: { opacity: 0, y: 40 },
    shown: { opacity: 1, y: 0 },
  },
  fly: {
    hidden: { opacity: 0, x: 56, y: 12, scale: 0.96 },
    shown: { opacity: 1, x: 0, y: 0, scale: 1 },
  },
  title: {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    shown: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -64, filter: "blur(6px)" },
    shown: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 64, filter: "blur(6px)" },
    shown: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  flip: {
    hidden: { opacity: 0, rotateX: -75, y: 30, transformPerspective: 900 },
    shown: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 900 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.6, rotate: -12 },
    shown: { opacity: 1, scale: 1, rotate: 0 },
  },
} satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof revealVariants;

export const spring = (delay = 0) =>
  ({ type: "spring", stiffness: 90, damping: 16, mass: 0.9, delay }) as const;

export const viewport = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" } as const;


type Props = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
};

/** Scroll-reveal wrapper: fades and moves its child in the first time it enters the viewport. */
export default function Reveal({ children, variant = "rise", delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "50% 100%" }}
      variants={revealVariants[variant]}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      transition={spring(delay)}
      
    >
      {children}
    </motion.div>
  );
}
