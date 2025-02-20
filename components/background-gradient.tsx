"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !animate) return

    container.addEventListener("mousemove", handleMouseMove)
    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [animate]) // Removed handleMouseMove from dependencies

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden rounded-3xl p-[1px] transition-all", containerClassName)}
    >
      <div
        style={{
          background: animate
            ? `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(249,115,22,0.1) 0%, transparent 80%)`
            : "",
        }}
        className="absolute inset-0"
      />
      <div className={cn("relative h-full w-full rounded-3xl bg-black", className)}>{children}</div>
    </div>
  )
}

