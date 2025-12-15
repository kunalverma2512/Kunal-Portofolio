import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    jobTitle: '',
    website: '',
    subject: '',
    message: '',
    reason: 'general',
    preferredContact: 'email',
    hearAbout: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const contactReasons = [
    { value: 'project', label: 'Project Collaboration' },
    { value: 'internship', label: 'Internship Opportunity' },
    { value: 'freelance', label: 'Freelance Work' },
    { value: 'opensource', label: 'Open Source Contribution' },
    { value: 'mentorship', label: 'Mentorship/Guidance' },
    { value: 'general', label: 'General Inquiry' }
  ]

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'kunalvermah8@gmail.com',
      link: 'mailto:kunalvermah8@gmail.com',
      description: 'Best for detailed inquiries',
      gradient: 'from-red-600 to-red-500'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Dhanbad, Jharkhand',
      link: '#',
      description: 'IIT (ISM) Dhanbad',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    {
      icon: FiLinkedin,
      platform: 'LinkedIn',
      handle: '/in/KunalVerma',
      link: 'https://www.linkedin.com/in/kunal-verma-596a76287/',
      description: 'Connect professionally',
      color: 'blue'
    },
    {
      icon: FiGithub,
      platform: 'GitHub',
      handle: '@kunalverma2512',
      link: 'https://github.com/kunalverma2512',
      description: 'Check out my code',
      color: 'gray'
    }
  ]

  const faqs = [
    {
      question: 'What is the best way to reach you?',
      answer: 'Email is the best way for detailed inquiries. I typically respond within 24-48 hours. For urgent matters, you can call me during working hours (10 AM - 8 PM IST).'
    },
    {
      question: 'Are you available for freelance work?',
      answer: 'Yes! I\'m open to freelance projects, especially those involving full-stack web development, AI/ML integration, or competitive programming platforms. Feel free to reach out with your project details.'
    },
    {
      question: 'Do you offer mentorship or guidance?',
      answer: 'Absolutely! I\'m happy to help fellow students and developers with competitive programming, web development, or career guidance. Reach out and let\'s discuss how I can help.'
    },
    {
      question: 'What kind of projects interest you?',
      answer: 'I\'m particularly interested in projects involving AI/ML (especially RAG systems and AI agents), full-stack web applications, competitive programming tools, and anything that solves real-world problems using technology.'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (formData.phone && !/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrors({}) // Clear previous errors
    
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      
      console.log('API Response:', data) // Debug log
      console.log('Validation Errors:', data.errors) // Show errors array

      if (!response.ok) {
        // Handle validation errors from backend
        if (data.errors && Array.isArray(data.errors)) {
          console.log('Processing validation errors:', data.errors)
          const backendErrors = {}
          data.errors.forEach(error => {
            console.log(`Field: ${error.field}, Message: ${error.message}`)
            backendErrors[error.field] = error.message
          })
          setErrors(backendErrors)
          setSubmitStatus('error')
        } else {
          throw new Error(data.message || 'Failed to submit form')
        }
        return
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        company: '',
        jobTitle: '',
        website: '',
        subject: '',
        message: '',
        reason: 'general',
        preferredContact: 'email',
        hearAbout: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)

    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-black border-b-4 border-red-600 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4"
          >
            Get In Touch
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Let's Connect
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Have a project in mind? Looking for collaboration? Or just want to say hi? 
            I'm always excited to connect with fellow developers, students, and tech enthusiasts.
          </motion.p>
        </div>
      </section>

      {/* Response Time Banner */}
      <div className="bg-red-600 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-white">
          <FiClock className="w-5 h-5" />
          <span className="font-bold">Average Response Time: 24-48 hours</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Form (2/3 width) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 font-medium mb-8">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Reason for Contact */}
                  <div>
                    <label htmlFor="reason" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                      What brings you here? *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-300 bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900"
                    >
                      {contactReasons.map(reason => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <FiAlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <FiAlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Location Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                        Phone Number (Optional)
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900`}
                          placeholder="+91 1234567890"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <FiAlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                        Location (Optional)
                      </label>
                      <div className="relative">
                        <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 border-2 ${errors.location ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900`}
                          placeholder="City, Country"
                        />
                      </div>
                      {errors.location && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <FiAlertCircle className="w-4 h-4" />
                          {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Job Title and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Job Title */}
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                        Job Title (Optional)
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 border-2 ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900`}
                        placeholder="e.g. Senior Developer"
                      />
                      {errors.jobTitle && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <FiAlertCircle className="w-4 h-4" />
                          {errors.jobTitle}
                        </p>
                      )}
                    </div>

                    {/* Company/Organization */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                        Company/Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-300 bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  {/* Website/Portfolio */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                      Website/Portfolio (Optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-300 bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 border-2 ${errors.subject ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900`}
                      placeholder="e.g., Full-Stack Development Project"
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>


                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full pl-12 pr-4 py-4 border-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900 resize-none`}
                        placeholder="Tell me about your project, requirements, or just say hello... (minimum 20 characters)"
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      Characters: {formData.message.length} / 500 recommended
                    </p>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 focus:ring-red-600"
                        />
                        <span className="font-medium text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 focus:ring-red-600"
                        />
                        <span className="font-medium text-gray-700">Phone</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="either"
                          checked={formData.preferredContact === 'either'}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 focus:ring-red-600"
                        />
                        <span className="font-medium text-gray-700">Either</span>
                      </label>
                    </div>
                  </div>

                  {/* How did you hear about me */}
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-2">
                      How did you hear about me? (Optional)
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-300 bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900"
                    >
                      <option value="">Select an option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="GitHub">GitHub</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Referral">Referral from someone</option>
                      <option value="College/University">College/University</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-8 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold tracking-wide uppercase border-b-4 border-red-600 shadow-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border-2 border-green-500 text-green-700 font-medium flex items-center gap-3"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                      <div>
                        <p className="font-bold">Message sent successfully!</p>
                        <p className="text-sm">I'll get back to you within 24-48 hours.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border-2 border-red-500 text-red-700 font-medium flex items-center gap-3"
                    >
                      <FiAlertCircle className="w-5 h-5" />
                      <div>
                        <p className="font-bold">Failed to send message</p>
                        <p className="text-sm">Please try again or email me directly at kunalvermah8@gmail.com</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Right Column - Contact Info (1/3 width) */}
            <div className="lg:col-span-1">
              {/* Contact Information Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="block bg-gray-50 border-2 border-gray-200 hover:border-red-600 transition-all duration-300 p-4 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-bold tracking-wide uppercase text-gray-500 mb-1">
                              {info.title}
                            </div>
                            <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                              {info.value}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {info.description}
                            </div>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect On Social
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white border-2 border-gray-300 hover:border-red-600 transition-all duration-300 group"
                      >
                        <Icon className="w-8 h-8 text-gray-700 group-hover:text-red-600 transition-colors" />
                        <div>
                          <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                            {social.platform}
                          </div>
                          <div className="text-sm text-gray-600">
                            {social.handle}
                          </div>
                          <div className="text-xs text-gray-500">
                            {social.description}
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-red-600 to-red-500 text-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold tracking-wide uppercase">
                    Currently Available
                  </span>
                </div>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  Open to internships, project collaborations, freelance work, and mentorship opportunities.
                </p>
              </motion.div>
            </div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border-2 border-gray-200 p-6 hover:border-red-600 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
