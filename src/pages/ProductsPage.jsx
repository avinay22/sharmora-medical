import { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, Search, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products, categories } from '../data/mockData';
import './ProductsPage.css';

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const activeCategory = queryParams.get('category') || 'all';
  const activeCondition = queryParams.get('condition') || 'all';

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(location.search);
    if (category === 'all') params.delete('category');
    else params.set('category', category);
    navigate({ search: params.toString() });
  };

  const handleConditionChange = (condition) => {
    const params = new URLSearchParams(location.search);
    if (condition === 'all') params.delete('condition');
    else params.set('condition', condition);
    navigate({ search: params.toString() });
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activeCondition !== 'all') {
      result = result.filter(p => p.condition === activeCondition);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => {
        const safeName = p.name ? p.name.toLowerCase() : '';
        const safeDesc = p.description ? p.description.toLowerCase() : '';
        const safeCat = p.category ? p.category.toLowerCase().replace(/-/g, ' ') : '';
        const safeSubCat = p.subcategory ? p.subcategory.toLowerCase() : '';
        
        return safeName.includes(query) || 
               safeDesc.includes(query) ||
               safeCat.includes(query) ||
               safeSubCat.includes(query);
      });
    }

    return result;
  }, [activeCategory, activeCondition, searchQuery]);

  return (
    <div className="products-page animate-fade-in">
      {/* Page Header */}
      <div className="page-header bg-primary">
        <div className="container py-12 text-white">
          <h1 className="text-4xl font-bold mb-4 font-outfit">Medical Equipment Catalog</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Explore our comprehensive range of premium, certified medical equipment. All devices are quality-tested and ready for immediate deployment.
          </p>
        </div>
      </div>

      <div className="container py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          {/* Mobile toggle button */}
          <button
            className="filter-toggle-btn"
            onClick={() => setFiltersOpen(!filtersOpen)}
            aria-expanded={filtersOpen}
          >
            <Filter size={18} />
            Filters & Search
            {filtersOpen ? <ChevronUp size={18} style={{ marginLeft: 'auto' }} /> : <ChevronDown size={18} style={{ marginLeft: 'auto' }} />}
          </button>

          <div className={`filters-sidebar-inner ${filtersOpen ? 'open' : ''}`}>
          <div className="glass-card mb-6 p-6 filters-card">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Filter size={20} />
              <h3 className="font-outfit text-xl font-semibold m-0">Filters</h3>
            </div>

            {/* Search */}
            <div className="filter-group mb-6">
              <label className="form-label font-semibold mb-2 block text-sm">Search Catalog</label>
              <div className="search-input-wrapper relative">
                <Search size={18} className="search-icon absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input 
                  type="text" 
                  className="form-input pl-10 pt-2 pb-2 w-full border rounded-md"
                  placeholder="e.g. Ventilator, Defibrillator..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="filter-group mb-6">
              <label className="form-label font-semibold mb-3 block text-sm">Availability</label>
              <div className="flex flex-col gap-2">
                <label className="filter-radio cursor-pointer flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="condition" 
                    value="all" 
                    checked={activeCondition === 'all'} 
                    onChange={() => handleConditionChange('all')}
                  />
                  <span>All Equipment</span>
                </label>
                <label className="filter-radio cursor-pointer flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="condition" 
                    value="New" 
                    checked={activeCondition === 'New'} 
                    onChange={() => handleConditionChange('New')}
                  />
                  <span>Certified Equipment</span>
                </label>
              </div>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <label className="form-label font-semibold mb-3 block text-sm">Categories</label>
              <div className="flex flex-col gap-2">
                <button 
                  className={`category-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => handleCategoryChange('all')}
                >
                  All Categories
                  <span className="count-badge">{products.length}</span>
                </button>
                {categories.map(category => {
                  const count = products.filter(p => p.category === category.id).length;
                  return (
                    <button 
                      key={category.id}
                      className={`category-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                      <span className="count-badge">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>{/* end glass-card */}
          </div>{/* end filters-sidebar-inner */}
        </aside>

        {/* Main Content Grid */}
        <main className="flex-1 w-full relative">
          <div className="mb-6 flex justify-between items-center text-sm text-muted">
            <span>Showing <strong>{filteredProducts.length}</strong> equipment items</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="glass-card text-center p-12">
              <h3 className="mb-2 text-xl">No products found</h3>
              <p className="text-muted">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { handleCategoryChange('all'); handleConditionChange('all'); setSearchQuery(''); }}
                className="btn btn-outline mt-6"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="catalog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
