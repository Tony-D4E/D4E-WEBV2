import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppWidget({ 
  phoneNumber, 
  message = "Bonjour, j'ai une question concernant vos services Odoo." 
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Animation d'attention après 3 secondes
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Bulle de message */}
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-2xl shadow-2xl max-w-xs animate-in slide-in-from-bottom-2 fade-in duration-200">
          <div className="flex items-start justify-between mb-2">
            <span className="font-semibold text-gray-800 text-sm">Digital4Efficiency</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?
          </p>
          <button
            onClick={handleClick}
            className="w-full py-2 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Discuter sur WhatsApp
          </button>
        </div>
      )}

      {/* Bouton WhatsApp */}
      <button
        onClick={() => isOpen ? handleClick() : setIsOpen(true)}
        className={`
          group relative w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg hover:shadow-xl
          ${hasAnimated && !isOpen ? 'animate-bounce' : ''}
        `}
        style={{ backgroundColor: '#25D366' }}
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" fill="white" />
        
        {/* Badge notification */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0B0F19]" />
        )}

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#111827] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Discuter sur WhatsApp
        </span>
      </button>
    </div>
  );
}
