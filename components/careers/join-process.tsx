"use client"

import { motion } from "framer-motion"
import { FileText, Users, Code, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Application Review",
    description: "Submit your application and we'll review it within 48 hours",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Initial Discussion",
    description: "Chat with our hiring team about your experience and aspirations",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Round",
    description: "Showcase your skills through relevant exercises and discussions",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Final Interview",
    description: "Meet the team and discuss the next steps",
  },
]

export function JoinProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Join Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our hiring process is designed to be transparent and efficient
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

