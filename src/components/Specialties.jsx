import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Heart, Brain, Coffee, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Specialties() {
  const specialties = [
    {
      title: "Esgotamento Emocional & Burnout",
      badge: "Especialidade Principal",
      badgeColor: "bg-rose-100 text-rose-800",
      description: "Recupere sua energia vital e clareza mental após períodos intensos de estresse profissional, familiar ou sobrecarga de responsabilidades.",
      benefits: [
        "Identificação precoce de gatilhos de estresse crônico",
        "Aprender a estabelecer limites sem culpa",
        "Regulação do sistema nervoso e qualidade do sono",
        "Reconexão com o propósito e bem-estar diário"
      ],
      image: "/images/peace-mindfulness.jpg",
      quote: "Descansar não é preguiça, é necessidade biológica e emocional."
    },
    {
      title: "Ansiedade, Fobias & Crises de Pânico",
      badge: "Alta Eficácia Clínica",
      badgeColor: "bg-amber-100 text-amber-800",
      description: "Ferramentas práticas e fundamentadas na Terapia Cognitivo-Comportamental para desarmar pensamentos catastróficos e sintomas físicos de angústia.",
      benefits: [
        "Manejo de taquicardia, aperto no peito e falta de ar",
        "Técnicas de respiração e regulação somática",
        "Reestruturação de pensamentos automáticos de medo",
        "Conquista de autonomia para viver o presente"
      ],
      image: "/images/therapy-dialogue.jpg",
      quote: "A ansiedade mente para você dizendo que você não vai dar conta. Você vai."
    },
    {
      title: "Depressão, Perdas e Ressignificação",
      badge: "Cuidado Profundo",
      badgeColor: "bg-blue-100 text-blue-800",
      description: "Acolhimento gentil para atravessar momentos de luto, términos, perda de entusiasmo e sentimentos persistentes de tristeza e solidão.",
      benefits: [
        "Espaço seguro para desabafar sem pressa ou julgamentos",
        "Compreensão das origens emocionais da dor",
        "Ativação comportamental gradual e realista",
        "Resgate da autoestima e vontade de viver"
      ],
      image: "/images/therapy-office.jpg",
      quote: "Mesmo nas noites mais longas, existe um caminho de volta para a sua luz."
    },
    {
      title: "Autoconhecimento & Relações Saudáveis",
      badge: "Crescimento Pessoal",
      badgeColor: "bg-emerald-100 text-emerald-800",
      description: "Aprenda a se expressar com assertividade, romper ciclos de dependência emocional e construir relacionamentos mais saudáveis e equilibrados.",
      benefits: [
        "Comunicação não-violenta e assertiva",
        "Superação da necessidade de aprovação constante",
        "Desenvolvimento de autoaceitação e segurança interior",
        "Clareza para tomar decisões e mudar de rumo"
      ],
      image: "/images/online-therapy.jpg",
      quote: "Quando você muda a forma como se relaciona consigo mesmo, tudo ao redor se transforma."
    }
  ];

  const handleConsult = (specTitle) => {
    const phone = "5511999999999";
    const text = `Olá, Psicóloga Vera! Gostaria de entender mais sobre o tratamento para ${specTitle}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0EB] text-[#9C5A48] text-xs font-bold uppercase tracking-wider mb-4">
            <Brain className="w-3.5 h-3.5" />
            Abordagem e Áreas de Atuação
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Especialidades que transformam <br className="hidden sm:inline" />
            <span className="text-[#9C5A48] italic">a sua rotina de vida</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Metodologia terapêutica estruturada para acolher sua individualidade, combinando escuta humanizada com técnicas cientificamente validadas.
          </p>
        </div>

        {/* Specialty Cards Layout */}
        <div className="space-y-16 lg:space-y-24">
          {specialties.map((spec, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual Image Side */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                  <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-stone-200/70 bg-stone-100">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating quote on image */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark text-white border border-white/10">
                      <p className="text-xs sm:text-sm font-medium italic">
                        "{spec.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase mb-4 shadow-2xs" style={{ backgroundColor: '#F4EAE6', color: '#9C5A48' }}>
                    {spec.badge}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4 leading-tight">
                    {spec.title}
                  </h3>

                  <p className="text-stone-600 text-base sm:text-lg mb-6 leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-3 mb-8">
                    {spec.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EBF2EE] text-[#3D5A4C] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm sm:text-base text-stone-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <button
                    onClick={() => handleConsult(spec.title)}
                    className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#9C5A48] hover:text-[#7d4435] transition-colors group"
                  >
                    <span>Conversar sobre este tema com a Vera</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
