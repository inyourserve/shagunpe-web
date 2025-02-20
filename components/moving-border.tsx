"use client"

import { motion } from "framer-motion"
import React from "react"

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  [key: string]: any
}) => {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <div
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="relative"
      {...otherProps}
    >
      <motion.div
        initial={{
          x: -64,
          y: -64,
        }}
        animate={
          isPlaying
            ? {
                x: [-64, -64, 64, 64, -64],
                y: [-64, 64, 64, -64, -64],
                rotate: [0, 0, 180, 180, 360],
              }
            : {}
        }
        transition={
          isPlaying
            ? {
                duration: duration / 1000,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }
            : {}
        }
        className="absolute -inset-px rounded-3xl opacity-60 blur-xl transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #f97316 0%, #ea580c 100%)",
        }}
      />
      <motion.div
        initial={{
          x: 64,
          y: -64,
        }}
        animate={
          isPlaying
            ? {
                x: [64, 64, -64, -64, 64],
                y: [-64, 64, 64, -64, -64],
                rotate: [0, 0, 180, 180, 360],
              }
            : {}
        }
        transition={
          isPlaying
            ? {
                duration: duration / 1000,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }
            : {}
        }
        className="absolute -inset-px rounded-3xl opacity-60 blur-xl transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #ea580c 0%, #f97316 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

