"use client"

import { motion } from "framer-motion"
import { Gift, Zap, QrCode, MapPin, Leaf } from "lucide-react"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Zero Cash Hassle",
      description: "Say goodbye to physical cash. Send and receive shagun digitally with complete peace of mind.",
      image: "https://img.freepik.com/free-vector/cashless-society-concept-illustration_114360-7571.jpg",
      imagePosition: "right",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Smart Record Keeping",
      description: "Automatic tracking of all transactions with detailed reports. No manual work needed.",
      image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg",
      imagePosition: "left",
    },
    {
      icon: <QrCode className="w-8 h-8 text-primary" />,
      title: "Personalized QR Codes",
      description: "Custom QR codes with couple's photo for easy, direct shagun transfers at the venue.",
      image: "https://img.freepik.com/free-vector/qr-code-concept-illustration_114360-5853.jpg",
      imagePosition: "right",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Location Independent",
      description: "Can't attend the wedding? Send your blessings digitally from anywhere in the world.",
      image: "https://img.freepik.com/free-vector/location-sharing-concept-illustration_114360-5765.jpg",
      imagePosition: "left",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Go Paperless, Save Trees",
      description: "Join the eco-friendly revolution. Help save thousands of trees by eliminating paper envelopes.",
      image: "https://img.freepik.com/free-vector/save-planet-concept-illustration_114360-3859.jpg",
      imagePosition: "right",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Experience the Future of Shagun
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Modern features designed to make your celebration gifting seamless, memorable, and sustainable
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`flex flex-col ${
                feature.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 md:gap-12 relative`}
            >
              {/* Content */}
              <div className="w-full lg:w-1/2 relative z-10">
                <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="inline-block p-2 md:p-3 rounded-xl mb-4 md:mb-6 bg-primary/10">{feature.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-base md:text-lg text-gray-600">{feature.description}</p>
                  {feature.title.includes("Trees") && (
                    <div className="mt-6 p-4 bg-green-50 rounded-xl">
                      <p className="text-green-600 font-medium">Environmental Impact:</p>
                      <p className="text-gray-600 mt-2">
                        If 1 crore (10 million) weddings adopt digital Shagun, we can save millions of envelopes,
                        reducing paper waste significantly. That's thousands of trees protected every year!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-sm w-full h-auto"
                  />
                </motion.div>

                {/* Subtle decorative elements */}
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

