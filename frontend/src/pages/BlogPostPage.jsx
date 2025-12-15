import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiClock, FiCalendar, FiEye, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { blogPosts } from '../data/blogPosts'
import { useEffect } from 'react'

function BlogPostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const post = blogPosts.find(p => p.slug === slug)
  
  // Handle case where post is not found
  useEffect(() => {
    if (!post) {
      navigate('/blog')
    }
    window.scrollTo(0, 0)
  }, [post, navigate])

  if (!post) return null

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-red-500" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-red-500" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <FiEye className="text-red-500" />
                {post.views} views
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Article Body */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-white"
          >
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-red-600 hover:prose-a:text-red-700 prose-strong:text-gray-900 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Tags in this article
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-12">
            {/* Share Widget */}
            <div className="bg-gray-50 p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FiShare2 className="text-red-600" />
                Share this article
              </h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
                  <FiTwitter className="w-5 h-5" />
                </button>
                <button className="flex-1 py-2 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </button>
                <button className="flex-1 py-2 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                  <FiFacebook className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-3">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <span className="text-xs font-bold text-red-600 uppercase mb-1 block">
                        {related.category}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {related.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage
