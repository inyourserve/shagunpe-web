"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, handleNext])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-12 text-center antialiased"
        >
          What Our Users Say
        </motion.h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <Image
                        src={testimonial.src || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900">{testimonials[active].name}</h3>
                <p className="text-primary">{testimonials[active].designation}</p>
                <motion.p className="text-lg text-gray-600 mt-8">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center group transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center group transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600 group-hover:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
