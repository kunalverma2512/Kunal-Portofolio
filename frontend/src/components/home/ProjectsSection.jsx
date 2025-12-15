import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
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
      gradient: 'from-red-600 to-red-500'
    },
    {
      title: 'Face Liveness Detection System',
      category: 'Smart India Hackathon',
      description: 'Working on an ensemble team to build a browser-based face authentication system with liveness checks under 2 seconds. Designed frontend using React.js and implemented real-time tracking with MediaPipe using 478 facial landmarks. Handled frontend-to-backend communication by capturing and sending face data with local results under 2 sec. Added real-time eye movement prompts for enhanced liveness and prevent video spoofing.',
      tech: ['React.js', 'MediaPipe', 'Python', 'FastAPI', 'Computer Vision'],
      github: '#',
      live: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intelexa',
      category: 'RAG-Powered GenAI',
      description: 'Built a RAG-powered GenAI system that extracts, embeds, retrieves content for 4-5s intelligent query answering. Used multi-service setup with Vite + React frontend, Node.js crawler, and Python (FastAPI + LangChain) backend. Containerized Python backend, Qdrant, and Neo4j with Docker and orchestrated via Docker Compose. Generated embeddings with semantic chunking using Qdrant for efficient similarity search, and stored graph-aware prompts for enhanced accuracy. Implemented a context module to auto-generate smart, AI-driven feedback, insights, and recommendations.',
      tech: ['React', 'Node.js', 'Python', 'FastAPI', 'LangChain', 'Qdrant', 'Neo4j', 'Docker'],
      github: '#',
      live: '#',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4"
          >
            Featured Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Building Impactful Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            From competitive programming platforms to AI-powered systems, here are some projects I've worked on
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-gray-200 hover:border-red-600 transition-all duration-300 group bg-white"
            >
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-gray-100 border-2 border-gray-300 text-xs font-bold tracking-wide uppercase text-gray-700 mb-4">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm font-medium line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-50 border border-gray-300 text-xs font-bold text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-50 border border-gray-300 text-xs font-bold text-gray-600">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-900 text-sm font-bold tracking-wide uppercase hover:border-red-600 hover:text-red-600 transition-all duration-300"
          >
            View All Projects
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
