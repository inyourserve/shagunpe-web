"use client"

import { motion } from "framer-motion"
import { Users, Store, CreditCard, AlertTriangle, Shield } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Support",
    description: "Get help with your ShagunPe account and transactions",
    link: "#contact-form",
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Business Support",
    description: "Support for merchants and business partners",
    link: "#contact-form",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payment Support",
    description: "Help with payments and refunds",
    link: "#contact-form",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Report an Issue",
    description: "Report technical issues or bugs",
    link: "#contact-form",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Safety",
    description: "Report security concerns or suspicious activity",
    link: "#contact-form",
  },
]

export function SupportCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.link} className="block group">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

