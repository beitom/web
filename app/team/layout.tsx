"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header-xyz"
import React from "react"

interface TeamLayout {
  children: React.ReactNode
}

export default function TeamLayout({ children }: TeamLayout) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden mt-24">{children}</main>
      <SiteFooter />
    </>
  )
}
