import { useState } from 'react'
import { FiSearch, FiFilter, FiX } from 'react-icons/fi'

function BlogFilters({ onSearch, onCategoryChange, onSortChange, selectedCategory, selectedSort }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    'All Posts',
    'Web Development',
    'AI/ML',
    'Competitive Programming',
    'Tutorial',
    'Career',
    'Tech Talk'
  ]

  const sortOptions = [
    { value: 'latest', label: 'Latest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  const handleCategoryClick = (category) => {
    onCategoryChange(category)
  }

  return (
    <div className="bg-white border-b-2 border-gray-200 py-4 px-6 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles by title, topic, or keyword..."
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 bg-white focus:border-red-600 focus:outline-none transition-colors font-medium text-gray-900"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('')
                  onSearch('')
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
        </form>

        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 text-gray-900 font-bold mb-4"
        >
          <FiFilter className="w-5 h-5" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Categories */}
            <div className="flex-1">
              <label className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-3">
                Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 font-bold text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white border-2 border-red-600'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="md:w-64">
              <label htmlFor="sort" className="block text-sm font-bold tracking-wide uppercase text-gray-700 mb-3">
                Sort By
              </label>
              <select
                id="sort"
                value={selectedSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 bg-white focus:border-red-600 focus:outline-none transition-colors font-bold text-gray-900"
              >
                {sortOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFilters
