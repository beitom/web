"use client"

import HeroSection from "@/components/landing/hero-section"
import { SphereMask } from "@/components/ui/sphere-mask"
import React, { useEffect, useState } from "react"
import { BeitTimeline } from "@/components/landing/timeline-section"
import LearnMoreSection from "@/components/landing/learnmore-section"
import { motion, useScroll } from "framer-motion"
import { TechnologyGrid } from "@/components/landing/technologies-section"
// import ParticlesBackground from "@/components/particles"
import { Vortex } from "@/components/ui/vortex"
import { NewsSection } from "@/components/landing/news"

export default function Page() {
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.25 }
  }

  // const timelineAnimationSettings = animationSettings
  // timelineAnimationSettings.viewport = { once: true, amount: 0.05 }
  // // store a reactive variable as the scroll position

  return (
    <>
      {/*<div className="z-[-2] h-[200%]">*/}
      {/*  <ParticlesBackground />*/}
      {/*</div>*/}
      {/*<div className="absolute inset-0 bg-gradient-to-b from-blue-950 from-5% to-transparent z-[-3]"></div>*/}
      {/* Hero Section Wrapper */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background iframe */}
        {/* Hero Section */}

        {/* Backdrop Blur Layer */}
        <Vortex
          rangeY={100}
          baseHue={220}
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          {/*<div className="absolute inset-0 backdrop-blur-[1px] z-[-1] pointer-events-none"></div>*/}
          <div className="flex items-center justify-center h-full relative z-10">
            <div>
              <HeroSection />
              <SphereMask />
            </div>
          </div>
        </Vortex>
      </div>

      {/* Other Sections */}
      <motion.div {...animationSettings}>
        <LearnMoreSection />
      </motion.div>

      <motion.div {...animationSettings}>
        <NewsSection />
      </motion.div>

      {/*<motion.div {...animationSettings}>*/}
      {/*  <TechnologyGrid />*/}
      {/*</motion.div>*/}
    </>
  )
}
