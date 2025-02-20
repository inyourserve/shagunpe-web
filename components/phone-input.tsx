"use client"

import { useState } from "react"

export function PhoneInput() {
  const [phone, setPhone] = useState("")

  return (
    <div className="flex gap-2">
      <div className="flex-shrink-0 bg-gray-50 border border-gray-200 rounded-lg px-3 py-4 text-gray-600">+91</div>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
        className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
      />
      <button className="bg-[#FFD700] text-gray-900 px-6 rounded-lg font-medium hover:bg-[#FFE44D] transition-colors">
        Get App
      </button>
    </div>
  )
}

