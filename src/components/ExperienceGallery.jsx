import React, { useState } from 'react';
import { Eye, Heart, Sparkles, Coffee, ShieldCheck, SunMedium } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceGallery() {
  const images = [
    {
      src: "/images/therapy-office.jpg",
      title: "Sala de Psicoterapia",
      desc: "Poltronas aconchegantes e iluminação indireta quente para relaxar o corpo e a mente.",
      tag: "Presencial"
    },
    {
      src: "/images/therapy-dialogue.jpg",
      title: "Espaço de Diálogo & Chá",
      desc: "Um ambiente onde cada palavra é ouvida com afeto, calma e total discrição.",
      tag: "Acolhimento"
    },
    {
      src: "/images/online-therapy.jpg",
      title: "Atendimento no Seu Lar",
      desc: "A mesma profundidade e conexão humana sem você precisar sair de casa.",
      tag: "Online"
    },
    {
      src: "/images/peace-mindfulness.jpg",
      title: "Caminho da Serenidade",
      desc: "Aprenda a respirar fundo e reencontrar sua leveza e vitalidade todos os dias.",
      tag: "Bem-estar"
    }
  ];

  return (
    <section id="espaco" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0EB] text-[#9C5A48] text-xs font-bold uppercase tracking-wider mb-4">
            <SunMedium className="w-3.5 h-3.5" />
            Atmosfera & Acolhimento
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Um ambiente pensado para <br className="hidden sm:inline" />
            <span className="text-[#9C5A48] italic">desacelerar e curar</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Cada detalhe do nosso atendimento — da iluminação suave ao formato das sessões — foi planejado para que você se sinta genuinamente seguro(a) e acolhido(a).
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-white"
            >
              <div className="h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tag in top corner */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-sm">
                {item.tag}
              </div>

              {/* Bottom text banner */}
              <div className="p-6 bg-white border-t border-stone-100">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
