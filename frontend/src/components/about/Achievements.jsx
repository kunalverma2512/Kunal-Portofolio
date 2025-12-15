import { motion } from 'framer-motion'
import { FiAward, FiTarget, FiStar, FiCode } from 'react-icons/fi'

function Achievements() {
  const achievements = [
    {
      icon: FiTarget,
      title: "4th Position - HackerFest'25",
      description: "Secured 4th position among numerous participants by developing a real-world problem statement solution powered by AI. This hackathon tested our ability to think quickly, implement technically sound solutions, and work effectively under pressure. The experience reinforced my skills in rapid prototyping and delivering functional products within tight deadlines.",
      category: 'Hackathon',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiAward,
      title: '4th Rank - SIH Internal Hackathon',
      description: "Ranked 4th in the highly competitive internal hackathon for Smart India Hackathon AI project at IIT(ISM) Dhanbad. Led the frontend development for our Face Liveness Detection System, competing against talented teams from across the institute. This achievement validated our technical approach and teamwork.",
      category: 'Hackathon',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FiCode,
      title: 'Technical Round - Winter of Code 6.0',
      description: "Selected among 200+ participants to reach the technical round of Winter of Code 6.0 hackathon at IIT(ISM). This selection was based on demonstrated open-source contribution skills, coding proficiency, and technical problem-solving abilities. Competing at this level pushed me to refine my development skills and learn collaborative coding practices.",
      category: 'Open Source',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiStar,
      title: 'CodeRapido Participant - IIT(ISM)',
      description: "Participated in CodeRapido at IIT(ISM), a fast-paced competition where we built a complete game under extremely tight time constraints. This event showcased quick thinking, execution speed, and the ability to deliver functional, playable products under intense pressure. It was an excellent test of both technical skills and creative problem-solving.",
      category: 'Competition',
      gradient: 'from-indigo-500 to-purple-500'
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
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Key accomplishments and recognitions throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${achievement.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white border border-gray-300 text-xs font-bold uppercase text-gray-700">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
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
          className="border-2 border-gray-200 p-8 bg-gray-50"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Competitive Programming Statistics
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">
                1336
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">CodeForces Rating</div>
              <div className="text-sm text-gray-600 font-medium mb-4">Pupil • 250+ Problems Solved</div>
              <a
                href="https://codeforces.com/profile/kunalverma2512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-cyan-500 text-cyan-600 font-bold hover:bg-cyan-500 hover:text-white transition-colors"
              >
                View Profile
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                1302
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">CodeChef Rating</div>
              <div className="text-sm text-gray-600 font-medium mb-4">1 Star • 120+ Problems Solved</div>
              <a
                href="https://www.codechef.com/users/kunalverma25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-purple-500 text-purple-600 font-bold hover:bg-purple-500 hover:text-white transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
