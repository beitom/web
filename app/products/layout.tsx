import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header-xyz"
import React from "react"

interface ProductLayoutProps {
  children: React.ReactNode
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto">{children}</main>
      <SiteFooter />
    </>
  )
}
