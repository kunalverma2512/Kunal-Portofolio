import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiUser, FiFileText, FiTool, FiClock, FiGrid, FiStar, FiBriefcase, FiAward, FiMessageSquare } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const menuItems = [
    {
      label: 'Home',
      path: '/',
      dropdown: null
    },
    {
      label: 'About',
      path: '/about',
      dropdown: [
        { label: 'About Me', path: '/about', icon: FiUser },
        { label: 'My Resume', path: '/resume', icon: FiFileText }
      ]
    },
    {
      label: 'Projects',
      path: '/projects',
      dropdown: null
    },
    {
      label: 'Blog',
      path: '/blog',
      dropdown: null
    },
    {
      label: 'Contact',
      path: '/contact',
      dropdown: null
    }
  ]

  const toggleMobileDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md py-2 border-b border-gray-200/50 shadow-md'
          : 'bg-white py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col space-y-1 group">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-light tracking-tight text-slate-900">
                Kunal Verma
              </span>
              <motion.div
                className="w-6 h-px bg-red-600"
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
            <motion.span
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              I build to learn, and learn to build better.
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActiveRoute(item.path)
                        ? 'text-red-600'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <span>{item.label}</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-medium transition-all duration-300 block ${
                        isActive ? 'text-red-600' : 'text-gray-600 hover:text-black'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-underline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-56 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl"
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => {
                          const Icon = dropdownItem.icon
                          return (
                            <NavLink
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={({ isActive }) =>
                                `flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                  isActive
                                    ? 'bg-orange-50 text-red-500'
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-red-500'
                                }`
                              }
                            >
                              <Icon className="w-4 h-4" />
                              <span>{dropdownItem.label}</span>
                            </NavLink>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                to="/resume"
                className="block px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold tracking-[0.2em] uppercase shadow-lg hover:from-red-500 hover:to-red-600 hover:shadow-red-600/30 border-b-4 border-red-700 transition-all duration-300"
              >
                Download Resume
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600 focus:outline-none transition-colors duration-200"
          >
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActiveRoute(item.path)
                            ? 'text-red-500 bg-orange-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 pl-4 border-l-2 border-red-100 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => {
                              const Icon = dropdownItem.icon
                              return (
                                <NavLink
                                  key={dropdownItem.path}
                                  to={dropdownItem.path}
                                  className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                      isActive
                                        ? 'text-red-500'
                                        : 'text-gray-600 hover:text-red-500'
                                    }`
                                  }
                                >
                                  <Icon className="w-4 h-4" />
                                  <span>{dropdownItem.label}</span>
                                </NavLink>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-red-500 bg-orange-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <Link
                to="/resume"
                className="block w-full px-8 py-3 mt-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold tracking-[0.2em] uppercase text-center shadow-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
