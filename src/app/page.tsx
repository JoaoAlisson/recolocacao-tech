import Link from "next/link";
import {
  ContentCategory,
  categoryLabels,
  getContentByCategory,
} from "@/lib/content";

const categories: ContentCategory[] = ["minicurso", "guia", "mapa"];

const categoryDescriptions: Record<ContentCategory, string> = {
  minicurso:
    "Roteiros minuto a minuto das 3 sessoes do minicurso. Use como guia de instrutor ou como auto-estudo sequencial.",
  guia: "Guias de aprofundamento de cada topico critico do processo de recolocacao. Densidade alta, sem encheLinguia.",
  mapa: "Mapa de estudo dos fundamentos para vagas junior e pleno. Independente de stack.",
};

export default function Home() {
  return (
    <div className="px-6 py-12 md:px-12 md:py-16 lg:py-20 max-w-5xl mx-auto">
      <header className="mb-16">
        <span className="inline-block text-xs uppercase font-semibold tracking-widest text-accent mb-4">
          Material gratuito
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Minicurso de Recolocacao Tech
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Material completo para profissionais de tecnologia no Brasil em
          recolocacao ou transicao de carreira. Sem motivacional, sem
          clichês — só o que move o ponteiro.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/visao-geral"
            className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-hover text-zinc-950 font-semibold rounded-lg transition-colors"
          >
            Comecar pela visao geral
          </Link>
          <Link
            href="/dia-1"
            className="inline-flex items-center px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors border border-zinc-700"
          >
            Pular para o Dia 1
          </Link>
        </div>
      </header>

      <div className="space-y-16">
        {categories.map((category) => {
          const items = getContentByCategory(category);
          if (items.length === 0) return null;
          return (
            <section key={category}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {categoryLabels[category]}
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                  {categoryDescriptions[category]}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="group block p-6 bg-zinc-900 hover:bg-zinc-800/70 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-zinc-500 whitespace-nowrap ml-3 mt-1">
                        {item.readTimeMin} min
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="mt-20 pt-8 border-t border-zinc-800">
        <p className="text-sm text-zinc-500">
          Material aberto. Adapte ao seu contexto e revise a cada candidatura.
        </p>
      </footer>
    </div>
  );
}
