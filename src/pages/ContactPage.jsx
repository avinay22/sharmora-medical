import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hospital: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an API request
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', hospital: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="page-header bg-primary">
        <div className="container py-12 text-white text-center">
          <h1 className="text-4xl font-bold mb-4 font-outfit">Contact Sharmora Medical Systems</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with our expert sales team to discuss your medical equipment requirements, installation, and after-sales service.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="contact-grid">
          
          {/* Contact Details */}
          <div className="contact-info-cards space-y-6">
            <h2 className="font-outfit mb-6">Need Immediate Assistance?</h2>
            
            <a href="tel:8800702856" className="glass-card flex items-start gap-4 hover-lift block-link">
              <div className="icon-box bg-blue-100 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Call Abhishek Sharma</h4>
                <p className="text-muted text-sm mb-2">Direct Sales & Expert Consultation</p>
                <span className="text-lg font-bold text-primary">8800702856</span>
              </div>
            </a>

            <a 
              href="https://wa.me/918800702856?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-start gap-4 hover-lift block-link"
            >
              <div className="icon-box bg-green-100 text-whatsapp">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">WhatsApp Chat</h4>
                <p className="text-muted text-sm mb-2">Quick responses for quotes & catalogs</p>
                <span className="text-lg font-bold text-primary">Chat Now</span>
              </div>
            </a>

            <div className="glass-card flex items-start gap-4">
              <div className="icon-box bg-gray-100 text-muted">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Head Office</h4>
                <p className="text-muted text-sm">New Delhi, India</p>
                <p className="text-muted text-sm">We provide pan-India delivery and installation services.</p>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="glass-card form-container">
            <h3 className="font-outfit mb-2 text-2xl">Request a Callback</h3>
            <p className="text-muted mb-8 text-sm">Fill out the form below and our equipment specialist will contact you shortly.</p>

            {isSubmitted ? (
               <div className="success-message text-center py-8">
                 <div className="success-icon mb-4 mx-auto bg-green-100 text-success flex items-center justify-center rounded-full w-16 h-16">
                   <Send size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-success mb-2">Request Sent Successfully!</h4>
                 <p className="text-muted">Thank you for your inquiry. Our team will get back to you within 24 hours.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="lead-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder="Dr. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number / WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="form-input" 
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="hospital" className="form-label">Hospital / Clinic Name</label>
                  <input 
                    type="text" 
                    id="hospital" 
                    name="hospital" 
                    className="form-input" 
                    placeholder="City Care Hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-6">
                  <label htmlFor="message" className="form-label">Equipment Required / Inquiry Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="form-textarea" 
                    placeholder="Please mention the machines you are looking for (e.g. 2 ICU Ventilators, 1 Defibrillator)..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center btn-lg">
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
