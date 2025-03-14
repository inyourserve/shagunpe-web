// "use client"

// import { motion } from "framer-motion"
// import { Gift, Zap, QrCode, MapPin, Leaf } from "lucide-react"
// import Image from "next/image"

// export function FeaturesSection() {
//   const features = [
//     {
//       icon: <Gift className="w-8 h-8 text-primary" />,
//       title: "Zero Cash Hassle",
//       description: "Say goodbye to physical cash. Send and receive shagun digitally with complete peace of mind.",
//       image: "/asset/cash-hassle.svg",
//       imagePosition: "right",
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-primary" />,
//       title: "Smart Record Keeping",
//       description: "Automatic tracking of all transactions with detailed reports. No manual work needed.",
//       image: "/asset/automatic-record.svg",
//       imagePosition: "left",
//     },
//     {
//       icon: <QrCode className="w-8 h-8 text-primary" />,
//       title: "Personalized QR Codes",
//       description: "Custom QR codes with couple's photo for easy, direct shagun transfers at the venue.",
//       image: "/asset/personalized-qr.svg",
//       imagePosition: "right",
//     },
//     {
//       icon: <MapPin className="w-8 h-8 text-primary" />,
//       title: "Location Independent",
//       description: "Can't attend the wedding? Send your blessings digitally from anywhere in the world.",
//       image: "/asset/location-independent.svg",
//       imagePosition: "left",
//     },
//     {
//       icon: <Leaf className="w-8 h-8 text-green-500" />,
//       title: "Go Paperless, Save Trees",
//       description: "Join the eco-friendly revolution. Help save thousands of trees by eliminating paper envelopes.",
//       image: "/asset/environment-friendly.svg",
//       imagePosition: "right",
//     },
//   ]

//   return (
//     <section className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//             Experience the Future of Shagun
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Modern features designed to make your celebration gifting seamless, memorable, and sustainable
//           </p>
//         </motion.div>

//         <div className="space-y-16 md:space-y-32">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className={`flex flex-col ${
//                 feature.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
//               } items-center gap-8 md:gap-12 relative`}
//             >
//               {/* Content */}
//               <div className="w-full lg:w-1/2 relative z-10">
//                 <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//                   <div className="inline-block p-2 md:p-3 rounded-xl mb-4 md:mb-6 bg-primary/10">{feature.icon}</div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
//                   <p className="text-base md:text-lg text-gray-600">{feature.description}</p>
//                   {feature.title.includes("Trees") && (
//                     <div className="mt-6 p-4 bg-green-50 rounded-xl">
//                       <p className="text-green-600 font-medium">Environmental Impact:</p>
//                       <p className="text-gray-600 mt-2">
//                         If 1 crore (10 million) weddings adopt digital Shagun, we can save millions of envelopes,
//                         reducing paper waste significantly. That's thousands of trees protected every year!
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
//                 <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//                   <Image
//                     src={feature.image || "/placeholder.svg"}
//                     alt={feature.title}
//                     width={600}
//                     height={400}
//                     className="rounded-2xl shadow-sm w-full h-auto"
//                   />
//                 </motion.div>

//                 {/* Subtle decorative elements */}
//                 <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"

// import { motion } from "framer-motion"
// import { Gift, Zap, QrCode, MapPin, Leaf } from "lucide-react"
// import Image from "next/image"

// export function FeaturesSection() {
//   const features = [
//     {
//       icon: <Gift className="w-10 h-10 text-white" />,
//       title: "Zero Cash Hassle",
//       description: "Say goodbye to physical cash. Send and receive shagun digitally with complete peace of mind.",
//       image: "/asset/cash-hassle.svg",
//       color: "#FF5722",
//     },
//     {
//       icon: <Zap className="w-10 h-10 text-white" />,
//       title: "Smart Record Keeping",
//       description: "Automatic tracking of all transactions with detailed reports. No manual work needed.",
//       image: "/asset/automatic-record.svg",
//       color: "#2196F3",
//     },
//     {
//       icon: <QrCode className="w-10 h-10 text-white" />,
//       title: "Personalized QR Codes",
//       description: "Custom QR codes with couple's photo for easy, direct shagun transfers at the venue.",
//       image: "/asset/personalized-qr.svg",
//       color: "#9C27B0",
//     },
//     {
//       icon: <MapPin className="w-10 h-10 text-white" />,
//       title: "Location Independent",
//       description: "Can't attend the wedding? Send your blessings digitally from anywhere in the world.",
//       image: "/asset/location-independent.svg",
//       color: "#FF9800",
//     },
//     {
//       icon: <Leaf className="w-10 h-10 text-white" />,
//       title: "Go Paperless, Save Trees",
//       description: "Join the eco-friendly revolution. Help save thousands of trees by eliminating paper envelopes.",
//       image: "/asset/environment-friendly.svg",
//       color: "#4CAF50",
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   }

//   return (
//     <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
//         <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-3xl"></div>

