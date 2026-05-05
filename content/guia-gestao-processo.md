# Guia Operacional: Como Gerenciar Sua Busca de Emprego como um Projeto

> Material de apoio para profissionais de tecnologia do Brasil em recolocação ou transição de carreira.

Este guia é **operacional**: setup de ferramentas passo a passo, templates de log, organização de pastas e rotinas. A parte estratégica (funil, métricas, canais) está no `guia-busca-ativa.md`. Os dois se complementam — um é o **mapa**, este é o **GPS**.

---

## Sumário

1. [Por que tratar a busca como projeto](#1-por-que-tratar-a-busca-como-projeto)
2. [Escolha sua stack de ferramentas](#2-escolha-sua-stack-de-ferramentas)
3. [Setup completo do Trello (passo a passo)](#3-setup-completo-do-trello-passo-a-passo)
4. [Setup alternativo: Notion](#4-setup-alternativo-notion)
5. [Setup mínimo: Google Sheets](#5-setup-minimo-google-sheets)
6. [Log de processos: o diário operacional](#6-log-de-processos-o-diario-operacional)
7. [Organização de arquivos](#7-organizacao-de-arquivos)
8. [Pasta de templates (e-mail, mensagem, CV)](#8-pasta-de-templates)
9. [Rotinas: diária, semanal, mensal](#9-rotinas-diaria-semanal-mensal)
10. [Time blocking e calendário](#10-time-blocking-e-calendario)
11. [Gestão de energia e burnout](#11-gestao-de-energia-e-burnout)
12. [Troubleshooting: quando algo não funciona](#12-troubleshooting-quando-algo-nao-funciona)

---

## 1. Por que tratar a busca como projeto

Busca de emprego sem gestão é igual a desenvolver software sem versionamento: você está perdendo informação, repetindo erros e voando às cegas.

Os 4 problemas que aparecem em quem **não** organiza:

1. **Esquece de quem está esperando resposta** — manda follow-up dobrado ou nenhum.
2. **Repete mensagens** que já mandou ou pega ofensivamente fora de contexto.
3. **Não sabe o que está funcionando** — desperdiça tempo no canal errado.
4. **Burnout** sem saber por quê — gasta 14h num dia, 0h no outro.

Tratar a busca como projeto resolve os 4. Custa **30 min de setup + 15 min/dia** de manutenção.

---

## 2. Escolha sua stack de ferramentas

Você precisa de **3 coisas** funcionando em conjunto:

1. **Board de funil** (kanban com vagas).
2. **Log diário** (diário operacional).
3. **Pasta de arquivos** (CVs, cartas, take-homes).

Comparação rápida das ferramentas para o board:

| Ferramenta | Quando usar | Vantagem | Desvantagem |
|---|---|---|---|
| **Trello** | Visual, simples, kanban puro | Gratuito, intuitivo, mobile bom | Custom fields limitados no free |
| **Notion** | Quer base de dados + notas em 1 lugar | Flexível, muitos campos, multiple views | Curva de aprendizado maior |
| **Google Sheets** | Já vive em planilha, quer simplicidade brutal | Universal, gratuito, fácil de filtrar | Não tem visual kanban nativo |
| **Airtable** | Quer Notion + Sheets juntos | Database real + views | Free tier limitado |
| **Linear / Jira** | Você já usa no trabalho | Familiar | Overkill para busca pessoal |

**Recomendação por perfil:**

- **Visual e rápido**: Trello.
- **Tudo em 1 lugar (board + log + notas)**: Notion.
- **Operacional sem firula**: Google Sheets.

Não obsesse na escolha. **Qualquer das 3 funciona.** Comece com a que você já usa em outros contextos.

---

## 3. Setup completo do Trello (passo a passo)

### 3.1. Criar o board

1. Acesse [trello.com](https://trello.com), crie conta gratuita.
2. **+ Create new board** → Nome: "Busca [seu nome] [ano]" (ex: "Busca João 2026").
3. Background: escolha cor sóbria (azul ou cinza). Vai abrir muitas vezes.
4. **Visibility**: Private (só você vê).

### 3.2. Criar as listas (colunas)

Crie nesta ordem (da esquerda para a direita):

1. **📌 Empresas-alvo** (backlog de empresas, sem vaga ainda)
2. **🔍 Vagas para aplicar** (vagas identificadas, ainda não candidatadas)
3. **📨 Aplicado (sem resposta)** (CV submetido pelo ATS)
4. **🤝 Networking ativo** (mensagem mandada para Recruiter/EM/Dev interno)
5. **☎️ Triagem RH** (call inicial agendada ou realizada)
6. **🎤 Entrevista RH formal** (etapa cultural)
7. **💻 Entrevista técnica 1** (live coding ou system design)
8. **📝 Take-home** (estudo em casa)
9. **🔬 Entrevista técnica 2** (mais profunda)
10. **👔 Entrevista final** (manager / CTO)
11. **💰 Negociação** (proposta na mesa)
12. **✅ Aceito**
13. **❌ Recusado / arquivado**
14. **⏸️ Pausado** (empresa congelou, processo parado)

> **Dica de UX:** os emojis no nome das listas ajudam o cérebro a localizar visualmente o estágio em meio segundo. Não é estética — é eficiência.

### 3.3. Estrutura do card (cada vaga = 1 card)

Quando criar um card, padronize:

**Título do card:**
```
[Empresa] · [Cargo] · [Modalidade]
```
Ex: `Fintech XYZ · Backend Senior · Remoto`

**Descrição do card** (template — copie e cole em todo card novo):

```markdown
## Vaga
- **Cargo:** Backend Senior
- **Stack pedida:** Java, Spring, Kafka, AWS
- **Faixa salarial:** R$ 16k–22k (Glassdoor) / declarada na vaga: ?
- **Modalidade:** Remoto BR (com possibilidade LATAM)
- **Link da vaga:** https://...
- **JD em PDF:** [anexar arquivo]

## Empresa
- **Tier:** 1 (sonho) / 2 (adjacente) / 3 (volume)
- **Tamanho:** ~200 funcionários
- **Stage:** Série B (recebeu R$ 80M em mar/2026)
- **Glassdoor:** 4.2/5 · 80% recomendam

## Pessoas-alvo
- **Tech Recruiter:** Maria Silva — linkedin.com/in/...
- **Engineering Manager:** João Santos — linkedin.com/in/...
- **Dev sênior do time:** Ana Lima — linkedin.com/in/...

## Histórico de interações
- **2026-04-15** — Apliquei pelo Gupy
- **2026-04-15** — Mandei DM para Maria (template 4.1 do guia-busca-ativa)
- **2026-04-22** — Sem resposta — agendado follow-up dia 28
- **2026-04-28** — Mandei follow-up

## Próxima ação
- [ ] Aguardar resposta até 2026-05-05
- [ ] Se não responder, mover para "Pausado"
```

### 3.4. Labels (etiquetas) coloridas

Configure 8 labels coloridas (Power-Up `Custom Fields` aceita até 50, mas comece simples):

| Cor | Label | Uso |
|---|---|---|
| 🔴 Vermelho | **Tier 1** | Empresa-sonho |
| 🟡 Amarelo | **Tier 2** | Empresa adjacente |
| ⚪ Cinza | **Tier 3** | Volume / backup |
| 🟢 Verde | **Remoto** | Modalidade |
| 🔵 Azul | **Híbrido** | Modalidade |
| 🟠 Laranja | **Presencial** | Modalidade |
| 💜 Roxo | **Internacional** | Vaga em USD/EUR |
| 🟤 Marrom | **Indicação** | Veio via networking |

Ao bater o olho no board, você sabe onde está o calor do funil pela densidade de vermelho/roxo.

### 3.5. Custom Fields (campos extras)

Free tier do Trello: 1 Power-Up por board. Use **Custom Fields**.

Adicione estes campos por card:

- **Data candidatura** (date)
- **Salário declarado** (text)
- **Próxima ação** (text)
- **Score fit (1–5)** (number)
- **Canal de origem** (dropdown: LinkedIn / Indicação / Site / Comunidade / Recruiter)

Esse último campo é **crítico** para análise: ao final de 60 dias, você sabe qual canal converteu mais.

### 3.6. Automação com Butler (incluído no free)

**Butler** é o automatizador do Trello. Crie estas 4 regras:

**Regra 1 — Lembrete de follow-up:**
- Quando um card está em **"Aplicado (sem resposta)"** há **7 dias**, mover para etiqueta extra "🔔 Follow-up devido".

**Regra 2 — Auto-checklist na Triagem RH:**
- Quando um card é movido para **"Triagem RH"**, criar checklist:
  - [ ] Pesquisar entrevistador no LinkedIn
  - [ ] Revisar a JD
  - [ ] Preparar 3 perguntas
  - [ ] Testar áudio/vídeo

**Regra 3 — Auto-checklist na Técnica 1:**
- Quando movido para **"Entrevista técnica 1"**, criar checklist:
  - [ ] Treinar 5 problemas LeetCode da stack
  - [ ] Revisar Big O das estruturas
  - [ ] Aquecer 30 min antes (1 problema warm-up)
  - [ ] Preparar ambiente (papel, água, ferramenta testada)

**Regra 4 — Arquivo automático:**
- Quando um card está em **"Recusado / arquivado"** há **30 dias**, mover para arquivo (Trello tem arquivo embutido, não deleta).

### 3.7. Calendar Power-Up (alternativo ao Custom Fields)

Se você prefere calendar a custom fields como Power-Up principal, ative **Calendar Power-Up**. Cada card com due date aparece num calendário visual — útil para visualizar entrevistas agendadas.

### 3.8. Mobile

Trello tem app iOS/Android. Configure notificações apenas para:

- Menções (você não vai ser mencionado, mas se compartilhar com mentor)
- Due dates no dia
- Cards atribuídos a você

Desligue todas as outras. Notificação não-pertinente = ruído mental.

---

## 4. Setup alternativo: Notion

Se você prefere **base de dados + notas em 1 lugar**, Notion vence.

### 4.1. Estrutura sugerida

Crie uma página chamada "Busca [ano]" com:

```
🎯 Busca 2026
├── 📊 Funil de Vagas (database)
├── 👥 Pessoas / Contatos (database)
├── 📝 Log Diário (database)
├── 📚 Templates (página com sub-páginas)
└── 🎓 Estudo (database de problemas resolvidos / livros)
```

### 4.2. Database "Funil de Vagas"

Campos:

| Campo | Tipo | Detalhe |
|---|---|---|
| **Empresa** | Title | Nome principal |
| **Cargo** | Text | Posição |
| **Estágio** | Status | Lista igual à do Trello |
| **Tier** | Select | Tier 1 / Tier 2 / Tier 3 |
| **Stack** | Multi-select | Java, Kafka, AWS, etc. |
| **Salário-faixa** | Text | "R$ 16k–22k" |
| **Modalidade** | Select | Remoto / Híbrido / Presencial |
| **Canal de origem** | Select | LinkedIn / Indicação / Site / Comunidade / Recruiter |
| **Data candidatura** | Date | YYYY-MM-DD |
| **Última interação** | Date | YYYY-MM-DD |
| **Próxima ação** | Text | "Follow-up dia 28" |
| **Recrutador** | Relation | → database de Pessoas |
| **Score fit (1–5)** | Number | Avaliação subjetiva |
| **JD link** | URL | Link para a vaga |
| **Notas** | Text / blocks | Anotações livres |

### 4.3. Views recomendadas

Crie 4 views no mesmo database:

1. **Kanban por Estágio** (visão padrão).
2. **Table ordenada por Próxima Ação** (o que fazer hoje).
3. **Calendar por Data candidatura** (visualização temporal).
4. **Filtered: Aplicações > 7 dias sem update** (gatilho automático para follow-up).

### 4.4. Database "Pessoas / Contatos"

Para cada pessoa abordada (recruiter, EM, dev sênior), 1 linha:

| Campo | Tipo |
|---|---|
| **Nome** | Title |
| **Empresa atual** | Text |
| **Cargo** | Text |
| **LinkedIn URL** | URL |
| **E-mail** | Email |
| **Tipo** | Select (Recruiter / EM / Dev sênior / CTO / Mentor) |
| **Última interação** | Date |
| **Status** | Select (Conectado / Em conversa / Frio) |
| **Vaga relacionada** | Relation → Funil |
| **Notas** | Text |

Vantagem: depois de 6 meses de busca, você tem **base de contatos rica** para futuras transições.

---

## 5. Setup mínimo: Google Sheets

Para quem quer simplicidade brutal.

### 5.1. Estrutura: 4 abas

**Aba 1 — Funil:**

| Empresa | Cargo | Estágio | Tier | Salário | Canal | Data candidatura | Próxima ação | Notas |
|---|---|---|---|---|---|---|---|---|

Use **filter view** + **conditional formatting** (cor de linha por estágio) para virar mini-kanban.

**Aba 2 — Pessoas:**

| Nome | Empresa | Cargo | LinkedIn | Tipo | Última interação | Status |
|---|---|---|---|---|---|---|

**Aba 3 — Log diário:**

| Data | Atividades realizadas | Insights | Plano amanhã | Energia (1–10) |
|---|---|---|---|---|

**Aba 4 — Métricas:**

Fórmulas que se calculam sozinhas. Exemplo:

```
=COUNTIF(Funil!C:C, "Aplicado") = nº de aplicações ativas
=COUNTIF(Funil!C:C, "Triagem RH") = nº em triagem
=COUNTIF(Funil!C:C, "Entrevista técnica 1") = nº em técnica
=B2/A2 = taxa Aplicado → Triagem
```

### 5.2. Hack do Google Sheets como kanban

Crie uma view com **slicers** (Insert → Slicer) por estágio. Vira filtro rápido tipo kanban sem precisar mudar de ferramenta.

---

## 6. Log de processos: o diário operacional

Sem log, sua busca é caos. Com log, é projeto.

### 6.1. Por que escrever log diário

3 ganhos concretos:

1. **Reduz carga mental.** Você não carrega decisões pendentes na cabeça.
2. **Captura padrões.** "Toda terça eu rendo menos" só fica visível depois de 4 semanas anotando.
3. **Histórico para revisar.** Ao fim de 30 dias você sabe o que funcionou.

### 6.2. Template de log diário (10 minutos no fim do dia)

```markdown
# Log: 2026-05-05 (segunda)

## Atividades realizadas hoje
1. Apliquei na Fintech XYZ (Backend Senior) — pelo site, customizei CV.
2. Mandei DM para Maria (Tech Recruiter da XYZ) usando template 4.1.
3. Estudei 1h: 3 problemas LeetCode (2 easy, 1 medium - sliding window).
4. Triagem RH com Empresa ABC, 30 min — call boa, próximo passo: técnica dia 12.
5. Atualizei Trello — movi 2 cards.

## Insights / observações
- Recrutador da ABC perguntou "anos com Kafka" — devo destacar isso melhor no CV.
- Empresa XYZ tem stack 90% match. Tier 1 confirmado.
- Estou cansado, dormi mal essa noite.

## Plano para amanhã (3 prioridades)
1. Customizar CV para vaga da Empresa DEF (vence sexta).
2. Mandar 5 mensagens de cold approach.
3. Estudar system design 1h (URL shortener).

## Energia hoje (1-10): 6/10

## Algo a anotar para revisão semanal?
- Padrão: 2ª segunda seguida que rendo pouco. Talvez começar segunda mais leve.
```

### 6.3. Onde guardar o log

3 opções:

- **Notion**: database "Log Diário", 1 entrada por dia. Search histórico funciona bem.
- **Markdown local + Git**: cria pasta `06-log/`, 1 arquivo por dia (`2026-05-05.md`). Versão própria.
- **Caderno físico**: se você funciona melhor analógico. Limita search, mas força reflexão.

Não invente formato novo a cada dia. Use o template acima por **30 dias seguidos** antes de mexer.

### 6.4. Revisão semanal (sexta ou domingo, 30 minutos)

Pegue os 5–7 logs da semana e responda:

1. **Quantas atividades de busca fiz esta semana?** (candidaturas + mensagens + entrevistas)
2. **Qual foi o canal que mais trouxe resposta?**
3. **Qual padrão de energia se repetiu?** (dias bons vs ruins)
4. **Qual foi a maior perda de tempo?**
5. **3 ações para melhorar próxima semana?**

Anote num arquivo separado `weekly-review-2026-W18.md`. Em 4 semanas você tem **dados pessoais** para decisões.

---

## 7. Organização de arquivos

Sem estrutura de pastas, você perde 30 min/dia procurando.

### 7.1. Estrutura recomendada

```
recolocacao/
├── 00-perfis/
│   ├── cv-master.docx              # versão fonte
│   ├── cv-master.pdf               # exportado
│   ├── cv-backend-java.pdf         # variante por stack
│   ├── cv-backend-node.pdf
│   ├── cv-international-en.pdf     # versão em inglês
│   └── linkedin-screenshots/
│       ├── headline-2026-05.png
│       └── about-2026-05.png
│
├── 01-vagas-ativas/
│   ├── 2026-05-05-fintech-xyz/
│   │   ├── jd.pdf                  # Job description salvo
│   │   ├── cv-customizado.pdf
│   │   ├── cover-letter.pdf
│   │   ├── notas-pesquisa.md       # research da empresa
│   │   └── correspondencia.md      # log de mensagens trocadas
│   │
│   └── 2026-05-08-empresa-abc/
│       └── ...
│
├── 02-vagas-fechadas/
│   ├── 2026-04-rejected-startup-x/
│   └── 2026-03-accepted-fintech-y/  # caso aceite, mova aqui
│
├── 03-templates/
│   ├── email-followup.md
│   ├── linkedin-cold-recruiter.md
│   ├── linkedin-cold-em.md
│   ├── linkedin-pos-candidatura.md
│   ├── thank-you-pos-entrevista.md
│   └── cover-letter-template.docx
│
├── 04-take-homes/
│   ├── 2026-04-30-empresa-x-shortener/
│   │   ├── README.md
│   │   ├── src/
│   │   ├── tests/
│   │   └── docker-compose.yml
│   │
│   └── 2026-05-02-empresa-y-cache/
│
├── 05-recursos/
│   ├── livros-pdf/
│   ├── leetcode-solucoes/
│   └── system-design-notas/
│
└── 06-log/
    ├── 2026-05-05.md
    ├── 2026-05-06.md
    └── weekly-review-2026-W18.md
```

### 7.2. Convenções

- **Datas em ISO** (`2026-05-05`) — ordena cronologicamente sozinho.
- **Slug em kebab-case** (`fintech-xyz`, não `Fintech XYZ`) — funciona em qualquer SO.
- **README.md em cada take-home** — facilita revisar depois.
- **Git inicializado na raiz `recolocacao/`** — versiona log e templates. NÃO comite CVs com dados pessoais em repo público.

### 7.3. Onde hospedar

- **Local + sync** (Dropbox / Google Drive / iCloud): mais simples, funciona offline.
- **Git privado** (GitHub repo privado): para devs que querem versionamento real do log e templates.
- **Notion**: se você foi all-in em Notion, todos os arquivos podem morar lá (anexos em cards).

Não obsesse. Escolha uma e siga.

---

## 8. Pasta de templates

Toda mensagem que você manda mais de 2 vezes vira template. Tempo economizado: minutos por mensagem, horas por semana.

### 8.1. Templates essenciais para criar agora

Salve em `03-templates/`:

| Arquivo | Conteúdo (resumo) |
|---|---|
| `linkedin-cold-recruiter.md` | Pedido de conexão com Tech Recruiter (template 4.1 do `guia-busca-ativa.md`) |
| `linkedin-cold-em.md` | Cold approach a Engineering Manager / Tech Lead |
| `linkedin-pos-candidatura.md` | Mensagem para EM 24h após candidatar (template 4.2 do `guia-busca-ativa.md`) |
| `linkedin-followup-7d.md` | Follow-up após 7 dias sem resposta |
| `thank-you-pos-entrevista.md` | Agradecimento pós-entrevista (24h depois) |
| `cover-letter-template.docx` | Carta-template com variáveis `[empresa]`, `[cargo]`, `[stack]` |
| `cv-master.docx` | CV fonte que vira PDFs customizados |
| `email-recusa-empresa.md` | Quando você precisa recusar oferta |
| `email-pedido-feedback.md` | Pedir feedback após rejeição (alta taxa de não-resposta, mas vale) |

### 8.2. Como usar templates sem soar robótico

Templates **não são copy-paste literal**. Eles são **estrutura**.

Para cada uso:

1. Copie o template.
2. Substitua **TODAS** as variáveis em colchetes (`[empresa]`, `[nome]`, `[stack]`).
3. **Adicione 1 frase específica** da pessoa/empresa no parágrafo de abertura — algo que prova que você fez research (uma palestra, um post, uma rodada).
4. Releia em voz alta. Se soa genérico, ajuste mais.

A frase específica é o que diferencia "abordagem de massa" de "abordagem orientada a contexto".

---

## 9. Rotinas: diária, semanal, mensal

Estrutura mata caos. Defenda 90 min/dia em vez de "vou ficar 6h hoje porque tô com tempo".

### 9.1. Rotina diária — 90 minutos

| Tempo | Bloco | O que fazer |
|---|---|---|
| **0:00–0:15** | Revisão | Abrir Trello, ler "Próxima ação" de cada card no estágio ativo |
| **0:15–0:45** | Candidaturas | 1–3 candidaturas customizadas (CV ajustado por vaga) |
| **0:45–1:15** | Networking | 5–10 mensagens (cold approach + follow-ups + agradecimentos) |
| **1:15–1:30** | Log | Escrever log do dia + plano de amanhã |

Em dias com entrevistas, o bloco de entrevista substitui parte das atividades.

### 9.2. Rotina semanal — 1 hora (sexta ou domingo)

| Bloco | O que fazer |
|---|---|
| 15 min | Atualizar **status de todos os cards** (mover, arquivar, mudar estágio) |
| 15 min | **Calcular métricas** (taxa de resposta, conversão por estágio) |
| 15 min | **Revisão semanal** com base nos logs (ver Seção 6.4) |
| 15 min | **Plano para próxima semana** — 3 prioridades macro |

### 9.3. Rotina mensal — 2 horas (último domingo do mês)

- **Análise por canal**: qual canal mais converteu (LinkedIn? Indicação? Comunidade?). Realocar tempo.
- **Limpeza de arquivos**: arquivar vagas mortas, organizar pasta `02-vagas-fechadas/`.
- **Revisão de CV e LinkedIn**: pequenas atualizações (bullet novo, métrica nova).
- **Update no mentor / mastermind**: se você tem mentor ou grupo de busca, compartilhar dashboard.

---

## 10. Time blocking e calendário

### 10.1. Bloqueie tempo no calendário (não "vou fazer quando der")

Tempo não-bloqueado é tempo perdido. Crie eventos recorrentes no Google Calendar:

| Bloco | Quando | Duração |
|---|---|---|
| **Busca ativa** | Seg/Qua/Sex 7h–8h30 | 90 min |
| **Estudo técnico** | Ter/Qui 7h–8h | 60 min |
| **Revisão semanal** | Sexta 18h–19h | 60 min |
| **Entrevistas** | Slot fixo Ter/Qui 14h–17h | reservado |

Por que slot fixo de entrevistas: quando recrutador pergunta "qual seu melhor horário?", você responde imediatamente "Ter/Qui 14h–17h" — projeta organização e evita o ping-pong de agenda.

### 10.2. Calendário separado

Crie **calendário separado** ("Busca 2026") no Google Calendar. Pode esconder/mostrar. Quando der tudo certo e você fechar vaga, esconde o calendário inteiro com 1 click.

### 10.3. Auto-agendamento

Use ferramenta de agendamento (**Calendly** free, **Cal.com** open source) com link público:

```
calendly.com/seu-nome/30min
```

Disponibilidade configurada apenas nos slots de entrevista. Recrutador escolhe sozinho. Zero ping-pong.

---

## 11. Gestão de energia e burnout

Busca de emprego é maratona, não sprint. Quem queima na semana 3 não fecha vaga na semana 8.

### 11.1. Sinais de burnout próximo

- Querer fazer **5+ candidaturas/dia** "para acelerar".
- **Pular dias inteiros** sem motivo claro.
- **Cobrar feedback compulsivamente** (multiplos follow-ups num dia).
- **Insônia** ou sono ruim.
- **Sair sem decidir** ou tomando decisões impulsivas.
- **Energia <5/10 por mais de 3 dias seguidos** (no log).

Se 3+ dos sinais aparecem: **reduza ritmo imediatamente.** Não é fraqueza — é estratégia.

### 11.2. Limites saudáveis

- **Máximo 4h/dia** em modo "busca ativa". Mais que isso, retorno cai.
- **1 dia totalmente off por semana** (sábado ou domingo). NADA de busca.
- **Sono regular**: 7–8h, mesmo horário. Cérebro de busca é cérebro descansado.
- **Atividade física**: 30 min/dia de qualquer coisa (caminhada conta).
- **Contato humano** que NÃO seja sobre busca de emprego (família, amigos, hobby).

### 11.3. Quando dar pausa total

Sinais de que você precisa de **3–7 dias 100% off**:

- Sentindo raiva ao abrir LinkedIn.
- Não consegue ler uma JD sem revirar os olhos.
- Última entrevista foi sentida como "interrogatório".
- Está se comparando obsessivamente com outros candidatos.

Pausa NÃO é desistência. É manutenção. **Volte depois de descansar — você renderá mais nos próximos 14 dias do que renderia em 30 dias forçando.**

### 11.4. Suporte externo

Não trate burnout sozinho. Considere:

- **Mentor** ou par de revisão semanal (1 conversa de 30 min).
- **Comunidade** (Discord/Slack) com outros em busca — compartilhar normaliza.
- **Terapia** se a busca está afetando relacionamentos / sono / humor por +30 dias.
- **Coach de carreira** se travamento é estratégico (não emocional).

---

## 12. Troubleshooting: quando algo não funciona

Após **2 semanas** rodando o processo organizado, calcule:

### 12.1. Diagnóstico por sintoma

| Sintoma | Provável causa | Volte para |
|---|---|---|
| **0 respostas** em 20 candidaturas | CV ou seleção de vagas ruim | `guia-curriculo.md` (revisar) + `guia-linkedin.md` |
| **Respostas mas 0 entrevistas** | Triagem RH falhando | `guia-entrevistas.md` Seção 2 |
| **Entrevistas RH OK, mas 0 técnica** | Comunicação técnica ou pretensão salarial | `guia-entrevistas.md` Seção 2.2.3 |
| **Entrevista técnica falha** | Live coding ou system design | `guia-entrevistas.md` Seções 4–6 |
| **Take-home rejeitado** | README ou escopo | `guia-entrevistas.md` Seção 7 |
| **Ofertas mas não fecho** | Negociação ou fit das vagas | `guia-entrevistas.md` Seção 8 |
| **Cansaço persistente** | Burnout próximo | Seção 11 deste guia |
| **Funil parado, ninguém move** | Processo todo travou | Forçar 5 mensagens novas/dia por 1 semana |

### 12.2. Reset estratégico

Se 30 dias não trouxeram resultado e a métrica do problema não está clara:

1. **Pausa de 3 dias.** Sem mexer no funil.
2. **Releia este guia + `guia-busca-ativa.md`** com fresco mental.
3. **Reduza Tier 3** (volume): foque só em Tier 1 e 2 por 14 dias.
4. **Aumente Tier 1**: 5 mensagens/dia para empresas-sonho, com research sério.
5. **Valide com mentor / par**: peça revisão do CV e da estratégia.

Frequentemente o problema não é "fazer mais", é "fazer com mais qualidade nos lugares certos".

---

## Anexo: checklist de setup completo (90 minutos)

Para começar do zero hoje:

- [ ] Criar board no Trello (ou database no Notion) — 15 min
- [ ] Configurar 14 listas / 14 stages — 5 min
- [ ] Criar 8 labels coloridas — 5 min
- [ ] Configurar 4 regras Butler (ou views Notion) — 15 min
- [ ] Criar template de descrição de card — 10 min
- [ ] Criar pasta `recolocacao/` com 7 subpastas — 10 min
- [ ] Criar 7 templates em `03-templates/` — 20 min
- [ ] Criar log do dia 1 — 5 min
- [ ] Bloquear horários no calendário (busca, estudo, entrevistas) — 5 min

Em 90 minutos você sai do "não tenho controle" para "tenho infraestrutura para 6 meses de busca organizada".

---

## Como conectar este guia ao resto do minicurso

- **`guia-busca-ativa.md`** = estratégia (qual canal, quais empresas, quais mensagens). Este guia = **execução** dessa estratégia.
- **`guia-entrevistas.md`** = como performar nas entrevistas. Este guia = **como organizar e preparar** as entrevistas.
- **`mapa-estudo-junior-pleno.md`** = o que estudar. Este guia = **quando e quanto** estudar (rotina diária).

Os 4 guias juntos são um sistema: estratégia + execução + performance + estudo. Use os 4 em paralelo.

---

*Material complementar ao minicurso de recolocação tech. Adapte ao seu contexto e ao seu ritmo real.*
