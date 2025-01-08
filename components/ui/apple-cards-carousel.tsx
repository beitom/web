"use client"
import React, { useEffect, useState, createContext, JSX } from "react"
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image, { ImageProps } from "next/image"
import { Button } from "@/components/ui/button"
import { PiArrowRightThin } from "react-icons/pi"
import { NewsData } from "@/data/news.data"
import Link from "next/link"

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // const handleCardClose = (index: number) => {
  //   if (carouselRef.current) {
  //     const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
  //     const gap = isMobile() ? 4 : 8
  //     const scrollPosition = (cardWidth + gap) * (index + 1)
  //     carouselRef.current.scrollTo({
  //       left: scrollPosition,
  //       behavior: "smooth"
  //     })
  //     setCurrentIndex(index)
  //   }
  // }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    // <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className={cn("absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l")}></div>

        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-4",
            "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true
                }
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
    // </CarouselContext.Provider>
  )
}

export const Card = ({ card, index, layout = false }: { card: NewsData; index: number; layout?: boolean }) => {
  // const [open, setOpen] = useState(false)
  // const containerRef = useRef<HTMLDivElement>(null)
  // const { onCardClose, currentIndex } = useContext(CarouselContext)
  //
  // useEffect(() => {
  //   function onKeyDown(event: KeyboardEvent) {
  //     if (event.key === "Escape") {
  //       handleClose()
  //     }
  //   }
  //
  //   if (open) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "auto"
  //   }
  //
  //   window.addEventListener("keydown", onKeyDown)
  //   return () => window.removeEventListener("keydown", onKeyDown)
  // }, [open])
  //
  // useOutsideClick(containerRef, () => handleClose())
  //
  // const handleOpen = () => {
  //   setOpen(true)
  // }
  //
  // const handleClose = () => {
  //   setOpen(false)
  //   onCardClose(index)
  // }

  return (
    <>
      <div
        // layoutId={layout ? `card-${card.title}` : undefined}
        className="flex flex-col justify-between rounded-3xl bg-gray-100 dark:bg-neutral-900 w-56 h-[25rem] md:w-96 text-wrap overflow-hidden relative z-10"
      >
        <div className=" absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8 rounded-3xl">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-2xl font-semibold max-w-xs text-left text-wrap font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>

        <div className="w-full flex flex-row justify-end p-4 z-[11]">
          <Link href={card.link} passHref>
            <Button variant="outline" className="rounded-full h-10 w-10 p-0">
              <PiArrowRightThin />
            </Button>
          </Link>
        </div>

        {card?.image && (
          <BlurImage src={card.image} alt={card.title} fill className="object-cover absolute z-10 inset-0" />
        )}
      </div>
    </>
  )
}

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  return (
    <Image
      className={cn("transition duration-300 blur-[2px] opacity-50", className)}
      // onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
