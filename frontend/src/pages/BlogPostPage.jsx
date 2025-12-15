import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  FiArrowLeft, FiClock, FiCalendar, FiEye, FiShare2,
  FiTwitter, FiLinkedin, FiFacebook, FiLink, FiUser
} from 'react-icons/fi'
import { blogPosts } from '../data/blogPosts'
import { useEffect, useState } from 'react'
import { subscribeToNewsletter } from '../utils/newsletter'

function BlogPostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [isCopied, setIsCopied] = useState(false)

  // 1. Scroll Progress Logic
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const post = blogPosts.find(p => p.slug === slug)

  // 2. Error Handling & Redirection
  useEffect(() => {
    if (!post) {
      navigate('/blog') // Redirect if not found
    } else {
      window.scrollTo(0, 0)
    }
  }, [post, navigate, slug])

  // Prevent rendering if post is undefined to avoid crashes before redirect
  if (!post) return null

  // 3. Find related posts safely
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  // Newsletter subscription state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (!email || !email.trim()) {
      setSubmitMessage({ type: 'error', text: 'Please enter your email address' })
      return
    }

    setIsSubmitting(true)
    setSubmitMessage({ type: '', text: '' })

    const result = await subscribeToNewsletter(email, 'blogpost')

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
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-red-100 selection:text-red-900">

      {/* Reading Progress Bar (Fixed to top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                &bull; {post.readTime} read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author & Meta Data */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 border-t border-gray-100 pt-8 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for Author Image, fallback to Icon */}
                  {post.authorImage ? (
                    <img src={post.authorImage} alt="Author" className="w-full h-full object-cover" />
                  ) : (
                    <FiUser className="text-gray-400" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">{post.author || 'Kunal Verma'}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <FiEye className="text-gray-400" />
                  {post.views?.toLocaleString()} views
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-gray-400" />
                  Last updated: Today
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Sidebar (Share Buttons - Sticky) */}
          <aside className="hidden lg:block w-16 pt-2">
            <div className="sticky top-32 flex flex-col gap-4">
              <p className="text-xs font-bold text-gray-400 text-center uppercase mb-2">Share</p>

              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-600 transition-all shadow-sm group relative"
              >
                <FiLink />
                {isCopied && (
                  <span className="absolute left-12 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>

              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-all shadow-sm">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-sm">
                <FiLinkedin />
              </a>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 max-w-3xl min-w-0">
            {/* Featured Image (Optional) */}
            {post.image && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-lg aspect-video relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div
              className="prose prose-lg prose-slate max-w-none
              
              /* Headings - Bold hierarchy with proper spacing */
              prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight
              prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-16 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-4
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-gray-800
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-8 prose-h4:text-gray-700
              
              /* Paragraphs - Comfortable reading experience */
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              
              /* Links - Vibrant and interactive */
              prose-a:text-red-600 prose-a:font-semibold prose-a:no-underline prose-a:transition-all
              hover:prose-a:text-red-700 hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-4
              
              /* Strong & Em - Proper emphasis */
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-em:text-gray-700 prose-em:italic
              
              /* Lists - Clean and readable */
              prose-ul:my-6 prose-ul:space-y-3
              prose-ol:my-6 prose-ol:space-y-3
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
              prose-li:marker:text-red-600 prose-li:marker:font-bold
              
              /* Code - Premium developer aesthetic */
              prose-code:bg-gray-100 prose-code:text-red-600 prose-code:px-2 prose-code:py-1 
              prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-semibold
              prose-code:before:content-[''] prose-code:after:content-['']
              
              prose-pre:bg-slate-900 prose-pre:text-gray-100 prose-pre:rounded-xl 
              prose-pre:shadow-lg prose-pre:border prose-pre:border-gray-700
              prose-pre:my-8 prose-pre:p-6
              
              /* Blockquotes - Elegant and noticeable */
              prose-blockquote:border-l-4 prose-blockquote:border-red-600 
              prose-blockquote:bg-red-50 prose-blockquote:py-4 prose-blockquote:px-6 
              prose-blockquote:my-8 prose-blockquote:rounded-r-lg
              prose-blockquote:not-italic prose-blockquote:text-gray-800 prose-blockquote:font-medium
              prose-blockquote:shadow-sm
              
              /* Images - Polished presentation */
              prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10 
              prose-img:border prose-img:border-gray-100
              
              /* Tables - Clean data presentation */
              prose-table:my-8 prose-table:border-collapse
              prose-th:bg-gray-50 prose-th:font-bold prose-th:text-gray-900 prose-th:p-4 prose-th:border prose-th:border-gray-200
              prose-td:p-4 prose-td:border prose-td:border-gray-200
              
              /* Horizontal rules - Subtle dividers */
              prose-hr:my-12 prose-hr:border-gray-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                {post.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Share (Visible only on small screens) */}
            <div className="lg:hidden mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FiShare2 /> Share this article
              </h3>
              <div className="flex gap-4">
                <button onClick={handleCopyLink} className="p-3 rounded-lg bg-gray-50 text-gray-600"><FiLink /></button>
                <button className="p-3 rounded-lg bg-gray-50 text-[#1DA1F2]"><FiTwitter /></button>
                <button className="p-3 rounded-lg bg-gray-50 text-[#0A66C2]"><FiLinkedin /></button>
                <button className="p-3 rounded-lg bg-gray-50 text-[#1877F2]"><FiFacebook /></button>
              </div>
            </div>
          </article>

          {/* Right Sidebar (Related Posts & CTA) */}
          <aside className="w-full lg:w-80 space-y-8">
            {/* Newsletter Widget */}
            <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Subscribe to our newsletter</h3>
              <p className="text-gray-400 text-sm mb-4 relative z-10">Get the latest insights delivered to your inbox weekly.</p>
              <form onSubmit={handleSubscribe} className="relative z-10">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>

                {/* Success/Error Message */}
                {submitMessage.text && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 text-xs font-medium ${submitMessage.type === 'success'
                        ? 'text-green-300'
                        : 'text-yellow-300'
                      }`}
                  >
                    {submitMessage.text}
                  </motion.p>
                )}
              </form>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Read Next</h3>
                <div className="flex flex-col gap-4">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.slug}`}
                      className="group bg-white p-4 rounded-xl border border-gray-100 hover:border-red-100 hover:shadow-md transition-all"
                    >
                      <span className="text-xs font-bold text-red-600 uppercase mb-1 block">
                        {related.category}
                      </span>
                      <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <FiClock className="w-3 h-3" />
                        {related.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </main>

      {/* Simple Footer for the page context */}
      <footer className="bg-white border-t border-gray-200 mt-20 py-12 text-center">
        <p className="text-gray-500">© 2024 Your Blog Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default BlogPostPage