import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  FiDownload, 
  FiShare2, 
  FiMail, 
  FiLinkedin, 
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiMapPin
} from 'react-icons/fi'

function ResumePage() {
  const [copyFeedback, setCopyFeedback] = useState('')
  const resumeRef = useRef(null)

  const handleDownloadPDF = () => {
    // Native print is the most reliable way to handle modern CSS features like OKLCH (Tailwind v4)
    // and ensures high-quality vector text relative to html2canvas rasterization.
    window.print()
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyFeedback('Link copied to clipboard!')
      setTimeout(() => setCopyFeedback(''), 3000)
    } catch (err) {
      setCopyFeedback('Failed to copy')
      setTimeout(() => setCopyFeedback(''), 3000)
    }
  }

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyFeedback(`${type} copied!`)
      setTimeout(() => setCopyFeedback(''), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Resume Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-b-4 border-red-600 py-16 px-6 print:hidden">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4"
          >
            Curriculum Vitae
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Kunal Verma
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-2"
          >
            Mathematics & Computing Student | Full-Stack Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-red-600 mb-4"
          >
            IIT (ISM) Dhanbad
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400"
          >
            Updated December 2024
          </motion.p>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <div className="sticky top-20 bg-white border-b-2 border-gray-200 py-4 px-6 z-40 shadow-md print:hidden">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold border-b-4 border-red-600 hover:bg-red-600 transition-colors"
          >
            <FiDownload className="w-5 h-5" />
            <span className="hidden sm:inline">Download PDF</span>
          </button>
          
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 font-bold hover:border-red-600 transition-colors"
          >
            <FiShare2 className="w-5 h-5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {copyFeedback && (
            <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-500 text-green-700 font-medium">
              <FiCheckCircle />
              {copyFeedback}
            </div>
          )}
        </div>
      </div>

      {/* Resume Content */}
      <div className="py-12 px-6 print:p-0">
        <div ref={resumeRef} className="max-w-5xl mx-auto bg-white p-8 print:p-0 print:max-w-none">
          {/* Header Section */}
          <div className="border-b-4 border-red-600 pb-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Kunal Verma
                </h1>
              </div>
              {/* IIT Logo placeholder - replace with actual logo */}
              <div className="text-red-600 font-bold text-xs text-right">
                <div className="w-16 h-16 border-2 border-red-600 flex items-center justify-center">
                  IIT ISM
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <button
                onClick={() => copyToClipboard('kunalvermah8@gmail.com', 'Email')}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors text-left"
              >
                <FiMail className="w-4 h-4" />
                <span className="font-medium">kunalvermah8@gmail.com</span>
              </button>
              
              <a
                href="https://www.linkedin.com/in/kunal-verma-596a76287/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-600 transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
                <span className="font-medium">linkedin.com/in/KunalVerma</span>
              </a>
              
              <a
                href="https://github.com/kunalverma2512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-600 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span className="font-medium">github.com/kunalverma2512</span>
              </a>
            </div>
          </div>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
              Education
            </h2>

            {/* IIT ISM */}
            <div className="bg-gray-50 border-l-4 border-red-600 p-6 mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Indian Institute of Technology (Indian School of Mines) Dhanbad
                </h3>
                <span className="text-sm text-gray-600 font-medium">Expected May 2028</span>
              </div>
              
              <p className="text-base italic text-gray-700 mb-2">
                Integrated Master of Technology in Mathematics and Computing
              </p>
              
              <div className="flex justify-end mb-3">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <FiMapPin className="w-3 h-3" />
                  Dhanbad, Jharkhand
                </span>
              </div>
              
              <div className="text-gray-700 font-medium">
                <span className="font-bold">Relevant Coursework:</span> Introduction to C, Data Structures and Algorithms (C++), Operating Systems, Object Oriented Programming
              </div>
            </div>

            {/* Class XII */}
            <div className="mb-4 pl-4 border-l-2 border-gray-300">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-gray-900">
                  Mahatma Hansraj Modem School
                </h3>
                <span className="text-sm text-gray-600 font-medium">April 2022 - April 2023</span>
              </div>
              
              <p className="text-base text-gray-700 mb-1">
                Central Board of Secondary Education (Class XII){' '}
                <span className="font-bold">(Percentage: 89.8%)</span>
              </p>
              
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <FiMapPin className="w-3 h-3" />
                Jhansi, Uttar Pradesh
              </span>
            </div>

            {/* Class X */}
            <div className="pl-4 border-l-2 border-gray-300">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-gray-900">
                  Mahatma Hansraj Modem School
                </h3>
                <span className="text-sm text-gray-600 font-medium">April 2020 - April 2021</span>
              </div>
              
              <p className="text-base text-gray-700 mb-1">
                Central Board of Secondary Education (Class X){' '}
                <span className="font-bold">(Percentage: 95%)</span>
              </p>
              
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <FiMapPin className="w-3 h-3" />
                Jhansi, Uttar Pradesh
              </span>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
              Projects
            </h2>

            {/* CodeClash */}
            <div className="border-2 border-gray-200 hover:border-red-600 transition-all duration-300 p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-gray-900">CodeClash</h3>
                <a href="#" className="text-red-600 hover:text-red-600">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-red-600 hover:text-red-600">
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <ul className="space-y-2 text-gray-700 font-medium mb-4 list-disc list-inside">
                <li>Built a full-stack platform for competitive programmers using ReactJs, Tailwind CSS, accessibility scores over 90%.</li>
                <li>Integrated Codeforces API and built backend with Node.js and Express.js to show 10+ stats and track progress.</li>
                <li>Used Gemini API via Node.js to generate smart, AI-driven feedback, insights, and recommendations.</li>
                <li>Implemented a contest module with practice questions to simulate CP contests and boost engagement.</li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Gemini API'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 border border-gray-300 text-xs font-bold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Face Liveness Detection - Featured */}
            <div className="bg-red-50 border-2 border-red-600 p-6 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">Face Liveness Detection System</h3>
                  <a href="#" className="text-red-600 hover:text-red-600">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-600">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase">
                  Smart India Hackathon
                </span>
              </div>
              
              <ul className="space-y-2 text-gray-700 font-medium mb-4 list-disc list-inside">
                <li>Worked in a 6-member team to build a browser-based face authentication system with liveness detection.</li>
                <li>Designed frontend using ReactJs and implemented real-time tracking with MediaPipe using 478 facial landmarks.</li>
                <li>Handled frontend-to-backend communication by capturing and sending face data with local results under 2 sec.</li>
                <li>Added face movement prompts like blinking and turning to detect liveness and prevent spoofing.</li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {['React', 'MediaPipe', 'Python', 'FastAPI', 'Computer Vision'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white border border-red-600 text-xs font-bold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Intelexa */}
            <div className="border-2 border-gray-200 hover:border-red-600 transition-all duration-300 p-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-gray-900">Intelexa</h3>
                <a href="#" className="text-red-600 hover:text-red-600">
                  <FiGithub className="w-5 h-5" />
                </a>
              </div>
              
              <ul className="space-y-2 text-gray-700 font-medium mb-4 list-disc list-inside">
                <li>Built a RAG-powered GenAI system that extracts, embeds, retrieves content for 4-5s intelligent query answering.</li>
                <li>Used multi-service setup with Vite + React frontend, NodeJs crawler, and Python (FastAPI + LangChain) backend.</li>
                <li>Generated and stored semantic embeddings using sentence-transformers in Qdrant for efficient similarity search.</li>
                <li>Containerized Python backend, Qdrant, and Neo4j with Docker and orchestrated via Docker Compose.</li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'FastAPI', 'LangChain', 'Qdrant', 'Neo4j', 'Docker'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 border border-gray-300 text-xs font-bold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
              Technical Skills
            </h2>

            <div className="space-y-3 text-gray-700">
              <div>
                <span className="font-bold text-gray-900">Languages: </span>
                <span className="font-medium">JavaScript, C++, Python</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-900">Tools: </span>
                <span className="font-medium">Git/GitHub, VS Code, Postman, REST API, Docker, Docker Compose</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-900">Technologies: </span>
                <span className="font-medium">ReactJs, Express.js, Node.js, Flask, FastAPI, LangChain, LangGraph, Bootstrap, Firebase, Tailwind CSS</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-900">Generative AI: </span>
                <span className="font-medium">LLMs, RAG, AI Agent Workflows, Tool Binding, Memory-aware Agents, Context-aware Apps</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-900">Databases & Embeddings: </span>
                <span className="font-medium">MongoDB, Qdrant, Neo4j</span>
              </div>
            </div>
          </section>

          {/* Sports Programming */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
              Sports Programming
            </h2>

            <div className="border-2 border-gray-300 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Platform</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Profile</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Rating</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Problems Solved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-gray-700 font-medium">CodeForces</td>
                    <td className="px-4 py-3">
                      <a
                        href="https://codeforces.com/profile/kunalverma2512"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-600 font-medium"
                      >
                        kunalverma2512
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold border border-red-500">
                        1336 (Pupil)
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">250+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700 font-medium">CodeChef</td>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.codechef.com/users/kunalverma25"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-600 font-medium"
                      >
                        kunalverma25
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold border border-green-300">
                        1302 (1 Star)
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">120+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
              Achievements
            </h2>

            <ul className="space-y-3">
              {[
                "Secured 4th position in HackerFest'25 for solving a real-world problem statement with an AI-powered solution.",
                "Participated in CodeRapido at IIT(ISM), building a game under pressure — demonstrated quick thinking and execution.",
                "Secured 4th rank in the internal hackathon for Smart India Hackathon AI project inside IIT(ISM) Dhanbad.",
                "Reached technical round in Winter of Code 6.0 (IIT(ISM) Hackathon) — selected among 200+ for open-source skills."
              ].map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <FiCheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Social Engagements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
              Social Engagements
            </h2>

            <div className="text-gray-700 font-medium">
              <span className="font-bold">Club:</span> Member of the Development Division,{' '}
              <span className="italic font-bold">Mallor Daemon</span> — the official student media body of IIT (ISM) Dhanbad — contributing to institute-level platforms like{' '}
              <span className="italic">Placementor</span>.
            </div>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Hide all non-essential elements */
          .print\\:hidden,
          nav,
          footer,
          header,
          .quick-actions,
          .hero-section {
            display: none !important;
          }

          /* Reset body and layout */
          body, html, #root, .min-h-screen {
            background: white;
            height: auto;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          /* Ensure main content takes full width */
          main {
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Target the resume container specifically */
          .max-w-5xl {
            max-width: none !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
          }

          /* Hide URL/Page info if possible (browser dependent) */
          @page {
            margin: 0.5cm;
            size: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default ResumePage
