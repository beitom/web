import { ChevronRight } from "lucide-react"
import Link from "next/link"
import ShinyButton from "@/components/ui/shiny-button"
import WordPullUp from "@/components/ui/word-pull-up"

export default function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto mt-[180px] lg:mt-[280px] max-w-7xl px-6 text-center md:px-8">
      <Link href="/products">
        <ShinyButton>
          <div className="flex-1 opacity-0 animate-fade-in flex flex-col justify-center p-4 rounded-lg">
            <div className="flex flex-row gap-0 justify-center pb-3 w-full">
              <div className="flex-grow flex flex-col justify-center px-3 md:px-6 rounded-xl animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text text-6xl font-bold leading-none tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-6xl lg:text-8xl dark:from-white dark:to-gray-600">
                <div className="p-3">BEIT</div>
              </div>
            </div>

            <WordPullUp
              className="rounded-lg p-1 mb-12 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:1000ms] md:text-xl"
              words="Get Ready for Quantum. Today."
            />

            <div className="opacity-0 animate-fade-in [--animation-delay:600ms]">
              <div className="flex flex-row justify-center">
                <span>✨</span>
                <span className="mx-1 animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Discover our Solutions
                </span>
                <ChevronRight className="opacity-75 size-4 mt-[3px] text-gray-300" />
              </div>
            </div>
            <div className="mt-[70px]">
              <div className="text-sm flex flex-col items-center gap-2 text-gray-400 opacity-0 [--animation-delay:700ms] animate-fade-in justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                  alt="EU Flag"
                  className="w-16 sm:w-20 translate-y-[-0.55rem] opacity-75 rounded-xl"
                />
                <p>Supported by the European Innovation Council</p>
              </div>
            </div>
          </div>
        </ShinyButton>
      </Link>
    </section>
  )
}
