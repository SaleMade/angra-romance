// Dados do site, separados pra facilitar troca pelo cliente.
// Edite aqui textos sem precisar mexer nos componentes.

export const WHATSAPP_NUMBER = '5500000000000'; // TODO: número internacional sem +
export const WHATSAPP_MESSAGE =
  'Olá! Quero saber mais sobre a experiência de Dia dos Namorados em Angra.';

export const PAYMENT_URL = '#'; // TODO: link de pagamento (MercadoPago/Stripe/Hotmart)

export const BRAND = {
  name:    'Angra Romance',
  tagline: 'Experiências privativas para casais.',
  city:    'Angra dos Reis · RJ',
  email:   'contato@seusite.com.br',
  phone:   '+55 (00) 00000-0000',
};

// === Paradas do roteiro (bússola) ===
// `angle` controla onde o ponto aparece no disco (0 = topo, 72 = horário, etc.)
// `image` é a foto exibida no painel direito quando o ponto está ativo.
// Após salvar suas fotos em /public/images/, basta trocar o `image` por o path local.
export const POINTS = [
  {
    id:     '01',
    name:   'Centro Histórico',
    badge:  'Cap.01 · A Chegada',
    desc:   'Casarões coloniais, igrejas seiscentistas, ruas de pedra. O começo da imersão.',
    detail: 'Tour guiado de fim de tarde, jantar autoral em casa centenária e drinks no rooftop com vista da baía.',
    image:  'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1600&q=80',
    angle:  0,
  },
  {
    id:     '02',
    name:   'Lancha Privativa',
    badge:  'Cap.02 · O Mar',
    desc:   'Embarcação só de vocês, capitão e tripulação dedicados. Oito horas de mar aberto.',
    detail: 'Ancoragens em ilhas desertas, mergulho em águas turquesa, almoço a bordo com chef e taças geladas.',
    image:  '/images/pier.jpg',
    angle:  72,
  },
  {
    id:     '03',
    name:   'Lagoa Verde',
    badge:  'Cap.03 · A Pausa',
    desc:   'Tons esverdeados, fundo de areia branca. Pausa para um almoço ao ar livre.',
    detail: 'Mesa montada na frente do mar, peixe-do-dia preparado na hora, pés na areia. O tempo desacelera.',
    image:  '/images/flor.jpg',
    angle:  144,
  },
  {
    id:     '04',
    name:   'Ilha Grande',
    badge:  'Cap.04 · A Imersão',
    desc:   'A maior ilha da baía. Trilhas curtas, praias vazias e silêncio absoluto.',
    detail: 'Travessia privativa, visita à Lagoa Azul para mergulho com snorkel, banho em cachoeira escondida.',
    image:  '/images/vista-mar.jpg',
    angle:  216,
  },
  {
    id:     '05',
    name:   'O Banquete',
    badge:  'Cap.05 · O Finale',
    desc:   'Mesa montada à beira-mar ao entardecer. O capítulo que ninguém esquece.',
    detail: 'Cinco tempos autorais, vinhos selecionados, equipe que serve sem ser vista, tochas se acendendo enquanto o sol cai.',
    image:  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    angle:  288,
  },
];

// === Galeria horizontal (scroll natural) ===
// Cada item tem caption (badge), title (nome curto) e desc (texto que aparece no hover).
export const GALLERY = [
  {
    src:     'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cap.01 · Manhã',
    title:   'O despertar na baía',
    desc:    'Ancorados em mar aberto — luz dourada nas ilhas vizinhas, café da manhã sobre a água e o silêncio só interrompido pelas ondas.',
  },
  {
    src:     'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cap.02 · Centro Histórico',
    title:   'Patrimônio colonial',
    desc:    'Casarões dos séculos XVII e XVIII, ruas de pedra centenárias e a Igreja do Carmo iluminada ao entardecer.',
  },
  {
    src:     'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cap.03 · Lancha Privativa',
    title:   'Só de vocês, no mar',
    desc:    'Oito horas de embarcação reservada — capitão e tripulação dedicados, paradas em ilhas desertas para mergulho e almoço a bordo.',
  },
  {
    src:     'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cap.04 · Ilha Grande',
    title:   'Lagoa Azul',
    desc:    'Travessia até a maior ilha da baía. Fundo de areia branca, mergulho com snorkel em águas turquesa — um refúgio quase secreto.',
  },
  {
    src:     'https://images.unsplash.com/photo-1502780402662-acc01917e4e2?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cap.05 · Hotel',
    title:   'Crepúsculo da varanda',
    desc:    'Vista privilegiada para a baía, taça de espumante na mão e o pôr do sol pintando o céu de tons quentes antes do banquete.',
  },
  {
    src:     'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cap.06 · Grand Finale',
    title:   'O banquete autoral',
    desc:    'Mesa montada à beira-mar, cinco tempos assinados pelo chef, vinhos selecionados — o capítulo que vocês jamais esquecerão.',
  },
];

// === Slides do Grand Finale (carrossel com setas) ===
// TODO: trocar `image` por paths locais (/images/finale-1.jpg, etc.)
// quando você tiver fotos do banquete real.
export const FINALE_SLIDES = [
  {
    title: 'A mesa',
    label: 'Cap.01 · Cenário',
    desc:  'Toalha de linho, velas baixas, talheres de prata e cristais que pegam o último brilho do sol.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'A vista',
    label: 'Cap.02 · O lugar',
    desc:  'Diante do oceano, em um deck reservado só para vocês. Mar e ilhas se desdobrando até o horizonte.',
    image: 'https://images.unsplash.com/photo-1502780402662-acc01917e4e2?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'O serviço',
    label: 'Cap.03 · O detalhe',
    desc:  'Equipe dedicada exclusivamente ao casal. Servem sem interromper conversa, retiram sem som.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'O finale',
    label: 'Cap.04 · A despedida',
    desc:  'Sobremesa autoral, vinho do porto, fogos discretos refletindo no mar. Um final inesquecível.',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1800&q=80',
  },
];

// Menu degustação do banquete (modal/painel detalhado)
export const FINALE_MENU = [
  { time: 'I',   title: 'Amuse-bouche', desc: 'Vieira, citrus, manjericão da casa.' },
  { time: 'II',  title: 'Entrada',      desc: 'Carpaccio de peixe-branco, alcaparras crocantes.' },
  { time: 'III', title: 'Intervalo',    desc: 'Sorbet de tangerina, espumante seco.' },
  { time: 'IV',  title: 'Principal',    desc: 'Robalo grelhado em folha de bananeira, purê de mandioquinha.' },
  { time: 'V',   title: 'Finale',       desc: 'Mousse de chocolate 70%, frutas do quintal, vinho do porto.' },
];

// === Pacote — diferenciais (cards) ===
export const INCLUDED = [
  { label: 'Hospedagem premium',  desc: '3 noites em hotel-boutique selecionado.' },
  { label: 'Lancha privativa',    desc: '8h de embarcação exclusiva, com capitão.' },
  { label: 'Banquete autoral',    desc: 'Menu de 5 tempos à beira-mar, com chef.' },
  { label: 'Ensaio fotográfico',  desc: 'Profissional ao pôr do sol, fotos editadas.' },
  { label: 'Transfer completo',   desc: 'Aeroporto, hospedagem e passeios inclusos.' },
  { label: 'Concierge 24/7',      desc: 'Atendimento dedicado em todo o roteiro.' },
];

// === FAQ ===
export const FAQ = [
  {
    q: 'Quando acontece a edição 2026?',
    a: 'Em junho de 2026, com datas combinadas individualmente após a reserva.',
  },
  {
    q: 'Quantos casais por temporada?',
    a: 'Apenas 6. Trabalhamos com turmas pequenas para manter a privacidade total.',
  },
  {
    q: 'O que está incluso no pacote?',
    a: 'Hospedagem, transfers, passeios, lancha privativa, todas as refeições do roteiro, banquete final, ensaio fotográfico e seguro viagem.',
  },
  {
    q: 'E o que NÃO está incluso?',
    a: 'Passagens aéreas até o Rio/Angra, despesas pessoais e atividades opcionais (ex: spa). Cotamos tudo isso à parte se quiserem.',
  },
  {
    q: 'Posso parcelar?',
    a: 'Sim. Até 12x no cartão ou desconto à vista no Pix.',
  },
  {
    q: 'Política de cancelamento?',
    a: 'Reembolso integral até 30 dias antes. Reembolso parcial entre 30 e 15 dias. Detalhes no contrato.',
  },
];
