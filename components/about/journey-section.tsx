"use client"

import { motion } from "framer-motion"

export function JourneySection() {
  const milestones = [
    {
      year: "2023",
      title: "Nationwide Expansion",
      description: "Expanded operations across all major cities in India",
    },
    {
      year: "2022",
      title: "1 Million Users",
      description: "Crossed the milestone of 1 million active users",
    },
    {
      year: "2021",
      title: "Launch of ShagunPe",
      description: "Official launch of ShagunPe app in major metro cities",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From a simple idea to revolutionize shagun giving, to becoming India's leading digital gifting platform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? "text-right" : ""}`}>
                      <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full">
                    <div className="absolute w-8 h-8 bg-primary/20 rounded-full -m-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

