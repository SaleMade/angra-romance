# Como subir o site na internet

Guia passo-a-passo. Escolha **UMA** das três opções abaixo (Vercel é
recomendada — é a mais fácil e gratuita).

---

## OPÇÃO 1 — Vercel (recomendada · 5 minutos · grátis)

A Vercel é a empresa que cria o Next.js, então o deploy é otimizado.

### Passo 1 — Criar conta

1. Acesse https://vercel.com/signup
2. Clique em **"Continue with GitHub"** (mais fácil) ou cadastre com e-mail
3. Confirme o e-mail

### Passo 2 — Subir o projeto

**Caminho A — Drag & Drop (mais simples)**

1. Abra https://vercel.com/new
2. Role até **"Or, deploy any folder"** ou **"Import a project"**
3. **Arraste** a pasta `EDU` inteira pra dentro da página
4. Aguarde ~1 minuto enquanto o Vercel instala dependências e builda
5. Pronto! Você recebe uma URL como `angra-romance-xyz.vercel.app`

**Caminho B — via GitHub (recomendado para atualizações futuras)**

1. Crie conta no GitHub em https://github.com/signup (se ainda não tiver)
2. Crie um repositório novo: https://github.com/new
   - Nome: `angra-romance` (qualquer nome)
   - Visibilidade: **Private** (recomendado) ou Public
   - Não marque "Add README"
