import React from 'react';
import { Grid, List, ShoppingCart, Heart, Star } from 'lucide-react';
import ProductCard3D from './ProductCard3d';
import { useFilter } from '../../context/FilterContext';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const ProductGrid = ({ products }) => {
  const { state, setSortBy } = useFilter();
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = React.useState('grid');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-200">
        <div className="mb-4 sm:mb-0">
          <p className="text-gray-500">
            Showing <span className="font-medium text-gray-900">{products.length}</span> results
          </p>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <select
            value={state.sortBy}
            onChange={handleSortChange}
            className="block w-full sm:w-auto bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mr-4"
          >
            <option value="relevance">Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest Arrivals</option>
          </select>
          <div className="hidden sm:flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${
                viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${
                viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard3D key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="sm:w-48 h-48 overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-medium text-blue-600">{product.brand}</p>
                  {product.discountPercentage && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                      {Math.round(product.discountPercentage)}% OFF
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mt-auto flex flex-wrap items-center justify-between">
                  <div className="mb-2 sm:mb-0">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Heart className="h-4 w-4" />}
                    >
                      Wishlist
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ShoppingCart className="h-4 w-4" />}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;