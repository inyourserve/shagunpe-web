"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const tools = [
  {
    title: "Biodata Maker",
    description: "Create professional marriage biodata in minutes",
    link: "/tools/biodata-maker",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <circle cx="12" cy="10" r="3"/>
      <path d="M16 21v-1a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v1"/>
    </svg>`,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    shadowColor: "blue",
  },
  {
    title: "Invitation Maker",
    description: "Design beautiful digital wedding invitations",
    link: "/tools/invitation-maker",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21.5 12H16c-.7 0-1.4.3-1.9.8l-4.2 4.2c-.5.5-1.2.8-1.9.8h-4"/>
      <path d="M16 12V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2"/>
      <path d="M18 12v8c0 1.1.9 2 2 2h1"/>
    </svg>`,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    shadowColor: "purple",
  },
  {
    title: "Wedding Budget Planner",
    description: "Plan and track your wedding expenses easily",
    link: "/tools/budget-planner",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="3" width="20" height="18" rx="2"/>
      <path d="M12 7v10M8 11h8"/>
    </svg>`,
    gradient: "from-green-500/20 via-green-500/10 to-transparent",
    shadowColor: "green",
  },
  {
    title: "Guest List & RSVP Manager",
    description: "Manage your guest list and track RSVPs digitally",
    link: "/tools/guest-manager",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
    gradient: "from-orange-500/20 via-orange-500/10 to-transparent",
    shadowColor: "orange",
  },
  {
    title: "QR Code Generator",
    description: "Create personalized QR codes for shagun collection",
    link: "/tools/qr-generator",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>`,
    gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
    shadowColor: "pink",
  },
  {
    title: "Kundali Matching",
    description: "Check compatibility with advanced kundali matching",
    link: "/tools/kundali-matching",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`,
    gradient: "from-red-500/20 via-red-500/10 to-transparent",
    shadowColor: "red",
  },
]

export function ExploreTools() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Explore tools</h2>
          <p className="text-xl text-gray-600">Everything you need to plan and manage your celebrations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={tool.link} className="block group">
                <div
                  className={`relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-${tool.shadowColor}-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-${tool.shadowColor}-500/10`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-${tool.shadowColor}-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div
                        className={`w-8 h-8 text-${tool.shadowColor}-500`}
                        dangerouslySetInnerHTML={{ __html: tool.svg }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{tool.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700">{tool.description}</p>

                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center text-sm font-medium text-gray-600 group-hover:text-gray-900">
                      Try now
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

