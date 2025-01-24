"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// // Dynamically import the script; this ensures it only runs in the browser
// const Load3Dmol = dynamic(() => import("3dmol/build/3Dmol-min.js"), { ssr: false })
//
declare global {
  interface Window {
    $3Dmol: any
  }
}

interface MoleculeViewerProps {
  data: string
  format?: string
  height?: string
  width?: string
  className?: string
}

export const MoleculeViewer: React.FC<MoleculeViewerProps> = ({
  data,
  format = "xyz",
  height = "400px",
  width = "100%",
  className = ""
}) => {
  const viewerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!viewerRef.current || !data) return

    // Initialize the viewer
    const viewer = window.$3Dmol.createViewer(viewerRef.current, {
      backgroundColor: "black"
    })

    // Load the molecule
    viewer.addModel(data, format)

    // Style the molecule
    viewer.setStyle(
      {},
      {
        stick: { radius: 0.15 },
        sphere: { radius: 0.4 }
      }
    )

    // Set some initial view settings
    viewer.zoomTo()
    viewer.render()

    // Add surface
    // viewer.addSurface(window.$3Dmol.SurfaceType.VDW, {
    //   opacity: 0.7,
    //   color: 'white'
    // });

    return () => {
      viewer.clear()
    }
  }, [data])

  return <div ref={viewerRef} style={{ height, width }} className={cn(className)} />
}