3. Suba os arquivos do projeto:

   No terminal, dentro da pasta `EDU`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/angra-romance.git
   git push -u origin main
   ```

4. Na Vercel: **New Project → Import** → escolha o repositório → **Deploy**
5. Pronto. URL `angra-romance.vercel.app`

### Passo 3 — Conectar domínio próprio (opcional)

Se você comprou um domínio (ex: `angraromance.com.br`):

1. Na Vercel, vá em **Project Settings → Domains**
2. Clique **Add Domain** e digite o seu domínio
3. A Vercel mostra dois registros DNS pra configurar
4. Vá no painel do seu registrador (Registro.br, GoDaddy, Hostinger…)
5. Adicione os registros DNS conforme instruído
6. Aguarde 10 min – algumas horas pra propagar

**Custo:**
- Hospedagem Vercel: **grátis** (até 100 GB de tráfego/mês — suficiente)
- Domínio próprio: ~R$ 40/ano no Registro.br para `.com.br`

---

## OPÇÃO 2 — Netlify (alternativa · 5 min · grátis)

Funciona muito parecido com a Vercel.

1. Crie conta em https://app.netlify.com/signup
2. Vá em https://app.netlify.com/drop
3. **Arraste a pasta `EDU` inteira** pra área indicada
4. Aguarde o build (1-2 min)
5. Pronto. URL `nome-aleatorio.netlify.app`

Para conectar domínio: **Site Settings → Domain Management → Add Custom Domain**.

---

## OPÇÃO 3 — Hostinger / cPanel tradicional (paga · ~R$ 10/mês)

Se você já tem hospedagem tradicional (compartilhada), precisa fazer o
**build estático** primeiro:

### Passo 1 — Gerar arquivos estáticos

No terminal, dentro da pasta `EDU`:
```bash
npm run build
```

Isso cria uma pasta `.next/` com o site compilado.

Para gerar HTML 100% estático (mais simples de hospedar em hospedagem
compartilhada), adicione no [`next.config.mjs`](next.config.mjs):

```js
const nextConfig = {
  output: 'export',          // ← adicione esta linha
  reactStrictMode: true,
  images: { unoptimized: true },  // ← e esta também
};
```

Rode novamente:
```bash
npm run build
```

Agora você tem uma pasta `out/` com todos os HTML/CSS/JS estáticos.

### Passo 2 — Upload via FTP/cPanel

1. Acesse o painel da hospedagem (cPanel ou hPanel)
2. Abra **Gerenciador de Arquivos**
3. Vá em `public_html/` (ou pasta raiz do domínio)
4. Faça upload de **TUDO** que está dentro de `out/` (não a pasta, o conteúdo)
5. Pronto. Acesse seu domínio.

---

## Checklist antes do deploy

Antes de subir, confira:

- [ ] **Número do WhatsApp** atualizado em [`lib/data.ts`](lib/data.ts)
  (`WHATSAPP_NUMBER = '5524999990000'` formato sem `+`)
- [ ] **Link de pagamento** em [`lib/data.ts`](lib/data.ts) (`PAYMENT_URL`)
- [ ] **Preço real** no `EditorialOffer.tsx` (procure por `R$ 24.800`)
- [ ] **E-mail, telefone, endereço** em `lib/data.ts` (objeto `BRAND`)
- [ ] **Instagram** no `Footer.tsx` (substitua o `href="#"`)
- [ ] **Datas da campanha** (atualmente "Junho 2026" — confira em vários lugares)
- [ ] **Imagens novas?** Coloque em `/public/images/` (veja
  [`public/images/README.md`](public/images/README.md))
- [ ] **Vídeo do hero**: `/public/video/hero.mp4` (atualmente o do amigo)
- [ ] **og-cover.jpg** (1200x630) em `/public/images/` para preview de
  compartilhamento no WhatsApp/Instagram

---

## Atualizações futuras

### Se usou Vercel/Netlify com GitHub:
Toda vez que fizer mudanças, é só rodar:
```bash
git add .
git commit -m "atualizei texto X"
git push
```
O site atualiza sozinho em ~1 minuto.

### Se usou drag & drop:
Arraste a pasta atualizada de novo na Vercel/Netlify.

### Se usou cPanel/Hostinger:
Rode `npm run build` localmente, suba a pasta `out/` de novo via FTP.

---

## Como rodar localmente (pra testar antes de subir)

```bash
cd EDU
npm install      # só na primeira vez
npm run dev      # roda o servidor local
```

Abre http://localhost:3000 — você vê o site em tempo real enquanto edita.

Pra parar, aperte `Ctrl+C` no terminal.

---

## Pré-requisitos

- **Node.js 18.17+** instalado (baixe em https://nodejs.org — pegue o **LTS**)
- Pra testar:
  ```bash
  node --version
  ```
  Deve mostrar `v20.x.x` ou similar.

---

## Problemas comuns

**"Module not found" ao rodar `npm run dev`**
→ Rode `npm install` de novo.

**Vídeo do hero não carrega no celular**
→ Vídeos MP4 grandes podem ser bloqueados em 3G. Comprima com
[HandBrake](https://handbrake.fr) preset "Web Optimized" — alvo < 6 MB.

**Imagens não aparecem após upload**
→ Confirme que os arquivos estão dentro de `public/images/` e os nomes
batem exatamente com os referenciados no código (case-sensitive em servidores
Linux).

**Erro de build na Vercel**
→ Geralmente é falta de uma dependência. Verifique se `package.json` está
completo e que `node_modules/` NÃO foi enviado (ele já está no `.gitignore`).

---

## Domínio próprio — onde comprar

| Onde | Preço | Observação |
|---|---|---|
| **Registro.br** | ~R$ 40/ano | `.com.br` — só pra brasileiros |
| **GoDaddy** | ~R$ 60/ano | `.com` internacional |
| **Hostinger** | ~R$ 50/ano | Tem promoções no 1º ano |
| **Cloudflare Registrar** | preço de custo | mais barato pra `.com`, mas requer cadastro internacional |

Depois de comprar, basta apontar o DNS pra Vercel/Netlify (eles te dão
as instruções exatas).

---

## Resumo TL;DR

**Mais rápido**: Vercel drag & drop → arraste a pasta `EDU` em https://vercel.com/new → 1 minuto e o site está no ar com URL `*.vercel.app`.

**Mais profissional**: GitHub + Vercel → editar texto → `git push` → deploy automático.
