"use client"

import { motion } from "framer-motion"
import { TreePine, Heart, IndianRupee } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision for Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond digitizing shagun, we're working towards creating meaningful change
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <TreePine className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
            <p className="text-gray-600">
              By eliminating paper envelopes, we aim to save trees and reduce waste. One digital shagun at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Inclusion</h3>
            <p className="text-gray-600">
              Making celebrations more inclusive by enabling distant relatives and friends to participate meaningfully.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <IndianRupee className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital India</h3>
            <p className="text-gray-600">
              Contributing to India's digital transformation by modernizing traditional practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

