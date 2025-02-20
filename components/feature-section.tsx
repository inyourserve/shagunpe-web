"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FeatureSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">POWERFUL FEATURES TO HELP YOU</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature cards like OkCredit */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <Image src="/placeholder.svg" alt={`Feature ${i}`} width={48} height={48} className="mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature Title {i}</h3>
              <p className="text-gray-600">
                Feature description goes here. This explains the main benefit of using this feature.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

