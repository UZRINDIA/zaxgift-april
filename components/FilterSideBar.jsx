import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const FilterSidebar = ({
  categories,
  brands,
  filters,
  setFilters,
  clearFilters,
  onClose,
  isMobile = false
}) => {
  const [expanded, setExpanded] = useState({
    categories: true,
    price: true,
    rating: true,
    brands: true
  });

  const toggleSection = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === category ? '' : category
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters(prev => {
      const updatedBrands = prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand];
      
      return {
        ...prev,
        brands: updatedBrands
      };
    });
  };

  const handlePriceChange = (min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [min, max]
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters(prev => ({
      ...prev,
      minRating: prev.minRating === rating ? 0 : rating
    }));
  };

  return (
    <div className={`bg-white ${isMobile ? 'p-4' : 'p-6'} h-full overflow-y-auto`}>
      {isMobile && (
        <div className="flex justify-between items-center mb-4 pb-2 border-b">
          <h2 className="text-lg font-medium">Filters</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className="space-y-6">
        {/* Clear All Filters */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Filters</h2>
          <button 
            onClick={clearFilters}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Clear All
          </button>
        </div>

        {/* Categories Filter */}
        <div className="border-b pb-4">
          <button 
            className="flex justify-between items-center w-full text-left font-medium mb-2"
            onClick={() => toggleSection('categories')}
          >
            Categories
            {expanded.categories ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {expanded.categories && (
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    checked={filters.category === category}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="border-b pb-4">
          <button 
            className="flex justify-between items-center w-full text-left font-medium mb-2"
            onClick={() => toggleSection('price')}
          >
            Price Range
            {expanded.price ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {expanded.price && (
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={filters.priceRange[0] === 0 && filters.priceRange[1] === 50}
                  onChange={() => handlePriceChange(0, 50)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">Under $50</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={filters.priceRange[0] === 50 && filters.priceRange[1] === 100}
                  onChange={() => handlePriceChange(50, 100)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">$50 - $100</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={filters.priceRange[0] === 100 && filters.priceRange[1] === 200}
                  onChange={() => handlePriceChange(100, 200)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">$100 - $200</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={filters.priceRange[0] === 200 && filters.priceRange[1] === 1000}
                  onChange={() => handlePriceChange(200, 1000)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">$200 & Above</span>
              </label>
              
              {/* Custom price range with inputs */}
              <div className="mt-3 flex items-center space-x-2">
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
                  placeholder="Min"
                  className="w-full rounded border-gray-300 text-sm py-1 px-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
                  placeholder="Max"
                  className="w-full rounded border-gray-300 text-sm py-1 px-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Customer Rating Filter */}
        <div className="border-b pb-4">
          <button 
            className="flex justify-between items-center w-full text-left font-medium mb-2"
            onClick={() => toggleSection('rating')}
          >
            Customer Rating
            {expanded.rating ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {expanded.rating && (
            <div className="mt-2 space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    checked={filters.minRating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <span className="ml-2 flex items-center text-sm text-gray-700">
                    {rating}★ & above
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="pb-4">
          <button 
            className="flex justify-between items-center w-full text-left font-medium mb-2"
            onClick={() => toggleSection('brands')}
          >
            Brands
            {expanded.brands ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
          
          {expanded.brands && (
            <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;