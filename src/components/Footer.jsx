import React from 'react';
import { Heart, ShieldCheck, Phone, MapPin, Mail, MessageCircle, AlertCircle } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    const phone = "5511999999999";
    const text = "Olá, Psicóloga Vera! Gostaria de falar com você sobre psicoterapia.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand & About */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#9C5A48] flex items-center justify-center text-white font-serif font-bold text-xl">
                Ψ
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Vera da Silva Miranda
                </span>
                <span className="text-xs text-[#E09F87] font-semibold tracking-wider uppercase">
                  Psicóloga Clínica &middot; CRP 06/142981
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm mb-6">
              Psicoterapia humanizada e acolhedora para o tratamento de ansiedade, esgotamento emocional (Burnout), depressão e fortalecimento da autoestima.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Em conformidade com o Código de Ética Profissional (CFP).</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-white mb-4">Navegação Rápida</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#inicio" className="hover:text-amber-200 transition-colors">Início</a></li>
              <li><a href="#sintomas" className="hover:text-amber-200 transition-colors">Autoavaliação de Sintomas</a></li>
              <li><a href="#especialidades" className="hover:text-amber-200 transition-colors">Especialidades Clínicas</a></li>
              <li><a href="#sobre" className="hover:text-amber-200 transition-colors">Sobre a Psicóloga</a></li>
              <li><a href="#modalidades" className="hover:text-amber-200 transition-colors">Atendimento Online & Presencial</a></li>
              <li><a href="#espaco" className="hover:text-amber-200 transition-colors">O Espaço & Ambiente</a></li>
              <li><a href="#faq" className="hover:text-amber-200 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base font-bold text-white mb-4">Contato & Agendamento</h4>
            <ul className="space-y-3 text-sm text-stone-400 mb-6">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Atendimento direto via WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E09F87] mt-1 shrink-0" />
                <span>Atendimento Presencial e Online para todo o Brasil e exterior</span>
              </li>
            </ul>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Crisis Disclaimer Notice */}
        <div className="py-6 border-b border-stone-800">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-800/60 border border-stone-700/60 text-xs text-stone-400">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-200 block mb-0.5">Aviso Importante sobre Urgências e Emergências:</strong>
              Este site e os atendimentos agendados não oferecem suporte de emergência médica ou psiquiátrica em tempo real. Caso você esteja em crise aguda ou com pensamentos de automutilação/ideação suicida, ligue gratuitamente para o <strong>CVV (Centro de Valorização da Vida) no número 188</strong> ou procure a UPA/Pronto-Socorro mais próximo.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Psicóloga Vera da Silva Miranda &middot; CRP 06/142981. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Desenvolvido com carinho e dedicação terapêutica
          </p>
        </div>

      </div>
    </footer>
  );
}
