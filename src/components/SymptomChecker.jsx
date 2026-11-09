import React, { useState } from 'react';
import { 
  Flame, 
  Wind, 
  CloudRain, 
  Layers, 
  HeartCrack, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([0, 1]);

  const symptoms = [
    {
      id: 0,
      title: "Esgotamento Emocional (Burnout)",
      icon: Flame,
      color: "bg-rose-50 text-rose-700 border-rose-200",
      activeColor: "bg-rose-600 text-white border-rose-600",
      desc: "Você acorda já sem energia, o sono não descansa e qualquer pequena tarefa parece uma montanha intransponível.",
      tag: "Mais comum hoje"
    },
    {
      id: 1,
      title: "Ansiedade Constante & Mente Acelerada",
      icon: Wind,
      color: "bg-amber-50 text-amber-800 border-amber-200",
      activeColor: "bg-amber-600 text-white border-amber-600",
      desc: "Preocupação incessante com o amanhã, aperto no peito, nó na garganta e dificuldade para relaxar no presente.",
      tag: "Alívio com técnicas TCC"
    },
    {
      id: 2,
      title: "Sensação de Sobrecarga & Culpa",
      icon: Layers,
      color: "bg-orange-50 text-orange-800 border-orange-200",
      activeColor: "bg-orange-600 text-white border-orange-600",
      desc: "Você cuida de tudo e de todos, tem extrema dificuldade em dizer 'não' e sente que sempre deixa a si mesmo(a) por último.",
      tag: "Autonomia & Limites"
    },
    {
      id: 3,
      title: "Tristeza Sem Motivo & Vazio",
      icon: CloudRain,
      color: "bg-blue-50 text-blue-800 border-blue-200",
      activeColor: "bg-blue-600 text-white border-blue-600",
      desc: "Perda de interesse nas coisas que você gostava, sensação de anestesia emocional ou solidão mesmo rodeado(a) de pessoas.",
      tag: "Ressignificação"
    },
    {
      id: 4,
      title: "Angústia & Crises de Pânico",
      icon: HeartCrack,
      color: "bg-purple-50 text-purple-800 border-purple-200",
      activeColor: "bg-purple-600 text-white border-purple-600",
      desc: "Momentos repentinos de taquicardia, medo inexplicável, falta de ar e sensação de perda de controle do próprio corpo.",
      tag: "Acolhimento Imediato"
    },
    {
      id: 5,
      title: "Perda de Rumo ou Crise de Identidade",
      icon: Compass,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      activeColor: "bg-emerald-600 text-white border-emerald-600",
      desc: "Mudanças de carreira, términos, transições de vida ou a sensação incômoda de 'não saber mais quem eu sou de verdade'.",
      tag: "Autoconhecimento"
    },
  ];

  const toggleSymptom = (id) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const generateWhatsAppLink = () => {
    const phone = "5511999999999";
    const selectedTitles = selectedSymptoms.map((id) => symptoms.find((s) => s.id === id)?.title).filter(Boolean);
    let message = "Olá, Psicóloga Vera! Fiz a autoavaliação no seu site.";
    if (selectedTitles.length > 0) {
      message += ` Tenho sentido principalmente: ${selectedTitles.join(', ')}. Gostaria de agendar uma consulta para conversar sobre isso.`;
    } else {
      message += " Gostaria de agendar uma consulta para conversar sobre como iniciar a terapia.";
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="sintomas" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2EE] text-[#3D5A4C] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Autoavaliação e Sintomas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Você se reconhece em algum <br className="hidden sm:inline" />
            <span className="text-[#9C5A48] italic">destes sentimentos?</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Selecione as opções que mais se aproximam do seu dia a dia. Sentir isso não é fraqueza, é o seu corpo avisando que é hora de receber cuidado profissional.
          </p>
        </div>

        {/* Symptoms Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {symptoms.map((symptom) => {
            const Icon = symptom.icon;
            const isSelected = selectedSymptoms.includes(symptom.id);

            return (
              <motion.div
                key={symptom.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => toggleSymptom(symptom.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-white border-[#9C5A48] shadow-lg ring-2 ring-[#9C5A48]/20'
                    : 'bg-white/80 border-stone-200/80 hover:border-stone-300 hover:bg-white shadow-xs'
                }`}
              >
                {/* Checkbox indicator */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? symptom.activeColor : symptom.color
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
                      {symptom.tag}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'bg-[#9C5A48] border-[#9C5A48] text-white'
                        : 'border-stone-300 bg-white'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {symptom.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {symptom.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Action Box based on selections */}
        <motion.div 
          layout
          className="bg-gradient-to-br from-[#F4EAE6] to-[#EBD8CE] rounded-3xl p-8 sm:p-10 border border-[#E09F87]/30 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9C5A48] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                {selectedSymptoms.length > 0 
                  ? `${selectedSymptoms.length} ${selectedSymptoms.length === 1 ? 'sinal identificado' : 'sinais identificados'}` 
                  : 'Nenhum sinal marcado'}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                {selectedSymptoms.length > 0 
                  ? "Você não precisa enfrentar isso sem apoio." 
                  : "Deseja falar sobre o que está sentindo?"}
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Na psicoterapia com a Dra. Vera Miranda, trabalharemos estratégias personalizadas para você recuperar seu equilíbrio emocional, restabelecer limites saudáveis e viver com mais tranquilidade.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-emerald-900/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Enviar para a Dra. Vera no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-stone-500 mt-2 font-medium">
                🔒 Conversa 100% sigilosa direto com a psicóloga
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
