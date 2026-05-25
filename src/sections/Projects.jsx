import { motion } from 'framer-motion'
import projeto1 from '../assets/projects/projeto1.jpg'
import projeto2 from '../assets/projects/projeto2.jpg'
import projeto3 from '../assets/projects/projeto3.png'
import projeto4 from '../assets/projects/projeto4.png'
import projeto5 from '../assets/projects/projeto5.gif'
import projeto6 from '../assets/projects/projeto6.png'
import projeto7 from '../assets/projects/projeto7.png'

const projects = [
  {
    title: '2° Lugar - Hackaton',
    description:
      'Criação e desenvolvimento de um protótipo pro "Desafio Mulher Mais Segura", hackaton da Campus Party com parceria da (SSP-DF) Secretaria de Segurança Pública-DF.',
    tech: ['ReactNative', 'Expo'],
    image:
      projeto1,
    github: 'https://github.com/leandrosof/guardia-df',
    demo: 'https://www.youtube.com/watch?v=ZiyXeHg2Lu8',
  },

  {
    title: 'Sistema de Gestão de Parceiros',
    description:
      'Participação na equipe de front-end para desenvolvimento da parte visual e interativa do sistema.',
    tech: ['Chakra UI', 'React', 'Vite'],
    image:
      projeto2,
    github: 'https://github.com/JosueRod17/pmsystem-front',
  },

  {
    title: 'Gerenciador de tarefas',
    description:
      'Gerenciador de tarefas criado com opções de criar, editar e excluir tarefas, podendo ser salvas em arquivo.txt.',
    tech: ['PHP', 'HTML', 'CSS'],
    image:
      projeto3,
    github: 'https://github.com/JosueRod17/Projeto-tarefas'
  },

  {
    title: 'Desafio Técnico - Gerenciador de Solicitações',
    description:
      'Aplicação desenvolvida como desafio técnico, focada em responsividade, performance e experiência do usuário, utilizando tecnologias modernas de desenvolvimento web.',
    tech: ['HTML', 'CSS', 'JavaScript', 'C#', '.NET API'],
    image:
      projeto4,
    github: 'https://github.com/JosueRod17/controle-solicitacoes',
    demo: 'https://controle-solicitacoes.vercel.app/',
  },

  {
    title: 'Landing Page',
    description:
      'Recriação de uma página HOME de um site de cursos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      projeto5,
    github: 'https://github.com/JosueRod17/Projeto-Landing-Page',
    demo: 'https://josuerod17.github.io/Projeto-Landing-Page/',
  },

  {
    title: 'Landing Page Básica',
    description:
      'Projeto de criação de Landing Page Básica.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      projeto6,
    github: 'https://github.com/JosueRod17/Desafio-LP-arquitetura-DNC',
    demo: 'https://projeto-lp-arquitetura.netlify.app/',
  },

  {
    title: 'Primeiro Portifólio',
    description:
      'O primeiro site que desenvolvi para apresentar a mim e meus projetos. ',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      projeto7,
    github: 'https://github.com/JosueRod17/PORTIFOLIO1',
    demo: 'https://josuerod17.github.io/PORTIFOLIO1/',
  }
]

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-32 relative"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-2xl mb-5">
            Projetos
          </p>

          <h2 className="md:text-[45px] mb-5 leading-tight">
            Alguns projetos desenvolvidos
          </h2>
        </motion.div>

        {/* Projetos */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Imagem */}
              <div className="relative group hover:-translate-y-2 transition duration-500">
                <div className="absolute inset-0 bg-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 z-10" />

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10 z-10" />

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />
                </div>
              </div>

              {/* Conteúdo */}
              <div>
                <p className="text-purple-400 mb-4 uppercase tracking-[0.2em] text-sm">
                  Projeto Destaque
                </p>

                <h3 className="text-3xl font-bold mb-6">
                  {project.title}
                </h3>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg mb-6 hover:border-purple-500/30 transition duration-500">
                  <p className="text-zinc-400 leading-7">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 transition"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500/10 transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects