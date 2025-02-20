"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

export function UserBenefits() {
  const hostBenefits = [
    "Create digital shagun collections in under 2 minutes",
    "Track contributions in real-time with 100% accuracy",
    "Send personalized thank you notes automatically",
    "Get instant notifications for new gifts on any device",
  ]

  const guestBenefits = [
    "Send shagun digitally with just a few taps",
    "Choose from 10+ secure payment options",
    "Receive instant confirmation and digital receipt",
    "Access your contribution history anytime, anywhere",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simplify Shagun for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're hosting an event or attending one, ShagunPe makes the gifting process seamless and enjoyable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          {/* Host Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">Host with Ease</h3>
              <p className="text-gray-600">Manage your celebrations with digital convenience</p>
            </div>

            <div className="space-y-4 mb-8">
              {hostBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative h-64 md:h-80 mb-8">
              <Image
                src="https://img.freepik.com/free-vector/wedding-planner-concept-illustration_114360-2797.jpg"
                alt="Host managing digital shagun collections"
                fill
                className="object-contain"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
            >
              Start Hosting <ArrowRight className="w-5 h-5" />
            </motion.button>

            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
          </motion.div>

          {/* Guest Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">Gift with Joy</h3>
              <p className="text-gray-600">Contribute to celebrations seamlessly</p>
            </div>

            <div className="space-y-4 mb-8">
              {guestBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-yellow-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative h-64 md:h-80 mb-8">
              <Image
                src="https://img.freepik.com/free-vector/digital-wallet-concept-illustration_114360-7561.jpg"
                alt="Guest sending digital shagun"
                fill
                className="object-contain"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors"
            >
              Send Shagun <ArrowRight className="w-5 h-5" />
            </motion.button>

            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl -z-10 opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

