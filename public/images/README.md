# Imagens — onde colocar as suas

Salve cada arquivo aqui em `/public/images/` com o nome exato indicado.
Os componentes referenciam estes paths automaticamente — se o arquivo
existir, ele é usado; senão, um placeholder do Unsplash é mostrado.

---

## Mapeamento — fotos enviadas pelo cliente

| Salvar como             | Foto enviada                                          | Onde aparece              |
|-------------------------|-------------------------------------------------------|---------------------------|
| `hero-poster.jpg`       | **Foto 3** — Vista panorâmica do mar pela janela     | Hero (background)         |
| `oferta.jpg`            | **Foto 1** — Cama king com tela da palmeira          | Editorial Offer           |
| `faq-flor.jpg`          | **Foto 4** — Estrelícia (flor tropical)              | Sidebar do FAQ            |
| `claim.jpg`             | **Foto 5** — Píer de madeira ao pôr do sol           | Seção "Algumas viagens"   |

> **Foto 2 (camas twin)** não foi usada porque visualmente quebra a vibe
> de casal romântico. Pode ser usada se você decidir adicionar uma seção
> de "tipos de acomodação" mais à frente.

---

## Imagens dos pontos da bússola (opcional — atualmente usa Unsplash)

Se quiser trocar por fotos suas dos lugares reais:

| Salvar como               | Conteúdo sugerido                              |
|---------------------------|-----------------------------------------------|
| `compass-historico.jpg`   | Centro Histórico de Angra (casarões, igrejas) |
| `compass-lancha.jpg`      | Lancha privativa atracada em ilha             |
| `compass-verde.jpg`       | Lagoa Verde · pode ser sua **Foto 4**         |
| `compass-ilha.jpg`        | Ilha Grande · Lagoa Azul                      |
| `compass-banquete.jpg`    | Mesa montada à beira-mar                      |

Para usar as fotos locais, edite [`lib/data.ts`](../../lib/data.ts) e troque
o `image:` de cada ponto pelo path local (ex: `/images/compass-verde.jpg`).

---

## Imagens do carrossel do Grand Finale (opcional)

| Salvar como        | Conteúdo                                  |
|--------------------|-------------------------------------------|
| `finale-1.jpg`     | A mesa posta · close                      |
| `finale-2.jpg`     | A vista do banquete · ampla               |
| `finale-3.jpg`     | O serviço · garçom servindo / mãos        |
| `finale-4.jpg`     | O finale · sobremesa, vinho do porto      |

Trocar em [`lib/data.ts`](../../lib/data.ts) → `FINALE_SLIDES` → `image:`.

---

## Imagens da galeria horizontal

| Arquivo            | Sugestão                       |
|--------------------|--------------------------------|
| `gallery-01.jpg`   | Mar aberto · manhã             |
| `gallery-02.jpg`   | Centro histórico · entardecer  |
| `gallery-03.jpg`   | Lancha privativa               |
| `gallery-04.jpg`   | Lagoa Azul · Ilha Grande       |
| `gallery-05.jpg`   | Pôr do sol da varanda          |
| `gallery-06.jpg`   | A mesa do Grand Finale         |

Trocar em [`lib/data.ts`](../../lib/data.ts) → `GALLERY` → `src:`.

---

## Vídeo do Hero

Salve seu MP4 em **`/public/video/hero.mp4`**:

- Duração: 10 a 20 segundos em loop
- **Sem áudio** (autoplay precisa ser `muted`)
- Tamanho final: máximo 6 MB
- Resolução: 1920x1080 ou 2560x1440
- Comprima com [HandBrake](https://handbrake.fr) — preset Web Optimized

Enquanto não houver MP4, a foto do hero (`hero-poster.jpg`) aparece estática.

---

## Outras imagens (SEO / compartilhamento)

| Arquivo        | Para quê                                              |
|----------------|------------------------------------------------------|
| `og-cover.jpg` | 1200x630 — preview ao compartilhar no WhatsApp/IG/FB |
| `favicon.png`  | 32x32 ou 64x64 — ícone da aba do navegador           |

---

## Dicas finais

- **Sempre comprima** em https://tinypng.com antes de subir (alvo: <400 KB).
- **Prefira `.webp`** quando possível (mais leve, mesma qualidade).
  Apenas troque o nome no path: `hero-poster.jpg` → `hero-poster.webp`.
- **Mantenha as proporções** sugeridas para evitar cortes feios.
