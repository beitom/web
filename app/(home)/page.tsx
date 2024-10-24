"use client"

import HeroSection from "@/components/landing/hero-section"
import { SphereMask } from "@/components/ui/sphere-mask"
import React from "react"
import { BeitTimeline } from "@/components/landing/timeline-section"
import LearnMoreSection from "@/components/landing/learnmore-section"
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { LayoutGridDemo } from "../../components/landing/technologies-section"
import { WavyBackground } from "../../components/ui/wavy-background"
import Particles from "../../components/ui/particles"

export default function Page() {
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: false, amount: 0.25 }
  }

  return (
    <>
      {/*<div className="bg-gradient-to-b to-transparent from-zinc-900 absolute h-screen top-0 left-0 w-full" />*/}
      {/*<AuroraBackground>*/}
      <HeroSection />
      <SphereMask />
      {/*</AuroraBackground>*/}

      {/* Learn More Section */}
      {/**/}
      <motion.div {...animationSettings}>
        <LearnMoreSection />
      </motion.div>
      {/*</div>*/}

      {/* Technologies Section */}
      <motion.div {...animationSettings}>
        <LayoutGridDemo />
      </motion.div>

      {/* Beit Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0 }}
      >
        <BeitTimeline />
      </motion.div>

      <Particles
        className="absolute inset-0 -z-10"
        quantity={500}
        ease={70}
        size={0.05}
        staticity={10}
        color="#48cae4"
      />
    </>
  )
}
