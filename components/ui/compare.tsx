"use client"

import * as React from "react"
import { useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface CompareProps {
  firstImage: string
  secondImage: string
  firstImageClassName?: string
  secondImageClassname?: string
  className?: string
  slideMode?: "hover" | "drag"
}

export function Compare({
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassname,
  className,
  slideMode = "hover",
}: CompareProps) {
  const [isHovering, setIsHovering] = React.useState(false)
  const x = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = React.useState(50)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const position = useTransform(x, [-150, 150], [0, 100])
  const handleDrag = () => {
    if (!ref.current) return
    const percentage = (x.get() + 150) / 3
    setSliderPosition(percentage)
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl border border-white/10", className)}
      ref={ref}
      onMouseMove={slideMode === "hover" ? handleMouseMove : undefined}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* First Image - Old System */}
      <img
        src={firstImage || "/placeholder.svg"}
        className={cn("h-full w-full object-cover object-left-top", firstImageClassName)}
        alt="Traditional Shagun Record Keeping"
      />

      {/* Second Image - New System */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={secondImage || "/placeholder.svg"}
          className={cn("h-full w-full object-cover object-left-top", secondImageClassname)}
          alt="Modern ShagunPe App Interface"
        />
      </div>

      {/* Slider Line */}
      <div className="absolute inset-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 right-4 flex justify-between text-white text-sm md:text-base font-medium">
        <div className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Traditional System</div>
        <div className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">ShagunPe App</div>
      </div>
    </div>
  )
}

