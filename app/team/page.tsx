"use client"

import React, { useCallback, useMemo } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { CiLocationOn } from "react-icons/ci"
import { Cover } from "@/components/ui/cover"
import { Member, teamMembers, boardMembers } from "@/data/team.data"

const MemberCard = React.memo(({ member }: { member: Member }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full text-left flex flex-col h-full"
        >
          <Card className="flex flex-col h-full overflow-hidden">
            <CardContent className="p-0 flex-grow flex flex-col">
              <div className="aspect-[4/6] relative">
                <Image
                  src={`/assets/images/team/${member.photo}`}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.roles.join(", ")}</p>
                </div>
                <div className="flex flex-row space-x-2 text-sm text-muted-foreground mt-3 items-end">
                  <CiLocationOn className="size-3" aria-hidden="true" />
                  <p className="translate-y-1">{member.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{member.name}</SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col justify-between overflow-hidden">
          {/* Scrollable text area */}
          <div className="overflow-y-auto px-4 mt-4 max-h-[35vh]">
            <p>{member.story}</p>
          </div>

          {/* Image at the bottom */}
          <div className="w-full aspect-[2/3] overflow-hidden px-16 pt-4 flex-shrink-0">
            <Image
              src={`/assets/images/team/${member.photo}`}
              alt={member.name}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              height={300}
              width={200}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
})

MemberCard.displayName = "MemberCard"

export default function TeamMembers() {
  const renderMemberCards = useCallback((members: Member[]) => {
    return members.map((member) => <MemberCard key={member.name} member={member} />)
  }, [])

  const boardMemberCards = useMemo(() => renderMemberCards(boardMembers), [renderMemberCards])
  const teamMemberCards = useMemo(() => renderMemberCards(teamMembers), [renderMemberCards])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4">
        <Cover className="text-3xl font-bold animate-fade-in">Our Team</Cover>
      </div>
      <p className="text-muted-foreground mb-6">
        Our team is composed of experts in quantum computing, mathematics, physics, software engineering, and R&D
        management. We are passionate about pushing the boundaries of quantum technology and developing innovative
        solutions for our clients.
      </p>
      <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Founders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 items-stretch">
        {boardMemberCards}
      </div>

      <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">{teamMemberCards}</div>
    </div>
  )
}
