import { ArrowRightIcon } from "@radix-ui/react-icons"
import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GoRocket } from "react-icons/go"
import { LiaAtomSolid } from "react-icons/lia"

export default function LearnMoreSection() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16" id="learnmore">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 text-neutral-200 font-sans">About Us</h2>
      <div className="z-10 relative backdrop-blur-lg p-8 md:p-12 border rounded-xl">
        <h1 className="text-white text-3xl mb-2 font-bold">
          Fast-Tracking the Quantum Era with Algorithmic Innovations
        </h1>
        <p className="text-lg font-normal text-gray-200 mb-6">
          At BEIT we focus on developing innovative algorithmic techniques to advance the ability of quantum computing.
          By studying the fundamental building blocks of quantum algorithms, we work to reduce their error and optimize
          their resource demand to achieve quantum advantage sooner. Our research spans a wide range of applications,
          from optimization to quantum chemistry simulation. We are committed to pushing the boundaries of quantum
          computation and harnessing its potential to solve complex problems in science and industry.
        </p>

        <div className="flex flex-row flex-wrap gap-2">
          <Link href="/research" passHref>
            <Button variant="ghost">
              See our Research <LiaAtomSolid className="ms-2" />
            </Button>
          </Link>

          <Link href="/products" passHref>
            <Button variant="ghost">
              Discover our Technology <GoRocket className="ms-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
