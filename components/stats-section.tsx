"use client"

import { motion } from "framer-motion"
import { Users, Download, IndianRupee } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-[#FFD700]" />,
      number: "1M+",
      label: "Active Users",
      description: "Trust ShagunPe for their celebrations",
    },
    {
      icon: <Download className="w-8 h-8 text-[#FFD700]" />,
      number: "4.8★",
      label: "App Rating",
      description: "On Play Store and App Store",
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-[#FFD700]" />,
      number: "₹100Cr+",
      label: "Shagun Processed",
      description: "Securely transferred through our platform",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-lg font-semibold text-[#FFD700] mb-2">{stat.label}</p>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

