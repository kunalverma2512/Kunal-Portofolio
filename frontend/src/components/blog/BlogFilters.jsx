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
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Categories - Desktop (Pills) */}
          <div className="hidden md:flex flex-wrap gap-2 flex-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar & Sort */}
          <div className="w-full md:w-auto flex gap-3">
            <form onSubmit={handleSearch} className="flex-1 md:w-64 relative group">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-10 py-2.5 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-600 focus:outline-none transition-all font-medium text-sm text-gray-900 shadow-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('')
                    onSearch('')
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600"
                >
                  <FiX />
                </button>
              )}
            </form>

            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none font-bold text-sm text-gray-700 cursor-pointer shadow-sm hover:bg-gray-100 transition-colors h-full"
              >
                {sortOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <FiFilter className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Category Toggle */}
        <div className="md:hidden mt-4">
          <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-600 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFilters
