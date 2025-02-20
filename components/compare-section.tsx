"use client"

import { motion } from "framer-motion"
import { Compare } from "@/components/ui/compare"

export function CompareSection() {
  return (
    <section className="py-24 relative">
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
            to compare and see how ShagunPe transforms the way you manage wedding gifts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Compare
            firstImage="https://bloggervikash.com/wp-content/uploads/2025/02/Screenshot-2025-02-18-at-4.30.14%20AM.jpg"
            secondImage="https://bloggervikash.com/wp-content/uploads/2025/02/Screenshot-2025-02-18-at-4.28.37%E2%80%AFAM.jpg"
            className="w-full max-w-3xl aspect-[16/9]"
            slideMode="hover"
          />
        </motion.div>
      </div>
    </section>
  )
}

