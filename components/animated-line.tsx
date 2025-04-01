"use client"

import { motion } from "framer-motion"

interface AnimatedLineProps {
  className?: string
  delay?: number
}

export default function AnimatedLine({ className = "", delay = 0 }: AnimatedLineProps) {
  return (
    <motion.div
      className={`h-px bg-neutral-200 ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformOrigin: "left" }}
    />
  )
}

