import { motion } from 'framer-motion'
import { FiBook, FiCpu, FiUsers, FiTarget } from 'react-icons/fi'

function ValuesPhilosophy() {
  const values = [
    {
      icon: FiBook,
      title: 'Learning Never Stops',
      description: 'I\'m honest about being a student—not just academically, but in every aspect of technology. The field evolves rapidly, and staying curious is essential. Every project I build, every bug I encounter, every hackathon I participate in is a learning opportunity. I believe that the moment you think you know everything is the moment you stop growing. Embracing a beginner\'s mindset while continuously improving keeps the journey exciting.'
    },
    {
      icon: FiCpu,
      title: 'Mathematics Meets Practicality',
      description: 'My background in mathematics isn\'t just academic—it\'s a practical tool for writing efficient algorithms and solving complex problems. I believe in combining theoretical knowledge with hands-on application. Every data structure, every optimization, every algorithm I implement is rooted in mathematical principles. This synergy between theory and practice creates robust, scalable solutions that are both elegant and effective.'
    },
    {
      icon: FiUsers,
      title: 'Collaboration Over Competition',
      description: 'While competitive programming teaches individual skills and problem-solving, real-world projects thrive on teamwork. I value collaboration, knowledge sharing, and community contribution over individual glory. Working with teams during hackathons, contributing to Mallor Daemon, and engaging with the developer community has shown me that the best solutions emerge from diverse perspectives and collective effort.'
    },
    {
      icon: FiTarget,
      title: 'Build to Solve, Not Just to Build',
      description: 'Every line of code should serve a purpose. Whether it\'s helping fellow programmers track their progress with CodeClash, exploring legal tech solutions with Intelexa, or building secure authentication systems for SIH, I focus on creating tools that address real problems. Technology is most powerful when it improves lives, solves challenges, and makes processes more efficient. Purpose-driven development is what makes projects meaningful.'
    }
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-cyan-500 mb-4">
            Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            My Approach to Technology
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
                className="bg-gray-50 border-2 border-gray-200 p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
