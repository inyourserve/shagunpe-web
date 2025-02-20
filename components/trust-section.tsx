"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TrustSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Trust text like Cashbook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900">5 Cr+ Businesses using our free apps</h2>
            <p className="text-gray-600 mt-2">Access your account anywhere, anytime.</p>
          </motion.div>

          {/* Partner logos like Cashbook */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Image
                  src="/placeholder.svg"
                  alt={`Partner ${i}`}
                  width={120}
                  height={40}
                  className="h-10 w-auto opacity-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

