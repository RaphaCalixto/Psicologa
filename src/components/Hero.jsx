import React from 'react';
import { MessageCircle, ShieldCheck, HeartHandshake, Sparkles, CheckCircle, ArrowRight, Star, Clock, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const handleWhatsApp = (topic = "Geral") => {
    const phone = "5511999999999";
    const msg = `Olá, Psicóloga Vera! Encontrei seu site e gostaria de conversar sobre atendimento psicoterapêutico (Foco: ${topic}).`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F5EBE6]/60 via-[#FAF7F2] to-[#FAF7F2]">
      {/* Ambient background blur elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#E8C5B8]/40 via-[#F3E2DA]/30 to-[#D5E5DE]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-[#C87D65]/10 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#4A6B5B]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Compelling Copy & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9C5A48]/10 border border-[#9C5A48]/20 text-[#9C5A48] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#9C5A48]" />
              <span>Atendimento Psicológico Humanizado &middot; Online e Presencial</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.15] tracking-tight mb-6">
              Quando a mente pede ajuda, <br className="hidden sm:inline" />
              <span className="text-[#9C5A48] italic font-normal">o primeiro passo</span> é falar.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              Você não precisa carregar o peso do <strong className="text-stone-800 font-semibold">esgotamento emocional</strong>, da <strong className="text-stone-800 font-semibold">ansiedade constante</strong> ou da sobrecarga sozinho(a). Em um espaço acolhedor e sem julgamentos, resgate a sua calma, clareza e bem-estar.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-stone-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#EBF2EE] text-[#3D5A4C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-stone-700">100% Sigiloso & Ético</span>
              </div>
              
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-stone-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F5EBE6] text-[#9C5A48] flex items-center justify-center shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-stone-700">Online ou Presencial</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-stone-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-stone-700">Escuta Acolhedora</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleWhatsApp("Primeira Sessão")}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Agendar Sessão no WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </button>

              <a
                href="#sintomas"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200/80 px-6 py-4 rounded-2xl font-semibold text-base shadow-xs hover:shadow-md transition-all duration-200"
              >
                <span>Como posso te ajudar?</span>
              </a>
            </div>

            {/* Mini Trust Bar */}
            <div className="mt-9 pt-7 border-t border-stone-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-stone-700">5.0</span>
                <span>(Mais de 450 pacientes atendidos)</span>
              </div>
              <span className="hidden sm:inline text-stone-300">&bull;</span>
              <div className="flex items-center gap-1.5 font-medium text-stone-600">
                <Clock className="w-4 h-4 text-[#9C5A48]" />
                <span>Atendimento no seu ritmo</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Portrait with Floating Modern Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Decorative background shape */}
            <div className="relative w-full max-w-[420px]">
              
              {/* Backing Card / Arch Aura */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EBD8CE] to-[#DFCCC0] rounded-t-[200px] rounded-b-[40px] transform rotate-1 scale-105 -z-10 shadow-2xl shadow-amber-950/10 opacity-70" />
              <div className="absolute inset-2 bg-[#FAF4F0] rounded-t-[190px] rounded-b-[36px] -z-10 border border-white/80" />

              {/* Vera's Cutout Image */}
              <div className="relative pt-6 px-4 pb-0 flex justify-center">
                <img
                  src="/images/vera-cutout.png"
                  alt="Psicóloga Vera da Silva Miranda"
                  className="w-full h-auto object-contain max-h-[510px] drop-shadow-2xl z-10"
                />
              </div>

              {/* Floating Badge 1: CRP & Name */}
              <div className="absolute top-12 -left-6 sm:-left-8 glass-card p-3.5 rounded-2xl shadow-xl z-20 animate-float-slow max-w-[210px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#9C5A48] text-white flex items-center justify-center font-serif text-sm font-bold shadow-md">
                    VM
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 leading-tight">Vera da Silva Miranda</h4>
                    <p className="text-[10px] text-stone-500 font-medium">Psicóloga Clínica CRP 06</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Experience */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 glass-card py-2.5 px-4 rounded-2xl shadow-xl z-20 animate-float-delayed flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <span className="text-xs font-extrabold text-stone-900 block leading-tight">+12 Anos</span>
                  <span className="text-[10px] text-stone-500 font-medium">Cuidando de histórias</span>
                </div>
              </div>

              {/* Floating Badge 3: WhatsApp Direct Action at Bottom */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-card py-3 px-5 rounded-2xl shadow-2xl z-20 border border-white flex items-center gap-3 w-[90%] sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#E7F0EB] text-[#3D5A4C] flex items-center justify-center shrink-0 font-bold">
                  <CheckCircle className="w-5 h-5 text-[#3D5A4C]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Atendimento com hora marcada</span>
                  <span className="text-[11px] text-[#9C5A48] font-semibold">Online & Presencial</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
