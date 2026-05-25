import { motion } from 'framer-motion'

const contacts = [
  {
    title: 'GitHub',
    value: 'github.com/JosueRod17',
    link: 'https://github.com/JosueRod17',
  },

  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/josuerodrigues17/',
    link: 'https://www.linkedin.com/in/josuerodrigues17/',
  },

  {
    title: 'Email',
    value: 'josuerod1723@gmail.com',
    link: 'mailto:josuerod1723@gmail.com',
  },

  {
    title: 'WhatsApp',
    value: '(61) 99158-3013',
    link: 'https://wa.me/5561991583013',
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-32 relative"
    >
      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700/20 blur-[120px] rounded-full bottom-0 right-0" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-2xl mb-5">
            Contato
          </p>

          <h2 className="md:text-[45px] mb-5 leading-tight">
            Vamos trabalhar juntos?
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-8">
            Estou aberto para oportunidades, projetos e novas conexões na área
            de tecnologia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-purple-400">
                {contact.title}
              </h3>

              <p className="text-zinc-400 break-all">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact