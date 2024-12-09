import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")
const svgToDataUri = require("mini-svg-data-uri")

const colors = require("tailwindcss/colors")

const config = {
  darkMode: ["class"],
  content: {
    files: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    relative: true,
    transform: (content) => content.replace(/taos:/g, "")
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%"
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%"
          }
        },
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%"
          }
        },
        "image-glow": {
          "0%": {
            opacity: "0",
            "animation-timing-function": "cubic-bezier(0.74, 0.25, 0.76, 1)"
          },
          "10%": {
            opacity: "0.7",
            "animation-timing-function": "cubic-bezier(0.12, 0.01, 0.08, 0.99)"
          },
          "100%": {
            opacity: "0.4"
          }
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(-10px)"
          },
          to: {
            opacity: "1",
            transform: "none"
          }
        },
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: {
            opacity: "1",
            transform: "none"
          }
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0"
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0"
          }
        },
        marquee: {
          from: {
            transform: "translateX(0)"
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))"
          }
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)"
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))"
          }
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0"
          }
        }
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
        "fade-up": "fade-up 1000ms var(--animation-delay, 0ms) ease forwards",
        shimmer: "shimmer 8s infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        gradient: "gradient 8s linear infinite"
      }
    }
  },
  safelist: ['html.js :where([class*="taos:"]:not(.taos-init))'],
  plugins: [
    require("tailwindcss-animate"),
    require("taos/plugin"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      )
    }
  ]
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ":root": newVars
  })
}

export default config
