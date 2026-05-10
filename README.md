# Angra Romance — Landing

Landing page de alta conversão para campanha de **Dia dos Namorados** em
Angra dos Reis e Ilha Grande. Direção visual moderna, minimalista,
editorial — inspirada em sites como Teresa Pérez.

---

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** 3.4 (paleta dark customizada)
- **Framer Motion** para todas as animações e transições
- **Lucide React** para ícones
- **Inter** + **JetBrains Mono** via `next/font/google` (zero layout shift)

---

## Como rodar

### Pré-requisitos
- **Node.js 18.17+** (recomendado: 20 LTS). Baixe em https://nodejs.org

### Primeira vez
```bash
cd EDU
npm install
```

### Dev server
```bash
npm run dev
```
Abra http://localhost:3000

### Build de produção
```bash
npm run build
npm start
```

---

## Estrutura

```
EDU/
├── app/
│   ├── layout.tsx              ← fontes e metadata global
│   ├── page.tsx                ← composição das seções
│   ├── globals.css             ← Tailwind + animações customizadas
│   └── components/
│       ├── Header.tsx          ← sticky, marquee de escassez, mobile drawer
│       ├── Hero.tsx            ← vídeo full-viewport + mask reveal
│       ├── Compass.tsx         ← bússola interativa (Framer Motion)
│       ├── HorizontalGallery.tsx ← scroll vertical → movimento horizontal
│       ├── GrandFinale.tsx     ← banquete full-bleed + modal blurred
│       ├── EditorialOffer.tsx  ← editorial de moda: preço + diferenciais
│       ├── FAQ.tsx             ← accordion minimalista
│       ├── Footer.tsx          ← big-claim + 4 colunas
│       └── WhatsAppFloat.tsx   ← pill flutuante (aparece após scroll)
├── lib/
│   └── data.ts                 ← TEXTOS E CONFIGS — editar aqui
├── public/
│   ├── images/                 ← coloque as fotos aqui
│   └── video/                  ← coloque o hero.mp4 aqui
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## Personalização rápida

### 1. Textos
Tudo concentrado em [`lib/data.ts`](lib/data.ts):
- Nome da marca, contato, número de WhatsApp
- Pontos do roteiro (bússola)
- Itens da galeria
- Lista do que está incluso
- Perguntas do FAQ

### 2. Número do WhatsApp
Edite `WHATSAPP_NUMBER` em `lib/data.ts`. Formato internacional sem `+`.
Exemplo: `5524999990000` para `(24) 99999-0000` do Brasil.

### 3. Link de pagamento
Edite `PAYMENT_URL` em `lib/data.ts` (MercadoPago, Stripe, Hotmart, etc.).

### 4. Preço
Procure por `R$ 24.800` em `EditorialOffer.tsx` e atualize.

### 5. Imagens e vídeo
Veja [`public/images/README.md`](public/images/README.md) para o guia completo.
Resumo:
- Substituir URLs do Unsplash pelos arquivos locais
- Vídeo do hero: `/public/video/hero.mp4` (10–20s, sem áudio, <6 MB)

### 6. Cores
A paleta está em `tailwind.config.ts`:
- `ink-900` (`#0A0A0B`) — fundo principal
- `gold` (`#C9A455`) — detalhes
- `neon` (`#5BE9E0`) — acentos interativos

---

## Animações destacadas

| Onde         | Efeito                                                  |
|--------------|----------------------------------------------------------|
| Hero         | Mask reveal por linha (entrada do título)               |
| Header       | Backdrop blur surge ao scroll > 40px                     |
| Compass      | Disco rotaciona suave para o ponto ativo                |
| Galeria      | Scroll vertical → translação horizontal sincronizada    |
| Grand Finale | Modal abre com blur intenso do background               |
| FAQ          | Altura animada do `<details>` com easing expo-out       |
| WhatsApp     | Sobe da base após 600px de scroll                       |

Todas as animações respeitam `prefers-reduced-motion`.

---

## Deploy

### Vercel (recomendado — feito pelo time do Next.js)
```bash
npm install -g vercel
vercel
```
Ou faça login em https://vercel.com → New Project → Import this folder.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Domínio próprio
Tanto Vercel quanto Netlify permitem conectar seu domínio na aba **Settings**
→ **Domains**. Você cola um CNAME no seu provedor (Registro.br, GoDaddy...).

---

## Performance

- ✅ `next/font` evita layout shift de fontes
- ✅ Imagens com `loading="lazy"` (no Next, basta usar `<Image>` para otimização automática)
- ✅ Framer Motion tree-shakeable
- ✅ Tailwind purga CSS não usado no build
- ✅ `prefers-reduced-motion` desliga animações pesadas
- ✅ Estático no build (sem SSR custoso) — pode ir em CDN

---

## Acessibilidade

- Hierarquia correta de headings (`h1` único, `h2` por seção)
- `aria-label` em botões sem texto
- `:focus-visible` com outline neon
- Contraste WCAG AA em todos os textos
- Animações desligam em `prefers-reduced-motion`

---

## Próximos passos sugeridos

- [ ] Trocar Unsplash placeholders pelas fotos reais
- [ ] Adicionar o vídeo do hero (`/public/video/hero.mp4`)
- [ ] Configurar `WHATSAPP_NUMBER` e `PAYMENT_URL`
- [ ] Substituir textos placeholder em `lib/data.ts`
- [ ] Trocar `og-cover.jpg` para compartilhamento social
- [ ] (Opcional) Integrar formulário de captura → e-mail/CRM
- [ ] (Opcional) Adicionar Google Analytics / Meta Pixel
