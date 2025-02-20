"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function TextGenerateEffect({
  words,
  className = "",
}: {
  words: string
  className?: string
}) {
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block"
      >
        {words}
      </motion.span>
    </div>
  )
}

