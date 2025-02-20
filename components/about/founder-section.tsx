"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The story begins with a simple observation at a wedding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg"
                alt="Founder"
                width={400}
                height={500}
                className="rounded-2xl shadow-lg mx-auto"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vikash Kumar</h3>
              <p className="text-primary font-medium mb-6">Founder & CEO</p>
              <p className="text-lg text-gray-600 mb-6">
                "At my cousin's wedding, I noticed how chaotic the shagun collection process was. People were struggling
                with change, envelopes were getting misplaced, and the entire experience felt outdated in our digital
                age. That's when the idea for ShagunPe was born."
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a background in technology and a deep understanding of Indian traditions, Vikash set out to create
                a solution that would bridge the gap between our cultural practices and digital convenience.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a href="#" className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-lg">
                  <Twitter className="w-6 h-6 text-primary" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

