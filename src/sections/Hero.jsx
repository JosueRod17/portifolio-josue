import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import perfil from '../assets/foto-perfil.jpeg'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-44 xl:pt-20"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/30 blur-[120px] rounded-full top-[-150px] left-[-150px]" />

      <div className="absolute w-[400px] h-[400px] bg-blue-700/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl w-full mx-auto grid xl:grid-cols-2 gap-16 xl:gap-24 items-start relative z-10">
        {/* Texto */}
        <motion.div
          className="max-w-2xl flex flex-col gap-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 uppercase tracking-[0.15em] md:tracking-[0.4em] mt-5 text-md text-center xl:text-left">
            Full-Stack Developer
          </p>

          <h1
            className="font-['Stalinist_One'] text-[30px] xs:text-[34px] sm:text-5xl md:text-[64px] lg:text-[75px] leading-tight text-center md:text-left max-w-full">
            <span className="block">
              JOSUÉ
            </span>

            <span className="block">
              RODRIGUES
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-7 md:leading-9 max-w-xl text-center xl:text-left">
            Criando soluções modernas unindo desenvolvimento,
            dados e tecnologia com impacto real.
          </p>

          <div
            className="flex flex-wrap justify-center xl:justify-start gap-4">
            <a
              href="https://github.com/JosueRod17"
              target="_blank"
              className="min-w-[100px] px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(168,85,247,0.35)] text-xl flex items-center justify-center"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/josuerodrigues17/"
              className="min-w-[120px] px-8 py-4 rounded-2xl border border-purple-500/40 bg-white/5 backdrop-blur-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 text-xl flex items-center justify-center"
            >
              LINKEDIN
            </a>

            <a
              href="/CURRICULO.pdf"
              download
              className="2xl:hidden w-full sm:w-auto px-8 py-4 rounded-2xl border border-purple-500/40 bg-white/5 backdrop-blur-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 text-lg flex items-center justify-center gap-3">
              CURRÍCULO
              <Download size={20} />
            </a>


          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center xl:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/40 blur-[100px] rounded-full animate-pulse scale-110" />

            <img
              src={perfil}
              alt="Foto"
              className="relative w-72 h-72 w-64 h-64 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] xl:w-[420px] xl:h-[420px] object-cover object-center rounded-full border-2 border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.35)] hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero