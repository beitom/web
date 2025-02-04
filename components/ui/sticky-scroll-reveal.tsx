"use client"

import React, { useRef } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName
}: {
  content: {
    title: string
    description: string
    descriptionContent?: React.ReactNode | any
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"]
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <>
      <div className="px-2 bg-black pb-0 sm:pb-16">
        <motion.div
          // animate={{
          //   backgroundColor: "var(--black)"
          // }}
          className="bg-black h-full flex flex-col sm:flex-row sm:justify-center relative sm:space-x-10 rounded-md border-none sm:border container p-4 sm:py-16"
          ref={ref}
        >
          <div className="div relative flex items-start px-4 pt-8">
            <div className="max-w-3xl">
              {content.map((item, index) => {
                const isActive = activeCard === index

                const cardVariants = {
                  inactive: {
                    opacity: 0.5,
                    scale: 0.9, // slightly lower opacity and shifted down when inactive
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  },
                  active: {
                    opacity: 1,
                    scale: 1, // comes into correct position when active
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }
                }

                return (
                  <motion.div
                    key={item.title + index}
                    className={cn("mb-16 sm:mb-32")}
                    // variants={cardVariants}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    initial={{ opacity: 0.2, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: false, amount: 0.15 }}
                    // animate={isActive ? "active" : "inactive"}
                    // initial="inactive"
                  >
                    <motion.h2 className="z-20 pt-8 sm:relative text-2xl font-bold text-slate-100 sticky top-0 border-b py-3 sm:py-6 bg-black">
                      {item.title}
                    </motion.h2>
                    <motion.p className="text-kg text-slate-300 mt-10 text-2xl">{item.description}</motion.p>
                    <motion.div className={cn("z-20 mt-8", contentClassName)}>
                      {item.descriptionContent ?? null}
                    </motion.div>
                    <motion.div className={cn("block sm:hidden z-20 mt-8", contentClassName)}>
                      {item.content ?? null}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          <div className={cn("hidden sm:block h-full w-80 rounded-md sticky top-32", contentClassName)}>
            {content[activeCard].content ?? null}
          </div>
        </motion.div>
      </div>
    </>
  )
}
