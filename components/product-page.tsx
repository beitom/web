import { motion, useScroll, useTransform } from "framer-motion"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import RequestADemoButton from "@/components/product-contact-form"
import React from "react"

interface ProductFeature {
  title: string
  description: string
  descriptionContent?: React.ReactNode
  content: React.ReactNode
}

interface ProductPageProps {
  productName: string
  productDescription: string
  productBackground?: React.ReactNode
  features: ProductFeature[]
}

// Background image component with built-in animations
export const ProductBackgroundImage = ({ src, alt }: { src: string; alt: string }) => {
  const { scrollY } = useScroll()

  return (
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        y: useTransform(scrollY, [0, 1000], [0, 500]),
        opacity: useTransform(scrollY, [0, 1000], [1, 0])
      }}
      transition={{ duration: 0.8 }}
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full brightness-50 object-cover"
    />
  )
}

export default function ProductPage({
  productName,
  productDescription,
  productBackground,
  features
}: ProductPageProps) {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        {/* Background container */}
        <div className="absolute inset-0">{productBackground || <div className="absolute inset-0 bg-black" />}</div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {productName}
          </h1>
          <p className="mt-4 text-2xl lg:text-3xl text-white">{productDescription}</p>
        </motion.div>
      </section>

      <div className="sm:container">
        <StickyScroll
          content={features}
          // content={features.map((feature) => ({
          //   ...feature,
          //   content: <ShinyBox className="flex flex-col p-4 text-left">{feature.content}</ShinyBox>
          // }))}
        />
      </div>

      <RequestADemoButton productName={productName} />
    </>
  )
}
