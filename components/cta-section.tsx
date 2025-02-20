"use client"

import { motion } from "framer-motion"
import { Gift, Home, Calendar, Wallet, Clock, PlayCircle, Apple } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Revolutionize Your Shagun Experience?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of users who have already transformed their celebration gifting with ShagunPe. Experience
                the ease, security, and joy of digital shagun today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFD700] text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#FFE44D] transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  <PlayCircle className="w-5 h-5" />
                  Download on Play Store
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  <Apple className="w-5 h-5" />
                  Download on App Store
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right App Preview */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Floating Badge - Top */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -top-8 -left-4 bg-white rounded-xl shadow-lg p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
                    <Gift className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="font-medium">Instant Gifting</span>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-4 bg-white rounded-xl shadow-lg p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-[#FFD700]">₹1000+</span>
                  <span className="text-sm text-gray-600">Avg. Gift Amount</span>
                </div>
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white rounded-[40px] p-4 shadow-xl"
              >
                {/* App Interface */}
                <div className="bg-white rounded-[32px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="font-medium">Vikash</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                    </div>
                  </div>

                  {/* Balance Card */}
                  <div className="bg-[#FFD700] p-6 text-gray-900">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm">Total Balance</span>
                      <button className="p-1.5 bg-white/20 rounded-lg">
                        <Gift className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-2xl font-bold mb-4">₹3,000</div>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-white rounded-xl py-2 px-4 text-center font-medium">Send</button>
                      <button className="bg-white rounded-xl py-2 px-4 text-center font-medium">Receive</button>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Recent Activity</span>
                      <span className="text-[#FFD700] text-sm">View All</span>
                    </div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">U{i}</div>
                        <div className="flex-1">
                          <div className="font-medium">User {i}</div>
                          <div className="text-sm text-gray-500">Tamu Weds Mannu</div>
                        </div>
                        <div className="text-[#FFD700]">₹501</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex justify-between items-center p-4 border-t">
                    {[
                      { icon: <Home className="w-5 h-5" />, label: "Home" },
                      { icon: <Calendar className="w-5 h-5" />, label: "Events" },
                      { icon: <Gift className="w-5 h-5" />, label: "Send QR" },
                      { icon: <Wallet className="w-5 h-5" />, label: "Balance" },
                      { icon: <Clock className="w-5 h-5" />, label: "History" },
                    ].map((item, i) => (
                      <button key={i} className="flex flex-col items-center gap-1">
                        <div className="text-gray-600">{item.icon}</div>
                        <span className="text-xs text-gray-600">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

