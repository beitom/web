"use client"
import Image from "next/image"
import React from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import news from "@/data/news.data"

export function NewsSection() {
  const cards = news.map((card, index) => <Card key={card.title} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20 container">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 text-neutral-200 font-sans">Latest News</h2>
      <Carousel items={cards} />
    </div>
  )
}
