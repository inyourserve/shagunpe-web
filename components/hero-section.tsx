"use client"

import { motion } from "framer-motion"
import { Gift, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-sm md:text-base text-gray-900 font-medium">Digital Shagun for Modern India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionize Wedding Gifting
              <span className="text-primary"> in the Digital Era </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              ShagunPe: Seamlessly send, receive, and manage digital shagun. Experience the future of gifting in India's
              cashless revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-base md:text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-50 text-gray-900 px-6 py-3 rounded-xl text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                See How It Works
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">1M+</div>
                <div className="text-xs md:text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">₹100Cr+</div>
                <div className="text-xs md:text-sm text-gray-600">Shagun Processed</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">4.8★</div>
                <div className="text-xs md:text-sm text-gray-600">App Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="relative z-10"
              >
                <Image
                  src="https://shagunpe.in/asset/shagunpe-mockup.png"
                  alt="ShagunPe App Interface"
                  width={400}
                  height={800}
                  className="rounded-[32px] shadow-xl mx-auto w-full max-w-[300px] md:max-w-[400px]"
                />
              </motion.div>

              {/* Subtle decorative elements */}
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

