"use client";

import {Tabs} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";

export function Technology() {
    const tabs = [
        {
            title: "Quantum Algorithms",
            value: "algorithms",
            content: (
                <Algorithms/>
            ),
        },
        {
            title: "Error Correction",
            value: "ecc",
            content: (
                // remove overflow-hidden when clicked
               <ErrorCorrection/>
            ),
        },
        {
            title: "Material Simulation",
            value: "simulation",
            content: (
                <Simulation/>
            ),
        },
    ];

    return (
        <section className="container mx-auto px-4 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Technology</h1>
            <div
                className="z-10 relative backdrop-blur-lg drop-shadow border rounded-lg p-8 md:p-12 h-[45rem] overflow-hidden">
                <Tabs tabs={tabs} contentClassName="mt-8"/>
            </div>
        </section>
    );
}

const Algorithms = () => {
    return (
        <ScrollArea>
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-md text-white bg-gradient-to-br from-gray-950 to-black border">

            <p className="mb-4">
                        <span className="font-bold">
                        Quantum algorithms represent a transformative leap in computational capabilities, offering
                        solutions to several classs of problems that are currently intractable for classical computers.</span>
                By leveraging the
                principles of quantum mechanics, these algorithms can process information at faster
                speeds with fewer resources, delivering breakthroughs in fields such as cryptography,
                optimization, and simulation.

                At BEIT, we are at the forefront of translating theoretical quantum advantages into practical
                applications. Our work focuses on efficient implementations of critical components essential for
                quantum computing, such as our patented hardware-efficent <a href="blog/honeywell-h0.html"
                                                                             className="underline text-blue-500 hover:no-underline">MicroDiffusers</a>
                for unstructured search,
                and specialized <a href="publications/fp_adaptive_grover.html"
                                   className="underline text-blue-500 hover:no-underline">oracles for quadratic
                unconstrained binary optimization</a> (QUBO). Currently, BEIT holds 16 patents in the area of
                quantum algorithms.
                These technologies introduce new and enhance the performance of existing quantum
                algorithms by optimizing their operation within the quantum hardware, crucial for solving
                complex optimization problems more efficiently than ever before.
            </p>
            <p className="mb-4">
                Combinatorial optimization methods including QUBO are used widely in various
                industries for scheduling, logistics, machine learning, and more, making our solutions versatile
                across multiple applications. In addition to our advancements in
                quantum technology, we also recognize the current limitations of quantum hardware. To bridge
                this gap, we offer a quantum-inspired <a className="underline text-blue-500 hover:no-underline"
                                                         href="quantum_optimization.html">GPU-accelerated
                QUBO solver</a>, available today on AWS. This
                tool allows users to experience gains that we have learned by studying quantum systems on
                conventional accelerated hardware with the accessibility and
                ease of use that modern cloud platforms provide.
            </p>
            <p className="mb-4">
                By providing advanced algorithmic solutions that are both quantum-inspired and quantum-ready, we
                enable industries and researchers to tackle their most challenging problems today while paving
                the way for the fully realized quantum future.
            </p>

        </div>
        </ScrollArea>
    )
}


