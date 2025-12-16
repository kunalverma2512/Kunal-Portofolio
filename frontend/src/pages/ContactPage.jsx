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
  FiAlertCircle,
  FiGlobe,
  FiBriefcase
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
      color: 'bg-[#0077b5]'
    },
    {
      icon: FiGithub,
      platform: 'GitHub',
      handle: '@kunalverma2512',
      link: 'https://github.com/kunalverma2512',
      description: 'Check out my code',
      color: 'bg-[#333]'
    }
  ]

  const faqs = [
    {
      question: 'What is the best way to reach you?',
      answer: 'Email is the best way for detailed inquiries. I typically respond within 24-48 hours.'
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
      // Filter out empty fields to avoid backend validation errors (regex matching empty strings)
      const payload = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== '' && value !== null)
      )

      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-32 pb-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] md:bg-[size:24px_24px]"></div>

        {/* Abstract Shapes */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold tracking-widest uppercase mb-6 border border-red-500/20"
          >
            <FiMessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Let's Build Something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Amazing Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind, looking for collaboration, or just want to chat?
            I'm always excited to connect with fellow developers and creators.
          </motion.p>
        </div>
      </section>

      {/* Main Content Card (Floating overlap) */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 pb-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 overflow-hidden border border-gray-100 flex flex-col lg:flex-row">

          {/* Left Column - Contact Form */}
          <div className="lg:w-2/3 p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Message</h2>
              <p className="text-gray-500 mb-10">I usually respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Reason Selection */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {contactReasons.slice(0, 3).map((r) => (
                    <label
                      key={r.value}
                      className={`cursor-pointer border rounded-xl px-4 py-3 text-sm font-bold text-center transition-all ${formData.reason === r.value
                        ? 'border-red-500 bg-red-50 text-red-700 ring-1 ring-red-500'
                        : 'border-gray-200 text-gray-600 hover:border-red-200 hover:bg-gray-50'
                        }`}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={r.value}
                        checked={formData.reason === r.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {r.label}
                    </label>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> {errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Email <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> {errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                    <div className="relative group">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-300' : 'border-gray-200'} rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> {errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</label>
                    <div className="relative group">
                      <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company</label>
                    <div className="relative group">
                      <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Job Title</label>
                    <div className="relative group">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                        placeholder="Product Manager"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Website</label>
                    <div className="relative group">
                      <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border ${errors.website ? 'border-red-300' : 'border-gray-200'} rounded-xl py-4 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all`}
                        placeholder="https://example.com"
                      />
                    </div>
                    {errors.website && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> {errors.website}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">How did you hear about me?</label>
                    <div className="relative group">
                      <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="GitHub">GitHub</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Referral">Referral</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.subject ? 'border-red-300' : 'border-gray-200'} rounded-xl py-4 px-6 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all`}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> {errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full bg-gray-50 border ${errors.message ? 'border-red-300' : 'border-gray-200'} rounded-xl py-4 px-6 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> {errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : <><FiSend /> Send Message</>}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                    <FiCheckCircle className="flex-shrink-0" />
                    <div>
                      <p className="font-bold">Message sent successfully!</p>
                      <p className="text-xs">I'll get back to you shortly.</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
                    <FiAlertCircle className="flex-shrink-0" />
                    <div>
                      <p className="font-bold">Failed to send message</p>
                      <p className="text-xs">Please try again later.</p>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:w-1/3 bg-gray-50 p-8 md:p-12 lg:p-16 border-l border-gray-100 flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiUser className="text-red-600" /> Contact Info
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-lg`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{info.title}</p>
                      <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiGlobe className="text-red-600" /> Social Profiles
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
                    title={social.platform}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}


              </div>
            </div>

            <div className="mt-auto bg-[#0a0a0a] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Availability</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  I am currently open to new opportunities. Let's discuss your project!
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for work
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Section (Below) */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-red-600 text-xl font-black">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
