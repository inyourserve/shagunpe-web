"use client"

import { motion } from "framer-motion"

export function TypewriterEffect({
  words,
}: {
  words: {
    text: string
    className?: string
  }[]
}) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-center leading-normal md:leading-normal"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span key={idx} className={word.className} variants={child}>
          {word.text}{" "}
        </motion.span>
      ))}
    </motion.h1>
  )
}

