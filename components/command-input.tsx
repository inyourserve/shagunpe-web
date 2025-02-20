"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

interface CommandInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  suggestions?: Array<{
    icon: string
    text: string
  }>
}

export function CommandInput({ value, onChange, placeholder, suggestions }: CommandInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
        />
        <button className="absolute right-2 p-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isFocused && suggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-white/10 rounded-lg overflow-hidden backdrop-blur-xl"
          >
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer">
                <span className="text-2xl">{suggestion.icon}</span>
                <span className="text-white/70">{suggestion.text}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

