"use client"

import { motion } from "framer-motion"
import { SparklesCore } from "./sparkles"
import { TypewriterEffect } from "./typewriter-effect"
import { BackgroundBeams } from "./background-beams"
import { Button } from "./ui/button"

export function CircuitBoardHero() {
  const words = [
    {
      text: "The",
    },
    {
      text: "Future",
    },
    {
      text: "of",
    },
    {
      text: "Shagun",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "is",
    },
    {
      text: "Digital",
      className: "text-[#C5FF32] dark:text-[#C5FF32]",
    },
  ]

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Animated beams */}
      <BackgroundBeams />

      {/* Sparkles */}
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#f97316"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className="mb-8">
            <TypewriterEffect words={words} />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white/60 text-xl mt-4 max-w-2xl mx-auto px-4"
          >
            Transform traditional shagun giving into a seamless digital experience. Modern solutions for timeless
            traditions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-8"
          >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative circuit lines */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C5FF32]/50 to-transparent translate-y-1" />
    </div>
  )
}

