import React from 'react';
import { Laptop, Building2, Globe, Shield, Clock, MapPin, Coffee, Wifi, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Modalities() {
  const handleBooking = (type) => {
    const phone = "5511999999999";
    const text = `Olá, Vera! Gostaria de consultar horários disponíveis para o atendimento psicoterapêutico no formato ${type}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="modalidades" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2EE] text-[#3D5A4C] text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            Flexibilidade para o seu dia a dia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Formatos de Atendimento <br className="hidden sm:inline" />
            <span className="text-[#9C5A48] italic">pensados para a sua rotina</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Seja no aconchego da sua casa ou no espaço acolhedor do consultório presencial, você recebe a mesma dedicação, sigilo e profundidade terapêutica.
          </p>
        </div>

        {/* 2 Modalities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Online */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-stone-200/80 bg-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div>
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden mb-6 h-56 shadow-md">
                <img
                  src="/images/online-therapy.jpg"
                  alt="Sessão de Psicoterapia Online"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#3D5A4C] flex items-center gap-1.5 shadow-sm">
                  <Laptop className="w-3.5 h-3.5" />
                  Atendimento Online
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Terapia Online
                </h3>
                <span className="text-xs font-semibold text-[#3D5A4C] bg-[#EBF2EE] px-3 py-1 rounded-full">
                  Brasil & Exterior
                </span>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Faça suas sessões de qualquer lugar do mundo com total sigilo através de plataforma de videochamada criptografada. Ideal para quem busca comodidade, economizar tempo no trânsito ou mora no exterior.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                  <Wifi className="w-4 h-4 text-[#3D5A4C]" />
                  <span>Sessões via Google Meet / Zoom com link exclusivo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                  <Shield className="w-4 h-4 text-[#3D5A4C]" />
                  <span>Ambiente criptografado e estritamente confidencial</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                  <Clock className="w-4 h-4 text-[#3D5A4C]" />
                  <span>Flexibilidade de fusos horários (inclusive para expatriados)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleBooking("Online")}
              className="w-full flex items-center justify-center gap-2 bg-[#3D5A4C] hover:bg-[#2e4539] text-white py-4 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Agendar Sessão Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Presencial */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-stone-200/80 bg-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div>
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden mb-6 h-56 shadow-md">
                <img
                  src="/images/therapy-office.jpg"
                  alt="Consultório Presencial Psicóloga Vera Miranda"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#9C5A48] flex items-center gap-1.5 shadow-sm">
                  <Building2 className="w-3.5 h-3.5" />
                  Consultório Presencial
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Terapia Presencial
                </h3>
                <span className="text-xs font-semibold text-[#9C5A48] bg-[#FAF0EB] px-3 py-1 rounded-full">
                  Espaço Acolhedor
                </span>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Um ambiente silencioso, aromatizado e projetado para oferecer o máximo de conforto, relaxamento e privacidade. Venha tomar um chá e desacelerar da rotina com todo o cuidado que você merece.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                  <Coffee className="w-4 h-4 text-[#9C5A48]" />
                  <span>Cantinho do chá e café com ambiente climatizado</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                  <Shield className="w-4 h-4 text-[#9C5A48]" />
                  <span>Isolamento acústico para total liberdade de fala</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                  <MapPin className="w-4 h-4 text-[#9C5A48]" />
                  <span>Fácil acesso, estacionamento e segurança</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleBooking("Presencial")}
              className="w-full flex items-center justify-center gap-2 bg-[#9C5A48] hover:bg-[#83493a] text-white py-4 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Agendar Sessão Presencial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
