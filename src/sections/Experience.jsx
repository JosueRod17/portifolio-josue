import { motion } from 'framer-motion'

const experiences = [
  {
    year: '2023',
    title: 'Início na área de tecnologia',
    description:
      'Comecei meus estudos em desenvolvimento web e lógica de programação, explorando JavaScript, HTML e CSS.',
  },

  {
    year: '2024',
    title: 'Formação em desenvolvimento',
    description:
      'Iniciei minha graduação em Análise e Desenvolvimento de Sistemas, aprofundando conhecimentos em desenvolvimento fullstack e criação de aplicações web.',
  },

  {
    year: '2025',
    title: 'Experiências profissionais',
    description:
      'Atuação profissional em desenvolvimento de software, participação em projetos colaborativos e evolução prática em tecnologias modernas.',
  },

  {
    year: '2026',
    title: 'Aprofundando conhecimentos',
    description:
      'Iniciei o Bacharelado em Engenharia de Software, ampliando conhecimentos em desenvolvimento, arquitetura de sistemas e tecnologias modernas.',
  }
]

function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-32 relative">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-2xl mb-5">
            Experiência
          </p>

          <h2 className="md:text-[45px] mb-5 leading-tight">
            Minha jornada até aqui
          </h2>
        </motion.div>

        <div className="relative border-l border-purple-500/30 ml-4 md:ml-0">
          {experiences.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="mb-20 ml-10 relative"
            >
              <div className="absolute -left-[50px] top-0 w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.9)]" />

              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-purple-500/40 transition duration-300">
                <span className="text-purple-400 text-lg  tracking-[0.2em] uppercase">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience