import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import {
  getAdjacentContent,
  getAllSlugs,
  getContentBySlug,
  getContentMarkdown,
} from "@/lib/content";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentBySlug(slug);
  if (!item) notFound();

  const markdown = getContentMarkdown(slug);
  const { prev, next } = getAdjacentContent(slug);

  return (
    <div className="px-6 py-10 md:px-12 md:py-14 max-w-4xl mx-auto">
      <header className="mb-10 pb-6 border-b border-zinc-800">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-500 hover:text-accent mb-4 transition-colors"
        >
          &larr; Voltar para o indice
        </Link>
        <span className="inline-block text-xs uppercase font-semibold tracking-widest text-accent mb-2">
          {item.category === "minicurso"
            ? "Minicurso"
            : item.category === "guia"
              ? "Guia"
              : "Mapa de Estudo"}
        </span>
        <p className="text-sm text-zinc-500">
          Tempo estimado de leitura: {item.readTimeMin} min
        </p>
      </header>

      <article className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {markdown}
        </ReactMarkdown>
      </article>

      <nav className="mt-16 pt-8 border-t border-zinc-800 grid gap-4 md:grid-cols-2">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
            className="group block p-5 bg-zinc-900 hover:bg-zinc-800/70 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
          >
            <span className="block text-xs text-zinc-500 mb-1">Anterior</span>
            <span className="block font-semibold text-white group-hover:text-accent transition-colors">
              &larr; {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/${next.slug}`}
            className="group block p-5 bg-zinc-900 hover:bg-zinc-800/70 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all md:text-right"
          >
            <span className="block text-xs text-zinc-500 mb-1">Proximo</span>
            <span className="block font-semibold text-white group-hover:text-accent transition-colors">
              {next.title} &rarr;
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
