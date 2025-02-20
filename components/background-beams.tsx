"use client"

import { motion } from "framer-motion"

export function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90" />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${Math.random() * 100}% ${
              Math.random() * 100
            }%, rgba(139, 92, 246, 0.1), transparent 25%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            delay: i * 2.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

