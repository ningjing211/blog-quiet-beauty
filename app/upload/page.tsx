"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"

export default function UploadPage() {
  const [category, setCategory] = useState("reflection")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a server
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.main
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container mx-auto px-4 py-12 md:py-24">
          <header className="mb-16">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-light tracking-wider text-neutral-800">AESTHETICA</h1>
              <nav>
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      Home
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/explore"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      Gallery
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      About
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <motion.div
            className="max-w-md mx-auto text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="text-3xl font-light mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Thank You
            </motion.h2>
            <motion.p
              className="text-neutral-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Your text has been submitted and will be reviewed shortly.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Link
                href="/explore"
                className="inline-block px-8 py-3 border border-neutral-800 text-sm uppercase tracking-widest text-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300"
              >
                Return to Gallery
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    )
  }

  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <header className="mb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light tracking-wider text-neutral-800">AESTHETICA</h1>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore"
                    className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                  >
                    Gallery
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="mb-12">
          <Link
            href="/explore"
            className="inline-flex items-center text-sm uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> Back to
            Collection
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-6 text-neutral-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Submit Your Text
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="grid gap-8">
              <motion.div
                className="grid gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="title" className="text-sm uppercase tracking-widest text-neutral-600">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter a title for your text"
                  className="border-neutral-300 focus:border-neutral-800 focus:ring-0 rounded-none h-12 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                className="grid gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="content" className="text-sm uppercase tracking-widest text-neutral-600">
                  Content
                </Label>
                <Textarea
                  id="content"
                  placeholder="Enter your text content here..."
                  className="border-neutral-300 focus:border-neutral-800 focus:ring-0 rounded-none min-h-[200px] transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                className="grid gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Label className="text-sm uppercase tracking-widest text-neutral-600">Category</Label>
                <RadioGroup value={category} onValueChange={setCategory} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="reflection" id="reflection" />
                    <Label htmlFor="reflection">Reflection</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="philosophy" id="philosophy" />
                    <Label htmlFor="philosophy">Philosophy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="observation" id="observation" />
                    <Label htmlFor="observation">Observation</Label>
                  </div>
                </RadioGroup>
              </motion.div>

              <motion.div
                className="grid gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Label htmlFor="author" className="text-sm uppercase tracking-widest text-neutral-600">
                  Author (Optional)
                </Label>
                <Input
                  id="author"
                  placeholder="Enter your name or leave blank for anonymous"
                  className="border-neutral-300 focus:border-neutral-800 focus:ring-0 rounded-none h-12 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  type="submit"
                  className="w-full md:w-auto px-8 py-6 bg-neutral-800 hover:bg-neutral-900 text-white text-sm uppercase tracking-widest transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Text
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}

