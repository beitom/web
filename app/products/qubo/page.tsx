"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import ShinyBox from "@/components/ui/shiny-box"
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
import Link from "next/link"

const content = [
  {
    title: "Quantum Optimization",
    description:
      "Embrace the future of computing by integrating quantum-inspired QUBO solvers into your applications today. This approach not only enhances your current optimization capabilities but also ensures a seamless transition to quantum computing as the technology matures. By adopting quantum-ready workflows now, you position your infrastructure at the forefront of innovation, ready to leverage the full potential of quantum advancements.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
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
        <Link href="https://www.nature.com/articles/s42254-024-00770-9" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "QUBO",
    description:
      "Adopt Quadratic Unconstrained Binary Optimization (QUBO) to enhance your problem-solving capabilities with scalable, future-ready solutions. QUBO models provide a unified framework for combinatorial optimization, enabling efficient solutions across various industries. By integrating QUBO solvers into your workflows, you prepare your infrastructure for seamless integration with emerging quantum technologies, ensuring adaptability and optimal performance as the computational landscape evolves.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Why QUBO?</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          QUBO provides a universal framework for encoding complex challenges:
          <ul className="list-none mt-2">
            <CheckItem title="A versatile mathematical form suitable for NP-complete problems." />
            <CheckItem title="Compatible with both classical and future quantum solvers." />
            <CheckItem title="Efficiently handles large-scale, complex optimization tasks." />
          </ul>
        </div>
      </ShinyBox>
    )
  },
  {
    title: "Why Choose BEIT’s QUBO Solver?",
    description:
      "Experience unparalleled optimization performance with BEIT’s quantum-inspired QUBO solver. Our solver guarantees optimal solutions for your complex combinatorial problems, ensuring accuracy and efficiency. Leveraging GPU acceleration, it delivers rapid, deterministic computations, significantly reducing processing times. Compatible with D-Wave’s “dimod” library and Chimera architecture, our solver integrates seamlessly into your existing workflows, facilitating a smooth transition to quantum-ready infrastructure. ",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
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
      </ShinyBox>
    )
  },
  {
    title: "Deploy on AWS",
    description:
      "Deploy BEIT’s QUBO Solver on AWS to leverage scalable cloud resources and integrate seamlessly with your existing infrastructure. Our solver is available as a Software as a Service (SaaS) solution on the AWS Marketplace, ensuring easy deployment and management. With pricing at $0.30 per request, you can efficiently scale your optimization tasks without significant upfront investments.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left w-full">
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
        <Link href="https://aws.amazon.com/marketplace/pp/prodview-z3oernljkydpk" passHref>
          <Button className="mt-3 rounded-lg text-left justify-start" variant="ghost">
            Get Started on AWS <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "Become Quantum-Ready with BEIT",
    description:
      "Start building your quantum foundations now, ensuring a smooth leap into fully fault-tolerant quantum computing.",
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Future-Proof Your Operations</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Gain a competitive edge in tomorrow’s computational landscape:
          <ul className="list-none mt-2">
            <CheckItem title="Build quantum-ready workflows today." />
            <CheckItem title="Seamless API integration when quantum hardware arrives." />
            <CheckItem title="Maintain a unified approach across classical and quantum regimes." />
          </ul>
        </div>
        <Link href="/contact" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Contact Sales <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  }
]

function ProductInfo() {
  return <StickyScroll content={content} />
}
