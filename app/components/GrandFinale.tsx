'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, FINALE_SLIDES, FINALE_MENU } from '@/lib/data';

export default function GrandFinale() {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [auto, setAuto] = useState(true);
  const slide = FINALE_SLIDES[idx];

  // Auto-avanço dos slides
  useEffect(() => {
    if (!auto || open) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % FINALE_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [auto, open]);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const next  = () => { setAuto(false); setIdx((i) => (i + 1) % FINALE_SLIDES.length); };
  const prev  = () => { setAuto(false); setIdx((i) => (i - 1 + FINALE_SLIDES.length) % FINALE_SLIDES.length); };
  const goto  = (i: number) => { setAuto(false); setIdx(i); };

  return (
    <section id="banquete" className="relative text-ink-50 py-24 lg:py-32 overflow-hidden">
      {/* Fundo: foto blurred (slide ativo) com camada marrom-cocoa */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A1810]/82 via-[#1A0F08]/78 to-[#2A1810]/88" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">

        {/* Cabeçalho — agora com mais respiro */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300">
            §04 · Grand Finale
          </div>
          <h2 className="lg:col-span-7 font-display tracking-tightest text-[12vw] lg:text-[7vw] leading-[0.9] font-medium">
            Um banquete<br />
            <span className="italic font-light text-ink-100">à beira-mar.</span>
          </h2>
          <div className="lg:col-span-3 lg:pt-4">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-2">
              Cap. final · Encerramento
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm">
              ★ 5 tempos · à beira-mar
            </div>
          </div>
        </div>

        {/* === LAYOUT PRINCIPAL: foto carrossel à esquerda + conteúdo à direita === */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">

          {/* Coluna foto-carrossel (lg:col-span-7) */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] lg:aspect-[5/6] relative overflow-hidden bg-ink-800 rounded-2xl">
              <AnimatePresence mode="sync">
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradiente sutil para legibilidade da legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Cap label canto superior esquerdo */}
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-50 bg-ink-900/60 backdrop-blur px-3 py-1.5 rounded-full">
                {slide.label}
              </div>

              {/* Setas de navegação */}
              <button
                onClick={prev}
                aria-label="Slide anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink-50 hover:bg-ink-900/80 hover:border-neon transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Próximo slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-ink-50 hover:bg-ink-900/80 hover:border-neon transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Indicadores numéricos abaixo da foto */}
            <div className="mt-5 grid grid-cols-4 gap-3">
              {FINALE_SLIDES.map((s, i) => {
                const isActive = i === idx;
                return (
                  <button
                    key={i}
                    onClick={() => goto(i)}
                    className="text-left group"
                  >
                    <div className={'h-px w-full transition-colors ' + (isActive ? 'bg-neon' : 'bg-ink-600 group-hover:bg-ink-300')} />
                    <div className={'mt-3 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors ' + (isActive ? 'text-neon' : 'text-ink-300')}>
                      0{i + 1}
                    </div>
                    <div className={'mt-1 text-sm tracking-tight transition-colors ' + (isActive ? 'text-ink-50' : 'text-ink-300 group-hover:text-ink-100')}>
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Coluna conteúdo (lg:col-span-5) */}
          <div className="lg:col-span-5 lg:pl-6 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neon mb-4">
                  {slide.label}
                </div>
                <h3 className="font-display tracking-tightest text-4xl lg:text-6xl leading-[0.95] font-medium mb-6">
                  {slide.title}
                </h3>
                <p className="text-ink-100 text-base lg:text-lg leading-relaxed mb-8">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Bloco descritivo geral fixo (não muda com slide) */}
            <div className="border-t hairline pt-6 mb-8">
              <p className="text-ink-200 text-sm leading-relaxed">
                Mesa montada diante do oceano, ao entardecer. Cinco tempos
                assinados pelo chef, vinhos selecionados, equipe que serve sem
                ser vista. <strong className="text-ink-50">É o capítulo
                que vocês vão guardar para sempre.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => setOpen(true)} className="pill pill-ghost">
                Ver o menu degustação
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a href={waLink} target="_blank" rel="noopener" className="pill pill-light">
                Quero viver isso
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === MODAL DE MENU (com blur) === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink-900/60 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-ink-800 border hairline rounded-2xl p-8 lg:p-12 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-3">
                Menu degustação · 5 tempos
              </div>
              <h3 className="font-display tracking-tightest text-3xl lg:text-5xl leading-none font-medium mb-10">
                A Mesa
              </h3>

              <ul className="space-y-5">
                {FINALE_MENU.map((m) => (
                  <li key={m.time} className="grid grid-cols-[40px_1fr] gap-4 pb-5 border-b hairline last:border-0">
                    <span className="font-mono text-xs tracking-wider text-neon pt-1">{m.time}</span>
                    <div>
                      <div className="text-ink-50 text-lg tracking-tighter font-medium">{m.title}</div>
                      <p className="text-ink-200 text-sm mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-ink-300 leading-relaxed">
                Cardápio referencial — pode variar conforme estação e preferências
                do casal. Vegetarianos e restrições atendidos com aviso prévio.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
