"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductData {
  category: string
  name: string
  description: string
  details: string
  image?: string
}

const products = [
  {
    name: "BDOCKER",
    category: "Drug Discovery",
    description: "Quantum-powered drug discovery platform",
    image: "/assets/images/products/bdocker.png",
    details:
      "BDOCKER accelerates pharmaceutical research with quantum algorithms, enabling the discovery of novel drugs and outpacing traditional methods."
  },
  {
    name: "QUBO Solver",
    image: "/assets/images/products/opt.png",
    category: "Optimization",
    description: "Quantum optimization for complex problems",
    details:
      "Our QUBO Solver harnesses quantum computing to tackle quadratic unconstrained binary optimization problems, providing superior solutions for logistics, finance, and more."
  },
  {
    name: "WaferMol",
    category: "Materials Science",
    image: "/assets/images/products/Illustration-carbon-nanotube.jpg",
    description: "Molecular simulation at quantum scale",
    details:
      "WaferMol pushes the boundaries of molecular simulation, allowing researchers to explore chemical interactions with unprecedented accuracy and speed."
  },
  {
    name: "CodeQraft",
    category: "Quantum Computing",
    image: "/assets/images/products/codeqraft.png",
    description: "Quantum error correction compiler",
    details:
      "CodeQraft is our cutting-edge QEC compiler, essential for achieving scalable quantum computation. It offers flexible, efficient compilation for various quantum architectures."
  }
]

function ProductCard({ product }: { product: ProductData }) {
  const [gradientStyle, setGradientStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const generateDarkColor = () => {
      const r = Math.floor(Math.random() * 128) / 3
      const g = Math.floor(Math.random() * 128) / 3
      const b = Math.floor(Math.random() * 128) / 3
      return `rgb(${r},${g},${b})`
    }

    const colors = [
      generateDarkColor(),
      generateDarkColor(),
      generateDarkColor(),
      generateDarkColor(),
      generateDarkColor()
    ]

    setGradientStyle({
      background: `linear-gradient(-45deg, ${colors.join(", ")})`,
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite"
    })
  }, [])

  return (
    <Card className="relative group border-none rounded-lg hover:scale-105 transition-all duration-200 ease-linear">
      {product?.image && (
        <img
          src={product.image}
          alt={product.name}
          className="blur-[1px] rounded-xl absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-200 ease-linear group-hover:blur-sm"
        />
      )}
      <div className="relative z-10 p-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">{product.name}</CardTitle>
          <CardDescription className="text-gray-300">{product.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white">{product.description}</p>
        </CardContent>
      </div>
    </Card>
  )
}

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-background py-32">
      <HeroSection />
      <ProductCarousel />
    </main>
  )
}

const HeroSection: React.FC = () => (
  <motion.div
    className="container mx-auto text-center px-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
      Transforming Ideas into Quantum Breakthroughs
    </h1>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Discover cutting-edge solutions designed to accelerate quantum computation, drug discovery, and fault-tolerant
      computing.
    </p>
  </motion.div>
)

const ProductCarousel: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null)
  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
        Explore Our Solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 lg:px-[25%]">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cursor-pointer transition-all"
            onClick={() => setSelectedProduct(product)}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ duration: 0.2 }}
            className="bg-black text-white rounded-lg p-8 max-w-md border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            </div>
            <p className="text-lg mb-4">{selectedProduct.description}</p>
            <p className="text-sm text-gray-300">{selectedProduct.details}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default LandingPage
