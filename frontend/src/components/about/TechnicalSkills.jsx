import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiCpu, FiLayers, FiZap } from 'react-icons/fi'

function TechnicalSkills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      gradient: 'from-cyan-500 to-blue-500',
      skills: ['JavaScript', 'C++', 'Python'],
      description: 'JavaScript for full-stack web development, C++ for competitive programming and DSA, Python for backend services and AI/ML projects.'
    },
    {
      title: 'Frontend Development',
      icon: FiLayers,
      gradient: 'from-blue-500 to-purple-500',
      skills: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap'],
      description: 'Building responsive, accessible user interfaces with modern frameworks. Achieved 90%+ accessibility scores in projects.'
    },
    {
      title: 'Backend Development',
      icon: FiCpu,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Express.js', 'FastAPI'],
      description: 'Creating scalable APIs and microservices. Experience with RESTful architecture and real-time data handling.'
    },
    {
      title: 'Databases & Embeddings',
      icon: FiDatabase,
      gradient: 'from-pink-500 to-red-500',
      skills: ['MongoDB', 'Qdrant', 'Neo4j'],
      description: 'Working with NoSQL, vector databases for semantic search, and graph databases for complex relationships.'
    },
    {
      title: 'AI/ML & Emerging Tech',
      icon: FiZap,
      gradient: 'from-cyan-500 to-purple-500',
      skills: ['LLMs', 'RAG', 'LangChain', 'AI Agents', 'MediaPipe'],
      description: 'Exploring large language models, retrieval-augmented generation, AI agent workflows, and computer vision applications.'
    },
    {
      title: 'DevOps & Tools',
      icon: FiTool,
      gradient: 'from-indigo-500 to-blue-500',
      skills: ['Git/GitHub', 'Docker', 'Docker Compose', 'VS Code', 'Postman'],
      description: 'Version control, containerization, orchestration, and modern development workflows for efficient project management.'
    }
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-cyan-500 mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Technical Expertise
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
                className="bg-gray-50 border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white border-2 border-gray-300 text-sm font-bold text-gray-700 hover:border-cyan-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
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
