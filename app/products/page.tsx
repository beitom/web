"use client"
import React from "react"
import { motion } from "framer-motion"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { SiGrapheneos } from "react-icons/si"
import { GiMeshNetwork } from "react-icons/gi"
import { SiMoleculer } from "react-icons/si"
import { PiCpuThin } from "react-icons/pi"
import { Vortex } from "@/components/ui/vortex"
import Image, { ImageProps } from "next/image"

const products = [
  {
    Icon: SiGrapheneos,
    name: "BDocker",
    category: "Molecular Dynamics",
    href: "/products/bdocker",
    description:
      "State of the art fast and precise molecular docking. Test your ligands in seconds. Create your own in house database.",
    background: <div />,
    cta: "Learn more",
    className: ""
  },
  {
    Icon: SiMoleculer,
    name: "BQChem",
    href: "/products/bqchem",
    category: "Molecular Structure",
    background: <div />,
    description: "GPU accelerated quantum chemistry. Compute potential energy surfaces to screen your candidates.",
    cta: "Learn more",
    className: ""
  },
  {
    Icon: PiCpuThin,
    name: "WaferMol",
    href: "/products/wafermol",
    category: "Materials Science",
    background: <div />,
    description: "Rigorously validate candidates in simulation using our wafer scale engine for molecular dynamics",
    cta: "Learn more",
    className: ""
  }
]

const qubo = {
  Icon: GiMeshNetwork,
  name: "QUBO Solver",
  href: "/products/qubo",
  background: <div />,
  category: "Optimization",
  description: "Highly scalable quadratic optimization toolkit",
  cta: "Learn more",
  className: ""
}

export default function LandingPage() {
  return (
    <>
      <motion.div
        className="min-h-screen bg-background py-32 flex flex-col justify-between h-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="mb-2 text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
            Explore Our Solutions
          </h1>
          {/*<Vortex />*/}
        </div>
        <DrugDiscoveryProducts />
        {/*<BackgroundBeams />*/}
      </motion.div>
      <OptimizationProducts />
      <EUFundedProjects />
    </>
  )
}

const DrugDiscoveryProducts: React.FC = () => {
  return (
    <div className="mt-16 z-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">
        Accelerated Drug Discovery
      </h2>
      <p className="container text-lg md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-4">
        Access the latest state-of-the-art methods in molecular dynamics, quantum chemistry and materials science with
        GPU and wafer-scale accelerated solutions.
      </p>
      <BentoGrid className="container">
        {products.map((product) => (
          <BentoCard key={product.name} {...product} />
        ))}
      </BentoGrid>
    </div>
  )
}

const OptimizationProducts: React.FC = () => {
  return (
    <div className="container mt-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Quantum Inspired Optimization
      </h2>
      <p className="container text-lg md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-4">
        Prepare you business for quantum computing with our highly scalable quadratic optimization toolkit ready to
        deploy today.
      </p>
      <BentoCard key="qubo" {...qubo} />
    </div>
  )
}

// const EUFlagBanner: React.FC = () => {
//   return <Image src="/assets/images/other_images/sponsorzy.projektu.png" alt="EU Flag" />
// }

const EICLogo: React.FC = () => {
  return (
    <Image
      src="/assets/images/other_images/EIC-logo-CoFundedBy-WhiteText_EN.png"
      alt="EU Flag"
      className="border rounded-lg"
      width={3844}
      height={512}
    />
  )
}

const EUFundedProjects: React.FC = () => {
  return (
    <div className="container mt-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        EU Funded Projects
      </h2>
      <p className="container text-lg md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-4">
        We are proud to be supported by the European Innovation Council. Our projects are at the forefront of innovation
        in the European Union.
      </p>
      <div className="w-full flex justify-center">
        <EICLogo />
      </div>
    </div>
  )
}
