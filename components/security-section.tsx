"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Fingerprint } from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      title: "Bank-Grade Security",
      description: "Your transactions are protected with the highest level of encryption.",
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: "End-to-End Encryption",
      description: "All your data is encrypted from the moment it leaves your device.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-green-500" />,
      title: "Multi-Factor Authentication",
      description: "Add an extra layer of security with multi-factor authentication.",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Secure and Reliable</h2>
          <p className="text-xl text-gray-600">Your security is our top priority</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

