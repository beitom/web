import { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim" // Optimized slim version
import { motion, useScroll, useTransform } from "framer-motion"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  // Initialize the tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine) // Load only necessary features to reduce bundle size
    }).then(() => setInit(true))
  }, [])

  // Handle particles loaded callback (optional)
  const particlesLoaded = useCallback((container) => {
    console.log("Particles loaded", container)
  }, [])
  //

  // Use Framer Motion to get the scroll progress
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 500])

  // Render the particles component when initialized
  return (
    <>
      <motion.div style={{ y }} id="particles-js" className="absolute inset-0 w-full h-full">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: "transparent" }
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "grab" },
                resize: true
              },
              modes: {
                grab: { distance: 200, lineLinked: { opacity: 0.1 } }
                // push: { quantity: 4 },
                // repulse: { distance: 140, duration: 1 }
              }
            },
            particles: {
              number: { value: 200, density: { enable: true, area: 800 } },
              color: { value: ["#aba1ba", "#111bcf", "#bc102f", "#8ca8d3"] },
              shape: { type: "circle" },
              opacity: { value: 0.6 },
              size: { value: 2 },
              links: {
                enable: true,
                distance: 120,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                outModes: { default: "bounce" }
              }
            },
            detectRetina: true
          }}
        />
      </motion.div>
    </>
  )
}

export default ParticlesBackground
