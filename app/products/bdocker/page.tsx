"use client"

import ShinyBox from "@/components/ui/shiny-box"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CustomDemoButton } from "@/components/product-contact-form"
import { BenchmarkTable } from "@/app/products/qubo/benchmark/table"
import ProductPage, { ProductBackgroundImage } from "@/components/product-page"
import { CheckItem } from "@/components/ui/check-item"

const productName = "BDocker"
const features = [
  {
    title: "What is BDocker?",
    description:
      "BDocker is an advanced molecular docking solution that predicts how potential drug molecules (ligands) bind to specific protein targets. By focusing on precise geometric similarity, BDocker dramatically speeds up early-stage drug discovery, enabling rapid screening of candidate molecules with remarkable accuracy.",
    descriptionContent: (
      <>
        <img src="/assets/images/products/bdocker/docking.gif" alt="protein ligand interaction" />
        {/* Placeholder figure caption */}
        <p className="text-center text-sm text-gray-500">[Caption placeholder]</p>
      </>
    ),
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Highlights</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Experience unmatched docking performance with:
          <ul className="list-none mt-2">
            <CheckItem
              title={
                <>
                  The{" "}
                  <Link href="/products/qubo/benchmark" className="text-blue-600 hover:underline">
                    World’s most efficient simulated annealing algorithms
                  </Link>{" "}
                  for molecular docking in computational drug design.
                </>
              }
            />
            <CheckItem title="Validated performance and accuracy." />
            <CheckItem title="Public release coming soon." />
          </ul>
        </div>
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
      "BEIT has a track record of building optimized simulated annealers that outperform well-known quantum and classical solvers in the marketplace including DWAVE, QBOWL, CPLEX, and Gurobi",
    descriptionContent: <BenchmarkTable />,
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Proven Performance</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Set new standards in drug discovery with:
          <div className="list-none mt-2">
            <CheckItem title="Superior performance validated against leading solvers." />
            <CheckItem title="Trusted results on complex molecular structures." />
            <CheckItem title="Innovative multi-threaded architecture for efficient scalability." />
          </div>
        </div>
        <p className="mt-2">
          BDocker streamlines large-scale docking challenges by leveraging a parallelized approach that delivers
          exceptional speed and accuracy. This powerful capability accelerates the discovery of optimal ligand
          conformations, giving you a competitive advantage.
        </p>
        <p className="mt-4">
          In benchmark comparisons, BDocker correctly predicted the structure of{" "}
          <a href="https://en.wikipedia.org/wiki/Imatinib" className="text-blue-600 hover:underline">
            imatinib
          </a>
          , an FDA-approved anticancer drug docking to the c-Abl protein, at 3× the speed of freeware tools like
          AutoDock.
        </p>
      </ShinyBox>
    )
  },
  {
    title: "Continuous Improvement",
    description:
      "We are constantly refining our product to explore the vast chemical space of molecular fragments, returning the most promising candidates for binding to a protein pocket and supporting de novo drug design. BDocker’s public release is coming soon, available as a stand-alone licensed binary or a managed cloud solution on AWS.",
    descriptionContent: (
      <>
        <img src="/assets/images/products/bdocker/1s38.png" alt="protein ligand interaction - 2" />
        {/* Placeholder figure caption */}
        <p className="text-center text-sm text-gray-500">[Caption placeholder]</p>
      </>
    ),
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Cloud & Local Accessibility</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Scale your research with:
          <ul className="list-none mt-2">
            <CheckItem title="Stand-alone binary licensing or managed AWS solution." />
            <CheckItem title="Flexible access for widespread industry application." />
            <CheckItem title="Continuously updated features and capabilities." />
          </ul>
        </div>
      </ShinyBox>
    )
  }
]

export default function Page() {
  return (
    <ProductPage
      productName={productName}
      productDescription="State-of-the-art Molecular Docking Solution"
      productBackground={<ProductBackgroundImage src="/assets/images/products/bdocker/im_4.png" alt={productName} />}
      features={features}
    />
  )
}
