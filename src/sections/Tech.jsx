import { motion } from 'framer-motion'

const technologies = [
  'PHP',
  'JavaScript',
  'Python',
  'Node.js',
  'C#',
  'React',
  'TailwindCSS',
  'MySQL',
  'Docker',
  'Git',
]

function Tech() {
  return (<section id="tech" className="min-h-screen flex items-center justify-center px-6 py-32 relative">
    
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-2xl mb-5">
            Tecnologias
          </p>

          <h2 className="md:text-[45px] mb-5 leading-tight">
            Ferramentas que utilizo
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg hover:border-purple-500/50 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-transparent" />
              <h3 className="relative z-10 text-xl font-semibold text-zinc-200 group-hover:text-purple-300 transition duration-300">
                {tech}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tech