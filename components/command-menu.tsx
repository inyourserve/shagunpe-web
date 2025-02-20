"use client"

import * as React from "react"
import { Command } from "cmdk"
import { motion } from "framer-motion"

interface CommandMenuProps {
  placeholder?: string
  suggestions?: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

export function CommandMenu({ placeholder, suggestions }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="relative">
      <Command className="relative z-50 max-w-2xl mx-auto overflow-visible bg-black/50 border border-white/10 rounded-lg backdrop-blur-xl">
        <div className="flex items-center border-b border-white/10 px-4">
          <Command.Input
            placeholder={placeholder}
            className="flex h-14 w-full rounded-md bg-transparent py-3 text-base text-white placeholder:text-white/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            value={value}
            onValueChange={setValue}
          />
        </div>
        {open && suggestions && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-2 bg-black/90 border border-white/10 rounded-lg backdrop-blur-xl"
          >
            {suggestions.map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/5 cursor-pointer">
                <div className="text-orange-500">{item.icon}</div>
                <div>
                  <div className="text-white font-medium">{item.title}</div>
                  <div className="text-white/50 text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </Command>
    </div>
  )
}

