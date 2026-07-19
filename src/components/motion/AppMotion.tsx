"use client";

import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

interface AppMotionProps {
  children: React.ReactNode;
}

export default function AppMotion({ children }: AppMotionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        key={pathname}
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 14, filter: "blur(8px)" }
        }
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
