"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons"
import { useInView } from "framer-motion"
import { useRef } from "react"
import TextShimmer from "@/components/ui/text-shimmer"
import { Button } from "@/components/ui/button"
import AnimatedGradientText from "../ui/animated-gradient-text"
import { cn } from "../../lib/utils"
import { ChevronRight } from "lucide-react"
import { BorderBeam } from "../ui/border-beam"

export default function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section id="hero" className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8">
      <div className="animate-fade-in">
        <AnimatedGradientText>
          ✨
          <TextShimmer>
            <span
              className={cn(
                `ms-1 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Try our QUBO Solver
            </span>
          </TextShimmer>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div>

      <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-gray-600">
        BEIT
        <br />
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Quantum Technology Experts</span>
      </h1>
      <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        Pushing the limits of quantum computation through fundamental R&D in optimization, error correction and chemical
        simulation.
      </p>

      <Button
        variant="default"
        className="animate-fade-in -translate-y-4 gap-1 opacity-0 ease-in-out [--animation-delay:600ms]"
      >
        <span>Discover Our Solutions</span>

        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
    </section>
  )
}
