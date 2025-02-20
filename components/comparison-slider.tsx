"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ComparisonSliderProps {
  className?: string
}

export function ComparisonSlider({ className }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()

    // Get pageX for both mouse and touch events
    const pageX = "touches" in event ? event.touches[0].pageX : event.pageX

    const containerX = pageX - containerRect.left
    const position = (containerX / containerRect.width) * 100

    // Clamp the position between 0 and 100
    const clampedPosition = Math.min(Math.max(position, 0), 100)
    setSliderPosition(clampedPosition)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    const handleMouseUpInternal = () => setIsDragging(false)
    document.addEventListener("mouseup", handleMouseUpInternal)
    document.addEventListener("touchend", handleMouseUpInternal)

    return () => {
      document.removeEventListener("mouseup", handleMouseUpInternal)
      document.removeEventListener("touchend", handleMouseUpInternal)
    }
  }, [])

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto"
      >
        <div
          ref={containerRef}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-lg"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Modern App Image (Right Side) */}
          <Image src="/placeholder.svg" alt="Modern ShagunPe App Interface" fill className="object-cover" />

          {/* Traditional System Image (Left Side) */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 w-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image src="/placeholder.svg" alt="Traditional Shagun Record Keeping" fill className="object-cover" />
          </div>

          {/* Slider Handle */}
          <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
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
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 right-4 flex justify-between text-white text-sm md:text-base font-medium">
          <div className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Traditional System</div>
          <div className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">ShagunPe App</div>
        </div>
      </motion.div>

      {/* Description */}
      <div className="mt-8 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Traditional vs Digital</h3>
        <p className="text-white/60">
          Experience the evolution from traditional paper-based shagun records to our modern digital solution. Drag the
          slider to compare and see how ShagunPe transforms the way you manage wedding gifts.
        </p>
      </div>
    </div>
  )
}

