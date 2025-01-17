import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import React from "react"
import { SiteHeader } from "@/components/site-header-xyz"
import { SiteFooter } from "@/components/site-footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})
export const metadata: Metadata = {
  title: "BEIT Inc.",
  description: "BEIT | Quantum Technology Experts"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta property="og:title" content="BEIT | Quantum Technology Experts" />
        <meta property="og:site_name" content="BEIT Inc." />
        <meta property="og:url" content="https://beit.tech" />
        <meta property="og:description" content="Quantum Technology Experts" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beit-mu.vercel.app/assets/images/og/og.jpg" />
        <title>BEIT | Quantum Technology Experts</title>
        <link rel="icon" href="/assets/images/other_images/beit.logo.white.svg" />
      </head>
      <body className={cn("bg-background min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
