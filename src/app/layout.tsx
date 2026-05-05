import type { Metadata } from "next";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Minicurso de Recolocacao Tech",
    template: "%s | Recolocacao Tech",
  },
  description:
    "Material completo do minicurso de recolocacao profissional para devs no Brasil: curriculo, LinkedIn, busca ativa, entrevistas RH e tecnica.",
  authors: [{ name: "Joao Alisson" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-zinc-900">
      <body className="bg-zinc-900 text-zinc-100 antialiased min-h-screen">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
