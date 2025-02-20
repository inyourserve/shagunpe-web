"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function SparklesCore({
  background,
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  particleColor = "#FFFFFF",
  className,
  id,
}: {
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  className?: string
  id?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<any>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: randomInRange(minSize, maxSize),
      speedX: randomInRange(-0.5, 0.5),
      speedY: randomInRange(-0.5, 0.5),
    })

    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleDensity }, createParticle)
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (background) {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      particlesRef.current.forEach((particle) => {
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    handleResize()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [background, maxSize, minSize, particleColor, particleDensity])

  return <canvas ref={canvasRef} id={id} className={cn("h-full w-full", className)} />
}

