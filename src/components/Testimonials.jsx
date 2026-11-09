import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: "Mariana S.",
      role: "Gerente de Projetos (34 anos)",
      focus: "Superação de Burnout",
      text: "Eu cheguei à Vera no limite das minhas forças, chorando por qualquer motivo e sem conseguir dormir. Em poucos meses de processo, aprendi a colocar limites no trabalho e recuperei o prazer de viver os fins de semana com a minha família. A Vera é de uma delicadeza e firmeza impressionantes.",
      rating: 5,
      time: "Paciente há 1 ano (Online)"
    },
    {
      name: "Rodrigo M.",
      role: "Engenheiro de Software (41 anos)",
      focus: "Ansiedade & Crises de Pânico",
      text: "Tinha crises no trânsito e reuniões de trabalho. Tentei outros psicólogos antes, mas a metodologia prática e o acolhimento humano da Vera foram os únicos que realmente me ensinaram a desarmar os gatilhos no momento exato em que começavam. Recomendo de olhos fechados!",
      rating: 5,
      time: "Paciente há 8 meses (Presencial)"
    },
    {
      name: "Camila F.",
      role: "Médica Residente (29 anos)",
      focus: "Sobrecarga & Autocuidado",
      text: "Fazer as sessões online se encaixou perfeitamente na minha escala caótica. A Vera é extremamente pontual, atenciosa e tem uma escuta que nunca me fez sentir julgada. Foi o melhor investimento que fiz na minha saúde mental.",
      rating: 5,
      time: "Paciente há 6 meses (Online)"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0EB] text-[#9C5A48] text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#9C5A48]" />
            Vozes de Quem Já Deu o Primeiro Passo
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Histórias de superação <br className="hidden sm:inline" />
            <span className="text-[#9C5A48] italic">e reencontro com a paz</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Veja o relato de quem decidiu priorizar a própria saúde mental e hoje colhe os frutos de uma vida mais leve e equilibrada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAF7F2] rounded-3xl p-8 border border-stone-200/80 shadow-md flex flex-col justify-between relative"
            >
              <div>
                {/* Stars and quote badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#9C5A48] bg-[#FAF0EB] px-2.5 py-1 rounded-full">
                    {review.focus}
                  </span>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base">{review.name}</h4>
                  <p className="text-xs text-stone-500">{review.role}</p>
                </div>
                <div className="text-[11px] text-stone-400 font-medium text-right">
                  {review.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CFP Ethics Notice */}
        <p className="text-center text-xs text-stone-400 max-w-xl mx-auto">
          * Nomes e detalhes pessoais foram preservados em estrito cumprimento às normas éticas do Conselho Federal de Psicologia (CFP).
        </p>

      </div>
    </section>
  );
}
