"use client";

import { motion, useReducedMotion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 32,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const hiddenPosition = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, ...hiddenPosition }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -4% 0px" }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
