"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import ShinyButton from "@/components/ui/shiny-button"
import { CheckIcon } from "@radix-ui/react-icons"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GridBackgroundDemo() {
  return (
    <>
      <div className="h-screen w-full bg-black  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/*<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>*/}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            QUBO Solver
          </h1>
          <p className="px-4 mt-4 text-2xl lg:text-3xl text-white">Quantum Ready Optimization</p>
          <p className="px-4 mt-2">
            Prepare your business for quantum computing, with a solution that offers benefits today!
          </p>
        </motion.div>
        <AnimatedGridPattern
          numSquares={100}
          maxOpacity={0.1}
          duration={1}
          repeatDelay={0.1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%]"
          )}
        />
      </div>
      <ProductInfo />
    </>
  )
}

const CheckItem = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  )
}

const content = [
  {
    title: "Quantum Optimization",
    description:
      "Prepare your infrastructure today for the coming quantum revolution, leveraging quantum-inspired optimization solutions now.",
    content: (
      <ShinyButton className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Applications</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Leverage quantum optimization across various industries:
          <ul className="list-none mt-2">
            <CheckItem title="Molecular Optimization: Enhance quantum chemistry computations." />
            <CheckItem title="Logistics & Planning: Maximize routing and scheduling efficiency." />
            <CheckItem title="Portfolio Selection: Balance returns and risk with precision." />
            <CheckItem title="Network Design: Improve performance and reduce costs." />
          </ul>
        </div>
        <Button className="mt-3 rounded-lg" variant="ghost">
          Learn More <ChevronRight />
        </Button>
      </ShinyButton>
    )
  },
  {
    title: "QUBO",
    description: "Adopt QUBO (Quadratic Unconstrained Binary Optimization) for scalable, future-ready problem-solving.",
    content: (
      <ShinyButton className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Why QUBO?</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          QUBO provides a universal framework for encoding complex challenges:
          <ul className="list-none mt-2">
            <CheckItem title="A versatile mathematical form suitable for NP-complete problems." />
            <CheckItem title="Compatible with both classical and future quantum solvers." />
            <CheckItem title="Efficiently handles large-scale, complex optimization tasks." />
          </ul>
        </div>
        <Button className="mt-3 rounded-lg" variant="ghost">
          Download Whitepaper <ChevronRight />
        </Button>
      </ShinyButton>
    )
  },
  {
    title: "Why Choose BEIT’s QUBO Solver?",
    description: "Achieve optimal outcomes faster and more reliably with BEIT’s quantum-inspired solver.",
    content: (
      <ShinyButton className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Key Benefits</p>
        <div className="text-neutral-200 mt-4 relative z-20">
          <ul className="list-none mt-2">
            <CheckItem title="Guaranteed optimal solutions—no guesswork." />
            <CheckItem title="Significantly lower cost than competitors." />
            <CheckItem title="GPU-accelerated for speed and efficiency." />
            <CheckItem title="Fast approximate sampler for quick insights." />
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Position yourself for a seamless transition to quantum hardware as it becomes available.
        </p>
      </ShinyButton>
    )
  },
  {
    title: "Deploy on AWS",
    description: "Run BEIT's QUBO Solver on AWS, harnessing scalable cloud resources and familiar infrastructure.",
    content: (
      <ShinyButton className="flex flex-col p-4 text-left w-full">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">AWS Integration</p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Achieve optimization results quickly and cost-effectively:
          <ul className="list-none mt-2">
            <CheckItem title="Deterministic, guaranteed optimal solutions." />
            <CheckItem title="Faster computations through GPU acceleration." />
            <CheckItem title="Leverage the same codebase as D-Wave systems." />
            <CheckItem title="$0.3 per request, ensuring cost transparency." />
          </ul>
        </div>
        <Button className="mt-3 rounded-lg" variant="ghost">
          Get Started on AWS <ChevronRight />
        </Button>
      </ShinyButton>
    )
  },
  {
    title: "Become Quantum-Ready with BEIT",
    description:
      "Start building your quantum foundations now, ensuring a smooth leap into fully fault-tolerant quantum computing.",
    content: (
      <ShinyButton className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Future-Proof Your Operations</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Gain a competitive edge in tomorrow’s computational landscape:
          <ul className="list-none mt-2">
            <CheckItem title="Build quantum-ready workflows today." />
            <CheckItem title="Seamless API integration when quantum hardware arrives." />
            <CheckItem title="Maintain a unified approach across classical and quantum regimes." />
          </ul>
        </div>
        <Button className="mt-3 rounded-lg" variant="ghost">
          Contact Sales <ChevronRight />
        </Button>
      </ShinyButton>
    )
  }
]

function ProductInfo() {
  return <StickyScroll content={content} />
}
