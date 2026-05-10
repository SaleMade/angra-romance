'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '@/lib/data';

/**
 * Galeria com scroll horizontal natural (sem scroll-jacking).
 * Cada foto revela um pequeno texto de contexto ao passar o mouse (hover).
 */
export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!ref.current) return;
    const w = ref.current.clientWidth;
    ref.current.scrollBy({
      left: dir === 'left' ? -w * 0.7 : w * 0.7,
      behavior: 'smooth',
    });
  };

  return (
    <section id="galeria" className="relative text-ink-50 py-24 lg:py-32 overflow-hidden">
      {/* Fundo: pier.jpg vísivel + camada marrom mais leve */}
      <div className="absolute inset-0">
        <img
          src="/images/pier.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-md opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A1810]/65 via-[#1A0F08]/55 to-[#2A1810]/72" />
      </div>

      {/* === CABEÇALHO — título alinhado à ESQUERDA, setas à direita === */}
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 mb-10 lg:mb-14">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          {/* Bloco título (esquerda, ocupa 9 colunas) */}
          <div className="lg:col-span-9">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-5">
              §03 · Galeria
            </div>
            <h2 className="font-display tracking-tightest text-[14vw] lg:text-[7vw] leading-[0.9] font-medium">
              Angra<br />
              <em className="italic font-light text-ink-100">a dois.</em>
            </h2>
          </div>

          {/* Setas (direita) */}
          <div className="lg:col-span-3 flex gap-2 lg:justify-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Foto anterior"
              className="w-12 h-12 rounded-full border hairline flex items-center justify-center text-ink-100 hover:border-warm hover:text-warm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próxima foto"
              className="w-12 h-12 rounded-full border hairline flex items-center justify-center text-ink-100 hover:border-warm hover:text-warm transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* === TRILHO DE FOTOS === */}
      <div
        ref={ref}
        className="relative no-scrollbar overflow-x-auto snap-x snap-mandatory scroll-smooth"
      >
        <div className="flex gap-4 lg:gap-6 px-6 lg:px-10 pb-2">
          {GALLERY.map((p, i) => (
            <figure
              key={i}
              className="snap-start flex-shrink-0 w-[78vw] sm:w-[52vw] lg:w-[36vw] aspect-[4/5] relative overflow-hidden group rounded-2xl cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-expo-out group-hover:scale-110"
              />

              {/* Gradient base — sempre visível, escurece ao hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08]/60 via-transparent to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-100" />

              {/* Gradient hover — cobre mais a foto pra legibilidade do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08]/95 via-[#1A0F08]/55 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-expo-out" />

              {/* Numerador no canto superior direito */}
              <div className="absolute top-4 right-4 bg-[#1A0F08]/60 backdrop-blur px-3 py-1.5 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase text-ink-50">
                {String(i + 1).padStart(2, '0')} / {String(GALLERY.length).padStart(2, '0')}
              </div>

              {/* Painel inferior: badge + título sempre visíveis, descrição surge no hover */}
              <figcaption className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm mb-3 transition-transform duration-700 ease-expo-out group-hover:-translate-y-1">
                  {p.caption}
                </div>
                <h3 className="font-display tracking-tightest text-2xl lg:text-3xl leading-tight font-medium text-ink-50 mb-3 transition-transform duration-700 ease-expo-out group-hover:-translate-y-1">
                  {p.title}
                </h3>
                {/* Descrição — animação: oculta por padrão, surge ao hover */}
                <p className="text-ink-100 text-sm leading-relaxed max-w-[36ch] max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-expo-out overflow-hidden">
                  {p.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 mt-8 flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.25em] text-ink-300">PROGRESSO</span>
        <div className="flex-1 h-px bg-ink-600 overflow-hidden relative">
          <div
            className="absolute inset-0 origin-left bg-warm transition-transform duration-150"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-[0.25em] text-ink-300">
          ARRASTE → / SETAS / HOVER
        </span>
      </div>
    </section>
  );
}
