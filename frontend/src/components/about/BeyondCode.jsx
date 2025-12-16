import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiTrendingUp, FiHeart, FiSmile } from 'react-icons/fi'

function BeyondCode() {
  const interests = [
    {
      icon: FiCode,
      title: 'Competitive Programming Passion',
      description: 'Competitive programming isn\'t just a skill—it\'s a passion that shapes how I think and approach problems. Regular participation in CodeForces and CodeChef contests keeps my problem-solving sharp and algorithmic thinking fresh. The thrill of optimizing solutions, the satisfaction of solving a difficult problem, and the community of fellow coders make CP an integral part of my journey. It\'s where I learned that every problem has multiple solutions, and finding the most elegant one is an art.',
      gradient: 'from-amber-500 to-red-500'
    },
    {
      icon: FiUsers,
      title: 'Student Leadership & Community',
      description: 'As a member of the Development Division in the official student media body of IIT(ISM) Dhanbad, I contribute to building institute-level platforms. Working collaboratively with talented peers on technical projects has taught me the value of teamwork, code reviews, and shared learning. Being part of this community means contributing to something bigger than personal projects—it\'s about building tools that benefit the entire student body.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and staying curious is non-negotiable. I\'m constantly exploring new technologies—whether it\'s diving deep into LangChain documentation, experimenting with new AI models, or following the latest trends in web development. Reading technical blogs, watching conference talks, and building side projects keep me at the cutting edge. I\'m always open to mentorship opportunities and love collaborating with others who share the same drive to learn and build.',
      gradient: 'from-red-500 to-purple-500'
    },
    {
      icon: FiHeart,
      title: 'Hobbies & Interests',
      description: 'Beyond competitive programming and development, problem-solving is genuinely a hobby. I enjoy tackling algorithmic challenges in my free time, building small side projects to test new ideas, and participating in hackathons for the sheer excitement of creation. My interest in mathematics goes beyond coursework—I find beauty in elegant proofs and the way mathematical concepts translate into efficient algorithms. Balancing academics, coding, and personal projects keeps life interesting and fulfilling.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section className="bg-gray-50 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiSmile className="w-4 h-4" />
            Interests
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
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
                className="bg-white rounded-2xl p-0 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className={`h-1.5 bg-gradient-to-r ${interest.gradient}`}></div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
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
