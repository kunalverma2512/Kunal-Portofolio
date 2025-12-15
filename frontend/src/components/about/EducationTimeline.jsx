import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'

function EducationTimeline() {
  const education = [
    {
      institution: 'Indian Institute of Technology (Indian School of Mines) Dhanbad',
      degree: 'Integrated Master of Technology in Mathematics and Computing',
      duration: 'Expected May 2028',
      location: 'Dhanbad, Jharkhand',
      coursework: ['Introduction to C', 'Data Structures and Algorithms (C++)', 'Operating Systems', 'Object Oriented Programming'],
      description: 'Pursuing a rigorous curriculum that perfectly balances the theoretical depth of mathematics with the practical applications of computer science. The program emphasizes algorithmic thinking, computational efficiency, and modern software development practices. Beyond academics, I actively contribute to Mallor Daemon, the official student media body, where I work on institute-level platforms and collaborate with talented peers on technical projects.',
      current: true
    },
    {
      institution: 'Mahatma Hansraj Modem School',
      degree: 'Class XII - Central Board of Secondary Education',
      duration: 'April 2022 - April 2023',
      percentage: '89.8%',
      location: 'Jhansi, Uttar Pradesh',
      description: 'Completed senior secondary education with a strong focus on mathematics and science. This crucial year involved intensive board exam preparation while simultaneously preparing for competitive entrance exams. The experience taught me time management, stress handling, and the importance of building a strong conceptual foundation.',
      current: false
    },
    {
      institution: 'Mahatma Hansraj Modem School',
      degree: 'Class X - Central Board of Secondary Education',
      duration: 'April 2020 - April 2021',
      percentage: '95%',
      location: 'Jhansi, Uttar Pradesh',
      description: 'Foundational years that sparked my interest in mathematics and logical reasoning. Scoring 95% reinforced my confidence in analytical subjects and set the stage for my future in technology. These early years taught me the value of consistent effort and curiosity-driven learning.',
      current: false
    }
  ]

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
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Educational Background
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-cyan-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-cyan-500 border-4 border-white z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-1/2`}>
                  <div className={`bg-white border-2 ${item.current ? 'border-cyan-500' : 'border-gray-200'} p-6 hover:border-cyan-500 transition-all duration-300 shadow-lg`}>
                    {item.current && (
                      <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold tracking-wide uppercase mb-4">
                        Current
                      </span>
                    )}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.institution}
                    </h3>
                    
                    <p className="text-lg font-bold text-cyan-600 mb-4">
                      {item.degree}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiCalendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiMapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.location}</span>
                      </div>
                      
                      {(item.gpa || item.percentage) && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiAward className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {item.gpa || item.percentage}
                          </span>
                        </div>
                      )}
                    </div>

                    {item.coursework && (
                      <div className="mb-4">
                        <p className="text-xs font-bold tracking-wide uppercase text-gray-700 mb-2">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-gray-100 border border-gray-300 text-xs font-medium text-gray-700"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-gray-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline
