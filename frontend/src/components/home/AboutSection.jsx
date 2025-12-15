import { motion } from 'framer-motion'
import profileImage from '../../assets/profileimage1.jpeg'

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 transform translate-x-6 translate-y-6"></div>
              
              {/* Main image container */}
              <div className="relative bg-white h-full flex items-center justify-center border-4 border-gray-900 overflow-hidden">
                <img 
                  src={profileImage}
                  alt="Kunal Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed font-medium text-lg">
              <p>
                I'm pursuing an <span className="font-bold text-gray-900">Integrated Master of Technology in Mathematics and Computing</span> at <span className="font-bold text-gray-900">IIT (ISM) Dhanbad</span>, where I blend mathematical thinking with practical software development.
              </p>
              
              <p>
                My passion lies in building <span className="font-bold text-gray-900">full-stack web applications</span> and exploring <span className="font-bold text-gray-900">AI/ML technologies</span>. I work with modern frameworks like React, Node.js, and Python to create solutions that solve real problems. Recently, I've been diving deep into generative AI, building RAG-powered systems using LangChain and vector databases.
              </p>

              <p>
                Hackathons have been a significant part of my journey. Winning <span className="font-bold text-gray-900">Smart India Hackathon 2025</span> with an AI-based cattle classification system and securing positions at HackerFest and other competitions taught me the value of teamwork, quick thinking, and execution under pressure.
              </p>
              
              <p>
                Beyond winning, I genuinely enjoy the process of learning new technologies and applying them to build something meaningful. Whether it's implementing face liveness detection with MediaPipe, orchestrating microservices with Docker, or integrating AI capabilities into web apps, each project expands my understanding of what's possible with code.
              </p>

              <p>
                I believe in <span className="font-bold text-gray-900">continuous learning</span> and challenging myself with new problems. The intersection of mathematics and computing fascinates me because it offers both the theoretical foundation to understand systems deeply and the practical tools to build them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
