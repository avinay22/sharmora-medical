import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import Logo from '../common/Logo';
import './Layout.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Refurbished', path: '/products?condition=Refurbished' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path || location.search.includes(path.split('?')[1]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo className="navbar-svg-logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu hidden md:flex">
          {navLinks.map((link) => (
             <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:8800702856" className="btn btn-primary btn-sm ml-4">
            <PhoneCall size={18} />
            8800702856
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in md:hidden">
          <div className="container flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:8800702856" className="btn btn-primary mt-4 text-center">
              <PhoneCall size={18} />
              Call 8800702856
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
