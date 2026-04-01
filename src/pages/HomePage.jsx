import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Award, ArrowRight, Star, HeartPulse } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products, categories } from '../data/mockData';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const newProducts = products.slice(4, 8);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <div className="hero-text mx-auto">
            <span className="hero-badge animate-pulse-soft">Trusted by 500+ Hospitals Nationwide</span>
            <h1 className="hero-title">
              Next-Generation Medical <br />
              <span className="text-secondary gradient-text">Equipment Sourcing</span>
            </h1>
            <p className="hero-description max-w-2xl mx-auto">
              Empower your facility with clinical-grade, certified medical technology. We handle procurement, installation, and zero-downtime support.
            </p>
            <div className="hero-actions justify-center mt-8">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Catalog <ArrowRight size={20} />
              </Link>
              <a
                href={`https://wa.me/918800702856?text=${encodeURIComponent('Hello Sharmora Medical! I am interested in your medical equipment. Please help me find the right solution for my facility.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.652 4.826 1.786 6.853L2 30l7.373-1.773A13.944 13.944 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="white"/><path d="M22.502 19.663c-.305-.153-1.803-.889-2.082-.99-.279-.1-.482-.153-.685.153-.203.305-.786.99-.964 1.193-.178.203-.355.228-.66.076-.305-.153-1.287-.474-2.451-1.512-.906-.808-1.518-1.805-1.696-2.11-.178-.305-.019-.47.133-.622.137-.136.305-.355.457-.533.153-.178.203-.305.305-.508.101-.203.051-.381-.025-.533-.077-.153-.685-1.65-.939-2.26-.247-.594-.498-.513-.685-.522-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.812.381-.279.305-1.066 1.04-1.066 2.538 0 1.498 1.09 2.946 1.243 3.149.152.203 2.147 3.278 5.203 4.594.727.313 1.295.5 1.737.641.73.232 1.393.199 1.918.12.585-.087 1.803-.736 2.057-1.447.254-.711.254-1.32.178-1.447-.077-.127-.28-.203-.585-.356Z" fill="#25D366"/></svg>
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg glass-btn">
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-card border-y border-color">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted mb-4 tracking-widest uppercase">Trusted Technology Partners</p>
          <div className="trust-logos flex justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale">
            <span className="trust-logo font-outfit font-bold text-xl flex items-center gap-2"><HeartPulse size={24}/> CityCare</span>
            <span className="trust-logo font-outfit font-bold text-xl flex items-center gap-2"><Activity size={24}/> MetroHealth</span>
            <span className="trust-logo font-outfit font-bold text-xl flex items-center gap-2"><ShieldCheck size={24}/> Apex Diagnostics</span>
            <span className="trust-logo font-outfit font-bold text-xl flex items-center gap-2"><Star size={24}/> Prime Clinics</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="section bg-main">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl mb-4">The Sharmora Advantage</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">We engineer our supply chain to provide hospitals with absolute reliability and predictable setup costs.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-card hover-glow">
              <div className="feature-icon-wrapper premium-icon"><ShieldCheck size={32} /></div>
              <h3 className="font-outfit text-xl mb-3">50-Point Inspection</h3>
              <p className="text-muted">Every unit is scrutinized through rigorous clinical stress tests and quality inspections before receiving our certification.</p>
            </div>
            <div className="feature-card glass-card hover-glow">
              <div className="feature-icon-wrapper premium-icon"><Activity size={32} /></div>
              <h3 className="font-outfit text-xl mb-3">Zero Downtime Support</h3>
              <p className="text-muted">Our dedicated engineering task force is available 24/7 to ensure your critical care operations never stop.</p>
            </div>
            <div className="feature-card glass-card hover-glow">
              <div className="feature-icon-wrapper premium-icon"><Award size={32} /></div>
              <h3 className="font-outfit text-xl mb-3">Enterprise Pricing</h3>
              <p className="text-muted">Leverage our B2B volume capabilities. Get up to 40% cost efficiency when setting up entire ICU wards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section bg-card">
        <div className="container">
          <div className="section-header flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl mb-2">Clinical Categories</h2>
              <p className="text-muted text-lg">Browse equipment by your specific department needs.</p>
            </div>
             <Link to="/products" className="btn btn-outline">View Complete Catalog</Link>
          </div>
          <div className="categories-grid">
            {categories.slice(0, 6).map(category => (
              <Link to={`/products?category=${category.id}`} key={category.id} className="category-card modern-category-card">
                <h4 className="category-title">{category.name}</h4>
                <div className="category-arrow"><ArrowRight size={20} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Refurbished */}
      <section className="section bg-slate dark-themed-section pattern-bg">
        <div className="container">
          <div className="section-header flex justify-between items-end mb-12 flex-wrap gap-4">
          <div className="text-white">
              <h2 className="text-4xl mb-2 text-white">Premium Certified Equipment</h2>
              <p className="text-gray-400 text-lg">Top-quality medical devices restored to peak clinical performance — tested, certified, and ready for deployment.</p>
            </div>
            <Link to="/products" className="btn btn-primary">View All Equipment</Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="cta-strip relative overflow-hidden">
        <div className="cta-glow"></div>
        <div className="container cta-strip-content relative z-10 text-center">
           <h2 className="text-4xl mb-6 text-white font-outfit">Ready to scale your facility?</h2>
           <p className="text-xl text-gray-200 w-full max-w-2xl mx-auto mb-10">Deploy world-class medical equipment with full deployment tracking and on-call engineering support.</p>
          <Link to="/contact" className="btn btn-white btn-lg glass-btn-white">Initialize Project Setup</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
