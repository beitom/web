"use client"
import React from "react"
import { motion } from "framer-motion"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { SiGrapheneos } from "react-icons/si"
import { GiMeshNetwork } from "react-icons/gi"
import { SiMoleculer } from "react-icons/si"
import { PiCpuThin } from "react-icons/pi"

const products = [
  {
    Icon: SiGrapheneos,
    name: "BDocker",
    category: "Molecular Dynamics",
    href: "/products/bdocker",
    description: "Fast and precise molecular docking",
    background: <div />,
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2"
  },
  {
    Icon: SiMoleculer,
    name: "BQChem",
    href: "/products/bqchem",
    category: "Molecular Structure",
    background: <div />,
    description: "GPU accelerated quantum chemistry",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3"
  },
  {
    Icon: GiMeshNetwork,
    name: "QUBO Solver",
    href: "/products/qubo",
    background: <div />,
    category: "Optimization",
    description: "Highly scalable quadratic optimization toolkit",
    cta: "Learn more",
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3"
  },
  {
    Icon: PiCpuThin,
    name: "WaferMol",
    href: "/products/wafermol",
    category: "Materials Science",
    background: <div />,
    description: "Wafer scale engine for molecular dynamics",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-4"
  }
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background py-32">
      <HeroSection />
      <ProductCarousel />
      <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
        EU Funded Projects
      </h2>
    </main>
  )
}

const HeroSection: React.FC = () => (
  <motion.div
    className="container mx-auto text-center px-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
      Transforming Ideas into Quantum Breakthroughs
    </h1>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Discover cutting-edge solutions designed to accelerate quantum computation, drug discovery, and fault-tolerant
      computing.
    </p>
  </motion.div>
)

const ProductCarousel: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
        Explore Our Solutions
      </h2>
      <BentoGrid className="lg:grid-rows-3 container">
        {products.map((product) => (
          <BentoCard key={product.name} {...product} />
        ))}
      </BentoGrid>
    </div>
  )
}
