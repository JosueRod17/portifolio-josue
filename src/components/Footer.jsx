import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-700/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-4xl font-bold text-purple-400 mb-2">
              Josué Rodrigues
            </h3>

            <p className="text-zinc-400 max-w-md leading-7">
              Criando soluções modernas unindo desenvolvimento, dados
              e tecnologia com impacto real.
            </p>
          </div>

          <div className="flex gap-6 text-zinc-400">
            <a
              href="https://github.com/JosueRod17"
              target="_blank"
              className="hover:text-purple-400 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/josuerodrigues17/"
              target="_blank"
              className="hover:text-purple-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:josuero1723@gmail.com"
              className="hover:text-purple-400 transition duration-300"
            >
              Email
            </a>
          </div>
        </motion.div>

        <div className="mt-16 text-center text-zinc-500 text-sm">
          © 2026 Josué Rodrigues — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer