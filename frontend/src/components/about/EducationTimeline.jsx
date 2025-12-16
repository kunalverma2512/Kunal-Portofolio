import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiAward, FiBook } from 'react-icons/fi'

function EducationTimeline() {
  const education = [
    {
      institution: 'Indian Institute of Technology (Indian School of Mines) Dhanbad',
      degree: 'Integrated Master of Technology in Mathematics and Computing',
      duration: 'Expected May 2028',
      location: 'Dhanbad, Jharkhand',
      coursework: ['Introduction to C', 'Data Structures and Algorithms (C++)', 'Operating Systems', 'Object Oriented Programming'],
      description: 'Pursuing a rigorous curriculum that perfectly balances the theoretical depth of mathematics with the practical applications of computer science. The program emphasizes algorithmic thinking, computational efficiency, and modern software development practices. Beyond academics, I collaborate with talented peers on technical projects and contribute to institute-level platforms.',
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
    <section className="bg-gray-50 py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiBook className="w-4 h-4" />
            Academic Career
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Education Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-transparent opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-red-500 rounded-full z-10 shadow-[0_0_0_4px_rgba(239,68,68,0.2)]"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group`}>

                    {/* Corner Accent */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'md:right-0 md:rounded-tr-2xl' : 'md:left-0 md:rounded-tl-2xl'} right-0 rounded-tr-2xl w-20 h-20 bg-gradient-to-br from-red-50 to-transparent opacity-50`}></div>

                    {item.current && (
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold tracking-widest uppercase mb-4 rounded-full">
                        Currently Enrolled
                      </span>
                    )}

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {item.institution}
                    </h3>

                    <p className="text-lg font-semibold text-gray-700 mb-6">
                      {item.degree}
                    </p>

                    <div className={`flex flex-wrap gap-4 mb-6 text-sm text-gray-500 font-medium ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="w-4 h-4 text-red-500" />
                        <span>{item.duration}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <FiMapPin className="w-4 h-4 text-purple-500" />
                        <span>{item.location}</span>
                      </div>

                      {(item.gpa || item.percentage) && (
                        <div className="flex items-center gap-1.5">
                          <FiAward className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-900 font-bold">
                            {item.gpa || item.percentage}
                          </span>
                        </div>
                      )}
                    </div>

                    {item.coursework && (
                      <div className="mb-6">
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          {item.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-[11px] font-semibold text-gray-600 rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-gray-500 leading-relaxed font-normal text-sm">
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
