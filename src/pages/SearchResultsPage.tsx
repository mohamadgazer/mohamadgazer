import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      Object.values(product.specifications).some(spec => 
        spec.toLowerCase().includes(searchTerm)
      )
    );
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link
            to="/catalog"
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft size={20} />
            العودة للكتالوج
          </Link>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <Search size={24} className="text-gray-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            نتائج البحث عن: "{query}"
          </h1>
        </div>
        
        <p className="text-gray-600">
          تم العثور على {searchResults.length} منتج
        </p>
      </div>

      {/* Search Results */}
      {searchResults.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-6">
            <Search size={80} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            لم يتم العثور على نتائج
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            لم نتمكن من العثور على منتجات تطابق بحثك "{query}". 
            جرب استخدام كلمات مختلفة أو تصفح الكتالوج.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              تصفح جميع المنتجات
            </Link>
            <Link
              to="/catalog?category=laptops"
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              تصفح اللابتوبات
            </Link>
          </div>

          {/* Search Suggestions */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              اقتراحات للبحث:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/search?q=Dell"
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-orange-300 hover:shadow-md transition-all"
              >
                <span className="text-gray-700 font-medium">Dell</span>
              </Link>
              <Link
                to="/search?q=HP"
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-orange-300 hover:shadow-md transition-all"
              >
                <span className="text-gray-700 font-medium">HP</span>
              </Link>
              <Link
                to="/search?q=ماوس"
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-orange-300 hover:shadow-md transition-all"
              >
                <span className="text-gray-700 font-medium">ماوس</span>
              </Link>
              <Link
                to="/search?q=شاحن"
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-orange-300 hover:shadow-md transition-all"
              >
                <span className="text-gray-700 font-medium">شاحن</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {searchResults.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Related Searches */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              عمليات بحث ذات صلة:
            </h3>
            <div className="flex flex-wrap gap-3">
              {['لابتوب Dell', 'ماوس لاسلكي', 'شاحن لابتوب', 'كيبورد ميكانيكي', 'شنطة لابتوب'].map(term => (
                <Link
                  key={term}
                  to={`/search?q=${encodeURIComponent(term)}`}
                  className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors border border-gray-200"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;