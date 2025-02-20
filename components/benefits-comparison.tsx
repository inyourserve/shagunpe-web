"use client"

import { motion } from "framer-motion"
import { Check, X, BookOpen, CreditCard, MapPin } from "lucide-react"
import Image from "next/image"

export function BenefitsComparison() {
  const comparisons = [
    {
      aspect: "Record Keeping",
      icon: <BookOpen className="w-6 h-6" />,
      traditional: {
        text: "Manual paper records",
        image: "https://img.freepik.com/free-photo/accounting-concept-with-old-methods_23-2149151152.jpg",
      },
      digital: {
        text: "Instant digital tracking",
        image: "https://img.freepik.com/free-vector/digital-device-concept-illustration_114360-7572.jpg",
      },
    },
    {
      aspect: "Payments",
      icon: <CreditCard className="w-6 h-6" />,
      traditional: {
        text: "Cash only",
        image: "https://img.freepik.com/free-photo/indian-rupee-notes-going-inside-piggy-bank_23-2148039955.jpg",
      },
      digital: {
        text: "Multiple payment options",
        image: "https://img.freepik.com/free-vector/digital-wallet-concept-illustration_114360-7561.jpg",
      },
    },
    {
      aspect: "Accessibility",
      icon: <MapPin className="w-6 h-6" />,
      traditional: {
        text: "Physical presence needed",
        image: "https://img.freepik.com/free-photo/traditional-indian-wedding-items_23-2148984374.jpg",
      },
      digital: {
        text: "Send from anywhere",
        image: "https://img.freepik.com/free-vector/location-sharing-concept-illustration_114360-5765.jpg",
      },
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Traditional vs Digital Shagun</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how ShagunPe transforms the traditional gifting experience
          </p>
        </motion.div>

        <div className="grid gap-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {comparison.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{comparison.aspect}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Traditional Method */}
                <div className="relative group overflow-hidden rounded-xl border border-red-100 hover:border-red-200 bg-white transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">{comparison.traditional.text}</h4>
                    </div>
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src={comparison.traditional.image || "/placeholder.svg"}
                        alt={`Traditional ${comparison.aspect}`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Digital Method */}
                <div className="relative group overflow-hidden rounded-xl border border-green-100 hover:border-green-200 bg-white transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">{comparison.digital.text}</h4>
                    </div>
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src={comparison.digital.image || "/placeholder.svg"}
                        alt={`Digital ${comparison.aspect}`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

