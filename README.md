# Curso de Recolocação Tech

Site Next.js que hospeda o material completo do minicurso de recolocação para profissionais de tecnologia no Brasil.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** + `@tailwindcss/typography` para renderização de markdown
- **react-markdown** + `remark-gfm` (tabelas, task lists) + `rehype-highlight` (syntax highlighting)
- Conteúdo estático em arquivos `.md` na pasta `content/`
- SSG (Static Site Generation) — build gera todas as páginas em HTML estático

## Estrutura

```
curso-recolocacao-tech/
├── content/                    # Markdown do curso (10 arquivos)
├── public/                     # Assets estáticos
└── src/
    ├── app/
    │   ├── layout.tsx          # Root layout (sidebar + main)
    │   ├── page.tsx            # Landing page
    │   ├── globals.css         # Estilos globais
    │   └── [slug]/page.tsx     # Página dinâmica por conteúdo
    ├── components/
    │   └── Sidebar.tsx         # Navegação lateral
    └── lib/
        └── content.ts          # Índice + leitura de markdown
```

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Rodar dev server
npm run dev
# Acessar http://localhost:3000

# Build de produção
npm run build
npm start
```

## Deploy no Vercel

1. Crie um repositório novo no GitHub (privado ou público).
2. Faça push deste projeto:
   ```bash
   git remote add origin git@github.com:SEU_USUARIO/curso-recolocacao-tech.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) e clique em **New Project**.
4. Importe o repositório do GitHub.
5. Vercel detecta Next.js automaticamente — só clique em **Deploy**.
6. Em ~2 minutos o site está no ar em uma URL `*.vercel.app`.

Para domínio customizado: Vercel → Project → Settings → Domains.

## Adicionar / atualizar conteúdo

1. Edite ou adicione o arquivo `.md` em `content/`.
2. Atualize o `contentIndex` em `src/lib/content.ts` (slug, título, descrição, categoria).
3. `npm run dev` para validar localmente.
4. Commit + push — Vercel faz deploy automático.

## Roadmap (próximos passos sugeridos)

- [ ] Adicionar busca client-side (cmd+K).
- [ ] Adicionar estado "lido" no localStorage.
- [ ] Adicionar print stylesheet para PDF.
- [ ] Adicionar dark/light toggle (atualmente só dark).
- [ ] Adicionar OG image dinâmica por página.

## Licença

Material educacional. Adapte ao seu contexto.
