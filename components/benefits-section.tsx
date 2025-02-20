"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Clock, CreditCard, Smartphone } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      description: "Bank-grade security for all your shagun transfers",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Transfer",
      description: "Receive shagun directly in your bank account",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Payment Options",
      description: "Accept shagun via UPI, cards, or net banking",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Easy to Use",
      description: "Simple interface for hassle-free experience",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-200/30 rounded-full blur-2xl" />
              <Image
                src="https://shagunpe.in/asset/shagunpe-mockup.png"
                alt="ShagunPe App Benefits"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right side - Benefits */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ShagunPe?</h2>
              <p className="text-xl text-gray-600">
                Experience the future of shagun with our innovative digital platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

