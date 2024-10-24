// Example cards for the updated component
import { LayoutGrid } from "../ui/layout-grid"

const Algorithms = () => {
  return (
    <>
      {" "}
      <p className="mb-4">
        <span className="font-bold">
          Quantum algorithms represent a transformative leap in computational capabilities, offering solutions to
          several classes of problems that are currently intractable for classical computers.
        </span>
        By leveraging the principles of quantum mechanics, these algorithms can process information at faster speeds
        with fewer resources, delivering breakthroughs in fields such as cryptography, optimization, and simulation.
      </p>
      <p className="mb-4">
        At BEIT, we are at the forefront of translating theoretical quantum advantages into practical applications. Our
        work focuses on efficient implementations of critical components essential for quantum computing, such as our
        patented hardware-efficient MicroDiffusers for unstructured search, and specialized oracles for quadratic
        unconstrained binary optimization (QUBO). Currently, BEIT holds 16 patents in the area of quantum algorithms.
      </p>
      <p className="mb-4">
        Combinatorial optimization methods including QUBO are used widely in various industries for scheduling,
        logistics, machine learning, and more, making our solutions versatile across multiple applications. In addition
        to our advancements in quantum technology, we also recognize the current limitations of quantum hardware. To
        bridge this gap, we offer a quantum-inspired GPU-accelerated QUBO solver, available today on AWS.
      </p>
    </>
  )
}

const ErrorCorrection = () => {
  return (
    <>
      {" "}
      <p className="mb-3">
        <span className="font-bold">
          Quantum Error Correction (QEC) is a fundamental pillar in the development of robust quantum computing systems,
          ensuring that quantum computations are reliable despite the inherent fragility of quantum states.
        </span>
        At BEIT, we recognize the intertwined evolution of quantum error correction and algorithm design as essential
        for advancing practical quantum computing applications.
      </p>
      <figure className="pl-4 mb-3 border p-3 rounded-lg">
        <blockquote className="text-lg italic font-semibold text-white">
          <p>
            "There is no inherent reason that quantum fault tolerance needs large numbers of extra qubits, and we should
            not be satisfied with protocols that do."
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-3 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
            <cite className="pr-3 font-xs text-white">- Daniel Gottesman</cite>
            <a href="https://arxiv.org/abs/1310.2984" className="pl-3 underline text-blue-500 hover:no-underline">
              Fault-Tolerant Quantum Computation with Constant Overhead
            </a>
          </div>
        </figcaption>
      </figure>
      <p className="mb-3">
        This integrated strategy is particularly pivotal as we develop our fault-tolerant implementations of Grover’s
        Search and Quantum Phase Estimation algorithms.
      </p>
    </>
  )
}

const Simulation = () => {
  return (
    <div className="text-zinc-200">
      <p className="mb-3">
        <span className="font-bold">
          Quantum computers will soon offer unprecedented capabilities in simulating complex molecular and atomic
          interactions.
        </span>
        These simulations can lead to breakthroughs in various fields, from drug discovery to advanced battery design,
        by providing insights that are provably unattainable with conventional supercomputers no matter how powerful.
      </p>
      <p className="mb-3">
        Funded by the European Innovation Council with a non-diluting grant of €2.5m, our research and product
        development is focused on creating and refining algorithms that maximize the performance of quantum simulations.
      </p>
    </div>
  )
}
import { SiThealgorithms } from "react-icons/si"
import { GiCubeforce } from "react-icons/gi"
import { CiWavePulse1 } from "react-icons/ci"

const cards = [
  {
    id: 1,
    title: "Quantum Algorithms",
    icon: <SiThealgorithms className="size-5 text-primary" />,
    description: "Discover how our quantum algorithms provide breakthroughs in optimization and cryptography.",
    content: <Algorithms />,
    className: "col-span-1"
  },
  {
    id: 2,
    title: "Quantum Error Correction",
    icon: <GiCubeforce className="size-5 text-primary" />,
    description: "Learn about our advanced error correction techniques to make quantum computing reliable.",
    content: <ErrorCorrection />,
    className: "col-span-1"
  },
  {
    id: 3,
    title: "Material Simulation",
    icon: <CiWavePulse1 className="size-5 text-primary" />,
    description: "Explore how quantum simulations are transforming drug discovery and battery design.",
    content: <Simulation />,
    className: "col-span-1"
  }
]

export function LayoutGridDemo() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Technology</h1>
      <LayoutGrid cards={cards} />
    </section>
  )
}
