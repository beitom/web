"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons"

import TextShimmer from "@/components/ui/text-shimmer"
import { Button } from "@/components/ui/button"
import AnimatedGradientText from "../ui/animated-gradient-text"
import { cn } from "../../lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto mt-32 lg:mt-64 max-w-7xl px-6 text-center md:px-8">
      <div className="flex flex-col h-[90vh] justify-center">
        <div>
          <Link className="animate-fade-in" href="/qubo">
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
          </Link>

          <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-gray-600">
            BEIT
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Quantum Technology Experts</span>
          </h1>
          <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
            Pushing the limits of quantum computation through fundamental R&D in optimization, error correction and
            chemical simulation.
          </p>

          <Link href="/products">
            <Button
              variant="outline"
              className="animate-fade-in -translate-y-4 gap-1 opacity-0 ease-in-out [--animation-delay:600ms] text-white bg-transparent hover:bg-zinc-200 hover:text-black transition-all"
            >
              <span>Discover Our Solutions</span>

              <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="mt-32">
          <div className="flex flex-col items-center gap-3 text-gray-400 opacity-0 [--animation-delay:700ms] animate-fade-in justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
              alt="EU Flag"
              className="w-16 sm:w-20 translate-y-[-0.55rem] opacity-75 rounded-xl"
            />
            <p>Supported by the European Innovation Council</p>
          </div>
        </div>
      </div>
    </section>
  )
}
