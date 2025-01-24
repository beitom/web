"use client"

import { MoleculeViewer } from "@/components/molecule"
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalTitle,
  ResponsiveModalTrigger
} from "@/components/ui/responsive-modal"
import { useEffect, useState } from "react"
import { LuRotate3D } from "react-icons/lu"
import { Button } from "@/components/ui/button"

export default function MoleculeResponsiveModal({ xyzPath, moleculeName }: { xyzPath: string; moleculeName: string }) {
  const [xyzData, setXyzData] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    fetch(xyzPath)
      .then((res) => res.text())
      .then((data) => setXyzData(data))
      .then(() => setLoading(false))
      .catch((error) => console.error("Failed to fetch molecule data", error))
  }, [])

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <ResponsiveModalTrigger className="text-left" asChild>
        <Button className="flex justify-center md:justify-between w-full items-center gap-2">
          <span className="hidden md:block">{moleculeName}</span>
          <LuRotate3D />
        </Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent className="bg-black p-4 max-w-3xl">
        <ResponsiveModalTitle className="text-center text-3xl">{moleculeName}</ResponsiveModalTitle>
        <ResponsiveModalDescription className="hidden">View the molecule in 3D</ResponsiveModalDescription>
        {loading ? <p>Loading...</p> : <MoleculeViewer data={xyzData} className="relative" />}
      </ResponsiveModalContent>
    </ResponsiveModal>
  )
}
