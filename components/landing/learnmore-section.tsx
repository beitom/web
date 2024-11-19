import { ArrowRightIcon } from "@radix-ui/react-icons"
import React from "react"
import { Button } from "@/components/ui/button"

export default function LearnMoreSection() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16" id="learnmore">
      <h2 className="text-4xl font-bold text-center mb-10">Our Mission</h2>
      <div className="z-10 relative backdrop-blur-lg drop-shadow border rounded-lg p-8 md:p-12">
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

        <Button
          variant="outline"
          // href="#"
          // target="_blank"
          // className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-950 border border-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-900"
        >
          See our Research <ArrowRightIcon className="ms-2" />
        </Button>
      </div>
    </section>
  )
}
