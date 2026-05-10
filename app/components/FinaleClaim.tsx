'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/data';

/**
 * Seção de encerramento com foto-clímax full-bleed.
 * Quebra a sequência de seções dark com a foto do píer ao pôr do sol.
 *
 * Imagem usada: /public/images/claim.jpg
 * (sua FOTO 5 — píer de madeira ao pôr do sol)
 */
export default function FinaleClaim() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative h-[110vh] overflow-hidden bg-[#0E2A30]">
      {/* Imagem com efeito ken-burns sutil */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="/images/pier.jpg"
          alt="Píer ao pôr do sol em Angra dos Reis"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay para contraste — tom marrom-cocoa em vez de preto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1810]/40 via-[#1A0F08]/25 to-[#1A0F08]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F08]/45 to-transparent" />

      {/* Conteúdo central */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1500px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
            ★ O Encerramento
          </div>
          <h2 className="font-display tracking-tightest text-[14vw] sm:text-[12vw] lg:text-[8vw] leading-[0.92] font-medium text-ink-50 mb-10">
            Algumas viagens<br />
            <span className="italic font-light text-ink-100">
              são para sempre.
            </span>
          </h2>
          <p className="text-ink-100 text-base lg:text-lg leading-relaxed max-w-md mb-10">
            Reservamos apenas seis vagas por temporada — e os casais que viveram
            essa experiência dizem que o tempo da viagem se mede diferente.
            Vocês estão prontos?
          </p>
          <a href={waLink} target="_blank" rel="noopener" className="pill pill-light">
            Garantir minha vaga agora
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* HUD canto inferior */}
      <div className="absolute bottom-6 right-6 lg:right-10 z-10 font-mono text-[10px] tracking-[0.25em] text-ink-200 text-right">
        ANGRA DOS REIS · BR<br />
        <span className="text-gold">★</span> EDIÇÃO 2026
      </div>
    </section>
  );
}
