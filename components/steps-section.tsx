"use client"

import { motion } from "framer-motion"
import { Pencil, Share2, Gift } from "lucide-react"

export function StepsSection() {
  const steps = [
    {
      number: "Step 1",
      title: "Create Collection",
      description:
        "Start by creating your digital shagun collection. Add event details, customize preferences, and set it up in minutes.",
      icon: <Pencil className="w-6 h-6 text-primary" />,
    },
    {
      number: "Step 2",
      title: "Share with Guests",
      description:
        "Share your collection link with guests through WhatsApp, email, or wedding invitations. Easy access for everyone.",
      icon: <Share2 className="w-6 h-6 text-primary" />,
    },
    {
      number: "Step 3",
      title: "Manage Shagun",
      description:
        "Track contributions in real-time, send thank you notes, and transfer funds to your bank account securely.",
      icon: <Gift className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <section className="py-12 relative bg-secondary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Create your collection in
              <br />3 simple steps
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              From setup to sharing, manage your shagun collection in minutes
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-8 rounded-xl border border-border bg-card backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <div className="text-sm text-primary mb-2">{step.number}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