//         {/* Decorative dots pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-primary"></div>
//           <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-blue-500"></div>
//           <div className="absolute bottom-60 left-1/3 w-2 h-2 rounded-full bg-purple-500"></div>
//           <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-orange-500"></div>
//           <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-green-500"></div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
//             Experience the Future of Shagun
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Modern features designed to make your celebration gifting seamless, memorable, and sustainable
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="space-y-24"
//         >
//           {features.map((feature, index) => (
//             <motion.div key={index} variants={itemVariants} className="relative">
//               <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 relative">
//                 {/* Feature icon with colored background */}
//                 <div className="absolute -top-10 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 z-20">
//                   <div
//                     className="flex items-center justify-center w-20 h-20 rounded-2xl shadow-lg"
//                     style={{ backgroundColor: feature.color }}
//                   >
//                     {feature.icon}
//                   </div>
//                 </div>

//                 {/* Feature content */}
//                 <div className={`w-full lg:w-1/2 pt-12 lg:pt-0 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
//                   <motion.div
//                     whileHover={{ y: -5 }}
//                     className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 relative z-10"
//                   >
//                     <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
//                     <p className="text-base md:text-lg text-gray-600 mb-6">{feature.description}</p>

//                     {feature.title.includes("Trees") && (
//                       <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
//                         <p className="text-green-600 font-medium">Environmental Impact:</p>
//                         <p className="text-gray-600 mt-2">
//                           If 1 crore (10 million) weddings adopt digital Shagun, we can save millions of envelopes,
//                           reducing paper waste significantly. That's thousands of trees protected every year!
//                         </p>
//                       </div>
//                     )}

//                     {/* Decorative line */}
//                     <div
//                       className="absolute bottom-0 left-0 h-1 rounded-full"
//                       style={{
//                         backgroundColor: feature.color,
//                         width: "30%",
//                       }}
//                     ></div>
//                   </motion.div>
//                 </div>

//                 {/* Feature image */}
//                 <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
//                   <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative">
//                     <div
//                       className="absolute -inset-4 rounded-3xl opacity-20 -z-10"
//                       style={{ backgroundColor: feature.color }}
//                     ></div>
//                     <Image
//                       src={feature.image || "/placeholder.svg?height=400&width=600"}
//                       alt={feature.title}
//                       width={600}
//                       height={400}
//                       className="rounded-2xl shadow-lg w-full h-auto"
//                     />

//                     {/* Floating decorative elements */}
//                     <div
//                       className="absolute -top-6 -right-6 w-12 h-12 rounded-full z-10 hidden md:block"
//                       style={{ backgroundColor: feature.color, opacity: 0.1 }}
//                     ></div>
//                     <div
//                       className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full z-10 hidden md:block"
//                       style={{ backgroundColor: feature.color, opacity: 0.15 }}
//                     ></div>
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Connecting line between features */}
//               {index < features.length - 1 && (
//                 <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-gray-200 to-transparent hidden lg:block"></div>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-24 text-center"
//         >
//           <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your gifting experience?</h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Join thousands of couples who have made their special day even more memorable with digital shagun.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Get Started Today
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Gift, Zap, QrCode, MapPin, Leaf } from "lucide-react"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Zero Cash Hassle",
      description: "Say goodbye to physical cash. Send and receive shagun digitally with complete peace of mind.",
      image: "/asset/cash-hassle.svg",
      imagePosition: "right",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Smart Record Keeping",
      description: "Automatic tracking of all transactions with detailed reports. No manual work needed.",
      image: "/asset/automatic-record.svg",
      imagePosition: "left",
    },
    {
      icon: <QrCode className="w-8 h-8 text-primary" />,
      title: "Personalized QR Codes",
      description: "Custom QR codes with couple's photo for easy, direct shagun transfers at the venue.",
      image: "/asset/personalized-qr.svg",
      imagePosition: "right",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Location Independent",
      description: "Can't attend the wedding? Send your blessings digitally from anywhere in the world.",
      image: "/asset/location-independent.svg",
      imagePosition: "left",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Go Paperless, Save Trees",
      description: "Join the eco-friendly revolution. Help save thousands of trees by eliminating paper envelopes.",
      image: "/asset/environment-friendly.svg",
      imagePosition: "right",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Experience the Future of Shagun
            <div className="h-1 w-24 bg-yellow-400 mt-4 mx-auto"></div>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mt-6">
            Modern features designed to make your celebration gifting seamless, memorable, and sustainable
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                feature.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16 relative`}
            >
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">{feature.icon}</div>
                    <div className="h-px flex-1 bg-primary/10"></div>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    {feature.title}
                    {index === 0 && <div className="h-1 w-16 bg-yellow-400 mt-4"></div>}
                  </h3>

                  <p className="text-xl text-gray-600">{feature.description}</p>

                  {feature.title.includes("Trees") && (
                    <div className="mt-8 p-6 bg-green-50 rounded-2xl">
                      <p className="text-green-700 font-medium mb-2">Environmental Impact:</p>
                      <p className="text-gray-600">
                        If 1 crore (10 million) weddings adopt digital Shagun, we can save millions of envelopes,
                        reducing paper waste significantly. That's thousands of trees protected every year!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Single Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-lg bg-gray-50"
                >
                  <Image
                    src={feature.image || "/placeholder.svg?height=500&width=600"}
                    alt={feature.title}
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

