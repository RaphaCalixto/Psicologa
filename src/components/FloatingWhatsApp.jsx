import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    const phone = "5511999999999";
    const text = "Olá, Psicóloga Vera! Gostaria de saber mais sobre os atendimentos.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Tooltip Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3 max-w-xs bg-white p-4 rounded-2xl shadow-2xl border border-stone-200/80 relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 p-1"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-stone-800">Dra. Vera Miranda</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Olá! Como posso te ajudar hoje? Clique abaixo para conversarmos no WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-700/30 hover:shadow-emerald-700/40 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Conversar pelo WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-transparent group-hover:rotate-6 transition-transform" />
      </button>

    </div>
  );
}
