"use client"

import { motion } from "framer-motion"
import { Wallet, Clock, Users, Rocket, Gift, Laptop } from "lucide-react"

const benefits = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Competitive Compensation",
    description: "Attractive salary packages with equity opportunities",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Hours",
    description: "Work-life balance with flexible timing options",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Inclusive Culture",
    description: "Diverse and welcoming work environment",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Growth Opportunities",
    description: "Fast-track career growth in a rapidly expanding startup",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Great Perks",
    description: "Health insurance, wellness programs, and more",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Remote First",
    description: "Freedom to work from anywhere in India",
  },
]

export function Benefits() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why work with us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a team that values innovation, growth, and work-life balance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <div className="text-primary">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

