import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiUsers, FiZap, FiClock, FiStar, FiChevronRight } from 'react-icons/fi'

function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiStar className="w-4 h-4" />
            Key Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Built to Solve
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            From hackathon wins to deployed products, highlights from my engineering journey.
          </p>
        </motion.div>

        {/* FEATURED PROJECT - Face Liveness Detection (Smart India Hackathon) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group"
        >
          <div className="p-8 md:p-12 relative overflow-hidden">
            {/* Detailed Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -ml-20 -mb-20 opacity-50 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-lg shadow-red-500/30">
                  Featured Project
                </span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-lg shadow-purple-500/30">
                  Smart India Hackathon 2024
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Face Liveness <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">Detection System</span>
              </h3>

              <p className="text-lg md:text-xl text-gray-700 font-medium mb-8 max-w-4xl">
                A sophisticated browser-based biometric authentication system designed to prevent identity spoofing. Built with a 6-member team, focusing on real-time processing and high-accuracy landmark detection.
              </p>

              <div className="prose prose-lg max-w-none mb-10 text-gray-600">
                <p>
                  I led the frontend development using <span className="font-bold text-gray-900">ReactJS</span>, integrating <span className="font-bold text-gray-900">MediaPipe</span> to analyze <span className="font-bold text-purple-600">478 facial landmarks</span>. The system prompts users to perform specific liveness checks (blinking, head turning) to verify physical presence, processing data in real-time.
                </p>
                <p>
                  Key achievements included optimizing the capture pipeline to keep response times <span className="font-bold text-red-600">under 2 seconds</span> and designing an intuitive UI that guides users through the verification process.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <FiUsers className="w-5 h-5 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">6</div>
                  <div className="text-xs font-bold text-gray-500 uppercase">Team Size</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <FiClock className="w-5 h-5 text-red-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">&lt;2s</div>
                  <div className="text-xs font-bold text-gray-500 uppercase">Latency</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <FiZap className="w-5 h-5 text-amber-500 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">478</div>
                  <div className="text-xs font-bold text-gray-500 uppercase">Landmarks</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <div className="text-xl mb-1">🏆</div>
                  <div className="text-2xl font-bold text-gray-900">4th</div>
                  <div className="text-xs font-bold text-gray-500 uppercase">Rank</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-10">
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'MediaPipe', 'Facial Recognition', 'Real-time Processing', 'Python Backend'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-200 text-xs font-bold text-gray-600 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-all hover:-translate-y-1 shadow-lg shadow-gray-900/20"
                >
                  <FiGithub className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-lg border border-gray-200 hover:border-gray-900 transition-all hover:-translate-y-1"
                >
                  <FiExternalLink className="w-5 h-5" />
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* CodeClash */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="h-2 bg-gradient-to-r from-red-500 to-amber-500"></div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                  Full-Stack Platform
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  CodeClash
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                  A comprehensive platform for competitive programmers. Built with React and Node.js, it fetches real-time stats from Codeforces and uses Gemini AI to provide personalized practice recommendations and performance analysis.
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Node.js', 'Gemini API', 'MongoDB'].map((tech, index) => (
                    <span key={index} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-100">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-red-600 transition-colors">
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-red-600 transition-colors">
                    <FiExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intelexa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                  RAG System
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Intelexa
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                  Advanced RAG-powered Q&A system. Features a microservices architecture with a Python/FastAPI backend using LangChain for orchestration, Qdrant for vector storage, and Neo4j for graph relationships.
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {['FastAPI', 'LangChain', 'Qdrant', 'Neo4j', 'Docker'].map((tech, index) => (
                    <span key={index} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-100">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-purple-600 transition-colors">
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
