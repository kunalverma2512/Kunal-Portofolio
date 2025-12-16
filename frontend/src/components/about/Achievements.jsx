import { motion } from 'framer-motion'
import { FiAward, FiTarget, FiStar, FiCode, FiTrendingUp } from 'react-icons/fi'
import { SiCodechef, SiCodeforces } from 'react-icons/si'

function Achievements() {
  const achievements = [
    {
      icon: FiTarget,
      title: "4th Position - HackerFest'25",
      description: "Secured 4th position among numerous participants by developing a real-world problem statement solution powered by AI. This hackathon tested our ability to think quickly, implement technically sound solutions, and work effectively under pressure. The experience reinforced my skills in rapid prototyping and delivering functional products within tight deadlines.",
      category: 'Hackathon',
      gradient: 'from-amber-500 to-red-500'
    },
    {
      icon: FiAward,
      title: '4th Rank - SIH Internal Hackathon',
      description: "Ranked 4th in the highly competitive internal hackathon for Smart India Hackathon AI project at IIT(ISM) Dhanbad. Led the frontend development for our Face Liveness Detection System, competing against talented teams from across the institute. This achievement validated our technical approach and teamwork.",
      category: 'Hackathon',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FiCode,
      title: 'Technical Round - Winter of Code 6.0',
      description: "Selected among 200+ participants to reach the technical round of Winter of Code 6.0 hackathon at IIT(ISM). This selection was based on demonstrated open-source contribution skills, coding proficiency, and technical problem-solving abilities. Competing at this level pushed me to refine my development skills and learn collaborative coding practices.",
      category: 'Open Source',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: FiStar,
      title: 'CodeRapido Participant - IIT(ISM)',
      description: "Participated in CodeRapido at IIT(ISM), a fast-paced competition where we built a complete game under extremely tight time constraints. This event showcased quick thinking, execution speed, and the ability to deliver functional, playable products under intense pressure. It was an excellent test of both technical skills and creative problem-solving.",
      category: 'Competition',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 transform origin-top pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold tracking-widest uppercase mb-4">
            <FiAward className="w-4 h-4" />
            Distinctions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Key accomplishments and recognitions throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`h-1.5 bg-gradient-to-r ${achievement.gradient}`}></div>

                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-bold uppercase text-gray-500 rounded-md">
                        {achievement.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed font-medium">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Competitive Programming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
              <FiTrendingUp className="text-green-400" />
              Competitive Programming Stats
            </h3>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* CodeForces Card */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors text-center backdrop-blur-sm">
                <SiCodeforces className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-2">
                  1336
                </div>
                <div className="text-lg font-bold text-gray-400 mb-2">CodeForces Rating</div>
                <div className="text-sm text-gray-400 font-medium mb-6">Pupil • 250+ Problems Solved</div>
                <a
                  href="https://codeforces.com/profile/kunalverma2512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
                >
                  View Profile
                </a>
              </div>

              {/* CodeChef Card */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors text-center backdrop-blur-sm">
                <SiCodechef className="w-12 h-12 text-amber-900 bg-white rounded-full p-1 mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-2">
                  1302
                </div>
                <div className="text-lg font-bold text-gray-400 mb-2">CodeChef Rating</div>
                <div className="text-sm text-gray-400 font-medium mb-6">1 Star • 120+ Problems Solved</div>
                <a
                  href="https://www.codechef.com/users/kunalverma25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-amber-600/10 text-amber-500 border border-amber-500/20 rounded-lg font-bold hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
