import { motion } from 'framer-motion'
import { FiClock, FiEye, FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function BlogCard({ post, featured = false, variant = 'default' }) {
  const getCategoryColor = (category) => {
    const colors = {
      'Web Development': 'from-red-600 to-red-500',
      'AI/ML': 'from-purple-500 to-pink-500',
      'Competitive Programming': 'from-red-500 to-indigo-500',
      'Tutorial': 'from-green-500 to-emerald-500',
      'Career': 'from-orange-500 to-red-500',
      'Tech Talk': 'from-indigo-500 to-purple-500'
    }
    return colors[category] || 'from-gray-500 to-gray-700'
  }

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-4 border-red-600 h-[500px]"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-bold tracking-wide uppercase`}>
              Featured
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-wide uppercase">
              {post.category}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
            {post.title}
          </h2>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <FiEye className="w-4 h-4" />
              {post.views}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all duration-300"
          >
            Read Article
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.article>
    )
  }

  if (variant === 'minimal') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group border-b-2 border-gray-200 pb-6 hover:border-red-600 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-bold uppercase flex-shrink-0`}>
            {post.category}
          </span>
          <div className="flex-1">
            <Link to={`/blog/${post.slug}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {post.title}
              </h3>
            </Link>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <span className="flex items-center gap-1">
                <FiCalendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiClock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  // Default card
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white border-2 border-gray-200 hover:border-red-600 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Category Badge */}
      <div className={`h-2 bg-gradient-to-r ${getCategoryColor(post.category)}`}></div>

      {/* Thumbnail Placeholder */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-6xl font-black text-white/20 bg-gradient-to-r ${getCategoryColor(post.category)} bg-clip-text text-transparent`}>
            {post.category.substring(0, 2).toUpperCase()}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-bold tracking-wide uppercase`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
          <span className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <FiClock className="w-4 h-4" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1">
            <FiEye className="w-4 h-4" />
            {post.views}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 leading-relaxed mb-4 font-medium line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-300 text-xs font-medium text-gray-700"
              >
                <FiTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all duration-300 mt-auto"
        >
          Read More
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard
