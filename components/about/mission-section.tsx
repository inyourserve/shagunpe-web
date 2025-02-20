"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function MissionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-[#FFFDF7] rounded-3xl p-16 md:p-20 shadow-xl border border-primary/10">
            {/* Grid pattern inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl opacity-50" />

            <div className="relative text-center max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
              >
                We are in the business of
                <br />
                building <span className="text-primary">celebrations.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 mb-12"
              >
                Our mission is to reshape the digital gifting landscape
                <br />
                by defining the future of shagun.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gray-200/80" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-lg">Join our growing team of innovators</span>
                </div>

                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 group"
                >
                  Join Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

