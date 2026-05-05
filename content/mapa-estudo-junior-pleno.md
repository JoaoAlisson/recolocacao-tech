# Mapa de Estudo Básico para Vagas Júnior e Pleno

> Para profissionais de tecnologia do Brasil em recolocação ou transição de carreira.

Este mapa cobre os **fundamentos universais** que aparecem em vagas júnior e pleno **independente da stack** (Java, Python, JavaScript, .NET, etc.). É o **Quadrante 1 (Fundamentos)** do mapa de 4 quadrantes apresentado no Dia 1 do minicurso. Sem isso, você não passa em entrevista técnica — não importa quanto framework você sabe.

---

## Sumário

1. [Como usar este mapa](#como-usar-este-mapa)
2. [Lógica de programação](#1-logica-de-programacao)
3. [POO — Programação Orientada a Objetos](#2-poo--programacao-orientada-a-objetos)
4. [Design Patterns](#3-design-patterns)
5. [Banco de dados](#4-banco-de-dados)
6. [Clean Code](#5-clean-code)
7. [Git](#6-git)
8. [GitHub](#7-github)
9. [Ordem sugerida de estudo](#ordem-sugerida-de-estudo)
10. [Cronograma realista](#cronograma-realista)
11. [Checklist final](#checklist-final)

---

## Como usar este mapa

Cada tópico está dividido em:

- **Por que importa**: o motivo prático.
- **Nível Júnior**: o que você precisa dominar para passar em entrevista de júnior (até 2 anos de experiência).
- **Nível Pleno**: o que você precisa dominar a mais para pleitear vagas pleno (3–5 anos).
- **Como praticar**: projeto ou exercício concreto.
- **Recursos**: 2–3 referências validadas (priorize aprofundar 1 do que ler 5 superficialmente).

**Regra:** termine 1 tópico antes de pular para outro. "Estudar 5 coisas em paralelo" = "não estudar nenhuma".

---

## 1. Lógica de programação

### Por que importa

É a base. Em entrevista júnior, **80% do live coding** é teste de lógica + estruturas básicas. Em entrevista pleno, lógica vira **algoritmo + complexidade**. Quem trava em problema simples não passa para a próxima rodada — não importa quanto Spring/React você sabe.

### Nível Júnior

- **Variáveis, tipos primitivos, operadores** (aritméticos, lógicos, relacionais).
- **Estruturas condicionais**: `if/else`, `switch/case`.
- **Estruturas de repetição**: `for`, `while`, `do-while`.
- **Funções**: parâmetros, retorno, escopo.
- **Arrays / listas** básicas: percorrer, somar, filtrar.
- **Strings**: manipulação básica (split, concat, length, replace).
- **Recursão simples**: fatorial, fibonacci.

### Nível Pleno

- **Estruturas de dados**: Stack, Queue, LinkedList, HashMap, Set, Tree (BST), Heap.
- **Algoritmos clássicos**: busca binária, ordenação (quicksort, mergesort), DFS, BFS.
- **Big O notation**: saber dizer se seu código é O(n), O(n log n), O(n²).
- **Recursão avançada** + memoization.
- **Resolver problemas** medium em LeetCode em 30 minutos.

### Como praticar

- **Júnior**: resolver **50 problemas** no [Beecrowd](https://www.beecrowd.com.br/) (URI Online Judge) — começa do nível 1, sobe para nível 2.
- **Pleno**: **100 problemas easy + 30 medium** no [LeetCode](https://leetcode.com), focando em estruturas (Array, Hash, Tree, Graph).

### Recursos

- **Livro:** *Lógica de Programação e Algoritmos com JavaScript* (Edécio Fernando Iepsen) — clássico BR.
- **Livro pleno:** *Cracking the Coding Interview* (Gayle Laakmann McDowell) — bíblia de entrevista técnica.
- **Curso gratuito:** Algoritmos USP no Coursera (Paulo Feofiloff) — denso, vale ouro.
- **Plataforma:** [LeetCode](https://leetcode.com), [HackerRank](https://www.hackerrank.com/), [Beecrowd](https://www.beecrowd.com.br/).

---

## 2. POO — Programação Orientada a Objetos

### Por que importa

90% das vagas backend e 70% das vagas frontend exigem POO. Mesmo linguagens "não-OO" (Go, Rust, JavaScript) usam conceitos de OO no dia a dia. Quem não entende POO sólido **não consegue ler código corporativo**.

### Nível Júnior

- **4 pilares**: Encapsulamento, Herança, Polimorfismo, Abstração — saber explicar cada um com exemplo.
- **Classes e objetos**: atributos, métodos, construtores.
- **Modificadores de acesso**: `public`, `private`, `protected`.
- **Sobrecarga (overload)** vs **sobrescrita (override)**.
- **Métodos estáticos vs de instância**.
- **Implementar uma classe** simples (`Account`, `Customer`) com gets/sets, validações.

### Nível Pleno

- **Composição vs herança** — saber quando usar cada (composição é quase sempre melhor).
- **Interfaces vs classes abstratas** — quando cada uma faz sentido.
- **Princípios SOLID** com exemplos próprios:
  - **S** — Single Responsibility.
  - **O** — Open/Closed.
  - **L** — Liskov Substitution.
  - **I** — Interface Segregation.
  - **D** — Dependency Inversion.
- **Coupling e cohesion** — saber medir e melhorar.
- **Imutabilidade** quando aplicável (records, value objects).
- **Generics / parametrização de tipos**.

### Como praticar

- **Júnior**: construir um **sistema de biblioteca** — classes `Livro`, `Usuario`, `Emprestimo`, com herança (Tipos de usuário) e polimorfismo (cálculo de multa).
- **Pleno**: construir um **mini e-commerce** aplicando SOLID — separar regras de negócio (services), persistência (repositories), entidades (models). Comparar antes/depois de aplicar SOLID.

### Recursos

- **Livro:** *Use a Cabeça! Padrões de Projetos* (Head First Design Patterns) — começa explicando POO bem.
- **Site:** [Refactoring.guru](https://refactoring.guru/) — explicações claras de SOLID em várias linguagens.
- **Curso:** Curso de Java/Kotlin/C# da Alura ou Rocketseat com foco em POO.

---

## 3. Design Patterns

### Por que importa

Padrões são **vocabulário comum** entre devs. Quando o Tech Lead diz "use um Strategy aqui", você precisa entender em 3 segundos. Em entrevista pleno, perguntas tipo "como você implementaria X?" frequentemente esperam resposta com pattern nome (Factory, Repository, Observer).

### Nível Júnior

Conhecer **conceitualmente** e saber implementar 3–5 dos mais comuns:

- **Criacionais**:
  - **Singleton**: 1 instância única (uso: configuração, conexão de DB).
  - **Factory**: criar objetos sem expor a lógica de criação.
  - **Builder**: construir objeto complexo por etapas.
- **Estruturais**:
  - **Adapter**: adaptar interface incompatível.
  - **Facade**: simplificar interface complexa.
- **Comportamentais**:
  - **Strategy**: trocar algoritmo em runtime.
  - **Observer**: notificar múltiplos objetos quando algo muda.

Saber também **quando NÃO usar pattern** (over-engineering em código simples é problema).

### Nível Pleno

- **Dominar todos os GoF principais** (livro Gang of Four).
- **Patterns modernos**: **Repository**, **Service Layer**, **DTO**, **Specification**.
- **Anti-patterns**: God Object, Spaghetti Code, Magic Numbers, Premature Optimization.
- **Arquiteturas**: **MVC** (web), **MVVM** (front), **Clean Architecture**, **Hexagonal**.
- **DDD básico**: Aggregate, Entity, Value Object, Bounded Context.

### Como praticar

- **Júnior**: refatorar 1 projeto pessoal aplicando **3 patterns** que façam sentido (não force).
- **Pleno**: implementar uma aplicação seguindo **Clean Architecture** — separar layers (entities, use cases, controllers, frameworks) e justificar cada decisão no README.

### Recursos

- **Livro:** *Use a Cabeça! Padrões de Projetos* — leitura obrigatória.
- **Livro pleno:** *Clean Architecture* (Robert C. Martin).
- **Site:** [Refactoring.guru](https://refactoring.guru/design-patterns) — exemplos visuais em Java, Python, C#, etc.

---

## 4. Banco de dados

### Por que importa

**Toda aplicação web tem banco.** Saber escrever query é tão essencial quanto saber escrever função. Em entrevistas, é normal pedir SQL na hora — quem não sabe modelar e fazer JOIN está fora.

### Nível Júnior

- **SQL básico**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **Filtros**: `WHERE`, `ORDER BY`, `LIMIT`.
- **Agregação**: `GROUP BY`, `HAVING`, `COUNT`, `SUM`, `AVG`.
- **JOINs**: `INNER`, `LEFT`, `RIGHT`. Saber quando usar cada um.
- **Modelagem**: tabelas, chave primária (PK), chave estrangeira (FK), relacionamentos 1-N e N-N.
- **Normalização**: 1FN, 2FN, 3FN — explicar com exemplo.
- **Diferença SQL vs NoSQL** — visão geral.
- **Conhecer ao menos 1 SGBD**: **PostgreSQL** ou **MySQL** (recomendo Postgres).

### Nível Pleno

- **Subqueries** e **CTEs** (`WITH ... AS`).
- **Window Functions**: `ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()`.
- **Índices**: B-tree, Hash, GIN — quando criar e quando o índice atrapalha.
- **EXPLAIN ANALYZE**: ler plano de execução, identificar query lenta.
- **Transações**: ACID, níveis de isolamento (Read Uncommitted, Read Committed, Repeatable Read, Serializable).
- **NoSQL prático**: **MongoDB** (documentos), **Redis** (cache).
- **Migrations**: schema versioning com Flyway, Liquibase ou similar.
- **Connection pooling**: por que existe e como configurar.

### Como praticar

- **Júnior**: modelar e popular um **banco de e-commerce** com 8–10 tabelas (Cliente, Pedido, Produto, ItemPedido, Endereço, etc.). Escrever 20+ queries de relatório (top clientes, produtos mais vendidos, etc.).
- **Pleno**: pegar uma query lenta no projeto pessoal, rodar `EXPLAIN ANALYZE`, identificar gargalo, criar índice ou refatorar query, **medir tempo antes/depois**. Documentar o processo.

### Recursos

- **Site:** [SQLZoo](https://sqlzoo.net/) — exercícios graduais, gratuito.
- **Livro:** *SQL para Análise de Dados* (Cathy Tanimura) — moderno e prático.
- **Livro pleno:** *Database Internals* (Alex Petrov) — para quem quer ir fundo.
- **Ferramenta:** [DBeaver](https://dbeaver.io/) ou [pgAdmin](https://www.pgadmin.org/) (gratuitas).

---

## 5. Clean Code

### Por que importa

Código que **funciona** mas é ilegível, **não passa em code review**. Em vagas pleno+, qualidade do código é avaliada tanto quanto a entrega. Em vagas júnior, código limpo é o que diferencia "tem potencial" de "vai dar trabalho".

### Nível Júnior

- **Nomes que revelam intenção**: `calcularDesconto()` > `calc()` > `cd()`.
- **Funções pequenas**: uma responsabilidade só. Se você precisa rolar a tela, está grande.
- **Comentários**: só quando explicam **POR QUÊ**, nunca **O QUÊ** (código bem escrito explica o que faz).
- **DRY** — Don't Repeat Yourself: se você copiou código 3 vezes, extraia em função.
- **Formatação consistente**: indentação, espaços, quebras de linha — use **linter** (ESLint, Prettier, Checkstyle, Black).

### Nível Pleno

- **SOLID na prática** (não só na teoria).
- **Refactoring patterns**: Extract Method, Inline Variable, Replace Conditional with Polymorphism, etc.
- **Code smells**: Long Method, Large Class, Feature Envy, Shotgun Surgery, Primitive Obsession.
- **Testes como documentação**: TDD, testes legíveis (`it("deve calcular desconto de 10% para cliente VIP")`).
- **Tratamento de erros**: falhar cedo (fail-fast), não esconder exceções, logging útil.
- **Imutabilidade** quando faz sentido (value objects, records).

### Como praticar

- **Júnior**: pegar **um projeto antigo seu** e refatorar capítulo por capítulo do livro *Clean Code*. Documentar o "antes/depois" de pelo menos 5 funções.
- **Pleno**: fazer **code review crítico** de 1 projeto open source e abrir issue/PR sugerindo refactoring com justificativa baseada em livros.

### Recursos

- **Livro:** *Clean Code* (Robert C. Martin) — **leitura obrigatória** para qualquer pleno.
- **Livro:** *The Pragmatic Programmer* (Dave Thomas, Andy Hunt) — habilidade vitalícia.
- **Livro pleno:** *Refactoring* (Martin Fowler) — catálogo de transformações seguras.

---

## 6. Git

### Por que importa

Git é a **ferramenta mais usada na vida do dev** depois do editor. Em entrevista, perguntar sobre branch e merge é trivial. No dia 1 do trabalho, você vai precisar usar — e não saber é vergonhoso.

### Nível Júnior

- **Setup inicial**: `git config --global user.name` e `user.email`.
- **Comandos do dia a dia**: `git init`, `git clone`, `git add`, `git commit`, `git push`, `git pull`.
- **Branches**: `git branch`, `git checkout` (ou `git switch`), `git merge`.
- **Resolver conflitos básicos** (entender markers `<<<<<<<`, `=======`, `>>>>>>>`).
- **`.gitignore`**: nunca comitar `node_modules`, `.env`, `target/`, etc.
- **`git stash`** básico: guardar mudanças temporariamente.
- **`git log`** e **`git diff`** para inspecionar histórico.

### Nível Pleno

- **`git rebase`** (regular e interactive `-i`).
- **`git cherry-pick`**: trazer commit específico de outra branch.
- **`git reflog`**: recuperar trabalho "perdido".
- **Squash de commits** antes de mergear.
- **Conventional Commits**: `feat:`, `fix:`, `chore:`, `refactor:`, etc.
- **Estratégias de branching**: GitFlow, GitHub Flow, Trunk-based — saber qual usar quando.
- **Resolver conflitos complexos** envolvendo múltiplos arquivos.
- **`git bisect`** para achar commit que introduziu bug.

### Como praticar

- **Júnior**: trabalhar com **5+ branches** no seu projeto pessoal (uma para cada feature), fazer merges, gerar conflitos de propósito e resolver.
- **Pleno**: contribuir em **1 projeto open source** seguindo o fluxo deles — vai forçar rebase, conventional commits, squash antes do merge.

### Recursos

- **Livro:** *Pro Git* — gratuito, oficial: [git-scm.com/book](https://git-scm.com/book).
- **Plataforma interativa:** [Learn Git Branching](https://learngitbranching.js.org/?locale=pt_BR) — visual, em português.
- **Cheat sheet:** [GitHub Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf).

---

## 7. GitHub

### Por que importa

GitHub é seu **portfólio público**. Recrutador tech abre seu GitHub se o LinkedIn for promissor. **Sem GitHub ou com GitHub vazio**, você é assumido como "não codifica fora do trabalho" — mesmo se isso não for verdade.

### Nível Júnior

- **Conta + perfil bem configurado**: foto, bio, link para LinkedIn.
- **README do perfil** (`username/username` repo): apresentação + stack + projetos.
- **Criar repos**: estrutura de pastas, `README.md`, `.gitignore`, `LICENSE`.
- **README simples mas completo** em cada projeto: o que é, como rodar, screenshots se for UI.
- **Fork + Pull Request**: fluxo básico.
- **Issues**: criar, atribuir, fechar via commit (`Closes #123`).
- **Markdown básico**: headings, listas, links, code blocks, imagens.

### Nível Pleno

- **README profissional** com:
  - Badges (build status, coverage, version).
  - Demo (gif/screenshot).
  - Instruções de instalação e execução.
  - Documentação de decisões técnicas.
  - Seção de contribuição.
- **GitHub Actions** para CI/CD básico (lint, testes, build em cada PR).
- **Branch protection rules**: main bloqueada, exigir review, exigir CI verde.
- **Templates de PR e Issue** (`.github/PULL_REQUEST_TEMPLATE.md`).
- **CODEOWNERS** para quando trabalhar em time.
- **GitHub Projects** (kanban) e **Discussions** (fórum).
- **Conventional Commits + semantic-release** (versionamento automático).
- **Open source contribution flow**: ler `CONTRIBUTING.md`, encontrar `good-first-issue`, abrir PR seguindo o padrão do repo.

### Como praticar

- **Júnior**: ter **6 repos pinados** no perfil, cada um com README real (não "first commit"), pelo menos 1 com deploy ativo (Vercel/Render/Railway).
- **Pleno**: configurar **GitHub Actions** em 2 projetos pessoais (lint + testes em PR + deploy em main). Abrir **3 PRs** em projetos open source que sejam mergeados.

### Recursos

- **Docs oficiais:** [docs.github.com](https://docs.github.com/).
- **Inspiração de READMEs:** [Awesome GitHub Profile READMEs](https://github.com/abhisheknaiidu/awesome-github-profile-readme).
- **Actions:** [marketplace.github.com](https://github.com/marketplace?type=actions).

---

## Ordem sugerida de estudo

A ordem **não é** a do sumário. Esta é a ordem que minimiza dependências:

1. **Lógica de programação** — sem isso, nada mais faz sentido.
2. **Git** (em paralelo desde o início) — você vai usar do dia 1 nos exercícios.
3. **POO** — base para entender qualquer framework moderno.
4. **Banco de dados** — paralelo ao POO depois da semana 4.
5. **GitHub** (em paralelo desde a semana 2) — quanto mais cedo seus repos existirem, mais histórico você acumula.
6. **Clean Code** — depois de já programar há 2–3 meses; antes disso, falta contexto para entender.
7. **Design Patterns** — depois de POO + Clean Code consolidados; sem base, viram dogma decorado.

---

## Cronograma realista

### Trilha Júnior — 6 meses (1h/dia, 5 dias por semana ≈ 130h)

| Mês | Foco principal | Em paralelo |
|---|---|---|
| **Mês 1** | Lógica de programação (40h) | Git básico (10h), GitHub setup |
| **Mês 2** | Lógica avançada + Estruturas (30h) | Resolver 30 problemas Beecrowd |
| **Mês 3** | POO (40h) | Projeto de POO no GitHub |
| **Mês 4** | Banco de dados (30h) | SQLZoo + projeto e-commerce |
| **Mês 5** | Clean Code básico + Git intermediário (30h) | Refatorar projetos antigos |
| **Mês 6** | Design Patterns (20h) + Revisão geral | Pinned 6 repos + READMEs fortes |

**Marcador de saída:** 6 repos pinados, 50 problemas Beecrowd resolvidos, livro Clean Code concluído.

### Trilha Pleno — 12 meses (1h/dia, 5 dias por semana ≈ 260h)

Para quem já é júnior e quer chegar em pleno:

| Trimestre | Foco principal |
|---|---|
| **Q1 (Mês 1–3)** | Estruturas + Algoritmos (LeetCode 100 easy + 30 medium) + SOLID profundo |
| **Q2 (Mês 4–6)** | Design Patterns GoF completo + Clean Architecture + 1 projeto seguindo arquitetura limpa |
| **Q3 (Mês 7–9)** | Banco de dados avançado (índices, EXPLAIN, NoSQL) + Git avançado (rebase, bisect) |
| **Q4 (Mês 10–12)** | GitHub Actions + 3 PRs open source + Refactoring (livro Fowler) |

**Marcador de saída:** projeto open source com 50+ stars OU 3 PRs mergeados em projetos populares + GitHub Actions configurado em 2 projetos pessoais + LeetCode rating consistente.

---

## Checklist final

### Pronto para vagas de **Júnior**

- [ ] Resolvo 50 problemas easy de lógica em <30min cada.
- [ ] Explico os 4 pilares de POO com exemplo próprio.
- [ ] Escrevo SQL com `JOIN` e `GROUP BY` sem consultar.
- [ ] Modelei pelo menos 1 banco com 8+ tabelas.
- [ ] Sei usar `git init/add/commit/push/pull/branch/merge` sem cola.
- [ ] Tenho 6 repos pinados no GitHub com README real.
- [ ] Li *Clean Code* até o capítulo 4.
- [ ] Conheço Singleton, Factory e Strategy com exemplo.

### Pronto para vagas de **Pleno**

- [ ] Resolvo 70% dos LeetCode medium em 30min.
- [ ] Aplico SOLID em código novo sem pensar conscientemente.
- [ ] Otimizo query lenta com `EXPLAIN ANALYZE` + índice.
- [ ] Modelei sistema com Clean Architecture / Hexagonal.
- [ ] Faço rebase interactive sem medo.
- [ ] Configurei GitHub Actions (lint + testes + build) em 2 projetos.
- [ ] Tenho 3+ PRs mergeados em projetos open source.
- [ ] Li *Clean Code* + *Refactoring* (Fowler) + *Clean Architecture*.
- [ ] Identifico 5 code smells em qualquer pull request.

---

## Como conectar este mapa ao resto do minicurso

- O **Dia 1** mostrou o framework de **4 quadrantes** (Fundamentos / Stack-alvo / Adjacente / Multiplicadores). Este mapa é o **Quadrante 1** detalhado.
- Os 5 tópicos mais relevantes da sua **stack-alvo** (Quadrante 2) saem da análise de 10 vagas (tarefa do Dia 1).
- Quando dominar este Quadrante 1, vire para a stack-alvo. Sem inverter a ordem.

---

*Material complementar ao minicurso de recolocação tech. Adapte ao seu contexto e ritmo real de estudo.*
