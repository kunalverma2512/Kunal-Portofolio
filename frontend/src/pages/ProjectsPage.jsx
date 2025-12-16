import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiExternalLink,
  FiAward,
  FiCode,
  FiZap,
  FiLayers,
  FiDatabase,
  FiCpu,
  FiTool,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi'

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Animal Type Classifier',
      subtitle: 'Smart India Hackathon 2025 - Winner',
      category: 'AI/ML',
      featured: true,
      winner: true,
      description: 'An AI-powered cattle classification system built for Smart India Hackathon 2025. This comprehensive system classifies animals, analyzes physical traits, and generates detailed reports for government livestock management.',
      problem: 'The Indian government needed an automated solution to classify and analyze cattle for the National Dairy Development Board (NDDB). Manual classification was time-consuming, inconsistent, and required expert knowledge.',
      solution: 'Developed a full-stack web application with AI-powered image classification capable of identifying cattle breeds, analyzing 20+ physical traits, and generating PDF reports. The system uses computer vision for pose detection and view classification.',
      techStack: [
        { name: 'React + Vite', icon: FiCode, color: 'blue' },
        { name: 'Tailwind CSS', icon: FiLayers, color: 'cyan' },
        { name: 'Python FastAPI', icon: FiCpu, color: 'yellow' },
        { name: 'YOLO11m-pose', icon: FiZap, color: 'red' },
        { name: 'PyTorch', icon: FiDatabase, color: 'orange' }
      ],
      features: [
        '5-image upload system for comprehensive cattle analysis',
        'Real-time pose detection using YOLO11m for keypoint extraction',
        'Classification of 4 distinct cattle views (back, side, top, udder)',
        'Analysis of 20+ physical traits with detailed measurements',
        'PDF report generation with NDDB compliance',
        'Multi-language support across 22 Indian languages'
      ],
      challenges: [
        'Processing 5 images simultaneously with consistent results',
        'Integrating keypoint detection with view classification',
        'Handling varying image qualities from rural areas',
        'Ensuring accuracy across different cattle breeds'
      ],
      learnings: [
        'Advanced computer vision with YOLO pose estimation',
        'Full-stack integration of Python AI backend with React frontend',
        'Working with real-world government requirements',
        'Building accessible interfaces for non-technical users'
      ],
      metrics: {
        team: '6 members',
        duration: '36 hours',
        languages: '22',
        traits: '20+',
        achievement: 'Winner'
      },
      github: 'https://github.com/kunalverma2512/animal-type-classifier',
      liveLink: null,
      tags: ['React', 'Python', 'YOLO', 'FastAPI', 'Computer Vision', 'Hackathon']
    },
    {
      id: 2,
      title: 'Face Liveness Detection System',
      subtitle: 'Smart India Hackathon 2024 - 4th Rank',
      category: 'AI/ML',
      featured: true,
      description: 'A browser-based face authentication system with real-time liveness detection to prevent spoofing attacks. Built for secure facial recognition applications.',
      problem: 'Traditional face authentication systems are vulnerable to spoofing attacks using photos or videos. The challenge was to build a system that can verify a real, live person is present.',
      solution: 'Created a React-based frontend using MediaPipe for real-time facial landmark detection (478 landmarks). Implemented multiple liveness checks including blink detection, head movement tracking, and mouth opening verification.',
      techStack: [
        { name: 'React', icon: FiCode, color: 'blue' },
        { name: 'MediaPipe', icon: FiZap, color: 'teal' },
        { name: 'Python Backend', icon: FiCpu, color: 'yellow' },
        { name: 'Computer Vision', icon: FiDatabase, color: 'indigo' }
      ],
      features: [
        'Real-time tracking of 478 facial landmarks using MediaPipe',
        'Multiple liveness checks: blink detection, head turns, mouth movements',
        'Browser-based implementation - no app installation required',
        'Sub-2 second response time for face verification',
        'Spoofing detection against photos and videos'
      ],
      challenges: [
        'Achieving sub-2 second response time with complex processing',
        'Handling varying lighting conditions and camera qualities',
        'Detecting subtle movements while avoiding false positives',
        'Optimizing data transmission between frontend and backend'
      ],
      learnings: [
        'Deep understanding of MediaPipe facial landmark detection',
        'Real-time computer vision in web browsers',
        'Performance optimization for millisecond-level responses',
        'Team collaboration with 6 members under deadline pressure'
      ],
      metrics: {
        team: '6 members',
        landmarks: '478',
        responseTime: '<2 seconds',
        rank: '4th',
        checks: '3 liveness tests'
      },
      github: 'https://github.com/kunalverma2512/smart-india-hackathon-livenessCheck',
      liveLink: 'https://smart-india-hackathon-liveness-chec.vercel.app/',
      tags: ['React', 'MediaPipe', 'Computer Vision', 'Facial Recognition', 'Hackathon']
    },
    {
      id: 3,
      title: 'CodeClash',
      subtitle: 'Competitive Programming Platform with AI',
      category: 'Web Development',
      description: 'A full-stack platform designed for competitive programmers to track their progress, practice problems, and receive AI-powered insights.',
      problem: 'Competitive programmers needed a centralized platform to track progress across multiple platforms, receive personalized feedback, and practice efficiently.',
      solution: 'Built a comprehensive platform using React and Node.js with Codeforces API integration for real-time statistics and Gemini API for AI-powered feedback and recommendations.',
      techStack: [
        { name: 'React', icon: FiCode, color: 'blue' },
        { name: 'Tailwind CSS', icon: FiLayers, color: 'cyan' },
        { name: 'Node.js', icon: FiCpu, color: 'green' },
        { name: 'Express.js', icon: FiDatabase, color: 'gray' },
        { name: 'Gemini API', icon: FiZap, color: 'purple' }
      ],
      features: [
        'Integration with Codeforces API for fetching user statistics',
        'Display of 10+ key metrics: rating, problems solved, contest performance',
        'AI-powered feedback using Gemini API for personalized insights',
        'Smart recommendations based on solving patterns',
        'Contest module with practice problems'
      ],
      challenges: [
        'Handling API rate limits from Codeforces',
        'Processing and presenting large amounts of user data',
        'Integrating AI feedback in meaningful ways',
        'Achieving 90%+ accessibility standards'
      ],
      learnings: [
        'Advanced API integration and data handling',
        'Implementing AI features in web applications',
        'Creating accessible, user-friendly interfaces',
        'Full-stack development with modern JavaScript'
      ],
      metrics: {
        stats: '10+',
        accessibility: '90%+',
        apis: '2',
        features: '6 major'
      },
      github: 'https://github.com/kunalverma2512/CodeClash',
      liveLink: 'https://code-clash-nine.vercel.app/',
      tags: ['React', 'Node.js', 'Gemini API', 'Codeforces', 'Full-Stack', 'AI']
    },
    {
      id: 4,
      title: 'Intelexa',
      subtitle: 'RAG-Powered Legal Intelligence System',
      category: 'AI/ML',
      description: 'A Retrieval-Augmented Generation (RAG) system for intelligent legal query answering using LangChain, vector databases, and graph databases.',
      problem: 'Legal professionals need quick access to relevant legal information from vast databases. Traditional keyword search is inefficient and often misses contextual connections.',
      solution: 'Built a multi-service RAG system with semantic search capabilities. Uses LangChain for the RAG pipeline, Qdrant for vector similarity search, and Neo4j for relationship mapping.',
      techStack: [
        { name: 'Vite + React', icon: FiCode, color: 'blue' },
        { name: 'Node.js Crawler', icon: FiTool, color: 'green' },
        { name: 'Python FastAPI', icon: FiCpu, color: 'yellow' },
        { name: 'LangChain', icon: FiZap, color: 'teal' },
        { name: 'Qdrant', icon: FiDatabase, color: 'red' },
        { name: 'Neo4j', icon: FiLayers, color: 'indigo' },
        { name: 'Docker', icon: FiTool, color: 'cyan' }
      ],
      features: [
        'Multi-service architecture: Frontend, Crawler, Backend',
        'RAG pipeline using LangChain for context-aware responses',
        'Semantic embeddings using sentence-transformers',
        'Vector similarity search with Qdrant',
        'Graph database (Neo4j) for relationship mapping'
      ],
      challenges: [
        'Orchestrating multiple services (Python, Node.js, databases)',
        'Optimizing RAG pipeline for fast responses',
        'Generating high-quality semantic embeddings',
        'Managing Docker Compose with 3+ services'
      ],
      learnings: [
        'Deep understanding of RAG (Retrieval-Augmented Generation)',
        'Working with vector databases and semantic search',
        'LangChain framework for LLM applications',
        'Graph databases for complex relationship queries'
      ],
      metrics: {
        services: '3',
        responseTime: '4-5s',
        databases: '2',
        containerized: 'Yes'
      },
      github: 'https://github.com/kunalverma2512/Intellexa',
      liveLink: null,
      tags: ['RAG', 'LangChain', 'Qdrant', 'Neo4j', 'Docker', 'Python', 'AI']
    }
  ]

  const categories = ['All', 'AI/ML', 'Web Development']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const getTechBadgeStyles = (color) => {
    const styles = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-300',
      cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-300',
      green: 'bg-green-50 text-green-700 border-green-200 hover:border-green-300',
      purple: 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-300',
      pink: 'bg-pink-50 text-pink-700 border-pink-200 hover:border-pink-300',
      red: 'bg-red-50 text-red-700 border-red-200 hover:border-red-300',
      orange: 'bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-300',
      yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:border-yellow-300',
      indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-300',
      teal: 'bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-300',
      gray: 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
    }
    return styles[color] || styles.gray
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] md:bg-[size:24px_24px]"></div>

        {/* Abstract Shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold tracking-widest uppercase mb-6 border border-red-500/20"
          >
            <FiZap className="w-4 h-4" />
            Engineering Excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Case studies of complex systems, AI models, and full-stack applications solving real-world problems.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {filteredProjects.map((project, index) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-100 border border-gray-100 group"
              >
                {/* Decoration Header */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.category === 'AI/ML' ? 'from-purple-500 to-red-500' : 'from-blue-500 to-cyan-500'
                  }`}></div>

                <div className="p-8 md:p-12">
                  {/* Header Content */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {project.winner && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 border border-amber-200 rounded-full text-[10px] font-bold tracking-wider uppercase">
                            <FiAward className="w-3 h-3" />
                            Winner
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-full text-[10px] font-bold tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
                          {project.title}
                        </h2>
                        <p className="text-xl text-gray-500 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
                        title="View Source"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300"
                          title="Live Demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed font-medium mb-12 max-w-3xl">
                    {project.description}
                  </p>

                  {/* Problem & Solution Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                      <h3 className="text-sm font-bold text-red-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FiAlertCircle className="w-4 h-4" />
                        The Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100">
                      <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FiCheck className="w-4 h-4" />
                        The Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-12">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, idx) => {
                        const Icon = tech.icon
                        return (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold transition-colors ${getTechBadgeStyles(tech.color)}`}
                          >
                            <Icon className="w-4 h-4" />
                            {tech.name}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Metrics Dashboard */}
                  <div className="bg-gray-900 rounded-2xl p-8 mb-12 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center md:text-left">
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-2xl md:text-3xl font-black text-white">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabbed Info (Features/Challenges/Learnings) */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FiZap className="text-amber-500" /> Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.slice(0, 4).map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FiTool className="text-red-500" /> Challenges
                      </h4>
                      <ul className="space-y-3">
                        {project.challenges.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learnings */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FiCode className="text-blue-500" /> Learnings
                      </h4>
                      <ul className="space-y-3">
                        {project.learnings.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
