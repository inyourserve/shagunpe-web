"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AnimatedTooltip({
  items,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
}) {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <div className="flex flex-row items-center justify-center">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative group"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <div className="flex items-center justify-center">
              <Image
                src={item.image || "/placeholder.svg"}
                height={100}
                width={100}
                alt={item.name}
                className="object-cover rounded-full h-12 w-12 border-2 border-white group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black rounded-lg text-white text-sm whitespace-nowrap">
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs text-white/70">{item.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

