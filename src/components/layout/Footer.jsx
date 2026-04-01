import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <Logo className="footer-svg-logo" />
            </Link>
            <p className="footer-desc mt-4">
              Advanced Medical Equipment Solutions. We specialize in providing highly reliable and cost-effective new and refurbished medical devices to healthcare institutions.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?condition=Refurbished">Refurbished Equipment</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=icu-ventilation">ICU & Ventilation</Link></li>
              <li><Link to="/products?category=patient-monitoring">Patient Monitoring</Link></li>
              <li><Link to="/products?category=ot-surgical">OT & Surgical</Link></li>
              <li><Link to="/products?category=defibrillators">Defibrillators</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="contact-info-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>New Delhi, India (Service Nationwide)</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:8800702856">8800702856</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sharmora Medical Systems. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
