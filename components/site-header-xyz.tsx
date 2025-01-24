"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlignJustify, XIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const menuItem = [
  {
    id: 0,
    label: "About Us",
    href: "/about"
  },
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
  const [isScrolled, setIsScrolled] = useState(true)
  const pathname = usePathname()

  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06
      }
    }
  }

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  // useEffect(() => {
  //   const html = document.querySelector("html")
  //   if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen)
  // }, [hamburgerMenuIsOpen])
  //
  // useEffect(() => {
  //   const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)
  //   window.addEventListener("orientationchange", closeHamburgerNavigation)
  //   window.addEventListener("resize", closeHamburgerNavigation)
  //
  //   return () => {
  //     window.removeEventListener("orientationchange", closeHamburgerNavigation)
  //     window.removeEventListener("resize", closeHamburgerNavigation)
  //   }
  // }, [setHamburgerMenuIsOpen])

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    document.addEventListener("scroll", changeBackground)

    return () => document.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <>
      <div
        className={cn(
          "animate-fade-in ease-linear fixed inset-x-0 left-[calc(100vw-100%)] rounded-3xl z-50 mx-14 flex h-[60px] items-center justify-between border border-border bg-card px-4 saturate-100 transition-all duration-200 header-md:mx-auto header-md:max-w-[768px] header-md:px-8 header-lg:max-w-[1168px]",
          isScrolled && "border-transparent bg-transparent mx-6 top-4",
          !isScrolled && "bottom-4 sm:top-4 bg-black"
        )}
      >
        <div className="mx-auto flex h-[60px] w-full items-center justify-between">
          <Link className="text-md flex items-center" href="/">
            <img
              src="/assets/images/other_images/beit.logo.white.svg"
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

          <button className="ml-6 md:hidden" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>

          {/* Mobile Navigation Menu */}
          {/*<div className="flex items-center md:hidden">*/}
          {/*  <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>*/}
          {/*    <SheetTrigger asChild>*/}
          {/*      <button className="ml-6">*/}
          {/*        <span className="sr-only">Toggle menu</span>*/}
          {/*        {sheetOpen ? <XIcon /> : <AlignJustify />}*/}
          {/*      </button>*/}
          {/*    </SheetTrigger>*/}
          {/*    <SheetContent side="right">*/}
          {/*      <SheetHeader>*/}
          {/*        <SheetTitle>*/}
          {/*          <Link href="/" onClick={() => setSheetOpen(false)}>*/}
          {/*            <img*/}
          {/*              src="https://beit.tech/assets/images/other_images/beit.logo.white.svg"*/}
          {/*              className="text-primary size-12"*/}
          {/*              alt="BEIT Logo"*/}
          {/*            />*/}
          {/*          </Link>*/}
          {/*        </SheetTitle>*/}
          {/*      </SheetHeader>*/}
          {/*      <div className="mt-4">*/}
          {/*        {menuItem.map((item) => (*/}
          {/*          <div key={item.id} className="mb-4">*/}
          {/*            <Link href={item.href} onClick={() => setSheetOpen(false)} className="text-lg">*/}
          {/*              {item.label}*/}
          {/*            </Link>*/}
          {/*          </div>*/}
          {/*        ))}*/}
          {/*      </div>*/}
          {/*    </SheetContent>*/}
          {/*  </Sheet>*/}
          {/*</div>*/}
        </div>
      </div>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(`fixed left-0 top-0 z-50 h-screen w-full overflow-auto backdrop-blur-2xl pt-[18px] px-2.5`, {
            "pointer-events-none": !hamburgerMenuIsOpen
          })}
        >
          <div className="container flex h-14 items-center justify-between">
            <Link className="text-md flex items-center" href="/">
              <img
                src="https://beit.tech/assets/images/other_images/beit.logo.white.svg"
                className="text-primary size-12"
                alt="BEIT Logo"
              />
            </Link>

            <button className="ml-6 md:hidden" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          </div>
          <motion.ul
            className="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={item.id}
                className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
              >
                <Link
                  className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href={item.href}
                  onClick={() => setHamburgerMenuIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  )
}
