import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiDownload, FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiPython, SiTailwindcss, SiMongodb } from 'react-icons/si'
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  // Mouse move effect for spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-start bg-[#0a0a0a] overflow-x-hidden -mt-24 pt-28 pb-12 md:pt-36 md:pb-20"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] md:bg-[size:24px_24px]"></div>

      {/* Moving Spotlight - visible mostly on desktop */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(220, 38, 38, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[10%] -left-[10%] md:left-[5%] text-slate-800/30 text-6xl md:text-9xl transform -rotate-12"
        >
          <SiReact />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[20%] -right-[10%] md:right-[5%] text-slate-800/30 text-6xl md:text-9xl transform rotate-12"
        >
          <SiNodedotjs />
        </motion.div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-red-600/20 rounded-full blur-[80px] md:blur-[128px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[80px] md:blur-[128px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center">

        {/* Name Typography - Responsive Sizes */}
        <div className="relative mb-2 md:mb-4 text-center w-full">

          {/* Waving Hand & Particles */}
          <div className="relative flex justify-center items-end h-16 md:h-24 mb-0">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: [0, 15, -10, 15, 0] }}
              transition={{
                scale: { duration: 0.8, ease: "backOut" },
                rotate: { duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }
              }}
              className="text-5xl md:text-7xl cursor-default origin-bottom-right z-20"
            >
              👋
            </motion.div>

            {/* Dust/Particles */}
            <motion.div
              animate={{ y: [-10, -30], opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute top-4 left-[45%] w-1.5 h-1.5 bg-yellow-300 rounded-full blur-[1px]"
            />
            <motion.div
              animate={{ y: [-5, -25], x: [0, 10], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
              className="absolute top-6 right-[45%] w-1 h-1 bg-red-400 rounded-full blur-[1px]"
            />
            <motion.div
              animate={{ y: [0, -20], x: [0, -10], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
              className="absolute top-2 left-[48%] w-1 h-1 bg-blue-300 rounded-full"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[2.5rem] xs:text-[3.5rem] leading-[0.9] font-black text-white tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] break-keep px-4"
          >
            KUNAL <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-500 pr-2">
              VERMA
            </span>
          </motion.h1>

          {/* Outline Text Layer for Depth */}
          <h1 className="absolute inset-0 text-[2.5rem] xs:text-[3.5rem] leading-[0.9] font-black text-transparent stroke-text tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] opacity-20 pointer-events-none select-none blur-sm break-keep px-4" style={{ WebkitTextStroke: '2px white' }}>
            KUNAL <br className="md:hidden" />
            <span className="pr-2">VERMA</span>
          </h1>
        </div>

        {/* Typewriter & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-center"
        >
          <div className="h-16 sm:h-auto flex items-center justify-center min-h-[3rem] md:min-h-[4rem]">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'AI Engineer',
                2000,
                'Problem Solver',
                2000,
                'Open Source Contributor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-gray-200"
            />
          </div>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light px-4">
            Transforming complex problems into <span className="text-white font-medium">elegant solutions</span>.
            Specializing in scalable web architectures and next-gen AI integrations.
          </p>
        </motion.div>

        {/* Tech Stack Icons (Mini) - Responsive Grid/Flex */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mt-6 md:mt-10 mb-8 md:mb-12"
        >
          {[SiReact, SiNodedotjs, SiPython, SiTailwindcss, SiMongodb].map((Icon, index) => (
            <div key={index} className="p-2 md:p-3 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-colors duration-300 group">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-6"
        >
          <Link
            to="/projects"
            className="group relative w-full sm:w-auto px-8 py-3 md:py-4 bg-red-600 text-white font-bold text-sm tracking-widest uppercase overflow-hidden text-center rounded-sm"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
            <span className="relative flex items-center justify-center gap-3">
              View My Work <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/resume"
            className="group w-full sm:w-auto px-8 py-3 md:py-4 bg-transparent border border-gray-700 text-white font-bold text-sm tracking-widest uppercase hover:border-red-500 hover:text-red-500 transition-colors text-center rounded-sm"
          >
            <span className="flex items-center justify-center gap-3">
              Resume / CV <FiDownload className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>

        {/* Social Links Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 md:mt-20 flex items-center gap-4 md:gap-8 text-gray-500"
        >
          <div className="h-px w-8 md:w-12 bg-gray-800"></div>
          <div className="flex gap-4 md:gap-6">
            <a href="https://github.com/kunalverma2512" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><FiGithub className="w-5 h-5 md:w-6 md:h-6" /></a>
            <a href="https://www.linkedin.com/in/kunal-verma-596a76287/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><FiLinkedin className="w-5 h-5 md:w-6 md:h-6" /></a>
            <a href="mailto:kunalvermah8@gmail.com" className="hover:text-white transition-colors p-2"><FiMail className="w-5 h-5 md:w-6 md:h-6" /></a>
          </div>
          <div className="h-px w-8 md:w-12 bg-gray-800"></div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator - Now positioned relative to container or bottom of view */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer pb-safe"
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center gap-2 p-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
          <FiChevronDown className="w-5 h-5 text-red-500" />
        </div>
      </motion.div>

    </section>
  )
}

export default HeroSection
