import { Link } from 'react-router-dom'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUp,
  FiAward
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import { SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const exploreSections = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/kunalverma2512', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kunal-verma-596a76287/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kunalvermah8@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#ffffff03_1px,transparent_1px),linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* CTA Section */}
      <div className="relative z-10 border-b border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Amazing</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </div>
            <a
              href="mailto:kunalvermah8@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-wider uppercase hover:bg-gray-200 transition-all duration-300 rounded-sm whitespace-nowrap"
            >
              Start a Conversation
              <FiMail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                Kunal Verma
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-amber-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              Integrated M.Tech student at IIT (ISM) Dhanbad. Building scalable web architectures and next-gen AI integrations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600/20 hover:border-red-600/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Explore</h4>
            <ul className="space-y-4">
              {exploreSections.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-red-500 transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Highlights</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FiAward className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Winner, SIH 2025</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FiAward className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Rank 4, HackerFest'25</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-5 h-5 flex items-center justify-center text-blue-500 font-bold">IIT</span>
                <span>(ISM) Dhanbad</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FiMail className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:kunalvermah8@gmail.com" className="hover:text-white transition-colors">
                  kunalvermah8@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span>Dhanbad, Jharkhand, India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} Kunal Verma. Built with React & Tailwind.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Tech Badges */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                <SiReact className="w-4 h-4 text-blue-400" />
                <SiTailwindcss className="w-4 h-4 text-cyan-400" />
                <SiNodedotjs className="w-4 h-4 text-green-500" />
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
