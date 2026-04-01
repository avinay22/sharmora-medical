import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MessageSquare, PhoneCall, ShieldCheck, Settings, Award, Activity, HeartPulse, Zap, Scissors, Wind, PlusSquare, Stethoscope } from 'lucide-react';
import { products } from '../data/mockData';
import './ProductDetailPage.css';

const getCategoryIconBig = (categoryId) => {
  switch (categoryId) {
    case 'portable-transport-ventilator':
    case 'ventilator': 
    case 'aeonmed-ventilator': 
    case 'icu-ventilators': return <Wind size={64} />;
    case 'patient-monitoring': return <Activity size={64} />;
    case 'defibrillators': return <Zap size={64} />;
    case 'ot-surgical': return <Scissors size={64} />;
    case 'respiratory-sleep': return <HeartPulse size={64} />;
    case 'diagnostic-accessories': return <Stethoscope size={64} />;
    case 'additional-equipment': return <PlusSquare size={64} />;
    default: return <PlusSquare size={64} />;
  }
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h2 className="font-outfit text-3xl">Product Not Found</h2>
        <p className="text-muted mb-6">The equipment you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/products')} className="btn btn-primary">Back to Catalog</button>
      </div>
    );
  }

  const { name, category, condition, description } = product;
  const phoneNumber = "918800702856";
  const whatsappMsg = `Hello Sharmora Medical Systems! 👋

I am interested in the following equipment and would like a detailed quotation:

🔹 *Product:* ${name}
🔹 *Category:* ${category.replace(/-/g, ' ')}
🔹 *Condition:* ${condition}

Could you please provide:
✅ Pricing & availability
✅ Installation & delivery details  
✅ Warranty & after-sales support

Thank you!`;

  return (
    <div className="product-detail-page animate-fade-in py-8">
      <div className="container">
        
        {/* Breadcrumb / Back Navigation */}
        <button onClick={() => navigate(-1)} className="btn-link mb-6 flex items-center gap-2 text-muted">
          <ArrowLeft size={18} /> Back to Catalog
        </button>

        {/* Decorative Header */}
        <div className="detail-hero-banner mb-8">
          <div className="banner-icon-bg">
            {getCategoryIconBig(category)}
          </div>
          <div className="banner-content">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <span className="detail-category">{category.replace(/-/g, ' ').toUpperCase()}</span>
                <h1 className="detail-title">{name}</h1>
              </div>
              <div className="badge-container-relative">
                {condition === 'New' ? (
                  <span className="badge badge-new large-badge">Brand New</span>
                ) : (
                  <span className="badge badge-refurbished large-badge">Certified Refurbished</span>
                )}
              </div>
            </div>
            
            <p className="detail-description mt-6">{description}</p>
          </div>
        </div>

        <div className="detail-grid">
          {/* Detailed Specs & Features */}
          <div className="detail-content">
            {/* Product Image Showcase */}
            <div className="glass-card mb-8 flex justify-center items-center p-8 bg-white overflow-hidden" style={{ border: '4px solid var(--primary)', borderRadius: '16px' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full max-h-96 object-contain hover:scale-105 transition-transform duration-300" 
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex';
                }} 
              />
              <div className="fallback-icon flex-col items-center justify-center text-primary" style={{ display: 'none', height: '300px' }}>
                {getCategoryIconBig(category)}
                <span className="mt-4 font-semibold text-lg opacity-50">Image Unavailable</span>
              </div>
            </div>

            <div className="glass-card mb-8">
              <h3 className="font-outfit mb-6 text-2xl flex items-center gap-2">
                <Settings size={24} className="text-primary" /> Key Specifications
              </h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Category</span>
                  <span className="spec-value">{category.replace(/-/g, ' ').toUpperCase()}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Condition</span>
                  <span className="spec-value">{condition}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Availability</span>
                  <span className="spec-value text-success font-semibold">In Stock</span>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="font-outfit mb-6 text-2xl flex items-center gap-2">
                <ShieldCheck size={24} className="text-primary" /> Sharmora Guarantee
              </h3>
              <ul className="feature-list big-features">
                <li>
                  <Award size={24} className="text-secondary" /> 
                  <div>
                    <h5 className="font-bold">Medical Grade Certified</h5>
                    <p className="text-sm text-muted">All equipment adheres to industry clinical standards.</p>
                  </div>
                </li>
                <li>
                  <Activity size={24} className="text-secondary" /> 
                  <div>
                    <h5 className="font-bold">Rigorous Testing</h5>
                    <p className="text-sm text-muted">Every device undergoes 50+ quality diagnostic checks.</p>
                  </div>
                </li>
                <li>
                  <Settings size={24} className="text-secondary" /> 
                  <div>
                    <h5 className="font-bold">Seamless Installation</h5>
                    <p className="text-sm text-muted">A dedicated engineering team sets up the device on-site.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky Action Card */}
          <div className="detail-sidebar">
             <div className="detail-actions glass-card sticky-action">
              <div className="action-header text-center mb-6">
                <h4 className="font-outfit text-2xl mb-2">Interested & Ready?</h4>
                <p className="text-muted text-sm">Get an instant quotation directly from our sales experts. We guarantee competitive B2B pricing.</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg flex justify-center hover-lift"
                >
                  <MessageSquare size={20} /> Request on WhatsApp
                </a>
                
                <div className="action-divider"><span>or call us directly</span></div>

                <a href="tel:8800702856" className="btn btn-primary btn-lg flex justify-center hover-lift">
                  <PhoneCall size={20} /> Call 8800702856
                </a>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-light text-center">
                <p className="text-sm font-semibold mb-1">Bulk Order?</p>
                <p className="text-xs text-muted">Inquire about our hospital setup packages for significant discounts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
