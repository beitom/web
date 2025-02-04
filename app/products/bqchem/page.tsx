"use client"

import ShinyBox from "@/components/ui/shiny-box"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomDemoButton } from "@/components/product-contact-form"
import ProductPage, { ProductBackgroundImage } from "@/components/product-page"
import { CheckItem } from "@/components/ui/check-item"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

import { InlineMath } from "react-katex"
import "katex/dist/katex.min.css"
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalTitle,
  ResponsiveModalTrigger
} from "@/components/ui/responsive-modal"
import MoleculeDrawer from "@/components/molecule-drawer"
import { FlipWords } from "@/components/ui/flip-words"

function PerformanceTable() {
  const data = [
    {
      molecule: <MoleculeDrawer xyzPath="/assets/molecules/dragonfly.xyz" moleculeName="Bromo Dragonfly" />,
      orbitalCount: 1773,
      qchem: 0.59,
      bqchem: 0.1,
      speedup: 59
    },
    {
      molecule: <MoleculeDrawer xyzPath="/assets/molecules/phthalocyanine.xyz" moleculeName="Phthalocyanine" />,
      orbitalCount: 3176,
      qchem: 7.5,
      bqchem: 1.42,
      speedup: 6.8
    },
    {
      molecule: <MoleculeDrawer xyzPath="/assets/molecules/digitonin.xyz" moleculeName="Digitonin" />,
      orbitalCount: 8521,
      qchem: 1076,
      bqchem: 141,
      speedup: 76
    }
  ]

  return (
    <Table>
      <TableCaption>BQchem Performance Benchmark</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left bg-zinc-900">Molecule</TableHead>
          <TableHead className="text-center">Orbital Count</TableHead>
          <TableHead className="text-center">QChem sc-BW2</TableHead>
          <TableHead className=" text-green-700 text-center font-bold">BQChem</TableHead>
          <TableHead className="text-center">Speedup</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {data.map((row) => (
          <TableRow key={row.orbitalCount}>
            <TableCell className="font-medium text-left bg-zinc-900 relative">{row.molecule}</TableCell>
            <TableCell>{row.orbitalCount}</TableCell>
            <TableCell>{row.qchem}s</TableCell>
            <TableCell className=" bg-green-700 rounded-xl font-bold">{row.bqchem}s</TableCell>
            <TableCell className=" font-bold">{row.speedup}x</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function ComparisonTable() {
  const methods = [
    {
      name: "DFT",
      cost: <InlineMath math="O(N^3)" />,
      sizeConsistent: true,
      sizeExtensive: false,
      abInitio: false,
      correctDegeneracies: true
    },
    {
      name: "MP2",
      cost: <InlineMath math="O(N^5)" />,
      sizeConsistent: true,
      sizeExtensive: true,
      abInitio: true,
      correctDegeneracies: false
    },
    {
      name: "BW2",
      cost: <InlineMath math="O(N^5)" />,
      sizeConsistent: false,
      sizeExtensive: false,
      abInitio: true,
      correctDegeneracies: true
    },
    {
      name: "sc-BW2 (2023)",
      cost: <InlineMath math="O(N^5)" />,
      sizeConsistent: true,
      sizeExtensive: true,
      abInitio: true,
      correctDegeneracies: true
    }
  ]

  const StatusIcon = ({ value }: { value: boolean }) => {
    return value ? <Check className="w-6 h-6 text-green-500" /> : <X className="w-6 h-6 text-red-500" />
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold bg-zinc-900">Method</TableHead>
          <TableHead className="font-bold">Cost</TableHead>
          <TableHead className="font-bold">Size consistent</TableHead>
          <TableHead className="font-bold">Size extensive</TableHead>
          <TableHead className="font-bold">Ab-initio?</TableHead>
          <TableHead className="font-bold">Correct near degeneracies?</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {methods.map((method) => (
          <TableRow key={method.name}>
            <TableCell className="font-medium bg-zinc-900">{method.name}</TableCell>
            <TableCell>{method.cost}</TableCell>
            <TableCell>
              <StatusIcon value={method.sizeConsistent} />
            </TableCell>
            <TableCell>
              <StatusIcon value={method.sizeExtensive} />
            </TableCell>
            <TableCell>
              <StatusIcon value={method.abInitio} />
            </TableCell>
            <TableCell>
              <StatusIcon value={method.correctDegeneracies} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const productName = "BQChem" // Just a placeholder if needed

const features = [
  {
    title: "What is BQChem?",
    description:
      "BQChem solves the electronic structure problem for molecular systems. Electronic energy is a key quantity used to predict chemical reaction mechanisms. BQChem utilizes the latest advancements in quantum chemistry—size-consistent Brillouin-Wigner perturbation theory (sc-BW2)—to deliver cutting-edge performance and accuracy.",
    // Placeholder for an image or gif
    descriptionContent: (
      <div className="h-[8rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-zinc-200">
          BQChem is for
          <br />
          <FlipWords
            className="text-blue-600 font-bold"
            words={[
              "Electrostatic Potentials",
              "Electronic Energies",
              "Structure Stability",
              "Potential Energy Surfaces"
            ]}
          />
        </div>
      </div>
    ),

    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Highlights</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          BQChem offers:
          <ul className="list-none mt-2">
            <CheckItem title="Efficient implementation of a breakthrough quantum chemistry method (sc-BW2)." />
            <CheckItem title="Up to 10x faster calculations than commercial quantum chemistry packages (e.g., Q-Chem)." />
            <CheckItem title="Improved accuracy over conventional MP2 methods." />
          </ul>
        </div>
        {/* Example button or custom link for a demo request */}
        <CustomDemoButton
          productName={productName}
          content={
            <Button className="mt-3 rounded-lg" variant="ghost">
              Request a demo <ChevronRight />
            </Button>
          }
        />
      </ShinyBox>
    )
  },
  {
    title: "Technology",
    description:
      "BQChem runs on both CPU and GPU architectures. By leveraging size-consistent Brillouin-Wigner perturbation theory (sc-BW2), it outperforms many existing quantum chemistry packages. See benchmark results for popular natural compounds and drug molecules below.",
    // Placeholder for a benchmark table or second image
    descriptionContent: <PerformanceTable />,
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Performance & Benefits</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Gain unmatched computational efficiency with:
          <ul className="list-none mt-2">
            <CheckItem title="Up to 10x faster calculations than competing solutions." />
            <CheckItem title="Enhanced accuracy compared to MP2 methods." />
            <CheckItem title="Superior performance over the Q-Chem suite for sc-BW2 calculations." />
          </ul>
        </div>

        <p className="mt-4">
          Use BQChem to accelerate your computational drug design process at any stage: from rapid screening of
          molecular electronic potentials to high-accuracy QM/MM simulations.
        </p>
        <ResponsiveModal>
          <ResponsiveModalTrigger asChild>
            <Button className="mt-3 rounded-lg" variant="ghost">
              Learn More <ChevronRight />
            </Button>
          </ResponsiveModalTrigger>
          <ResponsiveModalContent className="text-center p-4 gap-4 max-w-3xl">
            <ResponsiveModalTitle className="text-3xl">Method Comparison</ResponsiveModalTitle>
            <ResponsiveModalDescription className="max-w-2xl container">
              sc-BW2 is size-extensive and size-consistent, respectively. It offers a more accurate and efficient
              alternative to conventional quantum chemistry methods.
            </ResponsiveModalDescription>
            <div className="container w-full justify-center flex">
              <div className="max-w-4xl border rounded-lg overflow-x-scroll mt-2">
                <ComparisonTable />
              </div>
            </div>
          </ResponsiveModalContent>
        </ResponsiveModal>
      </ShinyBox>
    )
  },
  {
    title: "Directions",
    description:
      "We are continuously enhancing BQChem for compatibility with new hardware paradigms, including the Cerebras wafer-scale engine, to deliver unmatched performance for QM/MM calculations in computational drug design.",
    // Placeholder for a second or third image
    descriptionContent: (
      <img
        src="/assets/images/products/bqchem/img_2.png" // placeholder path
        alt="BQChem advanced technology"
        className="px-[10%] border-t rounded-3xl border-b"
      />
    ),
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Future Developments</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Look forward to:
          <ul className="list-none mt-2">
            <CheckItem title="Support for wafer-scale engine technology (Cerebras) for large-scale simulations." />
            <CheckItem title="Optimized QM/MM calculations for advanced computational drug design." />
            <CheckItem title="Ongoing improvements in methods and performance updates." />
          </ul>
        </div>
        <p className="mt-4">
          BQChem accelerates computation of key quantities in chemical simulations, paving the way for faster, more
          accurate drug discovery pipelines.
        </p>
      </ShinyBox>
    )
  }
]

export default function Page() {
  return (
    <ProductPage
      productName={productName}
      productDescription="Accelerated Quantum Chemistry Engine"
      productBackground={
        <div className="bg-black w-full h-full">
          <ProductBackgroundImage src="/assets/images/products/bqchem/img_2.png" alt="BQChem" />
        </div>
      }
      features={features}
    />
  )
}
