import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { BenchmarkTable } from "@/app/products/qubo/benchmark/table"

export default function QuboSolver() {
  return (
    <div className="min-h-screen bg-black text-white p-8 container mt-32 max-w-6xl border rounded-lg">
      {/* QUBO Reference Solver Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-mono mb-4">QUBO Reference Solver</h2>
        <div className="flex flex-col md:flex-row mb-8 gap-8">
          <div>
            <p className="mb-4">
              Inspired by the D-Wave machines, we offer provably correct solution for all QUBO instances restricted to a
              specific topology. Within seconds, we can provide you with optimal solution for your problem or multiple
              samples from Boltzmann distribution.
            </p>

            <p className="text-gray-400">
              Caveats: not all problems embed nicely onto the supported topologies. If that's the case, consider the
              following products.
            </p>
          </div>

          <Table className="w-full mb-8">
            <TableHeader>
              <TableRow className="bg-zinc-900">
                <TableHead className="text-white">Topology</TableHead>
                <TableHead className="text-white">Size</TableHead>
                <TableHead className="text-white">Solution</TableHead>
                <TableHead className="text-white">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Chimera</TableCell>
                <TableCell>½ of the device</TableCell>
                <TableCell>optimal</TableCell>
                <TableCell>~1s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pegasus</TableCell>
                <TableCell>~½ of the device</TableCell>
                <TableCell>optimal</TableCell>
                <TableCell>~1s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Zephyr</TableCell>
                <TableCell>~½ of the device</TableCell>
                <TableCell>optimal</TableCell>
                <TableCell>~1s</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex gap-4 mb-12 justify-center">
          {[
            "Establish\na problem model",
            "Map the problem\nto QUBO",
            "Embed the QUBO\nonto the topology",
            "Use\nthe Reference Solver"
          ].map((step, i) => (
            <Card key={i} className="p-4  text-white text-center whitespace-pre-line">
              {step}
            </Card>
          ))}
        </div>
      </section>

      {/* QUBO Annealer Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-mono mb-4">QUBO Annealer</h2>
        <p className="mb-4">
          Simulated annealing solution, executed on classical hardware, tuned specifically for tackling QUBO problems.
          Not limited by the topology and allowing full connectivity between variables for efficient problem
          representation. Based on the QPLIB benchmark, it wins in most of the cases against commercial general-purpose
          optimizers, and also the majority of cases against other QUBO- specialized solvers.
        </p>

        <p className="text-gray-400 mb-4">
          Caveats: not all problems can be effectively mapped to QUBO. Particular problem may require too many variables
          to be feasible for solving. If that's the case, consider the following product.
        </p>

        <BenchmarkTable />

        <div className="flex gap-4 mb-12 justify-center pt-8">
          {["Establish\na problem model", "Map the problem\nto QUBO", "Use\nthe QUBO Annealer"].map((step, i) => (
            <Card key={i} className="p-4  text-white text-center whitespace-pre-line">
              {step}
            </Card>
          ))}
        </div>
      </section>

      {/* Generic Annealer Section */}
      <section>
        <h2 className="text-3xl font-mono mb-4">Generic Annealer</h2>
        <div className="flex flex-col md:flex-row mb-8 gap-8">
          <div>
            <p className="mb-4">
              The most powerful, heuristic-based solution against all types of problems. Uses techniques from previous
              products, translated into generalized solutions.
            </p>
            <p className="text-gray-400">
              Caveats: whilst being the most powerful technology here, it is not ready to use straight away and requires
              our efforts to adapt your problem to the engine.
            </p>
          </div>

          <Table className="w-full">
            <TableCaption>
              A comparison with{" "}
              <a className="text-blue-600 hover:underline" href="https://arxiv.org/abs/2108.02099" target="_blank">
                2QAN
              </a>
              , another heuristic-based quantum compiler.
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-zinc-900">
                <TableHead className="text-white">Phase</TableHead>
                <TableHead className="text-white">Our compiler</TableHead>
                <TableHead className="text-white">2QAN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Placing</TableCell>
                <TableCell>92.3% success rate within 27 ms</TableCell>
                <TableCell>~16 minutes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Routing</TableCell>
                <TableCell>~19,4 swaps</TableCell>
                <TableCell>30 swaps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scheduling</TableCell>
                <TableCell>~7,6 depth</TableCell>
                <TableCell>~12,5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex gap-4 justify-center">
          {[
            "Establish\na problem model",
            "Develop the right expression\nof the problem in our framework",
            "Use\nthe dedicated annealer"
          ].map((step, i) => (
            <Card key={i} className="p-4  text-white text-center whitespace-pre-line">
              {step}
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
