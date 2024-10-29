import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { PiXLogo } from "react-icons/pi"
import Link from "next/link"
import { CiLocationOn } from "react-icons/ci"

const locations = [
  {
    name: "Toronto",
    address: "101 College St, Suite H230-1"
  },
  {
    name: "Krakow",
    address: "Mogilska 43 31-545"
  }
]

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "/quobo",
        name: "QUBO Solver"
      },
      {
        href: "/waferMol",
        name: "WaferMol"
      },
      {
        href: "/codeqraft",
        name: "CodeQraft"
      }
    ]
  },

  {
    label: "Research",
    items: [
      {
        href: "/roadmap",
        name: "Roadmap"
      },
      {
        href: "/research",
        name: "Publications"
      },
      {
        href: "/blog",
        name: "Blog"
      }
    ]
  },
  {
    label: "Connect",
    items: [
      {
        href: "/careers",
        name: "Careers"
      },

      {
        href: "/contact",
        name: "Contact"
      },
      {
        href: "/contact",
        name: "Partnerships"
      }
    ]
  }
]

const footerSocials = [
  {
    href: "https://www.linkedin.com/company/beit.tech",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="size-4" />
  },
  {
    href: "",
    name: "X",
    icon: <PiXLogo className="size-4" />
  }
]

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl pb-20 sm:pb-0 xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://beit.tech/assets/images/other_images/beit.logo.white.svg"
                className="text-primary size-8"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">BEIT Inc.</span>
            </Link>
            <p className="max-w-xs">Quantum Technology Experts</p>
            <div>
              {locations.map((location) => (
                <div key={location.name} className="flex items-center gap-2 text-sm text-gray-500">
                  <CiLocationOn className="size-4" />
                  <span> {location.name}:</span>
                  <span>{location.address}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <div className="flex space-x-5 sm:mt-0 sm:justify-center">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              BEIT Inc
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
      {/*   <SiteBanner /> */}
    </footer>
  )
}
