"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  )
}

