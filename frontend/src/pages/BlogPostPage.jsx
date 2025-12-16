import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  FiArrowLeft, FiClock, FiCalendar, FiEye, FiShare2,
  FiTwitter, FiLinkedin, FiFacebook, FiLink, FiUser, FiLoader
} from 'react-icons/fi'
import { blogPosts } from '../data/blogPosts'
import { useEffect, useState } from 'react'
import { subscribeToNewsletter } from '../utils/api'

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
    <div className="bg-white min-h-screen font-sans selection:bg-red-100 selection:text-red-900">

      {/* Reading Progress Bar (Fixed to top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-amber-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-40 h-20 flex items-center transition-all">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
              <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Blog
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={handleCopyLink} className="p-2 text-gray-400 hover:text-gray-900 transition-colors relative">
              <FiLink />
              {isCopied && (
                <span className="absolute top-10 right-0 px-2 py-1 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <div className="text-sm font-bold text-gray-900">{post.category}</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100 shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                {post.readTime} read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            {/* Author & Meta Data */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 border-t border-b border-gray-100 py-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-0.5 shadow-inner">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {post.authorImage ? (
                      <img src={post.authorImage} alt="Author" className="w-full h-full object-cover" />
                    ) : (
                      <FiUser className="text-gray-400 w-5 h-5" />
                    )}
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900 block leading-tight">{post.author || 'Kunal Verma'}</p>
                  <p className="text-xs font-medium text-gray-500">Author</p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-gray-100"></div>

              <div className="flex items-center gap-8 text-sm font-medium">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-bold">Published</span>
                  <span className="text-gray-900 font-bold">{post.date}</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-bold">Views</span>
                  <span className="text-gray-900 font-bold">{post.views?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Sidebar (Share Buttons - Sticky) */}
          <aside className="hidden lg:flex flex-col w-20 pt-8 items-center">
            <div className="sticky top-32 flex flex-col gap-6 items-center">
              <p className="vertical-text text-xs font-bold text-gray-300 uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Share Article</p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleCopyLink}
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-200 hover:scale-110 hover:shadow-md transition-all group relative"
                >
                  <FiLink className="w-5 h-5" />
                  {isCopied && (
                    <span className="absolute left-14 px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>

                <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:border-blue-200 hover:scale-110 hover:shadow-md transition-all">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-blue-200 hover:scale-110 hover:shadow-md transition-all">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 min-w-0">
            {/* Featured Image removed as per user request */}

            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg prose-slate max-w-none
                
                /* Headings */
                prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mb-10 prose-h1:mt-16
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-16
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-12
                
                /* Text */
                prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-8 prose-p:text-[18px]
                
                /* Links */
                prose-a:text-red-600 prose-a:font-bold prose-a:no-underline prose-a:border-b-2 prose-a:border-red-100
                hover:prose-a:text-red-700 hover:prose-a:border-red-600 hover:prose-a:transition-all
                
                /* Blockquotes */
                prose-blockquote:border-l-4 prose-blockquote:border-red-500 
                prose-blockquote:bg-gray-50 prose-blockquote:py-6 prose-blockquote:px-8 
                prose-blockquote:my-10 prose-blockquote:rounded-r-2xl
                prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-800
                
                /* Code Blocks */
                prose-pre:bg-[#0f172a] prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:my-10 prose-pre:border prose-pre:border-gray-800
                prose-code:bg-gray-100 prose-code:text-red-600 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-semibold
                
                /* Images */
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-12 prose-img:border prose-img:border-gray-100"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section */}
              <div className="mt-20 pt-10 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Filed Under</p>
                <div className="flex flex-wrap gap-3">
                  {post.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-gray-50 text-gray-600 rounded-full text-sm font-bold hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer border border-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Share (Visible only on small screens) */}
              <div className="lg:hidden mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
                  <FiShare2 /> Share this article
                </h3>
                <div className="flex justify-center gap-4">
                  <button onClick={handleCopyLink} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-200"><FiLink /></button>
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1DA1F2] shadow-sm border border-gray-200"><FiTwitter /></button>
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0A66C2] shadow-sm border border-gray-200"><FiLinkedin /></button>
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1877F2] shadow-sm border border-gray-200"><FiFacebook /></button>
                </div>
              </div>
            </div>
          </article>

          {/* Right Sidebar (Related Posts & CTA) */}
          <aside className="w-full lg:w-96 space-y-12">
            {/* Newsletter Widget */}
            <div className="bg-[#0f172a] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-[60px] group-hover:bg-red-600/30 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-600/10 rounded-full blur-[60px]"></div>

              <h3 className="text-2xl font-black mb-3 relative z-10">Subscribe</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">
                Join 15k+ developers. Get the latest insights delivered to your inbox weekly.
              </p>

              <form onSubmit={handleSubscribe} className="relative z-10 space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm font-medium transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 shadow-lg flex items-center justify-center min-h-[46px]"
                >
                  {isSubmitting ? <FiLoader className="w-5 h-5 animate-spin" /> : 'Subscribe'}
                </button>

                {/* Success/Error Message */}
                {submitMessage.text && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs font-bold text-center ${submitMessage.type === 'success'
                      ? 'text-green-400'
                      : 'text-red-400'
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
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-5 bg-red-600 rounded-full"></div>
                  Read Next
                </h3>
                <div className="flex flex-col gap-5">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.slug}`}
                      className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-2 block">
                        {related.category}
                      </span>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors line-clamp-2 leading-tight mb-3">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {related.readTime}</span>
                        <span className="flex items-center gap-1"><FiEye className="w-3 h-3" /> {related.views}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </main>

      {/* Simple Footer for the page context (Visual break) */}
      <footer className="border-t border-gray-100 py-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400 font-medium text-sm">
          <FiUser className="w-4 h-4" />
          <span>Built by <strong className="text-gray-900">Kunal Verma</strong></span>
        </div>
      </footer>
    </div>
  )
}

export default BlogPostPage