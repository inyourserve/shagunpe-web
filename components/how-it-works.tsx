"use client"

import { motion } from "framer-motion"
import { Smartphone, Gift, FileText } from "lucide-react"
import Image from "next/image"

export function HowItWorks() {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Download & Set Up",
      description: "Download ShagunPe and create your account in minutes.",
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-600" />,
      title: "Send or Receive Shagun",
      description: "Use the app to send shagun or share your QR code to receive gifts.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Track & Manage",
      description: "Automatically track all transactions and generate reports.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ShagunPe Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the simplicity of digital shagun in three easy steps
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Image
              src="https://img.freepik.com/free-vector/digital-wallet-concept-illustration_114360-7561.jpg"
              alt="ShagunPe process illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="lg:w-1/2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

