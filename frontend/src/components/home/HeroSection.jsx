import { Link } from 'react-router-dom'
import { FiArrowRight, FiDownload, FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black -mt-24 overflow-hidden">
      {/* Background "Hello" Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white tracking-tighter leading-none">
          Hello
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-medium text-red-600 tracking-wide mb-4"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6"
        >
          Kunal Verma
        </motion.h1>

        {/* Typewriter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300">
            I'm a
          </span>
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'Problem Solver',
              2000,
              'Tech Innovator',
              2000,
              'Creative Coder',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 border-b-4 border-red-600 pb-1"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl font-normal text-gray-400 max-w-3xl mx-auto mt-8 mb-12 leading-relaxed"
        >
          Crafting exceptional digital experiences through clean code and innovative design.
          Passionate about building scalable applications that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-6 mt-12 flex-wrap"
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/projects"
              className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold tracking-[0.2em] uppercase border-b-4 border-red-700 shadow-lg hover:from-red-500 hover:to-red-600 hover:shadow-red-600/50 transition-all duration-300"
            >
              View My Work
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/resume"
              className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-purple-400/50 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
            >
              Download Resume
              <FiDownload className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <a
            href="https://github.com/kunalverma2512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border-2 border-cyan-400/50 bg-white/5 backdrop-blur-sm hover:bg-red-600 hover:border-red-600 transition-all duration-300"
          >
            <FiGithub className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-verma-596a76287/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border-2 border-blue-400/50 bg-white/5 backdrop-blur-sm hover:bg-red-500 hover:border-red-500 transition-all duration-300"
          >
            <FiLinkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:kunalvermah8@gmail.com"
            className="flex items-center justify-center w-12 h-12 border-2 border-purple-400/50 bg-white/5 backdrop-blur-sm hover:bg-purple-500 hover:border-purple-500 transition-all duration-300"
          >
            <FiMail className="w-6 h-6 text-white" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FiChevronDown
          onClick={scrollToNextSection}
          className="w-8 h-8 text-white/50 hover:text-red-600 cursor-pointer transition-colors duration-300"
        />
      </div>
    </section>
  )
}

export default HeroSection
