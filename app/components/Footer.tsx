import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1A0F08] text-ink-200 border-t hairline pt-16 pb-8 overflow-hidden">
      {/* Tom quente sutil no fundo do footer também — nunca preto puro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1208] to-[#1A0F08] pointer-events-none" />
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">

        {/* Grid de links e contato */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <div className="text-ink-50 text-base tracking-tighter mb-2">{BRAND.name}</div>
            <p className="text-ink-300 text-sm max-w-xs leading-relaxed mb-6">{BRAND.tagline}</p>
            <div className="flex gap-2">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener"
                 className="w-10 h-10 rounded-full border hairline flex items-center justify-center hover:bg-neon hover:text-ink-900 hover:border-neon transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-4">
              Navegação
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#bussola"   className="hover:text-ink-50 transition">Roteiro</a></li>
              <li><a href="#banquete"  className="hover:text-ink-50 transition">O Banquete</a></li>
              <li><a href="#galeria"   className="hover:text-ink-50 transition">Galeria</a></li>
              <li><a href="#oferta"    className="hover:text-ink-50 transition">A Oferta</a></li>
              <li><a href="#faq"       className="hover:text-ink-50 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-300 mb-4">
              Contato
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-ink-50 transition">{BRAND.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-ink-50 transition">{BRAND.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon" />
                <span>{BRAND.city}</span>
              </li>
            </ul>
          </div>

          {/* Selo decorativo */}
          <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.25em] text-ink-300 leading-relaxed">
            EST · 2026<br />
            <span className="text-neon">★ ANGRA</span><br />
            <span className="text-ink-400">PRIVATIVO</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t hairline pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] tracking-wide text-ink-400">
          <p>© {year} {BRAND.name}. Todos os direitos reservados.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-ink-50">Termos</a>
            <a href="#" className="hover:text-ink-50">Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
