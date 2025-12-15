import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight, FiCode, FiLayers } from 'react-icons/fi'
import { motion } from 'framer-motion'

function ProjectsSection() {
  const projects = [
    {
      title: 'CodeClash',
      category: 'Full-Stack Platform',
      description: 'Built a full-stack platform for competitive programmers using React.js, Tailwind CSS, accessibility scores over 90%. Features include AI-powered feedback via Gemini API, real-time stat tracking with backend integration using Node.js and Express.js, and contest module to show 10+ stats and track progress.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Gemini API'],
      github: 'https://github.com/kunalverma2512',
      live: '#',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Face Liveness Detection System',
      category: 'Smart India Hackathon',
      description: 'Working on an ensemble team to build a browser-based face authentication system with liveness checks under 2 seconds. Designed frontend using React.js and implemented real-time tracking with MediaPipe using 478 facial landmarks. Handled frontend-to-backend communication by capturing and sending face data with local results under 2 sec. Added real-time eye movement prompts for enhanced liveness and prevent video spoofing.',
      tech: ['React.js', 'MediaPipe', 'Python', 'FastAPI', 'CV'],
      github: '#',
      live: '#',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Intelexa',
      category: 'RAG-Powered GenAI',
      description: 'Built a RAG-powered GenAI system that extracts, embeds, retrieves content for 4-5s intelligent query answering. Used multi-service setup with Vite + React frontend, Node.js crawler, and Python (FastAPI + LangChain) backend. Containerized Python backend, Qdrant, and Neo4j with Docker and orchestrated via Docker Compose. Generated embeddings with semantic chunking using Qdrant for efficient similarity search.',
      tech: ['React', 'Node.js', 'Python', 'LangChain', 'Docker'],
      github: '#',
      live: '#',
      gradient: 'from-purple-600 to-pink-600'
    }
  ]

  return (
    <section id="projects" className="bg-gray-50 py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#00000005_1px,transparent_1px),linear-gradient(to_right,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <FiCode className="w-4 h-4" />
            Featured Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Building Impactful Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            From competitive programming platforms to smart authentication systems.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              {/* Gradient Banner */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 group-hover:bg-gray-100 group-hover:text-gray-900 transition-colors`}>
                    <FiLayers className="w-3 h-3" />
                    {project.category}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech & Links */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors group/link"
                    >
                      <FiGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      View Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors group/link"
                      >
                        <FiExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-900 text-sm font-bold tracking-widest uppercase hover:border-red-600 hover:text-red-600 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg"
          >
            All Projects
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
