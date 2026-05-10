'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/data';

const reveal = (delay = 0) => ({
  initial: { y: '110%' },
  animate: { y: '0%' },
  transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink-900"
    >
      {/* === BACKGROUND ===
          Camada 1 (sempre visível): IMAGEM em background-image — fallback Unsplash
          + tentativa de carregar /images/hero-poster.jpg primeiro (sua FOTO 3).

          Camada 2 (sobreposta quando existir): VIDEO em /public/video/hero.mp4
          (sugestão: aerial drone de Angra ao entardecer, 10–20s em loop,
          sem áudio, máx 6 MB). Enquanto o MP4 não existir, o <video> fica
          transparente e a imagem aparece atrás. */}
      {/* Camada 1 (poster): foto da vista do mar — fica visível enquanto o vídeo carrega */}
      <img
        src="/images/vista-mar.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Camada 2 (vídeo): MP4 enviado pelo cliente — autoplay sem áudio */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-transparent"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/50 to-transparent" />

      {/* HUD canto superior direito — escondido no mobile pra não sobrepor a tag REEL */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden sm:block absolute top-32 right-6 lg:right-10 text-right z-10 font-mono text-[10px] tracking-[0.2em] text-ink-200"
      >
        ANGRA DOS REIS · BRASIL
        <br />
        EDIÇÃO 2026 · PRIVATIVA
      </motion.p>

      {/* Pequena tag "play" — sugere conteúdo em vídeo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute top-28 sm:top-32 left-6 lg:left-10 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-200"
      >
        <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
          <Play className="w-3 h-3 fill-current" />
        </span>
        Reel · Junho 2026
      </motion.div>

      {/* === CONTEÚDO PRINCIPAL === */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10 pb-16 lg:pb-20 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 border hairline rounded-full px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-ink-100 backdrop-blur-sm bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Dia dos Namorados · 2026
          </span>
        </motion.div>

        {/* Title — mask reveal */}
        <h1 className="font-display tracking-tightest text-[14vw] sm:text-[12vw] lg:text-[8.5vw] leading-[0.95] font-medium text-ink-50 max-w-[12ch]">
          <span className="mask-line">
            <motion.span {...reveal(0.3)} className="block">
              O destino
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span {...reveal(0.45)} className="block italic font-light text-ink-100">
              do amor
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span {...reveal(0.6)} className="block">
              em Angra<span className="text-neon">.</span>
            </motion.span>
          </span>
        </h1>

        {/* Subtítulo + CTAs */}
        <div className="mt-10 lg:mt-14 grid lg:grid-cols-2 gap-8 lg:gap-20 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-ink-100 text-base lg:text-lg max-w-md leading-relaxed"
          >
            Quatro dias privativos para casais em Angra dos Reis e Ilha
            Grande. Um banquete autoral à beira-mar. Apenas seis vagas
            por temporada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 lg:justify-end"
          >
            <a href={waLink} target="_blank" rel="noopener" className="pill pill-light">
              Reservar minha experiência
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#bussola" className="pill pill-ghost">
              Ver o roteiro
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-ink-200"
      >
        <span>SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
      </motion.div>
    </section>
  );
}
