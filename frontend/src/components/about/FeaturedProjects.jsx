import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiUsers, FiZap, FiClock } from 'react-icons/fi'

function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-cyan-500 mb-4">
            Featured Projects
          </p>
          <h2 className="text-4xl md:t ext-5xl font-bold text-gray-900 tracking-tight mb-4">
            Building Solutions to Real Problems
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            From hackathons to personal projects, here's what I've been building
          </p>
        </motion.div>

        {/* FEATURED PROJECT - Face Liveness Detection (Smart India Hackathon) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 bg-white border-4 border-cyan-500 p-8 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-cyan-500 text-white text-xs font-bold tracking-wide uppercase">
              Featured Project
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold tracking-wide uppercase">
              Smart India Hackathon 2024
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Face Liveness Detection System
          </h3>

          <p className="text-lg text-cyan-600 font-bold mb-6">
            AI/ML • Computer Vision • Web Development • Team Project
          </p>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed font-medium text-lg mb-4">
              During Smart India Hackathon, I collaborated with a <span className="font-bold text-gray-900">6-member team</span> to build a sophisticated <span className="font-bold text-gray-900">browser-based face authentication system with liveness detection capabilities</span>. The challenge was to create a secure facial recognition system that could detect spoofing attempts and verify that a real person was present—not a photo or video.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium text-lg mb-4">
              I led the frontend development using <span className="font-bold text-gray-900">ReactJS</span>, integrating <span className="font-bold text-gray-900">MediaPipe</span> for accurate facial landmark detection in real-time. The system analyzes <span className="font-bold text-cyan-600">478 facial landmarks</span> and prompts users to perform specific actions—<span className="font-bold text-gray-900">blinking, turning their head, opening their mouth</span>—to verify liveness and prevent photo or video spoofing. This multi-step verification process ensures that the person in front of the camera is actually alive and present, not a static image or pre-recorded video.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium text-lg mb-4">
              One of the key technical challenges was ensuring seamless communication between the frontend and backend while maintaining response times <span className="font-bold text-cyan-600">under 2 seconds</span>. I implemented efficient data capture and transmission mechanisms, handling the flow of facial data and movement prompts smoothly without latency issues. The real-time nature of the system required careful optimization of data processing and network communication.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium text-lg">
              This project was a transformative learning experience. It taught me about real-world AI implementation, the importance of user experience in security systems, and the dynamics of collaborative development under tight deadlines. Working with MediaPipe opened my eyes to the power of computer vision libraries and their practical applications in authentication and security. Our team's effort was recognized with a <span className="font-bold text-purple-600">4th rank in the internal hackathon</span>, validating our technical approach and execution.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-bold tracking-wide uppercase text-gray-700 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['ReactJS', 'MediaPipe', 'Facial Recognition', 'Real-time Processing', 'Browser APIs', 'Python Backend'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 border-2 border-gray-300 text-sm font-bold text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="border-2 border-gray-200 p-4 text-center">
              <FiUsers className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-600">6</div>
              <div className="text-xs font-bold text-gray-600 uppercase">Team Members</div>
            </div>
            <div className="border-2 border-gray-200 p-4 text-center">
              <FiClock className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">&lt;2s</div>
              <div className="text-xs font-bold text-gray-600 uppercase">Response Time</div>
            </div>
            <div className="border-2 border-gray-200 p-4 text-center">
              <FiZap className="w-6 h-6 text-pink-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-600">478</div>
              <div className="text-xs font-bold text-gray-600 uppercase">Facial Landmarks</div>
            </div>
            <div className="border-2 border-gray-200 p-4 text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-orange-600">4th</div>
              <div className="text-xs font-bold text-gray-600 uppercase">Rank Achieved</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              View Code
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 font-bold hover:border-cyan-500 transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
              Case Study
            </a>
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
            className="bg-white border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-gray-100 border-2 border-gray-300 text-xs font-bold uppercase mb-4">
                Full-Stack Platform
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                CodeClash
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4 font-medium">
                A full-stack platform I built to help competitive programmers track progress, practice problems, and get AI-powered insights. Using ReactJS and Tailwind CSS, I created an interface with 90%+ accessibility scores. The platform integrates with Codeforces API to fetch 10+ statistics per user and uses Gemini API for smart, AI-driven feedback and personalized recommendations.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Tailwind', 'Node.js', 'Gemini API', '+2'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-50 border border-gray-300 text-xs font-bold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-sm font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-2">
                  <FiGithub /> Code
                </a>
                <a href="#" className="text-sm font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-2">
                  <FiExternalLink /> Live
                </a>
              </div>
            </div>
          </motion.div>

          {/* Intelexa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-gray-100 border-2 border-gray-300 text-xs font-bold uppercase mb-4">
                RAG System
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Intelexa
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4 font-medium">
                A RAG-powered system with LLM-powered Q&A capabilities. Multi-service architecture with Vite + React frontend, Node.js crawler, and Python backend (FastAPI + LangChain). Uses semantic embeddings via sentence-transformers and is fully containerized with Docker, orchestrating Python backend, Qdrant vector database, and Neo4j graph database.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'LangChain', 'Qdrant', 'Docker', '+4'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-50 border border-gray-300 text-xs font-bold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center gap-2">
                  <FiGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
