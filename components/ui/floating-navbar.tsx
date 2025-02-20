"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"

export const FloatingNav = ({
  className,
}: {
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Home", link: "#" },
    { name: "Features", link: "#features" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ]

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (current > 0.05) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  })

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid hsl(var(--border))" : "none",
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex w-full fixed top-0 inset-x-0 z-[5000] py-4 px-4 items-center justify-center transition-colors",
        className,
      )}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center">
            <Image
              src="https://shagunpe.in/asset/logo.png"
              alt="ShagunPe Logo"
              width={24}
              height={24}
              className="w-5 h-5"
            />
          </div>
          <span className="text-foreground font-semibold text-xl">ShagunPe</span>
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {navItem.name}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors text-sm">Login</button>
            <button className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm px-4 py-2 rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

