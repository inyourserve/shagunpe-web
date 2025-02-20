"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Zap, Target, Users } from "lucide-react"

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer First",
    description: "We put our users at the heart of everything we do",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Move Fast",
    description: "We believe in rapid iteration and continuous improvement",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Think Big",
    description: "We dream big and work towards ambitious goals",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Work",
    description: "We collaborate and support each other to achieve more",
  },
]

export function Culture() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <Image
                src="/placeholder.svg"
                alt="ShagunPe Culture"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-xl text-gray-600">
                We're building a culture of innovation, collaboration, and continuous learning
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

