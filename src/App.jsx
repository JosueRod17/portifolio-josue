import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Background from './components/Background'
import CursorGlow from './components/CursorGlow'
import ParticlesBackground from './components/ParticlesBackground'
import Footer from './components/Footer'
import Loader from './components/Loader'

import Hero from './sections/Hero'
import About from './sections/About'
import Tech from './sections/Tech'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}

      <main className="bg-[#050505] overflow-hidden">
        <Background />
        <CursorGlow />
        <ParticlesBackground />

        <Navbar />

        <Hero />
        <About />
        <Tech />
        <Projects />
        <Experience />
        <Contact />

        <Footer />
      </main>
    </>
  )
}

export default App