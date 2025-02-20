"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function OfficeLocations() {
  const offices = [
    {
      title: "Corporate Office",
      address: "91 Springboard, Koramangala Industrial Layout, Bangalore - 560095",
      phone: "+91 80123 45678",
      email: "corporate@shagunpe.com",
      hours: "Mon - Fri, 9:00 AM - 6:00 PM",
    },
    {
      title: "Regional Office - North",
      address: "WeWork Galaxy, Sector 44, Gurugram, Haryana - 122002",
      phone: "+91 80123 45679",
      email: "north@shagunpe.com",
      hours: "Mon - Fri, 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
          <p className="text-xl text-gray-600">Visit us at our offices across India</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{office.title}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-primary">
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-primary">
                    {office.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="text-gray-600">{office.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

