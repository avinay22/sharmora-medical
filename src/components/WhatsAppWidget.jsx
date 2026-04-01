import { useState, useEffect } from 'react';
import { X, MessageCircle, ChevronRight, Phone } from 'lucide-react';
import './WhatsAppWidget.css';

const PHONE_NUMBER = "918800702856";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [hasOpened, setHasOpened] = useState(false);
  // Auto-show hint after 4 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
    setShowPulse(false);
  };

  const handleClose = () => setIsOpen(false);

  const quickMessages = [
    { label: "💬 General Inquiry", text: "Hello! I am interested in your medical equipment. Could you please provide more information?" },
    { label: "💰 Request a Quote", text: "Hi, I would like to request a price quotation for medical equipment for our facility." },
    { label: "🏥 Bulk / Hospital Order", text: "Hi, we are setting up an ICU / hospital ward and need a bulk quote for medical equipment." },
    { label: "🔧 Service & Support", text: "Hello! I need technical support or service for medical equipment purchased from Sharmora." },
  ];

  const sendMessage = (text) => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="wa-fab-wrapper" id="whatsapp-widget">
        {showPulse && !isOpen && <span className="wa-pulse-ring" />}
        
        {!isOpen && (
          <div className="wa-tooltip">Chat with us</div>
        )}

        <button
          className={`wa-fab ${isOpen ? 'wa-fab-active' : ''}`}
          onClick={isOpen ? handleClose : handleOpen}
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? <X size={28} /> : <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.652 4.826 1.786 6.853L2 30l7.373-1.773A13.944 13.944 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="white"/><path d="M22.502 19.663c-.305-.153-1.803-.889-2.082-.99-.279-.1-.482-.153-.685.153-.203.305-.786.99-.964 1.193-.178.203-.355.228-.66.076-.305-.153-1.287-.474-2.451-1.512-.906-.808-1.518-1.805-1.696-2.11-.178-.305-.019-.47.133-.622.137-.136.305-.355.457-.533.153-.178.203-.305.305-.508.101-.203.051-.381-.025-.533-.077-.153-.685-1.65-.939-2.26-.247-.594-.498-.513-.685-.522-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.812.381-.279.305-1.066 1.04-1.066 2.538 0 1.498 1.09 2.946 1.243 3.149.152.203 2.147 3.278 5.203 4.594.727.313 1.295.5 1.737.641.73.232 1.393.199 1.918.12.585-.087 1.803-.736 2.057-1.447.254-.711.254-1.32.178-1.447-.077-.127-.28-.203-.585-.356Z" fill="#25D366"/></svg>}
        </button>
      </div>

      {/* Chat Widget Panel */}
      <div className={`wa-panel ${isOpen ? 'wa-panel-open' : ''}`} role="dialog" aria-label="WhatsApp Chat">
        <div className="wa-panel-header">
          <div className="wa-agent-info">
            <div className="wa-agent-avatar">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.652 4.826 1.786 6.853L2 30l7.373-1.773A13.944 13.944 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="white" fillOpacity="0.2"/><path d="M22.502 19.663c-.305-.153-1.803-.889-2.082-.99-.279-.1-.482-.153-.685.153-.203.305-.786.99-.964 1.193-.178.203-.355.228-.66.076-.305-.153-1.287-.474-2.451-1.512-.906-.808-1.518-1.805-1.696-2.11-.178-.305-.019-.47.133-.622.137-.136.305-.355.457-.533.153-.178.203-.305.305-.508.101-.203.051-.381-.025-.533-.077-.153-.685-1.65-.939-2.26-.247-.594-.498-.513-.685-.522-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.812.381-.279.305-1.066 1.04-1.066 2.538 0 1.498 1.09 2.946 1.243 3.149.152.203 2.147 3.278 5.203 4.594.727.313 1.295.5 1.737.641.73.232 1.393.199 1.918.12.585-.087 1.803-.736 2.057-1.447.254-.711.254-1.32.178-1.447-.077-.127-.28-.203-.585-.356Z" fill="white"/></svg>
              <span className="wa-online-dot" />
            </div>
            <div>
              <p className="wa-agent-name">Sharmora Medical</p>
              <p className="wa-agent-status">
                <span className="wa-dot" />Typically replies within minutes
              </p>
            </div>
          </div>
          <button className="wa-close-btn" onClick={handleClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="wa-panel-body">
          <div className="wa-bubble">
            <p>👋 Hello! Welcome to <strong>Sharmora Medical Systems</strong>.</p>
            <p>How can we help you today? Select a topic to get started:</p>
          </div>

          <div className="wa-quick-messages">
            {quickMessages.map((msg, i) => (
              <button key={i} className="wa-quick-btn" onClick={() => sendMessage(msg.text)}>
                <span>{msg.label}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </div>

        <div className="wa-panel-footer">
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-open-btn"
          >
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.652 4.826 1.786 6.853L2 30l7.373-1.773A13.944 13.944 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="white"/>
              <path d="M22.502 19.663c-.305-.153-1.803-.889-2.082-.99-.279-.1-.482-.153-.685.153-.203.305-.786.99-.964 1.193-.178.203-.355.228-.66.076-.305-.153-1.287-.474-2.451-1.512-.906-.808-1.518-1.805-1.696-2.11-.178-.305-.019-.47.133-.622.137-.136.305-.355.457-.533.153-.178.203-.305.305-.508.101-.203.051-.381-.025-.533-.077-.153-.685-1.65-.939-2.26-.247-.594-.498-.513-.685-.522-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.812.381-.279.305-1.066 1.04-1.066 2.538 0 1.498 1.09 2.946 1.243 3.149.152.203 2.147 3.278 5.203 4.594.727.313 1.295.5 1.737.641.73.232 1.393.199 1.918.12.585-.087 1.803-.736 2.057-1.447.254-.711.254-1.32.178-1.447-.077-.127-.28-.203-.585-.356Z" fill="#25D366"/>
            </svg>
            Open in WhatsApp
          </a>
          <a href="tel:8800702856" className="wa-call-btn">
            <Phone size={16} /> Call Us
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
