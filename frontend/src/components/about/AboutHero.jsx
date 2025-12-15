import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

function AboutHero() {
  const scrollToNext = () => {
    const element = document.getElementById('my-story')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-black border-b-4 border-cyan-500 py-20 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-bold tracking-widest uppercase text-cyan-400 mb-6"
        >
          About Me
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Kunal Verma
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-8 text-cyan-400 text-lg md:text-xl font-medium"
        >
          <span>Mathematics</span>
          <span className="w-2 h-2 bg-cyan-400"></span>
          <span>Computing</span>
          <span className="w-2 h-2 bg-cyan-400"></span>
          <span>Development</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium"
        >
          Third-year student at IIT (ISM) Dhanbad pursuing an Integrated Master of Technology in Mathematics and Computing. 
          Passionate about building full-stack applications, exploring AI/ML technologies, and solving complex problems through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={scrollToNext}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Scroll to content"
          >
            <FiChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
