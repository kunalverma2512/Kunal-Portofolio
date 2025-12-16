import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'

function MyStory() {
  return (
    <section id="my-story" className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 transform origin-top pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiBookOpen className="w-4 h-4" />
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            From <span className="text-red-600">Classroom</span> to <span className="text-purple-600">Codebase</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed font-light">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-red-600 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              My journey into technology began in the classrooms of <span className="font-bold text-gray-900">Mahatma Hansraj Modem School</span> in Jhansi, Uttar Pradesh. Scoring 95% in Class X and 89.8% in Class XII, I developed a strong academic foundation, particularly in mathematics and logical thinking. The transition from Jhansi to <span className="font-bold text-gray-900">IIT (Indian School of Mines) Dhanbad</span> for my Integrated Master of Technology in Mathematics and Computing was a pivotal moment—one that opened doors to opportunities I had only dreamed of. Moving to Dhanbad wasn't just a geographical shift; it was an entry into a world of cutting-edge technology, brilliant minds, and endless possibilities to learn and grow.
            </p>

            <p>
              At IIT (ISM), I discovered that my mathematical background was more than just numbers and equations—it was a way of thinking. Courses like <span className="font-bold text-gray-900">Introduction to C</span> gave me my first taste of programming, where I learned to translate logical thoughts into executable code. Moving to <span className="font-bold text-gray-900">Data Structures and Algorithms in C++</span> deepened my understanding of how efficient code is built. The beauty of DSA lies in its mathematical foundation—every algorithm is essentially a mathematical proof brought to life through code. This synergy between mathematics and computing fascinated me. Balancing academics with coding projects hasn't always been easy, but it has taught me discipline, time management, and the importance of passion-driven learning.
            </p>

            <p>
              Competitive programming became my playground for honing problem-solving skills. I started on <span className="font-bold text-gray-900">CodeForces</span>, where I'm currently rated <span className="font-bold text-red-600">1336 (Pupil)</span> with over <span className="font-bold text-red-600">250+ problems solved</span>. On <span className="font-bold text-gray-900">CodeChef</span>, I hold a <span className="font-bold text-purple-600">1 Star rating (1302)</span> with <span className="font-bold text-purple-600">120+ problems</span> under my belt. Every contest is a rush of adrenaline—you're racing against the clock, debugging under pressure, optimizing solutions in real-time. CP taught me more than just algorithms; it taught me how to think quickly, handle stress, and write clean, efficient code. The community aspect is incredible too—discussing solutions, learning from others' approaches, and constantly pushing myself to improve. It's not just a hobby; it's a mindset that permeates everything I code.
            </p>

            <p>
              The transition from competitive programming to web development was natural yet eye-opening. While CP focused on algorithmic efficiency, web development introduced me to creating tangible products that users interact with. I learned <span className="font-bold text-gray-900">React</span>, fell in love with <span className="font-bold text-gray-900">Tailwind CSS</span>, and explored backend technologies like <span className="font-bold text-gray-900">Node.js and Express</span>. My first major project, <span className="font-bold text-red-600">CodeClash</span>, was born from this intersection—a full-stack platform for competitive programmers. I integrated the Codeforces API to fetch user statistics and added AI-powered feedback using the Gemini API. Building CodeClash taught me about state management, API integration, responsive design, and the joy of seeing an idea come to life. Achieving <span className="font-bold text-gray-900">90%+ accessibility scores</span> showed me that good design isn't just about aesthetics—it's about inclusivity and usability.
            </p>

            <p>
              My exploration into AI/ML began with <span className="font-bold text-gray-900">Smart India Hackathon</span>, where I worked with a 6-member team to build a <span className="font-bold text-purple-600">Face Liveness Detection System</span>. This was my introduction to real-world AI implementation. Using <span className="font-bold text-gray-900">MediaPipe</span> for facial landmark detection, I handled the frontend development in React, creating an interface that tracked <span className="font-bold text-gray-900">478 facial landmarks</span> in real-time. The system prompted users to blink, turn their head, or open their mouth to verify liveness and prevent spoofing. The challenge was ensuring seamless frontend-to-backend communication with response times under 2 seconds while maintaining accuracy. Securing <span className="font-bold text-purple-600">4th rank in the internal hackathon</span> validated our efforts. This project opened my eyes to the power of computer vision and the practical applications of AI. It led me to explore <span className="font-bold text-gray-900">LLMs, RAG systems, and AI agents</span> through my <span className="font-bold text-gray-900">Intelexa project</span>—a RAG-powered system using LangChain, Qdrant, and Neo4j. The world of AI/ML is vast, and I'm constantly learning, experimenting, and building.
            </p>

            <p>
              Currently in my third year at IIT (ISM), I'm actively involved with the official student media body of our institute, where I contribute to development initiatives. Participating in hackathons like <span className="font-bold text-purple-600">HackerFest'25</span> (where I secured 4th position) and <span className="font-bold text-gray-900">CodeRapido</span> keeps me sharp and pushes me to think on my feet. My goals are clear: continue building impactful projects that solve real problems, improve my problem-solving abilities, contribute to open-source communities, and leverage my mathematical background to create innovative tech solutions. I believe that the best code is written when you combine theoretical knowledge with practical application, and I'm excited to see where this journey takes me next.
            </p>
          </motion.div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="my-12 p-10 bg-gray-900 rounded-2xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
            <p className="relative z-10 text-xl md:text-2xl font-medium text-white italic leading-relaxed text-center">
              "Every project, every bug, every hackathon is a learning opportunity. The journey from mathematics student to developer has taught me that the best solutions come from combining logic with creativity."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MyStory
