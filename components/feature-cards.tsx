"use client"

import { motion } from "framer-motion"
import { Shield, Gift, Zap, Users } from "lucide-react"

export function FeatureCards() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#FFD700]" />,
      title: "Secure Transactions",
      description: "Bank-grade security for all your shagun transactions",
    },
    {
      icon: <Gift className="w-12 h-12 text-[#FFD700]" />,
      title: "Smart Collections",
      description: "Create and manage multiple shagun collections",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#FFD700]" />,
      title: "Instant Transfer",
      description: "Transfer funds directly to your bank account",
    },
    {
      icon: <Users className="w-12 h-12 text-[#FFD700]" />,
      title: "Group Collections",
      description: "Perfect for family events and celebrations",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Future of Shagun</h2>
          <p className="text-xl text-gray-600">Modern features designed for modern celebrations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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

