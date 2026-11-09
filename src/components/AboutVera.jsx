import React from 'react';
import { Award, BookOpen, Heart, Shield, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutVera() {
  const pillars = [
    {
      icon: Heart,
      title: "Escuta Sem Julgamentos",
      desc: "Aqui sua história é acolhida em sua totalidade. Você pode ser 100% autêntico(a), sem receio de rótulos ou cobranças."
    },
    {
      icon: Shield,
      title: "Sigilo & Ética Profissional",
      desc: "Rigor absoluto em conformidade com o Código de Ética do Conselho Federal de Psicologia (CFP). Seu espaço seguro e protegido."
    },
    {
      icon: BookOpen,
      title: "Ciência & Humanismo",
      desc: "Práticas fundamentadas nas neurociências e na Terapia Cognitivo-Comportamental aliadas a um olhar profundamente humano."
    },
    {
      icon: Sparkles,
      title: "Respeito ao Seu Ritmo",
      desc: "Não há pressa nem receitas prontas. Cada sessão é construída respeitando seus limites emocionais e objetivos de vida."
    }
  ];

  const handleWhatsApp = () => {
    const phone = "5511999999999";
    const text = "Olá, Vera! Li sobre a sua trajetória e filosofia de atendimento e gostaria de iniciar minha psicoterapia com você.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Background soft decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9C5A48]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Presentation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#9C5A48]/20 via-amber-100/40 to-[#3D5A4C]/20 rounded-3xl -rotate-2 -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/vera-miranda.jpg"
                  alt="Psicóloga Vera da Silva Miranda"
                  className="w-full h-[480px] object-cover object-top"
                />
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent text-white">
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">Psicóloga Clínica</span>
                  <h3 className="font-serif text-2xl font-bold">Vera da Silva Miranda</h3>
                  <p className="text-xs text-stone-300 mt-0.5">CRP 06/142981 &middot; Especialista em Saúde Mental</p>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -bottom-6 -right-4 glass-card py-3 px-5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3D5A4C] text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Atuação Clínica</span>
                  <span className="text-[11px] text-[#3D5A4C] font-semibold">Conselho Regional de Psicologia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0EB] text-[#9C5A48] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Conheça a sua terapeuta
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6">
              "Acredito que toda dor compreendida <br className="hidden sm:inline" />
              <span className="text-[#9C5A48] italic">se torna semente de transformação."</span>
            </h2>

            <div className="prose prose-stone text-stone-600 text-base sm:text-lg space-y-4 mb-8">
              <p>
                Olá! Sou a <strong className="text-stone-900 font-semibold">Vera Miranda</strong>. Ao longo de mais de uma década de prática clínica, dediquei minha vida a acolher homens e mulheres que chegam ao consultório exaustos de tentar dar conta de tudo sozinhos.
              </p>
              <p>
                Minha missão é proporcionar um <strong className="text-stone-900 font-semibold">porto seguro</strong> onde você possa desarmar suas defesas, entender as causas reais da sua ansiedade ou esgotamento, e aprender recursos emocionais práticos para viver com dignidade, paz e autenticidade.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-200/70 shadow-2xs hover:border-[#9C5A48]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF0EB] text-[#9C5A48] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-stone-900 mb-1">{pillar.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#9C5A48] hover:bg-[#83493a] text-white px-7 py-4 rounded-2xl font-bold text-base shadow-lg shadow-amber-950/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Conversar com a Psicóloga Vera</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
