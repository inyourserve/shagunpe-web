"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ComparisonSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 0), 100))
  }

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Traditional vs Digital</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Experience the evolution from traditional paper-based shagun records to our modern digital solution. Hover
            across the image to compare and see how ShagunPe transforms the way you manage wedding gifts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-lg cursor-col-resize"
            onMouseMove={handleMouseMove}
          >
            {/* Modern App Image (Right Side) */}
            <div className="absolute inset-0">
              <Image
                src="https://shagunpe.in/asset/shagunpe-mockup.png"
                alt="Modern ShagunPe App Interface"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Traditional System Image (Left Side) */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src="https://sjc.microlink.io/Qz9zgLHgnupYOQ61kdSK1R5kCdOaPvRvagjvHGTgj6mY15_WSMYsFUQz-FeM_zu-FtojusPuXyFQ4QhxViztNA.jpeg"
                alt="Traditional Shagun Record Keeping"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white transition-all duration-100"
              style={{ left: `${sliderPosition}%` }}
            >
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
        </motion.div>
      </div>
    </section>
  )
}

