import { motion } from 'framer-motion'
import { useState } from 'react'
import { Download } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50">

      <div className="w-fit min-w-[75px] md:min-w-[120px] lg:w-full max-w-[900px] backdrop-blur-2xl bg-white/[0.08] border border-white/10 rounded-[28px] px-6 md:px-12 py-4 md:py-5 shadow-[0_0_35px_rgba(168,85,247,0.10)]">
        <div className="flex items-center justify-between items-center">

          {/* Navegação */}
          <div className="flex justify-center relative">
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-lg">
                <a
                href="#home"
                className="text-zinc-300 hover:text-purple-400 transition duration-300"
                >
                    HOME
                </a>

                <a
                href="#about"
                className="text-zinc-300 hover:text-purple-400 transition duration-300"
                >
                SOBRE
                </a>

                <a 
                    href="#tech"
                    className="text-zinc-300 hover:text-purple-400 transition duration-300"
                >
                    TECNOLOGIAS
                </a>

                <a
                href="#projects"
                className="text-zinc-300 hover:text-purple-400 transition duration-300"
                >
                    PROJETOS
                </a>

                <a
                href="#experience"
                className="text-zinc-300 hover:text-purple-400 transition duration-300"
                >
                    EXPERIÊNCIAS
                </a>

                <a
                href="#contact"
                className="text-zinc-300 hover:text-purple-400 transition duration-300"
                >
                    CONTATO
                </a>
            </nav>
          </div>

          {/* Mobile Button */}
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1"
            >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            </button>
        </div>
      </div>
      {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[260px] md:w-[320px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] lg:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>

            <a href="#tech" onClick={() => setMenuOpen(false)}>
              Tecnologias
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projetos
            </a>

            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experiências
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </motion.div>
        )}
    </motion.header>
      <a
        href="/CURRICULO.pdf"
        download
        className="hidden 2xl:flex fixed right-8 top-14 -translate-y-1/2 z-50 w-[220px] h-14 rounded-2xl border border-purple-500/30 bg-white/10 backdrop-blur-2xl items-center justify-center gap-3 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.10)]">
        CURRÍCULO
        <Download
          size={22}
          className="text-white"
        />
      </a>
    </>
  )
}

export default Navbar