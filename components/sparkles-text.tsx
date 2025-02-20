"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const generateSparkle = () => {
  return {
    id: Math.random(),
    createdAt: Date.now(),
    color: "hsl(50deg, 100%, 50%)",
    size: Math.random() * 10 + 10,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      zIndex: 2,
    },
  }
}

type Sparkle = ReturnType<typeof generateSparkle>

const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)"

const range = (start: number, end: number, step = 1) => {
  const output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

const random = (min: number, max: number) => Math.random() * (max - min) + min

const useRandomInterval = (callback: () => void, minDelay: number | null, maxDelay: number | null) => {
  const timeoutId = React.useRef<number | null>(null)
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    const isEnabled = typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current)
      }
    }
  }, [minDelay, maxDelay])

  const cancel = React.useCallback(() => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current)
    }
  }, [])

  return cancel
}

const SparkleInstance = ({ color = DEFAULT_COLOR, size, style }: { color: string; size: number; style: any }) => {
  return (
    <motion.span
      className="absolute block"
      style={style}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: ["0deg", "180deg"],
      }}
      transition={{
        duration: 0.7,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.2,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </svg>
    </motion.span>
  )
}

export function SparklesText({ children, className }: { children: React.ReactNode; className?: string }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useRandomInterval(
    () => {
      const sparkle = generateSparkle()
      const now = Date.now()
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    50,
    450,
  )

  return (
    <span className={cn("inline-block relative", className)}>
      {sparkles.map((sparkle) => (
        <SparkleInstance key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <strong className="relative z-1 font-bold">{children}</strong>
    </span>
  )
}

