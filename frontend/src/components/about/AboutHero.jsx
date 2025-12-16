import { motion, useScroll, useTransform } from 'framer-motion'
import { FiChevronDown, FiUser, FiCode, FiCpu } from 'react-icons/fi'

function AboutHero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])

  const scrollToNext = () => {
    const element = document.getElementById('my-story')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] md:bg-[size:24px_24px]"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-sm font-bold tracking-widest uppercase mb-8 border border-red-500/20"
        >
          <FiUser className="w-4 h-4" />
          Who I Am
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter"
        >
          Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Logic</span>,<br />
          Fueled by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Passion</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium mb-12"
        >
          Integrated Master of Technology student at <span className="text-white font-bold">IIT (ISM) Dhanbad</span>.
          Bridging the gap between mathematical theory and impactful software solutions.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-12 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="font-medium text-white">Full Stack Dev</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="font-medium text-white">AI/ML Explorer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="font-medium text-white">Problem Solver</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">My Story</span>
            <FiChevronDown className="w-6 h-6 animate-bounce text-red-500" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
