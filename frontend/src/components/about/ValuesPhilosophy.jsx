import { motion } from 'framer-motion'
import { FiBook, FiCpu, FiUsers, FiTarget, FiHelpCircle } from 'react-icons/fi'

function ValuesPhilosophy() {
  const values = [
    {
      icon: FiBook,
      title: 'Learning Never Stops',
      description: 'I\'m honest about being a student—not just academically, but in every aspect of technology. The field evolves rapidly, and staying curious is essential. Every project I build, every bug I encounter, every hackathon I participate in is a learning opportunity. I believe that the moment you think you know everything is the moment you stop growing. Embracing a beginner\'s mindset while continuously improving keeps the journey exciting.',
      gradient: 'from-amber-500 to-red-500'
    },
    {
      icon: FiCpu,
      title: 'Mathematics Meets Practicality',
      description: 'My background in mathematics isn\'t just academic—it\'s a practical tool for writing efficient algorithms and solving complex problems. I believe in combining theoretical knowledge with hands-on application. Every data structure, every optimization, every algorithm I implement is rooted in mathematical principles. This synergy between theory and practice creates robust, scalable solutions that are both elegant and effective.',
      gradient: 'from-red-500 to-purple-500'
    },
    {
      icon: FiUsers,
      title: 'Collaboration Over Competition',
      description: 'While competitive programming teaches individual skills and problem-solving, real-world projects thrive on teamwork. I value collaboration, knowledge sharing, and community contribution over individual glory. Working with teams during hackathons, contributing to student bodies, and engaging with the developer community has shown me that the best solutions emerge from diverse perspectives and collective effort.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FiTarget,
      title: 'Build to Solve, Not Just to Build',
      description: 'Every line of code should serve a purpose. Whether it\'s helping fellow programmers track their progress with CodeClash, exploring legal tech solutions with Intelexa, or building secure authentication systems for SIH, I focus on creating tools that address real problems. Technology is most powerful when it improves lives, solves challenges, and makes processes more efficient. Purpose-driven development is what makes projects meaningful.',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiHelpCircle className="w-4 h-4" />
            Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            My Approach
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Core principles that guide my work and learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-0 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`w-full md:w-32 bg-gradient-to-br ${value.gradient} p-8 flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-8 md:p-10 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValuesPhilosophy
