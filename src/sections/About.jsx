import { motion } from 'framer-motion'

function About() {
  return (
    <section
    id="about"
    className="min-h-screen flex items-center justify-center px-6 py-32 relative"
    >
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-28 items-start">
        {/* Texto */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-2xl mb-5">
            Sobre Mim
          </p>

          <h2 className="md:text-[45px] mb-5 leading-tight">
            Construindo soluções modernas através de tecnologia e inovação.
          </h2>

          <p className="text-zinc-400 leading-8 text-lg mb-5">
            Estou me formando em Análise e Desenvolvimento de Sistemas e iniciei minha graduação em Engenharia de Software, ampliando minha atuação entre desenvolvimento, dados e infraestrutura.
          </p>

          <p className="text-zinc-400 leading-8 text-lg">
            Tenho experiência com desenvolvimento fullstack, automação de processos, APIs, web scraping e interfaces modernas, além de participação em projetos profissionais, hackathons e soluções voltadas para tecnologia e inovação.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 w-full max-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="group bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-500">
            <h3 className="text-5xl font-black bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2">7+</h3>
            <p className="text-zinc-400 text-[20px]">Projetos Desenvolvidos</p>
          </div>

          <div className="w-full group bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-500">
            <h3 className="text-5xl font-black bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2">6+</h3>
            <p className="text-zinc-400 text-[20px]">Experiências Profissionais</p>
          </div>

          <div className="w-full group bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-500">
            <h3 className="text-5xl font-black bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2">10+</h3>
            <p className="text-zinc-400 text-[20px]">Tecnologias Utilizadas</p>
          </div>

          <div className="w-full group bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-500">
            <h3 className="text-5xl font-black bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2">3</h3>
            <p className="text-zinc-400 text-[20px]">Anos de Estudos</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About