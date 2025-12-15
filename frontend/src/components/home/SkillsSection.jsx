import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiTool, 
  FiCpu,
  FiLayers,
  FiZap
} from 'react-icons/fi'

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FiCode,
      gradient: 'from-red-600 to-red-500',
      skills: ['JavaScript', 'C++', 'Python']
    },
    {
      title: 'Frontend',
      icon: FiLayers,
      gradient: 'from-purple-500 to-indigo-500',
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Vite']
    },
    {
      title: 'Backend',
      icon: FiCpu,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask']
    },
    {
      title: 'Databases & Embeddings',
      icon: FiDatabase,
      gradient: 'from-pink-500 to-red-500',
      skills: ['MongoDB', 'Qdrant', 'Neo4j']
    },
    {
      title: 'AI & ML',
      icon: FiZap,
      gradient: 'from-red-500 to-orange-500',
      skills: ['LangChain', 'LangGraph', 'RAG', 'AI Agent Workflows', 'Tool Binding', 'Memory-aware Agents']
    },
    {
      title: 'Tools & Technologies',
      icon: FiTool,
      gradient: 'from-indigo-500 to-purple-500',
      skills: ['Git/GitHub', 'Docker', 'Docker Compose', 'VS Code', 'Postman', 'REST API']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4"
          >
            Technical Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border-2 border-gray-200 hover:border-red-600 transition-all duration-300 group"
              >
                {/* Category Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-gray-50 border-2 border-gray-300 text-sm font-bold text-gray-700 hover:border-red-600 hover:text-red-600 hover:bg-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 border-2 border-gray-200 bg-white p-8"
        >
          <div className="grid md:grid-cols-1 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 mb-2">
                4+
              </div>
              <div className="text-sm font-bold tracking-wide uppercase text-gray-600">
                Major Projects Built
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 font-medium">
            Always learning and exploring new technologies. Currently diving deeper into{' '}
            <span className="font-bold text-red-600">AI Agent Workflows</span> and{' '}
            <span className="font-bold text-purple-600">Advanced RAG Systems</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
