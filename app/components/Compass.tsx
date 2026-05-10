'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Plus, MapPin, ChevronRight } from 'lucide-react';
import { POINTS } from '@/lib/data';

export default function Compass() {
  const [active, setActive] = useState(0);
  const point = POINTS[active];

  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % POINTS.length);
    }, 5500);
    return () => clearInterval(id);
  }, [auto]);

  const select = (i: number) => { setAuto(false); setActive(i); };
  const rotation = -point.angle;

  return (
    <section
      id="bussola"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* === BACKGROUND: foto do ponto ativo bem visível, blur sutil + tom marrom === */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={point.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'linear' }}
            className="absolute inset-0"
          >
            <img
              src={point.image}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover scale-105 blur-md opacity-90"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay marrom mais leve — a foto aparece atrás */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A1810]/55 via-[#1A0F08]/45 to-[#2A1810]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(26,15,8,0.55)_85%)]" />
      </div>

      {/* === HEADER COM TÍTULO GRANDE === */}
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 mb-16 lg:mb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-200">
            §02 · O Roteiro
          </div>
          <h2 className="lg:col-span-7 font-display tracking-tightest text-[12vw] lg:text-[6.5vw] leading-[0.92] font-medium max-w-[14ch] text-ink-50">
            Cinco capítulos.<br />
            <span className="italic font-light text-ink-100">Uma trajetória.</span>
          </h2>
          <p className="lg:col-span-3 text-ink-100 text-sm leading-relaxed">
            Quatro dias desenhados ponto a ponto. Cada parada é um capítulo —
            terminando no Grand Finale.
          </p>
        </div>
      </div>

      {/* === CORPO: 3 COLUNAS — bússola rotativa | foto central | texto === */}
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* COLUNA 1: BÚSSOLA ROTATIVA — no mobile envolve a foto, no desktop fica decorativa ao lado */}
          <div className="lg:col-span-3 order-1 lg:order-1 flex flex-col items-center lg:items-start">
            <div className="relative aspect-square w-full max-w-[420px] lg:max-w-[300px] mx-auto lg:mx-0">
              {/* Anéis decorativos */}
              <div className="absolute inset-0  rounded-full border hairline" />
              <div className="absolute inset-4  rounded-full border hairline" />
              <div className="absolute inset-8  rounded-full border hairline" />

              {/* Cardeais */}
              <span className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">N</span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">E</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">S</span>
              <span className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">W</span>

              {/* Ponteiro fixo — apenas no desktop (onde o centro está livre) */}
              <div className="hidden lg:block pointer-events-none absolute top-[6%] left-1/2 -translate-x-1/2 w-px h-[44%] bg-gradient-to-t from-warm/0 via-warm/40 to-warm" />
              <div className="hidden lg:block pointer-events-none absolute top-[4%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-warm shadow-[0_0_14px_3px_rgba(212,165,116,0.6)]" />
              {/* Mobile: indicador minimalista do ponto ativo (acima da foto) */}
              <div className="lg:hidden pointer-events-none absolute top-[2%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-warm shadow-[0_0_14px_3px_rgba(212,165,116,0.6)] z-20" />

              {/* Disco rotativo com os 5 pontos */}
              <motion.div
                className="absolute inset-0 z-10"
                animate={{ rotate: rotation }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {POINTS.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={p.id}
                      className="absolute inset-0"
                      style={{ transform: `rotate(${p.angle}deg)` }}
                    >
                      <button
                        onClick={() => select(i)}
                        aria-label={p.name}
                        className="absolute top-[4%] left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center group"
                      >
                        <span
                          className={
                            'block rounded-full transition-all duration-500 ease-expo-out ' +
                            (isActive
                              ? 'w-3 h-3 bg-warm shadow-[0_0_20px_5px_rgba(212,165,116,0.5)]'
                              : 'w-2 h-2 bg-ink-300 group-hover:bg-ink-100')
                          }
                        />
                      </button>
                    </div>
                  );
                })}
              </motion.div>

              {/* Centro: NO MOBILE foto preenche; NO DESKTOP hub com + */}
              {/* Mobile only: foto dentro do círculo da bússola */}
              <div className="lg:hidden absolute inset-[14%] rounded-full overflow-hidden bg-ink-800">
                <AnimatePresence>
                  <motion.img
                    key={point.id}
                    src={point.image}
                    alt={point.name}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0F08]/25 via-transparent to-transparent" />
              </div>

              {/* Desktop only: hub central com + */}
              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A0F08] border hairline items-center justify-center z-20">
                <Plus className="w-4 h-4 text-warm" />
              </div>
            </div>

            {/* Badge no mobile abaixo da bússola+foto (estilo pin do desktop) */}
            <div className="lg:hidden mt-6 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm"
                >
                  {point.badge}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pequena label decorativa abaixo da bússola (apenas desktop) */}
            <div className="hidden lg:block mt-6 font-mono text-[9px] tracking-[0.3em] uppercase text-ink-300">
              ★ Rota Privativa
            </div>
          </div>

          {/* COLUNA 2: FOTO CENTRAL EM CÍRCULO — apenas no desktop (no mobile já está dentro da bússola) */}
          <div className="hidden lg:block lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              {/* Anel pontilhado externo */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="50" cy="50" r="49.4"
                  fill="none"
                  stroke="rgba(212,165,116,0.45)"
                  strokeWidth="0.18"
                  strokeDasharray="0.4 1.2"
                />
              </svg>

              {/* Foto dentro do círculo */}
              <div className="absolute inset-3 rounded-full overflow-hidden bg-ink-800">
                <AnimatePresence>
                  <motion.img
                    key={point.id}
                    src={point.image}
                    alt={point.name}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0F08]/30 via-transparent to-transparent" />
              </div>

              {/* Pin label estilo Teresa Pérez — apenas em telas grandes pra não overflow no mobile */}
              <div className="hidden lg:flex absolute bottom-[8%] right-[-12%] items-start gap-2 text-ink-50">
                <svg className="w-px h-10 mt-1 overflow-visible" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(212,165,116,0.5)" strokeWidth="1" strokeDasharray="2 3" />
                </svg>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-start gap-1.5"
                    >
                      <MapPin className="w-4 h-4 mt-1 text-warm flex-shrink-0" />
                      <div>
                        <div className="text-base lg:text-lg tracking-tight font-medium whitespace-nowrap">{point.name}</div>
                        <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink-300">{point.badge}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA 3 (lg:col-span-4): TEXTO + LISTA */}
          <div className="lg:col-span-4 order-3 relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm mb-4">
                  {point.badge}
                </div>
                <h3 className="font-display tracking-tightest text-4xl lg:text-5xl leading-[0.98] font-medium mb-6 text-ink-50">
                  {point.name}
                </h3>
                <p className="text-ink-100 text-base leading-relaxed mb-5">
                  {point.desc}
                </p>
                <p className="text-ink-200 text-sm leading-relaxed border-t hairline pt-4 mb-8">
                  {point.detail}
                </p>
              </motion.article>
            </AnimatePresence>

            {/* Lista de capítulos clicável */}
            <ul className="border-t hairline">
              {POINTS.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.id} className="border-b hairline">
                    <button
                      onClick={() => select(i)}
                      className="w-full flex items-center justify-between gap-4 py-3 group transition-colors"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={'font-mono text-[10px] tracking-[0.25em] ' + (isActive ? 'text-warm' : 'text-ink-300')}>
                          {p.id}
                        </span>
                        <span className={'text-sm tracking-tight transition-colors ' + (isActive ? 'text-ink-50' : 'text-ink-200 group-hover:text-ink-50')}>
                          {p.name}
                        </span>
                      </span>
                      <ChevronRight className={'w-4 h-4 transition-all ' + (isActive ? 'text-warm translate-x-1' : 'text-ink-400')} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
