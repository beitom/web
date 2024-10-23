import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import React from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})
export const metadata: Metadata = {
  title: "BEIT Inc.",
  description: "Quantum Technology Experts"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn("bg-background min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
