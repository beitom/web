"use client"

import HeroSection from "@/components/landing/hero-section"
import { SphereMask } from "@/components/ui/sphere-mask"
import React from "react"
import { BeitTimeline } from "@/components/landing/timeline-section"
import LearnMoreSection from "@/components/landing/learnmore-section"
import { motion } from "framer-motion"
import { TechnologyGrid } from "@/components/landing/technologies-section"
import ParticlesBackground from "@/components/particles"

export default function Page() {
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.25 }
  }

  const timelineAnimationSettings = animationSettings
  timelineAnimationSettings.viewport = { once: true, amount: 0.05 }

  return (
    <>
      {/*<div className="absolute inset-0 bg-gradient-to-b from-blue-950 from-5% to-transparent z-[-3]"></div>*/}
      {/* Hero Section Wrapper */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background iframe */}
        {/* Hero Section */}
        <div className="absolute inset-0 z-[-2]">
          <ParticlesBackground />
        </div>

        {/* Backdrop Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[1px] z-[-1] pointer-events-none"></div>
        <div className="flex items-center justify-center h-full relative z-10">
          <div>
            <HeroSection />
            <SphereMask />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <motion.div {...animationSettings}>
        <LearnMoreSection />
      </motion.div>

      <motion.div {...animationSettings}>
        <TechnologyGrid />
      </motion.div>

      <motion.div {...timelineAnimationSettings}>
        <BeitTimeline />
      </motion.div>
    </>
  )
}
