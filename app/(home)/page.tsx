"use client"

import HeroSection from "@/components/landing/hero-section"
import Particles from "@/components/ui/particles"
import { SphereMask } from "@/components/ui/sphere-mask"
import React from "react"
import { BeitTimeline } from "@/components/landing/timeline-section"
import { Technology } from "@/components/landing/technologies-section"
import LearnMoreSection from "@/components/landing/learnmore-section"
import { motion } from "framer-motion"

export default async function Page() {
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.25 }
  }

  return (
    <>
      <div className="bg-gradient-to-b to-transparent from-gray-900 w-full h-[75%] absolute top-0 left-0 z-0"></div>
      <HeroSection />
      <SphereMask />

      {/* Learn More Section */}
      <motion.div {...animationSettings}>
        <LearnMoreSection />
      </motion.div>

      {/* Technologies Section */}
      <motion.div {...animationSettings}>
        <Technology />
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
