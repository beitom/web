"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import ShinyBox from "@/components/ui/shiny-box"
import { CheckIcon } from "@radix-ui/react-icons"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProductContactButton from "@/app/products/product-contact-form"
import { Drawer } from "@/components/ui/drawer"
import { useState } from "react"
import ShinyButton from "@/components/ui/shiny-button"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

const CheckItem = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  )
}

const features = [
  {
    title: "Optimize Molecular Geometries",
    description:
      "BDocker optimizes ligand-protein interactions using advanced molecular fragment descriptors and affinity maps derived using our quantum chemistry solutions.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Key Features</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Achieve precise molecular geometries with:
          <ul className="list-none mt-2">
            <CheckItem title="Advanced molecular fragment descriptors." />
            <CheckItem title="Affinity maps from quantum chemistry solutions." />
            <CheckItem title="Enhanced ligand-protein interaction modeling." />
          </ul>
        </div>
        <Link href="/features/optimized-geometries" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "High-Throughput Screening",
    description: "Enables rapid screening of large molecular databases, accelerating Stage 1 drug design.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Why High-Throughput?</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Speed up drug discovery with:
          <ul className="list-none mt-2">
            <CheckItem title="Rapid database screening algorithms." />
            <CheckItem title="Stage 1 drug design acceleration." />
            <CheckItem title="Streamlined molecular evaluation." />
          </ul>
        </div>
        <Link href="/features/high-throughput-screening" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "Simulated Annealing Optimization",
    description:
      "Utilizes a simulated annealing algorithm to optimize docking geometries for high-precision predictions.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Applications</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Enhance docking precision through:
          <ul className="list-none mt-2">
            <CheckItem title="Simulated annealing-based optimization." />
            <CheckItem title="Improved geometry prediction accuracy." />
            <CheckItem title="Robust and scalable computations." />
          </ul>
        </div>
        <Link href="/features/simulated-annealing" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "Continuous Improvements",
    description:
      "We continuously enhance model fidelity and speed with quantum chemistry-driven potentials and fragment-based screening.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Innovation at Work</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Drive consistent innovation with:
          <ul className="list-none mt-2">
            <CheckItem title="Quantum chemistry-driven potentials." />
            <CheckItem title="Fragment-based screening advancements." />
            <CheckItem title="Enhanced model fidelity and performance." />
          </ul>
        </div>
        <Link href="/features/future-improvements" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "Advanced Fragment Screening",
    description:
      "Specializes in fragment screening and evaluating ligand-pocket interactions for more efficient drug discovery.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Why Fragment Screening?</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Optimize drug discovery pipelines with:
          <ul className="list-none mt-2">
            <CheckItem title="Precise fragment screening." />
            <CheckItem title="In-depth ligand-pocket interaction evaluation." />
            <CheckItem title="Accelerated molecular selection processes." />
          </ul>
        </div>
        <Link href="/features/fragment-screening" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  }
]

function ProductInfo() {
  return <StickyScroll content={features} />
}

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
        {/*/!* Optional  dark overlay for better text readability *!/*/}
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
      <ProductInfo />

      <ProductContactButton productName="BDocker" />
    </>
  )
}
