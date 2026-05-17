'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CreditCard } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, PAYMENT_URL, INCLUDED } from '@/lib/data';

export default function EditorialOffer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="oferta" className="relative text-ink-50 py-28 lg:py-40 overflow-hidden">
      {/* Fundo romântico — foto da cama-king (close íntimo com toalhas-leques).
          `bg-fixed` cria parallax no desktop; no mobile usa `bg-scroll` porque
          iOS Safari tem bugs com bg-fixed em viewports pequenos. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll lg:bg-fixed"
        style={{ backgroundImage: 'url(/images/cama-king.jpg)' }}
      />
      {/* Camada marrom quente para ler o conteúdo, mas a foto continua respirando */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1810]/80 via-[#1F1208]/72 to-[#2A1810]/85" />
      {/* Glow dourado discreto */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A574 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">

        {/* Editorial header — capa de revista */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300">
            §05 · A Oferta
          </div>
          <h2 className="lg:col-span-7 font-display tracking-tightest text-[12vw] lg:text-[clamp(3rem,7vw,6rem)] leading-[0.9] font-medium">
            Dia dos Namorados.<br />
            <span className="italic font-light text-ink-100">Edição limitada.</span>
          </h2>
          <div className="lg:col-span-3 lg:pt-4">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-2">
              Volume.01 · Junho 2026
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm">
              ★ Apenas 6 vagas
            </div>
          </div>
        </div>

        {/* Editorial card */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">

          {/* Foto editorial — usa a imagem do quarto king (íntima, romântica)
              Salve sua FOTO 1 (cama king com tela da palmeira) como
              /public/images/oferta.jpg */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[4/5] lg:aspect-auto overflow-hidden rounded-2xl"
          >
            <img
              src="/images/quarto-king.jpg"
              alt="Suite king com vista mar em Angra dos Reis"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

            {/* Mini-tag no topo */}
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-ink-900/70 backdrop-blur px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Vista mar · Privativo</span>
            </div>

            {/* Caption inferior */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-ink-50">
              <div className="font-mono text-[10px] tracking-[0.2em]">Suite King</div>
              <div className="font-mono text-[10px] tracking-[0.2em]">4 DIAS / 3 NOITES</div>
            </div>
          </motion.div>

          {/* Bloco de preço */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="border-t hairline pt-8">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-3">
                Investimento · Casal
              </div>
              {/* TODO: substituir pelo preço real */}
              <div className="flex items-baseline gap-3">
                <span className="font-display tracking-tightest text-6xl lg:text-7xl font-medium leading-none">
                  R$ 24.800
                </span>
                <span className="text-ink-300 text-sm">/casal</span>
              </div>
              <p className="text-ink-200 text-sm mt-4">
                Ou em 12x de R$ 2.066 no cartão · Pix com desconto.
              </p>
            </div>

            {/* Lista do que está incluso */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {INCLUDED.map((item) => (
                <div key={item.label} className="flex gap-3 py-3 border-t hairline">
                  <span className="text-neon">+</span>
                  <div>
                    <div className="text-ink-50 text-sm tracking-tight">{item.label}</div>
                    <div className="text-ink-300 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={waLink} target="_blank" rel="noopener" className="pill pill-light flex-1 justify-center">
                Falar com o concierge
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={PAYMENT_URL} className="pill pill-ghost flex-1 justify-center">
                <CreditCard className="w-4 h-4" />
                Pagar agora
              </a>
            </div>
            <p className="mt-4 text-[11px] text-ink-300 tracking-wide text-center sm:text-left">
              ✓ Pagamento seguro &nbsp;·&nbsp; ✓ Cancelamento flexível &nbsp;·&nbsp; ✓ Concierge 24h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
