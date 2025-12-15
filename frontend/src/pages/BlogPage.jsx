import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiBookOpen, FiZap } from 'react-icons/fi'
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

  /* const stats = [
    { icon: FiBookOpen, label: 'Articles Published', value: '12+' },
    { icon: FiTrendingUp, label: 'Total Reads', value: '15k+' },
    { icon: FiZap, label: 'Topics Covered', value: '6' }
  ] */

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-black border-b-4 border-red-600 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4"
          >
            Tech Blog
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Code, Learn, Share
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium mb-8"
          >
            Exploring web development, AI/ML, competitive programming, and everything in between.
            Sharing my journey, tutorials, and insights from building real-world projects.
          </motion.p>

          {/* Stats replaced with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-3xl md:text-5xl lg:text-6xl font-black h-32 md:h-40 ${textColor} transition-colors duration-300`}
          >
            <TypeAnimation
              sequence={[
                () => setTextColor('text-sky-500'),
                'I write about Web Development.',
                1000,
                () => setTextColor('text-emerald-500'),
                'I share my learning journey.',
                1000,
                () => setTextColor('text-purple-500'),
                'I explore AI and Machine Learning.',
                1000,
                () => setTextColor('text-amber-500'),
                'competitive programming.',
                1000,
                () => setTextColor('text-rose-500'),
                'I build open source projects.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
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
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Info */}
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              {searchQuery ? (
                <>
                  Found <span className="font-bold text-gray-900">{filteredPosts.length}</span> results for "
                  <span className="font-bold text-red-600">{searchQuery}</span>"
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
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-red-600 to-red-500"></span>
                Featured Article
              </h2>
              <BlogCard post={featuredPost} featured={true} />
            </div>
          )}

          {/* Recent Posts Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500"></span>
              {searchQuery ? 'Search Results' : selectedCategory === 'All Posts' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>

            {filteredPosts.filter(post => !post.featured || searchQuery || selectedCategory !== 'All Posts').length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts
                  .filter(post => !post.featured || searchQuery || selectedCategory !== 'All Posts')
                  .map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 font-medium">
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
            className="bg-gradient-to-r from-red-600 to-red-500 p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, AI/ML, and competitive programming.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white focus:outline-none font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-white text-red-600 font-bold hover:bg-gray-100 transition-colors border-b-4 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {/* Success/Error Message */}
              {submitMessage.text && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-sm font-semibold ${submitMessage.type === 'success'
                      ? 'text-green-100'
                      : 'text-yellow-200'
                    }`}
                >
                  {submitMessage.text}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
