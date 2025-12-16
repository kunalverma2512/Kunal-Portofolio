import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiCpu, FiLayers, FiZap } from 'react-icons/fi'

function TechnicalSkills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      gradient: 'from-amber-500 to-red-500',
      skills: ['JavaScript', 'C++', 'Python'],
      description: 'JavaScript for full-stack web development, C++ for competitive programming and DSA, Python for backend services and AI/ML projects.'
    },
    {
      title: 'Frontend Development',
      icon: FiLayers,
      gradient: 'from-red-500 to-pink-500',
      skills: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap'],
      description: 'Building responsive, accessible user interfaces with modern frameworks. Achieved 90%+ accessibility scores in projects.'
    },
    {
      title: 'Backend Development',
      icon: FiCpu,
      gradient: 'from-purple-500 to-indigo-500',
      skills: ['Node.js', 'Express.js', 'FastAPI'],
      description: 'Creating scalable APIs and microservices. Experience with RESTful architecture and real-time data handling.'
    },
    {
      title: 'Databases & Embeddings',
      icon: FiDatabase,
      gradient: 'from-amber-600 to-orange-500',
      skills: ['MongoDB', 'Qdrant', 'Neo4j'],
      description: 'Working with NoSQL, vector databases for semantic search, and graph databases for complex relationships.'
    },
    {
      title: 'AI/ML & Emerging Tech',
      icon: FiZap,
      gradient: 'from-red-600 to-purple-600',
      skills: ['LLMs', 'RAG', 'LangChain', 'AI Agents', 'MediaPipe'],
      description: 'Exploring large language models, retrieval-augmented generation, AI agent workflows, and computer vision applications.'
    },
    {
      title: 'DevOps & Tools',
      icon: FiTool,
      gradient: 'from-gray-600 to-gray-800',
      skills: ['Git/GitHub', 'Docker', 'Docker Compose', 'VS Code', 'Postman'],
      description: 'Version control, containerization, orchestration, and modern development workflows for efficient project management.'
    }
  ]

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-amber-500"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiZap className="w-4 h-4" />
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Technologies and tools I work with regularly to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-0 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`}></div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-bold text-gray-700 rounded-md group-hover:border-gray-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
