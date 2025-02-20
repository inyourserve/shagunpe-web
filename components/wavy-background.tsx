"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function WavyBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "rgba(255, 147, 47, 0.2)")
      gradient.addColorStop(1, "rgba(255, 147, 47, 0.1)")

      ctx.fillStyle = gradient
      ctx.beginPath()

      for (let x = 0; x <= canvas.width; x += 1) {
        const y = Math.sin(x * 0.01 + time) * 50 + Math.sin(x * 0.02 + time) * 25 + canvas.height / 2
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