const ErrorCorrection = () => {
    return (
        <div
            className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-md text-white bg-gradient-to-br from-gray-950 to-black border">
            <p className="mb-3">
                        <span className="font-bold">Quantum Error Correction (QEC) is a fundamental pillar in the development of robust quantum
                        computing systems, ensuring that quantum computations are reliable despite the inherent
                            fragility of quantum states.</span> At BEIT, we recognize the intertwined evolution of
                quantum error
                correction and algorithm design as essential for advancing practical quantum computing
                applications. Our approach focuses on optimizing QEC
                protocols in harmony with the computational demands of specific quantum algorithms.
            </p>
            <figure className="pl-4 mb-3 border p-3 rounded-lg">
                <blockquote className="text-lg italic font-semibold text-white">
                    <p>"There
                        is no inherent reason that quantum fault tolerance needs large numbers of extra qubits,
                        and
                        we should not be satisfied with protocols that do."</p>
                </blockquote>
                <figcaption className="flex items-center mt-3 space-x-3 rtl:space-x-reverse">
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                        <cite className="pr-3 font-xs text-white">- Daniel Gottesman</cite>
                        <a href="https://arxiv.org/abs/1310.2984"
                           className="pl-3 underline text-blue-500 hover:no-underline">Fault-Tolerant Quantum
                            Computation with Constant Overhead</a>
                    </div>
                </figcaption>
            </figure>
            <p className="mb-3">
                This integrated strategy is particularly pivotal as we develop our fault-tolerant
                implementations of Grover’s Search and Quantum Phase Estimation algorithms.
                By co-designing our error-correcting codes with the algorithmic
                requirements, we aim to minimize the overhead typically associated with implementing complex
                multi-qubit operations required by such algorithms. Our innovative QEC methods leverage recent
                advances in fault-tolerant compiling techniques, allowing for more efficient use of quantum
                resources and reducing the need for extensive ancillary systems and state factories often
                required by traditional
                approaches like the Surface Code.
            </p>
            <p className="mb-3">
                Our commitment to refining QEC not only enhances the performance of our existing quantum
                algorithms but also prepares the infrastructure for scaling up quantum systems to handle more
                complex tasks. By reducing the qubit overhead and streamlining fault-tolerant operations, we
                enable more practical and accessible quantum computing solutions, pushing the boundaries of what
                is computationally possible.
            </p>

        </div>
    )
}

const Simulation = () => {
    return (
        <div
            className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-md text-white bg-gradient-to-br from-gray-950 to-black border">
            <p className="mb-3">
                    <span className="font-bold">Quantum computers will soon offer unprecedented capabilities
                        in simulating complex molecular and atomic interactions.</span> These simulations can lead to
                breakthroughs
                in various fields, from <a
                href="https://www.clinicaltrialsarena.com/features/quantum-computers-drug-development/"
                className="underline text-blue-500 hover:no-underline">drug discovery</a> to <a
                className="underline text-blue-500 hover:no-underline"
                href="https://spectrum.ieee.org/lithium-air-battery-quantum-computing">advanced battery
                design</a>, by providing insights that are
                provably unattainable with conventional supercomputers no matter how powerful. Generally speaking a
                quantum
                computer is a device that can directly model the behaviour of a quantum system using a similar
                number of qubits
                to the number of particles whereas classical computers will
                always require a number of bits that scales exponentially in the number of particles. At BEIT, we
                are at
                the forefront of this
                transformative shift, working to rigorously benchmark the expected gains of quantum simulation and
                further enhance the
                efficiency through
                novel algorithmic techniques.
            </p>
            <p className="mb-3">
                Funded by the European Innovation Council with a non diluting grant of €2.5m, our
                research and product development is focused
                on creating and refining algorithms that maximize the performance of quantum simulations.
                Our aim is to push the
                boundaries of what quantum simulations can achieve, making it more practical for
                real-world applications and accessible on real quantum hardware sooner.
            </p>
            <p className="mb-3">
                Our team is particularly focused on optimizing algorithms for specific applications in drug
                discovery and battery design. In drug discovery, our quantum simulations can model interactions at
                the molecular level with high accuracy, potentially identifying promising compounds faster and more
                efficiently. For battery design, we aim to simulate and understand complex electrochemical
                processes, paving the way for the development of more efficient and sustainable energy storage
                solutions.
            </p>
            <p className="mb-3">
                By integrating our advancements in quantum chemistry simulations with practical applications, we not
                only contribute to the theoretical foundations of quantum computing but also provide immediate
                benefits to industries reliant on material science. Our commitment to excellence in this field
                ensures that BEIT remains a leader in the quantum computing revolution, driving forward the next
                generation of
                technological innovation.
            </p>
        </div>

    )
}

