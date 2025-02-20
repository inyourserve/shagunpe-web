"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TrustIndicators() {
  const partners = [
    { name: "UPI", logo: "/placeholder.svg" },
    { name: "NPCI", logo: "/placeholder.svg" },
    { name: "RazorPay", logo: "/placeholder.svg" },
    { name: "PayU", logo: "/placeholder.svg" },
  ]

  const metrics = [
    { number: "1M+", label: "Active Users" },
    { number: "₹100Cr+", label: "Shagun Processed" },
    { number: "4.8★", label: "App Rating" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-8">Trusted by 1 Million+ Users</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="opacity-60"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#FFD700] mb-2">{metric.number}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

