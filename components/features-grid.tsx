"use client"

import { motion } from "framer-motion"
import {
  CurrencyIcon as Cash,
  Zap,
  BookOpen,
  Calculator,
  UserX,
  FileText,
  QrCode,
  Lock,
  Crown,
  MapPin,
  Calendar,
} from "lucide-react"

const features = [
  {
    icon: <Cash className="w-6 h-6" />,
    title: "Zero Cash Hassle",
    description: "No need to carry or handle physical cash at weddings.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Shagun Gifting",
    description: "Send Shagun instantly with a few taps.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Automatic Record Keeping",
    description: "Digital records of all sent & received Shagun.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Automatic Calculation",
    description: "Real-time tracking of total gifts & payments.",
  },
  {
    icon: <UserX className="w-6 h-6" />,
    title: "No Manual Record Keeping",
    description: "Automatic logging and tracking of all transactions.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "PDF Report Generation",
    description: "Download detailed transaction reports for easy reference.",
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "Personalized QR Code",
    description: "Couple's name & photo embedded in the QR for easy transfers.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Transactions",
    description: "Bank-level encryption ensures complete safety.",
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Premium Wedding Experience",
    description: "Elevate the wedding with a seamless digital gifting system.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location Independent",
    description: "Send Shagun even if you can't attend the wedding.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Manage Multiple Weddings",
    description: "Easily track and send gifts for multiple events.",
  },
  {
    icon: <Cash className="w-6 h-6" />,
    title: "Track Cash Gifts",
    description: "Option to manually record offline cash gifts.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Features of ShagunPe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how ShagunPe transforms the traditional shagun experience into a seamless digital journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

