"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const BackgroundBeams = () => {
  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!beamsRef.current) return

    const beams = beamsRef.current
    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      beams.style.setProperty("--mouse-x", `${mouseX}px`)
      beams.style.setProperty("--mouse-y", `${mouseY}px`)
    }

    beams.addEventListener("mousemove", handleMouseMove)

    return () => {
      beams.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        ref={beamsRef}
        className="absolute inset-0 bg-[#FFCB14]/20"
        style={{
          backgroundImage: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 203, 20, 0.1) 0%, transparent 40%),
            radial-gradient(circle at calc(100% - var(--mouse-x, 50%)) var(--mouse-y, 50%), rgba(255, 203, 20, 0.1) 0%, transparent 40%),
            radial-gradient(circle at var(--mouse-x, 50%) calc(100% - var(--mouse-y, 50%)), rgba(255, 203, 20, 0.1) 0%, transparent 40%),
            radial-gradient(circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), rgba(255, 203, 20, 0.1) 0%, transparent 40%)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          duration: 5,
        }}
      />
    </div>
  )
}

