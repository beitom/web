import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const benchmark = [
  {
    name: 3506,
    opt_value: -478,
    our_solver: 0,
    gurobi: 16,
    qubowl: 0
  },
  {
    name: 3642,
    opt_value: -1034,
    our_solver: 0,
    gurobi: 299,
    qubowl: 24
  },
  {
    name: 3650,
    opt_value: -922,
    our_solver: 0,
    gurobi: 204,
    qubowl: 11
  },
  {
    name: 3693,
    opt_value: -1154,
    our_solver: 6,
    gurobi: 3600,
    qubowl: 1648
  },
  {
    name: 3706,
    opt_value: -682,
    our_solver: 0,
    gurobi: 66,
    qubowl: 0
  },
  {
    name: 3738,
    opt_value: -422,
    our_solver: 0,
    gurobi: 12,
    qubowl: 1
  },
  {
    name: 3822,
    opt_value: -850,
    our_solver: 0,
    gurobi: 148,
    qubowl: 0
  },
  {
    name: 3832,
    opt_value: -554,
    our_solver: 0,
    gurobi: 297,
    qubowl: 2
  },
  {
    name: 3838,
    opt_value: -746,
    our_solver: 0,
    gurobi: 3600,
    qubowl: 3
  },
  {
    name: 3850,
    opt_value: -1198,
    our_solver: 61,
    gurobi: 1363,
    qubowl: 11
  },
  {
    name: 3877,
    opt_value: -602,
    our_solver: 0,
    gurobi: 83,
    qubowl: 0
  },
  {
    name: 5725,
    opt_value: -33611981,
    our_solver: 0,
    gurobi: 6,
    qubowl: 1
  },
  {
    name: 5755,
    opt_value: -24838942,
    our_solver: 145,
    gurobi: 0,
    qubowl: 0
  },
  {
    name: 5881,
    opt_value: -13067,
    our_solver: 0,
    gurobi: 9,
    qubowl: 18
  },
  {
    name: 5882,
    opt_value: -25388,
    our_solver: 0,
    gurobi: 3600,
    qubowl: 0
  },
  {
    name: 5909,
    opt_value: -35726,
    our_solver: 0,
    gurobi: 2,
    qubowl: 0
  }
].map((bench) => ({
  ...bench,
  min: Math.min(bench.gurobi, bench.qubowl, bench.our_solver)
}))

function formatTime(time: number) {
  if (time === 0) {
    return "~0s"
  }
  return `${time}s`
}

export function BenchmarkTable() {
  return (
    <Table>
      <TableCaption>
        Evaluation on the based on the QPLIB benchmark. Gurobi & QUBOWL results by{" "}
        <a href="https://plato.asu.edu/ftp/qubo.html" className="text-blue-600 hover:underline">
          H. Mittelmann
        </a>
      </TableCaption>
      <TableHeader>
        <TableRow className="text-center bg-zinc-900">
          <TableHead className="text-center">QPLIB ID</TableHead>
          <TableHead className="text-center">GUROBI</TableHead>
          <TableHead className="text-center">QUBOWL</TableHead>
          <TableHead className="text-center">Our Solver</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {benchmark.map((bench) => (
          <TableRow key={bench.name}>
            <TableCell className="font-medium bg-zinc-950 border-r">{bench.name}</TableCell>
            <TableCell className={bench.gurobi === bench.min ? "bg-green-600/75 rounded-xl" : ""}>
              {formatTime(bench.gurobi)}
            </TableCell>
            <TableCell className={bench.qubowl === bench.min ? "bg-green-600/75 rounded-xl" : ""}>
              {formatTime(bench.qubowl)}
            </TableCell>
            <TableCell className={bench.our_solver === bench.min ? "bg-green-600/75 rounded-xl" : ""}>
              {formatTime(bench.our_solver)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
