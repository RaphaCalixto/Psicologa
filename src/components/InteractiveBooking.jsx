import React, { useState } from 'react';
import { MessageCircle, Calendar, Clock, Video, Building2, Sparkles, Shield, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveBooking() {
  const [modality, setModality] = useState('online');
  const [period, setPeriod] = useState('tarde');
  const [reason, setReason] = useState('esgotamento');
  const [userName, setUserName] = useState('');

  const reasonOptions = [
    { id: 'esgotamento', label: 'Esgotamento Emocional & Burnout' },
    { id: 'ansiedade', label: 'Ansiedade & Crises de Pânico' },
    { id: 'tristeza', label: 'Tristeza / Desânimo Constante' },
    { id: 'relacionamento', label: 'Relacionamento & Limites' },
    { id: 'autoconhecimento', label: 'Autoconhecimento & Mudança de Vida' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err) {}

    const phone = "5511999999999";
    const modalityText = modality === 'online' ? 'Online (Vídeo)' : 'Presencial (Consultório)';
    const periodText = period === 'manha' ? 'Manhã' : period === 'tarde' ? 'Tarde' : 'Noite';
    const reasonText = reasonOptions.find(r => r.id === reason)?.label || 'Psicoterapia';
    const nameGreeting = userName.trim() ? `Meu nome é ${userName.trim()}.` : '';

    const message = `Olá, Psicóloga Vera Miranda! ${nameGreeting}
Gostaria de agendar uma primeira consulta de psicoterapia.
📌 Formato: ${modalityText}
📌 Preferência de horário: Período da ${periodText}
📌 Foco principal: ${reasonText}

Poderia me informar os dias e horários livres mais próximos? Obrigado(a)!`;

    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    }, 400);
  };

  return (
    <section id="agendar" className="py-20 lg:py-28 bg-gradient-to-b from-[#FAF7F2] to-[#F5EBE6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200/80 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0EB] text-[#9C5A48] text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Agendamento Facilitado
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
              Dê o primeiro passo hoje mesmo
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Personalize sua solicitação em poucos segundos. Você será direcionado(a) diretamente para o WhatsApp da Dra. Vera.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. Modality */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-3">
                1. Onde você prefere ser atendido(a)?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setModality('online')}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all text-left ${
                    modality === 'online'
                      ? 'border-[#3D5A4C] bg-[#EBF2EE] text-[#3D5A4C] shadow-sm'
                      : 'border-stone-200 bg-stone-50 hover:bg-white text-stone-700'
                  }`}
                >
                  <Video className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold text-sm block">Online (Vídeo Chamada)</span>
                    <span className="text-xs opacity-80">Do conforto da sua casa</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('presencial')}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all text-left ${
                    modality === 'presencial'
                      ? 'border-[#9C5A48] bg-[#FAF0EB] text-[#9C5A48] shadow-sm'
                      : 'border-stone-200 bg-stone-50 hover:bg-white text-stone-700'
                  }`}
                >
                  <Building2 className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold text-sm block">Presencial (Consultório)</span>
                    <span className="text-xs opacity-80">Ambiente privativo e silencioso</span>
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Reason */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-3">
                2. Qual é a sua principal necessidade no momento?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {reasonOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setReason(opt.id)}
                    className={`p-3.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      reason === opt.id
                        ? 'border-[#9C5A48] bg-[#9C5A48] text-white shadow-md'
                        : 'border-stone-200 bg-stone-50/80 hover:bg-white text-stone-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Preferred Time & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-3">
                  3. Melhor período para você:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'manha', label: 'Manhã (08h - 12h)' },
                    { id: 'tarde', label: 'Tarde (13h - 18h)' },
                    { id: 'noite', label: 'Noite (18h - 21h)' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPeriod(p.id)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                        period === p.id
                          ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                          : 'border-stone-200 bg-stone-50 hover:bg-white text-stone-700'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-700 tracking-wider mb-3">
                  4. Como você prefere ser chamado(a)? (Opcional)
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Seu primeiro nome..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#9C5A48]/30 focus:border-[#9C5A48] text-sm bg-stone-50"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-8 rounded-2xl font-bold text-base shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Confirmar e Enviar Mensagem no WhatsApp</span>
                <Send className="w-4 h-4 opacity-90" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-stone-500">
                <Shield className="w-3.5 h-3.5 text-[#3D5A4C]" />
                <span>Seus dados são 100% confidenciais e protegidos pelo sigilo do CFP.</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
