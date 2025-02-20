"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Gift, Smartphone } from "lucide-react"

export function StorySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                ShagunPe was born from a simple observation at Indian weddings - the hassle of managing cash gifts. In
                an era of digital transformation, we saw an opportunity to modernize this cherished tradition.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to seamlessly blend tradition with technology, making shagun giving as simple as a few
                taps on your phone.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Preserving Tradition</h3>
                    <p className="text-gray-600">Keeping the essence of shagun alive</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Digital Innovation</h3>
                    <p className="text-gray-600">Bringing gifting into the digital age</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://img.freepik.com/free-photo/indian-wedding-ceremony_8353-9940.jpg"
                alt="Traditional Indian Wedding"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

