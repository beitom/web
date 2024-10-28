"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

import { Cover } from "./cover"
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
    <Dialog>
      <div className={cn(card.className, "relative overflow-hidden bg-transparent border rounded-lg h-full w-full")}>
        <CardContent card={card} />
      </div>
      <DialogContent className="p-4 rounded-lg max-h-[80vh] max-w-[95vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            <h3 className="text-xl font-bold mb-2">
              <Cover className="flex flex-row gap-2">
                <span className="mt-1">{card.icon}</span>
                <span>{card.title}</span>
              </Cover>
            </h3>
          </DialogTitle>
          {/*<DialogDescription>{card.description}</DialogDescription>*/}
        </DialogHeader>
        <ScrollArea className="h-full">{card.content}</ScrollArea>
      </DialogContent>
    </Dialog>
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
        <DialogTrigger asChild>
          <Button variant="ghost" className="w-auto">
            Learn More <ArrowRightIcon className="ms-2" />
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
