"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

import { Cover } from "@/components/ui/cover"
import { ScrollArea } from "@/components/ui/scroll-area"

// Updated Card Type
type Card = {
  id: number
  content: React.ReactNode | string
  className: string
  title: string
  description: string
  icon: React.ReactNode
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 relative">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  )
}

const Card = ({ card }: { card: Card }) => {
  return (
    <Drawer>
      <div className={cn(card.className, "relative overflow-hidden bg-transparent border rounded-lg h-full w-full")}>
        <CardContent card={card} />
      </div>
      <DrawerContent className="p-4 rounded-lg">
        <DrawerHeader>
          <DrawerTitle className="text-center">
            <h3 className="text-xl font-bold mb-2">
              <Cover className="flex flex-row gap-2">
                <span className="mt-1">{card.icon}</span>
                <span>{card.title}</span>
              </Cover>
            </h3>
          </DrawerTitle>
          <DrawerDescription hidden={true}>{card.title}</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-full">{card.content}</ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

const CardContent = ({ card }: { card: Card }) => {
  return (
    <div className="p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold mb-2">
          <Cover>{card.title}</Cover>
        </h3>

        <p className="text-sm mb-4">{card.description}</p>
      </div>
      <div className="flex justify-between items-end">
        <div className="p-2">{card.icon}</div>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="w-auto">
            Learn More <ArrowRightIcon className="ms-2" />
          </Button>
        </DrawerTrigger>
      </div>
    </div>
  )
}
