"use client"

import { motion } from "framer-motion"
import { SparklesCore } from "@/components/sparkles"
import { ArrowRight } from "lucide-react"

export function VisionSection() {
  return (
    <section className="min-h-[80vh] relative flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFCB14"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Reimagining Shagun for the
            <span className="text-primary"> Digital Age</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            In a world where everything is going digital, why should our cherished tradition of shagun stay behind?
            We're here to transform how India celebrates, one digital gift at a time.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-primary text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 group"
          >
            Join Our Mission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

