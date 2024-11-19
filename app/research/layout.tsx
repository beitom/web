import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header-xyz"
import React from "react"

interface ResearchLayout {
  children: React.ReactNode
}

export default function ResearchLayout({ children }: ResearchLayout) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto mt-24">{children}</main>
      <SiteFooter />
    </>
  )
}
