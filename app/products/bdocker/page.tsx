"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

import { SiGrapheneos } from "react-icons/si"
import { PiGraphThin } from "react-icons/pi"
import { PiChartLineUpThin } from "react-icons/pi"
import { PiSpeedometerThin } from "react-icons/pi"
import { GiMolecule } from "react-icons/gi"
import ParticlesBackground from "@/components/particles"

const features = [
  {
    Icon: SiGrapheneos,
    name: "Optimize Molecular Geometries",
    description:
      "BDocker optimizes ligand-protein interactions using advanced molecular fragment descriptors and affinity maps derived using our quantum chemistry solutions.",
    href: "/features/optimized-geometries",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
  },
  {
    Icon: PiSpeedometerThin,
    name: "High-Throughput Screening",
    description: "Enables rapid screening of large molecular databases, accelerating Stage 1 drug design.",
    href: "/features/high-throughput-screening",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
  },
  {
    Icon: PiGraphThin,
    name: "Simulated Annealing Optimization",
    description:
      "Utilizes a simulated annealing algorithm to optimize docking geometries for high-precision predictions .",
    href: "/features/simulated-annealing",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
  },
  {
    Icon: PiChartLineUpThin,
    name: "Continuous Improvements",
    description:
      "We continuously enhance model fidelity and speed with quantum chemistry-driven potentials and fragment-based screening.",
    href: "/features/future-improvements",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
  },
  {
    Icon: GiMolecule,
    name: "Advanced Fragment Screening",
    description:
      "Specializes in fragment screening and evaluating ligand-pocket interactions for more efficient drug discovery.",
    href: "/features/fragment-screening",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
  }
]

export default function HeroSection() {
  const { scrollY } = useScroll()

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        {/* Background GIF as an image */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            y: useTransform(scrollY, [0, 1000], [0, 500]),
            opacity: useTransform(scrollY, [0, 1000], [1, 0])
          }}
          transition={{ duration: 0.8 }}
          src="/assets/images/products/bdocker/docking.png"
          alt="Molecular Background"
          className="absolute inset-x-0 md:inset-0 md:bottom-0 translate-y-64 md:translate-y-0 w-full h-auto brightness-50 object-cover"
        />
        {/*/!* Optional dark overlay for better text readability *!/*/}
        {/*<div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            BDocker
          </h1>
          <p className="mt-4 text-lg md:text-2xl lg:text-3xl text-white">A versatile toolkit for molecular docking</p>
        </motion.div>
      </section>
      <div className="pt-8 opacity-0 animate-fade-in container">
        <h2 className="text-3xl lg:text-6xl font-bold text-white text-center pt-4 pb-12">Features</h2>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </>
  )
}
