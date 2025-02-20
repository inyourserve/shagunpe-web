"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const positions = [
  {
    department: "Engineering",
    roles: [
      {
        title: "Senior Frontend Engineer",
        location: "Bangalore",
        type: "Full-time",
        experience: "4-6 years",
      },
      {
        title: "Backend Developer",
        location: "Remote",
        type: "Full-time",
        experience: "3-5 years",
      },
    ],
  },
  {
    department: "Product & Design",
    roles: [
      {
        title: "Product Manager",
        location: "Bangalore",
        type: "Full-time",
        experience: "5-7 years",
      },
      {
        title: "UI/UX Designer",
        location: "Remote",
        type: "Full-time",
        experience: "3-5 years",
      },
    ],
  },
  {
    department: "Marketing & Growth",
    roles: [
      {
        title: "Growth Marketing Manager",
        location: "Bangalore",
        type: "Full-time",
        experience: "4-6 years",
      },
      {
        title: "Content Strategist",
        location: "Remote",
        type: "Full-time",
        experience: "2-4 years",
      },
    ],
  },
]

export function OpenPositions() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our mission to revolutionize digital gifting in India
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {positions.map((department, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{department.department}</h3>
              <div className="grid gap-4">
                {department.roles.map((role, roleIndex) => (
                  <motion.div
                    key={roleIndex}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                            {role.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                            {role.type}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                            {role.experience}
                          </span>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

