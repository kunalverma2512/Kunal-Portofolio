import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

function BeyondCode() {
  const interests = [
    {
      icon: FiCode,
      title: 'Competitive Programming Passion',
      description: 'Competitive programming isn\'t just a skill—it\'s a passion that shapes how I think and approach problems. Regular participation in CodeForces and CodeChef contests keeps my problem-solving sharp and algorithmic thinking fresh. The thrill of optimizing solutions, the satisfaction of solving a difficult problem, and the community of fellow coders make CP an integral part of my journey. It\'s where I learned that every problem has multiple solutions, and finding the most elegant one is an art.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FiUsers,
      title: 'Student Leadership & Community',
      description: 'As a member of the Development Division in Mallor Daemon, the official student media body of IIT(ISM) Dhanbad, I contribute to building institute-level platforms like Placementor. Working collaboratively with talented peers on technical projects has taught me the value of teamwork, code reviews, and shared learning. Being part of this community means contributing to something bigger than个人 projects—it\'s about building tools that benefit the entire student body.',
      gradient:'from-purple-500 to-pink-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and staying curious is non-negotiable. I\'m constantly exploring new technologies—whether it\'s diving deep into LangChain documentation, experimenting with new AI models, or following the latest trends in web development. Reading technical blogs, watching conference talks, and building side projects keep me at the cutting edge. I\'m always open to mentorship opportunities and love collaborating with others who share the same drive to learn and build.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiHeart,
      title: 'Hobbies & Interests',
      description: 'Beyond competitive programming and development, problem-solving is genuinely a hobby. I enjoy tackling algorithmic challenges in my free time, building small side projects to test new ideas, and participating in hackathons for the sheer excitement of creation. My interest in mathematics goes beyond coursework—I find beauty in elegant proofs and the way mathematical concepts translate into efficient algorithms. Balancing academics, coding, and personal projects keeps life interesting and fulfilling.',
      gradient: 'from-pink-500 to-red-500'
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
            Interests
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Beyond Code
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Exploring interests, hobbies, and community involvement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${interest.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${interest.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {interest.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {interest.description}
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

export default BeyondCode
