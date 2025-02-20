"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SparklesCore } from "./sparkles"

export default function AppCtaSection() {
  return (
    <section className="relative py-12 overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="hsl(var(--primary))"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            You're just a tap away
            <br />
            from modern shagun.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-xl mb-8"
          >
            Download ShagunPe now and experience the future of digital gifting - no cash hassles, just seamless
            celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex justify-center items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/10" />
                ))}
              </div>
              <span className="text-muted-foreground">1M+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <span className="text-muted-foreground">4.8 Rating</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[300px]"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Image
              src="https://shagunpe.in/asset/shagunpe-mockup.png"
              alt="ShagunPe App Interface"
              width={300}
              height={600}
              className="rounded-[32px] shadow-2xl shadow-primary/20"
            />
          </motion.div>

          <div className="absolute -left-12 top-1/4 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
          <div className="absolute -right-12 bottom-1/4 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}

