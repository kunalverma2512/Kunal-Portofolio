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
      gradient: 'from-orange-500 to-red-500',
      skills: ['JavaScript', 'C++', 'Python']
    },
    {
      title: 'Frontend',
      icon: FiLayers,
      gradient: 'from-blue-500 to-indigo-500',
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
      gradient: 'from-emerald-500 to-teal-500',
      skills: ['MongoDB', 'Qdrant', 'Neo4j']
    },
    {
      title: 'AI & ML',
      icon: FiZap,
      gradient: 'from-amber-400 to-orange-500',
      skills: ['LangChain', 'LangGraph', 'RAG', 'AI Agent Workflows', 'Tool Binding', 'Memory-aware Agents']
    },
    {
      title: 'Tools & Technologies',
      icon: FiTool,
      gradient: 'from-gray-600 to-gray-800',
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
    <section id="skills" className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <FiCpu className="w-4 h-4" />
            Technical Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            My Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Technologies and tools I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm font-semibold rounded-lg border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl max-w-2xl w-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative z-10">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                4+
              </div>
              <div className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">
                Major Projects Built
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                Always learning and exploring new technologies. Currently diving deeper into{' '}
                <span className="text-white font-bold border-b border-red-500/50">AI Agent Workflows</span> and{' '}
                <span className="text-white font-bold border-b border-purple-500/50">Advanced RAG Systems</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
