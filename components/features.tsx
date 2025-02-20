"use client"

import { motion } from "framer-motion"
import { Gift, Shield, Smartphone, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Gift className="w-8 h-8 text-[#FFD700]" />,
      title: "Digital Collections",
      description: "Create and manage multiple shagun collections for different occasions",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FFD700]" />,
      title: "Secure Payments",
      description: "Bank-grade security for all your transactions",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#FFD700]" />,
      title: "Easy to Use",
      description: "Simple interface for hassle-free experience",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#FFD700]" />,
      title: "Real-time Tracking",
      description: "Monitor contributions and send thank you notes instantly",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to manage shagun</h2>
          <p className="text-xl text-gray-600">Modern features for modern celebrations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

