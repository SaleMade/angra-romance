'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, BRAND } from '@/lib/data';

const NAV = [
  { label: 'Roteiro',     href: '#bussola' },
  { label: 'O Banquete',  href: '#banquete' },
  { label: 'Galeria',     href: '#galeria' },
  { label: 'A Oferta',    href: '#oferta' },
  { label: 'FAQ',         href: '#faq' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40);
  });

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Marquee fino superior — com gradient fade descendo no marrom (esmaecer no hero) */}
      <div className="fixed inset-x-0 top-0 z-50 overflow-hidden pointer-events-none">
        {/* Camada de fade: opaca no topo, desbota até transparente em ~80px */}
        <div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-[#1A0F08] from-30% via-[#1A0F08]/65 to-transparent" />
        {/* Conteúdo do marquee (texto rolando), na parte sólida */}
        <div className="relative pointer-events-auto flex whitespace-nowrap animate-marquee py-2 text-[11px] tracking-[0.3em] uppercase text-ink-300">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8">
              <span>Edição Limitada</span>
              <span className="text-gold">★</span>
              <span>Junho 2026</span>
              <span className="text-gold">★</span>
              <span className="text-ink-50">Apenas 6 vagas</span>
              <span className="text-gold">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Header principal */}
      <motion.header
        className="fixed inset-x-0 top-[28px] z-40 transition-colors duration-500"
        animate={{
          backgroundColor: scrolled ? 'rgba(26,15,8,0.75)' : 'rgba(26,15,8,0)',
          backdropFilter:  scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
          {/* Logo — compacto no mobile */}
          <a href="#top" className="flex items-center gap-2 group min-w-0">
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.25em] text-ink-300">EST · 2026</span>
            <span className="text-ink-50 text-sm sm:text-base tracking-tighter font-medium whitespace-nowrap">
              {BRAND.name}
            </span>
          </a>

          {/* Nav central — desktop */}
          <nav className="hidden lg:flex items-center gap-9 text-[13px] text-ink-100">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative group transition-colors hover:text-ink-50"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon transition-all duration-500 ease-expo-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA direita */}
          <div className="flex items-center gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="pill pill-light hidden md:inline-flex text-[13px]"
            >
              Reservar
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-ink-50"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Overlay mobile */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-30 bg-[#1A0F08] lg:hidden flex flex-col pt-32 px-8"
      >
        <nav className="flex flex-col gap-1 text-3xl tracking-tightest font-medium">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b hairline flex items-baseline gap-4 hover:text-neon transition-colors"
            >
              <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener"
          className="pill pill-light mt-10 justify-center"
        >
          Reservar minha experiência
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </>
  );
}
