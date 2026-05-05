import Link from "next/link";
import {
  ContentCategory,
  categoryLabels,
  getContentByCategory,
} from "@/lib/content";

const categories: ContentCategory[] = ["minicurso", "guia", "mapa"];

export function Sidebar() {
  return (
    <aside className="w-72 hidden lg:flex flex-col bg-zinc-950 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
      <Link
        href="/"
        className="block mb-8 group"
      >
        <span className="block text-xs uppercase font-semibold tracking-widest text-accent mb-1">
          Minicurso
        </span>
        <span className="block text-lg font-semibold text-white group-hover:text-accent transition-colors">
          Recolocacao Tech
        </span>
      </Link>

      {categories.map((category) => {
        const items = getContentByCategory(category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mb-6">
            <h3 className="text-xs uppercase font-semibold text-zinc-500 tracking-wider mb-3">
              {categoryLabels[category]}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="block text-sm text-zinc-400 hover:text-white py-1.5 px-2 rounded hover:bg-zinc-900 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <div className="mt-auto pt-6 border-t border-zinc-800">
        <p className="text-xs text-zinc-600">
          Material complementar ao minicurso. Adapte ao seu contexto.
        </p>
      </div>
    </aside>
  );
}
