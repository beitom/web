"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlignJustify, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const menuItem = [
  {
    id: 1,
    label: "Products",
    href: "/products"
  },
  {
    id: 2,
    label: "Research",
    href: "/research"
  },
  {
    id: 3,
    label: "Blog",
    href: "/blog"
  },
  {
    id: 4,
    label: "Team",
    href: "/team"
  },
  {
    id: 5,
    label: "Careers",
    href: "/careers"
  },
  {
    id: 6,
    label: "Contact Us",
    href: "/contact"
  }
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener("scroll", changeBackground)

    return () => document.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 left-[calc(100vw-100%)] top-4 z-40 mx-8 flex h-[60px] items-center justify-between rounded-3xl border border-border bg-card px-4 shadow-sm saturate-100 backdrop-blur-[4px] transition-all duration-200 header-md:mx-auto header-md:max-w-[768px] header-md:px-8 header-lg:max-w-[1168px]",
        isScrolled && "border-transparent bg-background/80"
      )}
    >
      <div className="mx-auto flex h-[60px] w-full items-center justify-between">
        <Link className="text-md flex items-center" href="/">
          <img
            src="https://beit.tech/assets/images/other_images/beit.logo.white.svg"
            className="text-primary size-12"
            alt="BEIT Logo"
          />
        </Link>
        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItem.map((item) => (
              <NavigationMenuItem key={item.id}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === item.href ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mobile Navigation Menu */}
        <div className="flex items-center md:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="ml-6">
                <span className="sr-only">Toggle menu</span>
                {sheetOpen ? <XIcon /> : <AlignJustify />}
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setSheetOpen(false)}>
                    <img
                      src="https://beit.tech/assets/images/other_images/beit.logo.white.svg"
                      className="text-primary size-12"
                      alt="BEIT Logo"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                {menuItem.map((item) => (
                  <div key={item.id} className="mb-4">
                    <Link href={item.href} onClick={() => setSheetOpen(false)} className="text-lg">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
