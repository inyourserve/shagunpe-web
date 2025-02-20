"use client"

import { cn } from "@/lib/utils"
import type React from "react"

export const GlowingCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border hover:border-primary/20 transition-all",
        containerClassName,
      )}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary/80 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />

      <div className={cn("relative bg-card rounded-xl p-6", className)}>{children}</div>
    </div>
  )
}

