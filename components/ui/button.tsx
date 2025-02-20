"use client"

import type React from "react"

export const Button = ({
  children,
  variant = "default",
  ...props
}: { children: React.ReactNode; variant?: "default" | "ghost"; [key: string]: any }) => {
  const buttonClasses = {
    default: "bg-orange-500 hover:bg-orange-600 text-white",
    ghost: "text-white hover:text-orange-500",
  }

  return (
    <button className={buttonClasses[variant]} {...props}>
      {children}
    </button>
  )
}

export const Input = ({ ...props }: { [key: string]: any }) => {
  return <input className="bg-transparent text-white placeholder:text-white/50 focus:outline-none" {...props} />
}

