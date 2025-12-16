import { motion } from 'framer-motion'
import { FiClock, FiEye, FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

// Helper for category colors
const getCategoryColor = (category) => {
  const colors = {
    'Development': 'from-blue-600 to-cyan-500',
    'Design': 'from-purple-600 to-pink-500',
    'AI & ML': 'from-emerald-600 to-teal-500',
    'Career': 'from-amber-500 to-orange-500',
    'Tutorial': 'from-red-600 to-rose-500'
  }
  return colors[category] || 'from-red-600 to-red-500' // Default fallback
}

function BlogCard({ post, featured = false }) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800">
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(post.category)} opacity-20`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-9xl font-black text-white/10 bg-gradient-to-r ${getCategoryColor(post.category)} bg-clip-text text-transparent`}>
              {post.category.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <span className="absolute top-4 left-4 px-4 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
            Featured
          </span>
        </div>

        <div className="md:pr-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 font-medium">
            <span className="text-red-600 font-bold uppercase tracking-wider">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-[length:200%_auto] group-hover:bg-right transition-all duration-500">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-gray-600 mb-6 line-clamp-3 text-lg leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-1.5">
                <FiClock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1.5">
                <FiEye className="w-4 h-4" />
                {post.views}
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Read Article <FiArrowRight />
            </Link>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border-2 border-gray-200 hover:border-red-600 transition-all duration-300 overflow-hidden flex flex-col h-full rounded-2xl"
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
          <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-bold tracking-wide uppercase rounded-full shadow-sm`}>
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

        <p className="text-gray-600 leading-relaxed mb-4 font-medium line-clamp-3 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-medium text-gray-600"
              >
                <FiTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all duration-300"
          >
            Read More
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard
