'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ as ITEMS } from '@/lib/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative text-ink-50 py-28 lg:py-40 overflow-hidden">

      {/* Fundo: gradiente quente sutil + camada de textura de pontos discreta (estilo Teresa Pérez) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A1A12] via-[#1A0F08] to-[#241914]" />

      {/* Textura de pontos sutil — como um mapa-múndi minimalista */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,165,116,0.7) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Glow dourado SUTIL no topo central */}
      <div
        className="absolute -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #D4A574 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* COLUNA ESQUERDA: título grande + foto circular elegante */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-10">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300">
              §06 · FAQ
            </div>
            <h2 className="font-display tracking-tightest text-[14vw] lg:text-[clamp(3rem,6.5vw,5.5rem)] leading-[0.92] font-medium">
              Perguntas.<br />
              <em className="italic font-light text-ink-100">Respostas francas.</em>
            </h2>
            <p className="text-ink-200 text-base leading-relaxed max-w-md">
              Tudo o que casais costumam querer saber antes de fechar.
              Algo ficou de fora? Fale com nosso concierge — respondemos
              em poucas horas.
            </p>

            {/* Foto circular com borda pontilhada — estilo Teresa Pérez */}
            <div className="relative aspect-square w-full max-w-[360px]">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="50" cy="50" r="49.4"
                  fill="none"
                  stroke="rgba(212,165,116,0.45)"
                  strokeWidth="0.15"
                  strokeDasharray="0.4 1.2"
                />
              </svg>

              <div className="absolute inset-3 rounded-full overflow-hidden">
                <img
                  src="/images/flor.jpg"
                  alt="Detalhe tropical · Angra"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0F08]/30 via-transparent to-transparent" />
              </div>

              {/* Pin label estilo Teresa */}
              <div className="absolute -bottom-6 -right-2 lg:-right-8 font-mono text-[10px] tracking-[0.25em] uppercase text-warm">
                ★ Angra · BR
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: accordion limpo */}
          <div className="lg:col-span-7 border-t hairline">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b hairline">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-7 lg:py-8 text-left group"
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-ink-300 hidden sm:block">
                        0{i + 1}
                      </span>
                      <span className="font-display tracking-tighter text-xl lg:text-2xl font-medium transition-colors group-hover:text-warm">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={
                        'flex-shrink-0 w-10 h-10 rounded-full border hairline flex items-center justify-center transition-all duration-500 ' +
                        (isOpen ? 'rotate-45 bg-warm text-[#1A0F08] border-warm' : 'rotate-0 text-ink-50')
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 lg:pb-10 sm:pl-[58px] text-ink-200 text-base leading-relaxed max-w-3xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
