'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Plus, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
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
  const prev   = () => { setAuto(false); setActive((i) => (i - 1 + POINTS.length) % POINTS.length); };
  const next   = () => { setAuto(false); setActive((i) => (i + 1) % POINTS.length); };
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
          <h2 className="lg:col-span-7 font-display tracking-tightest text-[12vw] lg:text-[clamp(3rem,6.5vw,5.5rem)] leading-[0.92] font-medium max-w-[14ch] text-ink-50">
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

          {/* COLUNA 1: BÚSSOLA UNIFICADA — foto sempre dentro do círculo rotativo (mobile + desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col items-center lg:items-center">
            <div className="relative aspect-square w-full max-w-[500px] lg:max-w-[680px] mx-auto">
              {/* Anéis decorativos */}
              <div className="absolute inset-0  rounded-full border hairline" />
              <div className="absolute inset-4  rounded-full border hairline" />
              <div className="absolute inset-8  rounded-full border hairline" />

              {/* Cardeais */}
              <span className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">N</span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">E</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">S</span>
              <span className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.2em] text-ink-300">W</span>

              {/* Indicador do ponto ativo no topo da bússola */}
              <div className="pointer-events-none absolute top-[2%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-warm shadow-[0_0_14px_3px_rgba(212,165,116,0.6)] z-20" />

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

              {/* Foto sempre dentro do círculo da bússola (mobile + desktop) — mais protagonista */}
              <div className="absolute inset-[10%] rounded-full overflow-hidden bg-ink-800">
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

              {/* Pin label estilo Teresa Pérez (somente desktop, posicionado fora do círculo à direita) */}
              <div className="hidden lg:flex absolute bottom-[8%] right-[-14%] items-start gap-2 text-ink-50 z-30">
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

            {/* Mobile: navegação completa (badge + nome + setas + dots) abaixo da bússola */}
            <div className="lg:hidden mt-8 w-full max-w-[440px] mx-auto">
              {/* Badge + nome do ponto ativo (anima na troca) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-5"
                >
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm mb-2">
                    {point.badge}
                  </div>
                  <div className="font-display text-2xl tracking-tightest font-medium text-ink-50">
                    {point.name}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Linha de navegação: ← [dots clicáveis] → */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Capítulo anterior"
                  className="w-11 h-11 rounded-full border hairline flex items-center justify-center text-ink-100 hover:border-warm hover:text-warm transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-2 items-center px-2">
                  {POINTS.map((p, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={p.id}
                        onClick={() => select(i)}
                        aria-label={p.name}
                        className={
                          'rounded-full transition-all duration-500 ease-expo-out ' +
                          (isActive
                            ? 'w-8 h-2 bg-warm shadow-[0_0_12px_2px_rgba(212,165,116,0.4)]'
                            : 'w-2 h-2 bg-ink-400 hover:bg-ink-200')
                        }
                      />
                    );
                  })}
                </div>

                <button
                  onClick={next}
                  aria-label="Próximo capítulo"
                  className="w-11 h-11 rounded-full border hairline flex items-center justify-center text-ink-100 hover:border-warm hover:text-warm transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pequena label decorativa abaixo da bússola (apenas desktop) */}
            <div className="hidden lg:block mt-6 font-mono text-[9px] tracking-[0.3em] uppercase text-ink-300">
              ★ Rota Privativa
            </div>
          </div>

          {/* COLUNA 2: TEXTO + LISTA (era 3 antes, agora é 2 já que a foto foi pra dentro da bússola) */}
          <div className="lg:col-span-5 order-3 lg:order-2 relative">
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
