import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type ContentCategory = "inicio" | "guia" | "mapa";

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
    title: "Visao Geral",
    description: "O que tem no material, trilha sugerida e como usar.",
    category: "inicio",
    order: 0,
    fileName: "README.md",
    readTimeMin: 4,
  },
  {
    slug: "guia-mercado",
    title: "Guia: Mercado de Trabalho 2026",
    description: "Salarios por senioridade, tecnologias em alta, geografia, mercado internacional, Reforma Tributaria e Stock Options.",
    category: "guia",
    order: 1,
    fileName: "guia-mercado.md",
    readTimeMin: 28,
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
    slug: "guia-linkedin",
    title: "Guia: LinkedIn",
    description: "Algoritmo, SSI, headline, sobre, experiencias e #OpenToWork.",
    category: "guia",
    order: 3,
    fileName: "guia-linkedin.md",
    readTimeMin: 22,
  },
  {
    slug: "guia-gestao-processo",
    title: "Guia: Gestao do Processo",
    description: "Setup Trello/Notion, log diario, organizacao e rotinas.",
    category: "guia",
    order: 4,
    fileName: "guia-gestao-processo.md",
    readTimeMin: 22,
  },
  {
    slug: "guia-busca-ativa",
    title: "Guia: Busca Ativa",
    description: "Mercado oculto, mapeamento, cold approach, scripts e funil.",
    category: "guia",
    order: 5,
    fileName: "guia-busca-ativa.md",
    readTimeMin: 22,
  },
  {
    slug: "guia-entrevistas",
    title: "Guia: Entrevistas",
    description: "RH, tecnica, metodos do Cracking the Coding Interview, system design.",
    category: "guia",
    order: 6,
    fileName: "guia-entrevistas.md",
    readTimeMin: 30,
  },
  {
    slug: "guia-freelance",
    title: "Guia: Freelance e Plataformas",
    description: "Plataformas BR e internacionais, precificacao, MEI/ME, captacao direta e armadilhas.",
    category: "guia",
    order: 7,
    fileName: "guia-freelance.md",
    readTimeMin: 32,
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
  inicio: "Comece aqui",
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
      inicio: 0,
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
