"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function HoverEffect({
  items,
}: {
  items: {
    title: string
    description: string
    icon: ReactNode
  }[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group rounded-xl border border-white/10 p-6 backdrop-blur-sm hover:bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className="relative z-10">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white/70">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

