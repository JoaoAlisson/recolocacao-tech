import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type ContentCategory = "minicurso" | "guia" | "mapa";

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  category: ContentCategory;
  order: number;
  fileName: string;
  readTimeMin: number;
};

export const contentIndex: ContentItem[] = [
  {
    slug: "visao-geral",
    title: "Visao Geral do Minicurso",
    description: "Estrutura dos 3 dias, racional de tempo e como usar o material.",
    category: "minicurso",
    order: 0,
    fileName: "README.md",
    readTimeMin: 4,
  },
  {
    slug: "dia-1",
    title: "Dia 1 - Quem voce e no papel",
    description: "Analise de curriculo, LinkedIn e mapa de estudo (60 min).",
    category: "minicurso",
    order: 1,
    fileName: "dia-1-roteiro.md",
    readTimeMin: 10,
  },
  {
    slug: "dia-2",
    title: "Dia 2 - Como voce ataca o mercado",
    description: "Mercado, busca ativa, analise de vagas, entrevistas RH+Tecnica (60 min).",
    category: "minicurso",
    order: 2,
    fileName: "dia-2-roteiro.md",
    readTimeMin: 14,
  },
  {
    slug: "dia-3",
    title: "Dia 3 - Hands-on: revisao e simulado",
    description: "Painel aberto de CVs e simulado de entrevistas (90-120 min).",
    category: "minicurso",
    order: 3,
    fileName: "dia-3-pratico.md",
    readTimeMin: 12,
  },
  {
    slug: "guia-linkedin",
    title: "Guia: LinkedIn",
    description: "Algoritmo, SSI, headline, sobre, experiencias e #OpenToWork.",
    category: "guia",
    order: 1,
    fileName: "guia-linkedin.md",
    readTimeMin: 22,
  },
  {
    slug: "guia-curriculo",
    title: "Guia: Curriculo",
    description: "ATS, regra dos 6 segundos, formula de bullets e exemplo completo.",
    category: "guia",
    order: 2,
    fileName: "guia-curriculo.md",
    readTimeMin: 28,
  },
  {
    slug: "guia-busca-ativa",
    title: "Guia: Busca Ativa",
    description: "Mercado oculto, mapeamento, cold approach, scripts e funil.",
    category: "guia",
    order: 3,
    fileName: "guia-busca-ativa.md",
    readTimeMin: 22,
  },
  {
    slug: "guia-entrevistas",
    title: "Guia: Entrevistas",
    description: "RH, tecnica, metodos do Cracking the Coding Interview, system design.",
    category: "guia",
    order: 4,
    fileName: "guia-entrevistas.md",
    readTimeMin: 30,
  },
  {
    slug: "guia-gestao-processo",
    title: "Guia: Gestao do Processo",
    description: "Setup Trello/Notion, log diario, organizacao e rotinas.",
    category: "guia",
    order: 5,
    fileName: "guia-gestao-processo.md",
    readTimeMin: 22,
  },
  {
    slug: "mapa-estudo",
    title: "Mapa de Estudo Junior/Pleno",
    description: "Logica, POO, Design Patterns, BD, Clean Code, Git e GitHub.",
    category: "mapa",
    order: 1,
    fileName: "mapa-estudo-junior-pleno.md",
    readTimeMin: 14,
  },
];

export const categoryLabels: Record<ContentCategory, string> = {
  minicurso: "Minicurso",
  guia: "Guias",
  mapa: "Mapa de Estudo",
};

export function getContentBySlug(slug: string): ContentItem | null {
  return contentIndex.find((item) => item.slug === slug) ?? null;
}

export function getContentMarkdown(slug: string): string {
  const item = getContentBySlug(slug);
  if (!item) return "";
  const filePath = path.join(contentDir, item.fileName);
  return fs.readFileSync(filePath, "utf-8");
}

export function getAllSlugs(): string[] {
  return contentIndex.map((item) => item.slug);
}

export function getContentByCategory(category: ContentCategory): ContentItem[] {
  return contentIndex
    .filter((item) => item.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentContent(slug: string): {
  prev: ContentItem | null;
  next: ContentItem | null;
} {
  const sorted = [...contentIndex].sort((a, b) => {
    const catOrder: Record<ContentCategory, number> = {
      minicurso: 0,
      guia: 1,
      mapa: 2,
    };
    if (catOrder[a.category] !== catOrder[b.category]) {
      return catOrder[a.category] - catOrder[b.category];
    }
    return a.order - b.order;
  });
  const idx = sorted.findIndex((item) => item.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
