"use client"

import { motion } from "framer-motion"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

const FeatureContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-neutral-950/80 p-8 md:p-14 rounded-3xl mb-4 max-w-2xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/80 text-base md:text-lg">{description}</p>
    </div>
  )
}

const features = [
  {
    category: "Digital Collections",
    title: "Create & Share Collections",
    src: "https://shagunpe.in/asset/shagunpe-mockup.png",
    content: (
      <FeatureContent
        title="Effortless Collection Creation"
        description="Create digital shagun collections for any occasion in minutes. Customize your collection page, add event details, and share instantly with guests."
      />
    ),
  },
  {
    category: "Real-time Tracking",
    title: "Track Every Contribution",
    src: "https://shagunpe.in/asset/shagunpe-mockup.png",
    content: (
      <FeatureContent
        title="Real-time Transaction Monitoring"
        description="Watch contributions flow in real-time, get instant notifications, and maintain a digital record of every shagun received."
      />
    ),
  },
  {
    category: "Group Management",
    title: "Collaborate with Family",
    src: "https://shagunpe.in/asset/shagunpe-mockup.png",
    content: (
      <FeatureContent
        title="Seamless Group Collections"
        description="Create group collections for family events, manage permissions, and track contributions together with complete transparency."
      />
    ),
  },
  {
    category: "Analytics",
    title: "Smart Insights Dashboard",
    src: "https://shagunpe.in/asset/shagunpe-mockup.png",
    content: (
      <FeatureContent
        title="Powerful Analytics"
        description="Get detailed insights into your collections, visualize contribution patterns, and export reports with a single click."
      />
    ),
  },
  {
    category: "Security",
    title: "Bank-grade Security",
    src: "https://shagunpe.in/asset/shagunpe-mockup.png",
    content: (
      <FeatureContent
        title="Secure Transactions"
        description="Rest easy with our bank-grade security features. Every transaction is encrypted and protected with multiple layers of security."
      />
    ),
  },
]

export function AppFeaturesCarousel() {
  const cards = features.map((feature, index) => <Card key={feature.title} card={feature} index={index} />)

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-4 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover ShagunPe Features</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Experience the future of shagun management with our innovative features designed for the modern age.
          </p>
        </motion.div>

        <Carousel items={cards} />
      </div>
    </section>
  )
}

