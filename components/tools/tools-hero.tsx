"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function ToolsHero() {
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
              <span className="text-sm md:text-base text-gray-900 font-medium">Free Wedding Planning Tools</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Plan Your Perfect
              <span className="text-primary"> Celebration </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Access our suite of free tools designed to make your wedding planning journey smooth and memorable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <form className="flex w-full sm:w-auto gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-80 h-12 px-4 rounded-lg"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Get Access
                </button>
              </form>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">6+</div>
                <div className="text-xs md:text-sm text-gray-600">Free Tools</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">10K+</div>
                <div className="text-xs md:text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">4.8★</div>
                <div className="text-xs md:text-sm text-gray-600">User Rating</div>
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
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20 * i }}
                    animate={{
                      y: [20 * i, -10, 20 * i],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: i * 0.2,
                    }}
                    className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 mb-4" />
                    <div className="h-2 w-24 bg-gray-200 rounded mb-2" />
                    <div className="h-2 w-16 bg-gray-200 rounded" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

