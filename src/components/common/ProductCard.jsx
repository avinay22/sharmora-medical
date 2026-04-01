import { Link } from 'react-router-dom';
import { Activity, HeartPulse, Zap, Scissors, Wind, PlusSquare, Stethoscope, Grid, Eye } from 'lucide-react';
import './ProductCard.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ flexShrink: 0 }}>
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.652 4.826 1.786 6.853L2 30l7.373-1.773A13.944 13.944 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="white"/>
    <path d="M22.502 19.663c-.305-.153-1.803-.889-2.082-.99-.279-.1-.482-.153-.685.153-.203.305-.786.99-.964 1.193-.178.203-.355.228-.66.076-.305-.153-1.287-.474-2.451-1.512-.906-.808-1.518-1.805-1.696-2.11-.178-.305-.019-.47.133-.622.137-.136.305-.355.457-.533.153-.178.203-.305.305-.508.101-.203.051-.381-.025-.533-.077-.153-.685-1.65-.939-2.26-.247-.594-.498-.513-.685-.522-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.812.381-.279.305-1.066 1.04-1.066 2.538 0 1.498 1.09 2.946 1.243 3.149.152.203 2.147 3.278 5.203 4.594.727.313 1.295.5 1.737.641.73.232 1.393.199 1.918.12.585-.087 1.803-.736 2.057-1.447.254-.711.254-1.32.178-1.447-.077-.127-.28-.203-.585-.356Z" fill="#25D366"/>
  </svg>
);

const getCategoryIcon = (categoryId) => {
  switch (categoryId) {
    case 'portable-transport-ventilator':
    case 'ventilator': 
    case 'aeonmed-ventilator': 
    case 'icu-ventilators': return <Wind size={32} />;
    case 'patient-monitor': return <Activity size={32} />;
    case 'refurbished-defibrillator': 
    case 'defibrillator': 
    case 'zoll-defibrillators': 
    case 'automatic-external-defibrillator': return <Zap size={32} />;
    case 'cautery-machine': return <Scissors size={32} />;
    case 'spo2-sensors': return <HeartPulse size={32} />;
    case 'new-items': return <PlusSquare size={32} />;
    case 'other-products': return <Grid size={32} />;
    default: return <PlusSquare size={32} />;
  }
};

const ProductCard = ({ product }) => {
  const { id, name, category, condition, description, image } = product;
  const phoneNumber = "918800702856";
  const whatsappMsg = `Hello Sharmora Medical! 👋

I am interested in the following equipment:

🔹 *Product:* ${name}
🔹 *Category:* ${category.replace(/-/g, ' ')}
🔹 *Condition:* ${condition}

Could you please share availability, pricing, and delivery details? Thank you!`;

  return (
    <div className="product-card">
      <div className="product-card-header">
        <div className="product-image-container">
          <img 
             src={image} 
             alt={name} 
             className="product-card-img" 
             onError={(e) => { 
               e.target.style.display = 'none'; 
               e.target.nextSibling.style.display = 'flex';
             }} 
          />
          <div className="product-icon-wrapper fallback-icon" style={{ display: 'none' }}>
            {getCategoryIcon(category)}
          </div>
        </div>
        <div className="product-badges">
          {condition === 'New' ? (
            <span className="badge badge-new">New</span>
          ) : (
            <span className="badge badge-refurbished">Refurbished</span>
          )}
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category-text">{category.replace(/-/g, ' ').toUpperCase()}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-card-features">
           <div className="feature-pill">Verified Quality</div>
           <div className="feature-pill">Warranty Included</div>
        </div>

        <div className="product-actions">
          <Link to={`/products/${id}`} className="btn btn-outline btn-sm flex-1 action-view">
            <Eye size={15} /> View Specs
          </Link>
          <a 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm flex-1 action-inquire"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
