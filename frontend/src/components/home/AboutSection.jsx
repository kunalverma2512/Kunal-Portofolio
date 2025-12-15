import { motion } from 'framer-motion'
import profileImage from '../../assets/profileimage1.jpeg'

function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Light Mesh Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto group perspective-1000">
              {/* Spinning/Subtle Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>

              {/* Main image container */}
              <div className="relative h-full w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={profileImage}
                  alt="Kunal Verma"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Minimalist decorative dots behind */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px]"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px]"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-600 uppercase bg-red-50 rounded-full">
              Discover
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed font-normal text-lg">
              <p>
                I'm pursuing an <span className="font-semibold text-gray-900 border-b-2 border-red-100">Integrated Master of Technology in Mathematics and Computing</span> at <span className="font-semibold text-gray-900">IIT (ISM) Dhanbad</span>, where I blend mathematical thinking with practical software development.
              </p>

              <p>
                My passion lies in building <span className="font-semibold text-gray-900">full-stack web applications</span> and exploring <span className="font-semibold text-gray-900">AI/ML technologies</span>. I work with modern frameworks like React, Node.js, and Python to create solutions that solve real problems. Recently, I've been diving deep into generative AI, building RAG-powered systems using LangChain and vector databases.
              </p>

              <p>
                Hackathons have been a significant part of my journey. Winning <span className="font-semibold text-gray-900">Smart India Hackathon 2025</span> with an AI-based cattle classification system and securing positions at HackerFest and other competitions taught me the value of teamwork, quick thinking, and execution under pressure.
              </p>

              <p>
                Beyond winning, I genuinely enjoy the process of learning new technologies and applying them to build something meaningful. Whether it's implementing face liveness detection with MediaPipe, orchestrating microservices with Docker, or integrating AI capabilities into web apps, each project expands my understanding of what's possible with code.
              </p>

              <p>
                I believe in <span className="font-semibold text-gray-900">continuous learning</span> and challenging myself with new problems. The intersection of mathematics and computing fascinates me because it offers both the theoretical foundation to understand systems deeply and the practical tools to build them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
