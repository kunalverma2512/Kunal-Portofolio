import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin,
  FiArrowUp,
  FiCode,
  FiAward
} from 'react-icons/fi'

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

  const quickFacts = [
    { icon: FiCode, label: 'IIT (ISM) Dhanbad'},
    { icon: FiAward, label: 'SIH 2025 Winner'},
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/kunalverma2512', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kunal-verma-596a76287/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kunalvermah8@gmail.com', label: 'Email' }
  ]

  return (
    <footer>
      {/* Section 1: Call-to-Action / Contact Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-black border-t-4 border-red-600 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-gray-400 leading-relaxed font-medium text-lg">
                Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, creative ideas, or partnerships. Let's turn your vision into reality.
              </p>
            </div>

            {/* Right Side - Contact Buttons */}
            <div className="space-y-4">
              <a
                href="mailto:kunalvermah8@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-red-600/50 text-white font-bold tracking-wide uppercase hover:bg-red-600 hover:border-red-600 transition-all duration-300 w-full"
              >
                <FiMail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/kunal-verma-596a76287/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-red-500/50 text-white font-bold tracking-wide uppercase hover:bg-red-500 hover:border-red-500 transition-all duration-300 w-full"
              >
                <FiLinkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/kunalverma2512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-purple-400/50 text-white font-bold tracking-wide uppercase hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 w-full"
              >
                <FiGithub className="w-5 h-5" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Quick Facts */}
      <section className="bg-gray-50 border-b-4 border-red-600 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-red-600" />
                  <div className="text-sm tracking-wide font-bold text-gray-700">
                    {fact.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Main Footer Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Column 1: Brand + Contact Info */}
            <div className="lg:col-span-1">
              {/* Brand */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Kunal Verma
                </h3>
                <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-red-500 my-2"></div>
                <p className="text-[10px] font-bold text-red-600 tracking-[0.3em] uppercase mb-4">
                  I BUILD TO LEARN, AND LEARN TO BUILD BETTER.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Mathematics & Computing student at IIT (ISM) Dhanbad, passionate about creating exceptional digital experiences with React, Node.js, AI/ML, and modern web technologies.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                    <a 
                      href="mailto:kunalvermah8@gmail.com" 
                      className="text-gray-900 hover:text-red-600 font-medium transition-colors"
                    >
                      kunalvermah8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 border-2 border-purple-600 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                    <p className="text-gray-900 font-medium">Dhanbad, Jharkhand</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-700 mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 border-2 border-red-600 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-6 pb-2 border-b-2 border-red-600 text-red-600">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {exploreSections.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-red-600 transition-all duration-300 hover:translate-x-1 font-medium text-sm inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Achievements */}
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-6 pb-2 border-b-2 border-purple-500 text-purple-500">
                Achievements
              </h4>
              <ul className="space-y-4 text-sm text-gray-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Smart India Hackathon 2025 Winner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>HackerFest'25 - 4th Position</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>IIT (ISM) Dhanbad Student</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Full-Stack Developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>AI/ML Enthusiast</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom Bar / Copyright */}
      <section className="bg-white border-t-4 border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 font-medium mb-1">
                © {currentYear} Kunal Verma. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Built with React & Tailwind CSS
              </p>
            </div>

            {/* Right Side - Version & Scroll to Top */}
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <span className="px-3 py-1 bg-gray-200 text-xs font-bold border-2 border-gray-300 text-gray-700">
                v1.0.0
              </span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 border-2 border-red-600 flex items-center justify-center text-white hover:from-red-600 hover:to-red-600 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
