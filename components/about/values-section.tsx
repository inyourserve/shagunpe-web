"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Zap, Users, Leaf } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Customer First",
      description: "Every decision we make starts with our users in mind",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust & Security",
      description: "Maintaining the highest standards of security and privacy",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Constantly improving and innovating our services",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Inclusivity",
      description: "Making digital gifting accessible to everyone",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainability",
      description: "Contributing to a greener future through digitization",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The core principles that guide us in our mission to transform digital gifting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

