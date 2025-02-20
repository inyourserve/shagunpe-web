"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export function AppShowcase() {
  const features = [
    "Create digital shagun collections instantly",
    "Track contributions in real-time",
    "Send personalized thank you notes",
    "Multiple payment options",
    "Detailed analytics and insights",
    "24/7 customer support",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - App mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Image
              src="https://shagunpe.in/asset/shagunpe-mockup.png"
              alt="ShagunPe App Interface"
              width={400}
              height={800}
              className="rounded-2xl shadow-lg mx-auto"
            />
          </motion.div>

          {/* Right side - Features list */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need in one app</h2>
              <p className="text-xl text-gray-600">
                Manage all your shagun collections with our feature-rich mobile app
              </p>
            </motion.div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <button className="bg-[#FFD700] text-gray-900 px-8 py-4 rounded-lg hover:bg-[#FFE44D] transition-colors">
                Download Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

