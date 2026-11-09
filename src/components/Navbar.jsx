import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Heart, Shield, Sparkles, Phone } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'O Que Trata', href: '#sintomas' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Sobre a Vera', href: '#sobre' },
    { name: 'Atendimento', href: '#modalidades' },
    { name: 'O Espaço', href: '#espaco' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const handleWhatsApp = () => {
    const phone = "5511999999999";
    const text = encodeURIComponent("Olá, Psicóloga Vera! Gostaria de informações sobre disponibilidade de horários para psicoterapia.");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#9C5A48] flex items-center justify-center text-white shadow-md shadow-amber-900/10 transition-transform group-hover:scale-105">
            <span className="font-serif font-bold text-xl leading-none">Ψ</span>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#2D2926] block leading-tight">
              Vera Miranda
            </span>
            <span className="text-[11px] font-medium tracking-wider text-[#9C5A48] uppercase flex items-center gap-1">
              Psicóloga Clínica <span className="text-stone-400">•</span> CRP 06/142981
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-700 hover:text-[#9C5A48] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#9C5A48] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-stone-200/60 px-6 py-5 mt-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-[#9C5A48] py-2 border-b border-stone-100/80"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
