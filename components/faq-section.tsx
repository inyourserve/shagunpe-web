"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "What is ShagunPe?",
      answer:
        "ShagunPe is a digital platform that modernizes the traditional practice of giving shagun (monetary gifts) at Indian celebrations. It allows you to create digital collection pages and receive gifts directly in your bank account.",
    },
    {
      question: "Is it safe to use ShagunPe?",
      answer:
        "Yes, ShagunPe uses bank-grade security measures to protect all transactions. We employ end-to-end encryption and follow strict security protocols to ensure your money is safe.",
    },
    {
      question: "How do I create a collection?",
      answer:
        "Simply download the ShagunPe app, sign up, and tap on 'Create Collection'. Fill in your event details, customize your collection page, and share the link with your guests.",
    },
    {
      question: "What are the charges?",
      answer:
        "Creating and sharing collections on ShagunPe is completely free. We charge a minimal processing fee for transactions, which is among the lowest in the industry.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about ShagunPe</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-600" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-600" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-purple-50/50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

