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
  FiMapPin,
  FiCalendar,
  FiAward,
  FiCode,
  FiBriefcase,
  FiCpu,
  FiGlobe
} from 'react-icons/fi'

function ResumePage() {
  const [copyFeedback, setCopyFeedback] = useState('')
  const resumeRef = useRef(null)

  const handleDownloadPDF = () => {
    window.print()
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyFeedback('Link copied!')
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

  // Tech Skills Data
  const skills = {
    languages: ['JavaScript', 'C++', 'Python', 'SQL', 'HTML/CSS'],
    frameworks: ['React', 'Node.js', 'Express.js', 'FastAPI', 'Next.js', 'TailwindCSS'],
    tools: ['Git/GitHub', 'Docker', 'Postman', 'MongoDB', 'Qdrant', 'Figma'],
    ai: ['LLMs', 'RAG Systems', 'LangChain', 'OpenAI API', 'Gemini API']
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-gray-300 selection:bg-red-500/30">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Actions Bar (Hidden in Print) */}
        <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-3 mb-8 print:hidden relative">
          {copyFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 10, x: '-50%' }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 md:absolute md:bottom-auto md:left-0 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 z-50 px-4 py-2 bg-green-500/10 text-green-400 rounded-xl text-sm font-bold border border-green-500/20 flex items-center gap-2 backdrop-blur-md shadow-xl"
            >
              <FiCheckCircle /> {copyFeedback}
            </motion.div>
          )}

          <div className="flex gap-3 justify-end w-full md:w-auto">
            <button
              onClick={handleShare}
              className="flex-1 md:flex-none justify-center items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10 hover:border-white/20"
            >
              <FiShare2 /> <span>Share</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex-1 md:flex-none justify-center items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
            >
              <FiDownload /> <span className="hidden sm:inline">Download PDF</span><span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>

        {/* Resume Container */}
        <div
          id="resume-content"
          ref={resumeRef}
          className="bg-[#111] md:bg-transparent print:bg-white print:text-black flex flex-col md:flex-row gap-8 md:gap-12 print:gap-8"
        >

          {/* LEFT SIDEBAR (Profile & Contact) */}
          <aside className="md:w-1/3 space-y-8">

            {/* Profile Card */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 sticky top-24 print:static print:border-0 print:p-0 print:bg-transparent">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight print:text-black">
                  Kunal <span className="text-red-600">Verma</span>
                </h1>
                <p className="text-lg text-gray-400 font-medium print:text-gray-600">
                  Full Stack Developer &<br /> AI Enthusiast
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300 print:text-black">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-red-500 print:border print:border-gray-200">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location</p>
                    <p className="font-medium">Dhanbad, Jharkhand</p>
                  </div>
                </div>

                <div
                  onClick={() => copyToClipboard('kunalvermah8@gmail.com', 'Email')}
                  className="flex items-center gap-3 text-gray-300 cursor-pointer group print:text-black"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors print:border print:border-gray-200">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</p>
                    <p className="font-medium break-all">kunalvermah8@gmail.com</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/kunal-verma-596a76287/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-300 group print:text-black"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors print:border print:border-gray-200">
                    <FiLinkedin />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">LinkedIn</p>
                    <p className="font-medium">/in/KunalVerma</p>
                  </div>
                </a>

                <a
                  href="https://github.com/kunalverma2512"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-300 group print:text-black"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors print:border print:border-gray-200 print:text-black">
                    <FiGithub />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">GitHub</p>
                    <p className="font-medium">@kunalverma2512</p>
                  </div>
                </a>
              </div>

              {/* Skills (Sidebar only for Desktop/Print) */}
              <div className="pt-8 border-t border-white/10 print:border-gray-200">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 print:text-black">
                  <FiCpu className="text-red-600" /> Skills
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-bold">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map(s => (
                        <span key={s} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10 print:border-gray-300 print:text-black">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-bold">Frameworks & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {[...skills.frameworks, ...skills.tools].map(s => (
                        <span key={s} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10 print:border-gray-300 print:text-black">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-bold">AI & ML</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.ai.map(s => (
                        <span key={s} className="px-2 py-1 bg-red-600/10 text-red-400 text-xs rounded border border-red-600/20 print:border-red-200 print:text-red-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>


          {/* RIGHT CONTENT (Experience, Projects, Education) */}
          <main className="md:w-2/3 space-y-12">

            {/* Education */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6 print:text-black">
                <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white text-sm">
                  <FiAward />
                </div>
                Education
              </h2>

              <div className="relative border-l-2 border-white/10 ml-4 space-y-8 pl-8 pb-2 print:border-gray-200">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0a0a0a] border-4 border-red-600 print:bg-white"></div>

                  <div className="bg-[#111] p-6 rounded-2xl border border-white/5 print:border-gray-200 print:bg-transparent print:p-0">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white print:text-black">Indian Institute of Technology (ISM) Dhanbad</h3>
                      <span className="px-3 py-1 bg-white/5 text-xs font-bold text-gray-400 rounded-full border border-white/10 print:border-gray-300 print:text-gray-600">Expected 2028</span>
                    </div>
                    <p className="text-red-500 font-medium mb-3 print:text-red-700">Integrated M.Tech in Mathematics and Computing</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 print:text-gray-700">
                      Relevant Coursework: Data Structures & Algorithms, Object Oriented Programming, Probability & Statistics, Operating Systems.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0a0a0a] border-4 border-gray-600 print:bg-white print:border-gray-400"></div>

                  <div className="bg-[#111] p-6 rounded-2xl border border-white/5 print:border-gray-200 print:bg-transparent print:p-0">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white print:text-black">Mahatma Hansraj Modern School</h3>
                      <span className="text-sm text-gray-500 print:text-gray-600">2022 - 2023</span>
                    </div>
                    <p className="text-gray-400 text-sm print:text-gray-700">Class XII (CBSE) - <span className="text-white font-bold print:text-black">89.8%</span></p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0a0a0a] border-4 border-gray-600 print:bg-white print:border-gray-400"></div>

                  <div className="bg-[#111] p-6 rounded-2xl border border-white/5 print:border-gray-200 print:bg-transparent print:p-0">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white print:text-black">Mahatma Hansraj Modern School</h3>
                      <span className="text-sm text-gray-500 print:text-gray-600">2020 - 2021</span>
                    </div>
                    <p className="text-gray-400 text-sm print:text-gray-700">Class X (CBSE) - <span className="text-white font-bold print:text-black">95%</span></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience / Projects */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6 print:text-black">
                <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white text-sm">
                  <FiBriefcase />
                </div>
                Key Projects
              </h2>

              <div className="grid gap-6">

                {/* CodeClash */}
                <div className="group bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all print:border-gray-200 print:bg-transparent print:p-0 print:mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors print:text-black">CodeClash</h3>
                      <p className="text-sm text-gray-500 print:text-gray-600">Competitive Programming Platform</p>
                    </div>
                    <div className="flex gap-2 print:hidden">
                      <a href="https://github.com/kunalverma2512/CodeClash" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"><FiGithub /></a>
                      <a href="https://code-clash-nine.vercel.app/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"><FiExternalLink /></a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mb-4 print:text-gray-700">
                    <li>Built a full-stack platform using <span className="text-gray-300 font-bold print:text-black">React & Node.js</span> integrating Codeforces API.</li>
                    <li>Implemented AI-driven performance feedback using <span className="text-gray-300 font-bold print:text-black">Gemini API</span> to analyze user submissions.</li>
                    <li>Developed a contest simulation module to boost user engagement and practice efficiency.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-500">
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">React</span>
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">Node.js</span>
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">MongoDB</span>
                  </div>
                </div>

                {/* Face Liveness */}
                <div className="group bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all print:border-gray-200 print:bg-transparent print:p-0 print:mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors print:text-black">Liveness Detection System</h3>
                      <p className="text-sm text-gray-500 print:text-gray-600">Smart India Hackathon Project</p>
                    </div>
                    <div className="flex gap-2 print:hidden">
                      <a href="https://github.com/kunalverma2512/smart-india-hackathon-livenessCheck" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"><FiGithub /></a>
                      <a href="https://smart-india-hackathon-liveness-chec.vercel.app/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"><FiExternalLink /></a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mb-4 print:text-gray-700">
                    <li>Developed a browser-based anti-spoofing system using <span className="text-gray-300 font-bold print:text-black">MediaPipe & TensorFlow.js</span>.</li>
                    <li>Achieved sub-2-second verification time by processing facial landmarks purely on the client side.</li>
                    <li>Secured <span className="text-red-500 font-bold print:text-red-700">4th Rank</span> in Internal Hackathon (Smart India Hackathon 2024).</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-500">
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">Computer Vision</span>
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">React</span>
                  </div>
                </div>

                {/* Intelexa */}
                <div className="group bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all print:border-gray-200 print:bg-transparent print:p-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors print:text-black">Intelexa</h3>
                      <p className="text-sm text-gray-500 print:text-gray-600">RAG-powered Knowledge System</p>
                    </div>
                    <div className="flex gap-2 print:hidden">
                      <a href="https://github.com/kunalverma2512/Intellexa" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"><FiGithub /></a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mb-4 print:text-gray-700">
                    <li>Engineered a RAG system using <span className="text-gray-300 font-bold print:text-black">LangChain & Qdrant</span> for intelligent query answering.</li>
                    <li>Orchestrated microservices (Crawler, Vector DB, Backend) using <span className="text-300 font-bold print:text-black">Docker Compose</span>.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-500">
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">FastAPI</span>
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">Python</span>
                    <span className="px-2 py-1 bg-white/5 rounded print:border print:border-gray-200">Docker</span>
                  </div>
                </div>

              </div>
            </section>

            {/* Achievements & Ratings */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6 print:text-black">
                <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white text-sm">
                  <FiCode />
                </div>
                CP Ratings & Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 print:grid-cols-2">
                <div className="bg-[#111] p-5 rounded-xl border border-white/5 flex items-center justify-between print:border-gray-200 print:bg-transparent">
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">CodeForces</p>
                    <p className="text-2xl font-bold text-white print:text-black">1336 <span className="text-sm font-normal text-green-500">(Pupil)</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Solved</p>
                    <p className="text-lg font-bold text-white print:text-black">250+</p>
                  </div>
                </div>

                <div className="bg-[#111] p-5 rounded-xl border border-white/5 flex items-center justify-between print:border-gray-200 print:bg-transparent">
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">CodeChef</p>
                    <p className="text-2xl font-bold text-white print:text-black">1302 <span className="text-sm font-normal text-gray-500">(1 Star)</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Solved</p>
                    <p className="text-lg font-bold text-white print:text-black">120+</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] p-6 rounded-2xl border border-white/5 print:border-gray-200 print:bg-transparent print:p-0">
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-400 text-sm print:text-gray-700">
                    <FiCheckCircle className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Winner</strong> of Smart India Hackathon 2025 (SIH'25).</span>
                  </li>
                  <li className="flex gap-3 text-gray-400 text-sm print:text-gray-700">
                    <FiCheckCircle className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Selected for <strong>Winter of Code 6.0</strong> (Technical Round) among 200+ applicants.</span>
                  </li>
                  <li className="flex gap-3 text-gray-400 text-sm print:text-gray-700">
                    <FiCheckCircle className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Selected in <strong>SIH Internal Hackathon</strong> and secured <strong>4th Rank</strong>.</span>
                  </li>
                </ul>
              </div>

            </section>

          </main>
        </div>
      </div>

      {/* Print Styles Override */}
      <style>{`
        @media print {
          /* Hide EVERYTHING in the body */
          body * {
            visibility: hidden;
          }

          /* Correctly position the resume content */
          #resume-content, #resume-content * {
            visibility: visible;
          }

          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            background-color: white !important;
            color: black !important;
          }

          /* Ensure proper background/text colors for children elements specifically */
           .bg-\\[\\#111\\], .bg-\\[\\#0a0a0a\\] {
             background-color: transparent !important;
          }

          .text-white { color: black !important; }
          .text-gray-300, .text-gray-400, .text-gray-500 { color: #374151 !important; }

          /* Remove borders/shadows that look bad in print */
          .border-white\\/5, .border-white\\/10 {
            border-color: #e5e7eb !important; /* gray-200 */
          }
        }
      `}</style>
    </div>
  )
}

export default ResumePage
