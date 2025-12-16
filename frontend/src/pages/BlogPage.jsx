import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiBookOpen, FiZap, FiEdit3, FiLoader } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import BlogCard from '../components/blog/BlogCard'
import BlogFilters from '../components/blog/BlogFilters'
import { blogPosts } from '../data/blogPosts'
import { subscribeToNewsletter } from '../utils/newsletter'

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [selectedSort, setSelectedSort] = useState('latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [textColor, setTextColor] = useState('text-sky-500')

  // Newsletter subscription state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })

  // Blog posts data
  const allPosts = blogPosts

  // Filter posts
  const getFilteredPosts = () => {
    let filtered = allPosts

    //Category filter
    if (selectedCategory !== 'All Posts') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Sort
    switch (selectedSort) {
      case 'latest':
        // Already in latest order
        break
      case 'oldest':
        filtered = [...filtered].reverse()
        break
      case 'popular':
        filtered = [...filtered].sort((a, b) => {
          const aViews = parseFloat(a.views.replace('k', '')) * 1000
          const bViews = parseFloat(b.views.replace('k', '')) * 1000
          return bViews - aViews
        })
        break
      case 'trending':
        // Mock trending logic
        filtered = [...filtered].sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return filtered
  }

  const filteredPosts = getFilteredPosts()
  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0]
  const recentPosts = filteredPosts.filter(post => !post.featured).slice(0, 9)

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (!email || !email.trim()) {
      setSubmitMessage({ type: 'error', text: 'Please enter your email address' })
      return
    }

    setIsSubmitting(true)
    setSubmitMessage({ type: '', text: '' })

    const result = await subscribeToNewsletter(email, 'blog')

    setIsSubmitting(false)

    if (result.success) {
      setSubmitMessage({ type: 'success', text: result.message })
      setEmail('')
    } else {
      setSubmitMessage({ type: 'error', text: result.message })
    }

    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage({ type: '', text: '' }), 5000)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-red-600 overflow-hidden pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:14px_24px] md:bg-[size:24px_24px]"></div>

        {/* Abstract Shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8 border border-white/20 backdrop-blur-sm"
          >
            <FiEdit3 className="w-4 h-4" />
            Engineering Blog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Code, Learn, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-100">Share</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-5xl font-bold text-white/90 h-32 leading-tight"
          >
            <TypeAnimation
              sequence={[
                'I write about Web Development.',
                1000,
                'I share my learning journey.',
                1000,
                'I explore AI and Machine Learning.',
                1000,
                'I solve competitive programming.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white drop-shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <BlogFilters
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSelectedSort}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
      />

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Info */}
          <div className="mb-12 flex items-center justify-between border-b border-gray-200 pb-4">
            <p className="text-gray-500 font-medium">
              {searchQuery ? (
                <>
                  Found <span className="font-bold text-gray-900">{filteredPosts.length}</span> results
                </>
              ) : (
                <>
                  Showing <span className="font-bold text-gray-900">{filteredPosts.length}</span> articles
                  {selectedCategory !== 'All Posts' && (
                    <> in <span className="font-bold text-red-600">{selectedCategory}</span></>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && !searchQuery && selectedCategory === 'All Posts' && (
            <div className="mb-24">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-red-500"></span>
                Featured Story
              </h2>
              <BlogCard post={featuredPost} featured={true} />
            </div>
          )}

          {/* Recent Posts Grid */}
          <div className="mb-24">
            <h2 className="text-3xl font-black text-gray-900 mb-12 flex items-center gap-3">
              {searchQuery ? 'Search Results' : selectedCategory === 'All Posts' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>

            {filteredPosts.filter(post => !post.featured || searchQuery || selectedCategory !== 'All Posts').length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredPosts
                  .filter(post => !post.featured || searchQuery || selectedCategory !== 'All Posts')
                  .map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-red-600 rounded-3xl p-12 md:p-20 text-center shadow-2xl shadow-red-600/20"
          >
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-8 text-white backdrop-blur-sm shadow-inner">
                <FiZap className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-100">Newsletter</span>
              </h2>

              <p className="text-lg text-white/90 mb-10 leading-relaxed font-medium">
                Get notified when I publish new articles about web development, AI/ML, and competitive programming. No spam, ever.
              </p>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 rounded-xl border border-transparent bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/25 transition-all font-medium shadow-lg"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors shadow-lg disabled:opacity-50 flex items-center justify-center min-w-[140px]"
                  >
                    {isSubmitting ? <FiLoader className="w-5 h-5 animate-spin" /> : 'Subscribe'}
                  </button>
                </div>

                {/* Success/Error Message */}
                {submitMessage.text && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 text-sm font-bold ${submitMessage.type === 'success'
                      ? 'text-white'
                      : 'text-white'
                      } bg-black/20 inline-block px-4 py-2 rounded-lg backdrop-blur-sm`}
                  >
                    {submitMessage.text}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
