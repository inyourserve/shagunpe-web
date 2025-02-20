"use client"

import { motion } from "framer-motion"
import { SparklesCore } from "@/components/sparkles"
import { MessageCircle } from "lucide-react"

export function ContactHero() {
  return (
    <section className="min-h-[50vh] relative flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Sparkles animation */}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-sm md:text-base text-gray-900 font-medium">24/7 Customer Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            We're here to <span className="text-primary">help</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Get in touch with our support team for any questions or concerns about ShagunPe
          </motion.p>
        </div>
      </div>
    </section>
  )
}

