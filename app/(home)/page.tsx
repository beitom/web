"use client"

import HeroSection from "@/components/landing/hero-section"
import { SphereMask } from "@/components/ui/sphere-mask"
import React from "react"
import LearnMoreSection from "@/components/landing/learnmore-section"
import { motion } from "framer-motion"
import { Vortex } from "@/components/ui/vortex"
import { NewsSection } from "@/components/landing/news"

export default function Page() {
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.25 }
  }

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Vortex
          rangeY={100}
          baseHue={220}
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="flex items-center justify-center h-full relative z-10">
            <div>
              <HeroSection />
              <SphereMask />
            </div>
          </div>
        </Vortex>
      </div>

      <motion.div {...animationSettings}>
        <LearnMoreSection />
      </motion.div>

      <motion.div {...animationSettings}>
        <NewsSection />
      </motion.div>
    </>
  )
}
