"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Vikash Kumar",
    role: "Founder & CEO",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Abhishek Kumar",
    role: "Co-Founder & CTO",
    linkedin: "#",
    twitter: "#",
  },
]

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The visionaries behind ShagunPe, working to revolutionize digital gifting in India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${member.name}`}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">
                {member.name === "Vikash Kumar"
                  ? "Vikash noticed the chaos of shagun collection at weddings and envisioned a digital solution."
                  : "Abhishek brings technical expertise to turn the vision of ShagunPe into reality."}
              </p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

