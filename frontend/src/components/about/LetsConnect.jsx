import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

function LetsConnect() {
  const contactOptions = [
    {
      icon: FiMail,
      title: 'Send Email',
      value: 'kunalvermah8@gmail.com',
      link: 'mailto:kunalvermah8@gmail.com',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FiLinkedin,
      title: 'Connect on LinkedIn',
      value: 'linkedin.com/in/kunal-verma-596a76287',
      link: 'https://www.linkedin.com/in/kunal-verma-596a76287/',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: FiGithub,
      title: 'View GitHub',
      value: 'github.com/kunalverma2512',
      link: 'https://github.com/kunalverma2512',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Build Something Together
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
            I'm always open to interesting projects, collaborations, and conversations about technology. 
            Whether you have an idea, need help with a project, or just want to connect—feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.a
                  key={index}
                  href={option.link}
                  target={option.link.startsWith('http') ? '_blank' : undefined}
                  rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${option.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">
                      {option.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {option.value}
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LetsConnect
