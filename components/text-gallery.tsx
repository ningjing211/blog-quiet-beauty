"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const textEntries = [
  {
    id: 1,
    content: "The essence of art is found in the spaces between what is said and what is felt.",
    author: "—",
    category: "Reflection",
  },
  {
    id: 2,
    content: "Simplicity is the ultimate sophistication, a canvas where meaning breathes freely.",
    author: "—",
    category: "Philosophy",
  },
  {
    id: 3,
    content: "In the quiet moments, beauty reveals itself without announcement or fanfare.",
    author: "—",
    category: "Observation",
  },
]

export default function TextGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextText = () => {
    setActiveIndex((prev) => (prev + 1) % textEntries.length)
  }

  const prevText = () => {
    setActiveIndex((prev) => (prev - 1 + textEntries.length) % textEntries.length)
  }

  return (
    <div className="relative h-full min-h-[400px] flex items-center">
      <motion.div
        className="absolute top-0 right-0 text-xs text-neutral-400 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {activeIndex + 1}/{textEntries.length}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-gallery-item w-full"
        >
          <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              {textEntries[activeIndex].category}
            </span>
          </motion.div>

          <motion.blockquote
            className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-800 mb-6 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "{textEntries[activeIndex].content}"
          </motion.blockquote>

          <motion.div
            className="text-sm text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {textEntries[activeIndex].author}
          </motion.div>

          <motion.div
            className="mt-12 flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={prevText}
              className="w-12 h-12 border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-all duration-300 hover:border-neutral-400"
              aria-label="Previous text"
            >
              <motion.span whileTap={{ x: -3 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                ←
              </motion.span>
            </button>
            <button
              onClick={nextText}
              className="w-12 h-12 border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-all duration-300 hover:border-neutral-400"
              aria-label="Next text"
            >
              <motion.span whileTap={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                →
              </motion.span>
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

