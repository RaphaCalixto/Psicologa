import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Como funciona a primeira sessão de psicoterapia?",
      a: "A primeira sessão é um momento de acolhimento e escuta ativa inicial. É o espaço para você relatar o que está sentindo, suas principais dores e expectativas. Juntos, alinharemos a forma de trabalho e construiremos uma relação de confiança e segurança."
    },
    {
      q: "Qual a duração e a frequência dos atendimentos?",
      a: "Cada sessão tem duração de 50 minutos e ocorre geralmente com frequência semanal. Conforme a evolução do processo terapêutico e seus objetivos pessoais, a periodicidade pode ser reavaliada em comum acordo."
    },
    {
      q: "A psicoterapia online tem a mesma eficácia que a presencial?",
      a: "Sim! Diversos estudos científicos e a própria regulamentação do CFP comprovam que a psicoterapia online tem a mesma eficácia e vínculo terapêutico que o modelo presencial, com a vantagem de você estar no conforto e segurança do seu ambiente."
    },
    {
      q: "Você aceita planos ou convênios de saúde?",
      a: "O atendimento é particular, porém emitimos recibo/nota fiscal detalhada para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde (a maioria dos convênios possui essa cobertura por lei)."
    },
    {
      q: "Como é garantido o sigilo das informações?",
      a: "O sigilo profissional é um dever ético e legal absoluto, resguardado pelo Código de Ética do Psicólogo (CFP). Nada do que é conversado em sessão é compartilhado com terceiros."
    },
    {
      q: "Como realizo o pagamento das sessões?",
      a: "Os pagamentos podem ser feitos por sessão individual ou pacote mensal, via Pix, transferência bancária ou cartão de crédito."
    }
  ];

  const handleWhatsApp = () => {
    const phone = "5511999999999";
    const text = "Olá, Vera! Fiquei com uma dúvida sobre a psicoterapia que não encontrei no FAQ.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0EB] text-[#9C5A48] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            Tire suas dúvidas <br className="hidden sm:inline" />
            <span className="text-[#9C5A48] italic">com transparência</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Respostas claras para as dúvidas mais comuns sobre o processo de psicoterapia.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/80 bg-[#FAF7F2] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-stone-900 hover:text-[#9C5A48] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-stone-200 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FAF0EB]' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-stone-600" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-200/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 rounded-2xl bg-[#EBF2EE] border border-[#3D5A4C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-stone-900 text-base">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-stone-600 mt-0.5">Fique à vontade para me enviar uma mensagem diretamente.</p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="shrink-0 flex items-center gap-2 bg-[#3D5A4C] hover:bg-[#2e4539] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Tirar dúvida no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
