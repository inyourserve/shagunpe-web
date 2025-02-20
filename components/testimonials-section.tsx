"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ShagunPe has revolutionized how we handle wedding gifts. The digital tracking and instant notifications make managing shagun a breeze.",
      author: "Priya Sharma",
      role: "Recent Bride",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a wedding planner, I recommend ShagunPe to all my clients. It's secure, professional, and makes the whole process seamless.",
      author: "Rahul Verma",
      role: "Wedding Planner",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The app is so intuitive that even our elderly relatives could use it easily. Perfect blend of tradition and technology.",
      author: "Anjali Patel",
      role: "User",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of happy users</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-purple-600 mb-6" />
                <p className="text-xl md:text-2xl text-gray-600 mb-8">{testimonials[currentIndex].quote}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{testimonials[currentIndex].author}</h3>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-purple-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-purple-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

