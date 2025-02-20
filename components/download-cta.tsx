"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function DownloadCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Download ShagunPe App
              <br />
              <span className="text-[#FFD700]">Start collecting today</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join millions of users who trust ShagunPe for their shagun collections
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Image
                src="/placeholder.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
              <Image
                src="/placeholder.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <Image
              src="https://shagunpe.in/asset/shagunpe-mockup.png"
              alt="ShagunPe App"
              width={300}
              height={600}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

