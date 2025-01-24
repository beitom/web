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
      "Bdocker simulates molecular docking for ligand-protein interactions by maximizing the geometric similarity between interacting moieties. BDocker accelerates the process of screening candidate drug molecules in early stages of computational drug design.",
    descriptionContent: (
      <img
        src="https://miro.medium.com/max/552/1*rYtOtQ7C1hkcSpgeTFLkQw.gif"
        alt="protein ligand interaction"
        className="px-[10%] border-t rounded-3xl border-b"
      />
    ),
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Highlights</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Experience unmatched docking performance with:
          <ul className="list-none mt-2">
            <CheckItem title="The World’s most efficient simulated annealing algorithms for molecular docking in computational drug design." />
            <CheckItem title="Validated performance and accuracy." />
            <CheckItem title="Soon available on AWS." />
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
      "BEIT has a track record building optimized simulated annealer's capable of outperforming the competition including DWAVE's quantum annealer, and other technologies such as QBOWL, CPLEX and Gurobi.",
    descriptionContent: <BenchmarkTable />,
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Proven Performance</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Set new standards in drug discovery with:
          <div className="list-none mt-2">
            <CheckItem title="Superior performance over DWAVE, QBOWL, CPLEX, and Gurobi." />
            <CheckItem title="Validated results on complex molecular structures." />
            <CheckItem title="Scalable distributed implementation." />
          </div>
        </div>
        <p>
          Simulate the molecular docking process faster, cheaper and more accurately. BDocker correctly predicted the
          structure of{" "}
          <a href="https://en.wikipedia.org/wiki/Imatinib" className="text-blue-600 hover:underline">
            imatinib
          </a>
          , a FDA approved anticancer drug docking to c-Abl protein at 3x the speed than available freeware software,
          such as AutoDock.
        </p>
        <Link href="/products/qubo/benchmark" passHref>
          <Button className="mt-3 rounded-lg" variant="ghost">
            Learn More <ChevronRight />
          </Button>
        </Link>
      </ShinyBox>
    )
  },
  {
    title: "Continuous Improvement",
    description:
      "We are constantly improving our product to search the enormous chemical space of fragments to return the most promising molecular compositions for binding to a protein pocket to support the de novo drug design process. BDocker will soon be available on AWS, offering scalable access to our advanced docking simulations.",
    descriptionContent: (
      <img
        src="/assets/images/products/bdocker/im_3.png"
        alt="protein ligand interaction - 2"
        className="px-[10%] border-t rounded-3xl border-b"
      />
    ),
    content: (
      <ShinyBox className="flex flex-col p-4 text-left">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Cloud Accessibility</p>
        <div className="text-neutral-200 mt-4 relative z-20 pb-4">
          Scale your research with:
          <ul className="list-none mt-2">
            <CheckItem title="Easy integration with AWS cloud services." />
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
