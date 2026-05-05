# Guia: IA no Processo de Recolocação (Ferramentas + Prompts)

> Para profissionais de tecnologia no Brasil em recolocação ou transição de carreira.

Em 2026, IA não é opcional na recolocação. Quem usa bem ganha **velocidade de 5–10x** em tarefas que antes levavam horas (reescrita de CV, headline LinkedIn, customização de candidaturas, simulado de entrevista, estudo).

Este guia traz **ferramentas concretas** e **prompts prontos para copiar** — separados pela etapa do processo (CV, LinkedIn, busca ativa, entrevistas, estudo, freelance).

> **Regra de ouro:** IA é o assistente, você é o revisor. Nunca envie um output de IA sem revisar. Recrutador identifica em 5 segundos um CV ou cover letter "tipicamente IA" — palavras genéricas, repetições, falta de personalidade.

---

## Sumário

1. [Quais ferramentas usar](#1-quais-ferramentas-usar)
2. [Como configurar um "Projeto" persistente](#2-como-configurar-um-projeto-persistente)
3. [Prompts: Currículo](#3-prompts-curriculo)
4. [Prompts: LinkedIn](#4-prompts-linkedin)
5. [Prompts: Busca Ativa e Cold Approach](#5-prompts-busca-ativa-e-cold-approach)
6. [Prompts: Entrevistas (RH e Técnica)](#6-prompts-entrevistas-rh-e-tecnica)
7. [Prompts: Estudo e Code Review](#7-prompts-estudo-e-code-review)
8. [Prompts: Freelance](#8-prompts-freelance)
9. [Como NÃO usar IA (limitações e riscos)](#9-como-nao-usar-ia-limitacoes-e-riscos)
10. [Checklist final](#10-checklist-final)

---

## 1. Quais ferramentas usar

### 1.1. Modelos de linguagem (LLMs)

| Ferramenta | Forte em | Ponto fraco | Custo |
|---|---|---|---|
| **Claude** (Anthropic) | Texto longo, raciocínio, análise crítica, escrita natural | Sem busca web nativa em alguns planos | Free tier limitado · Pro US$ 20/mês |
| **ChatGPT** (OpenAI) | Generalista, ecossistema grande, integração com ferramentas | Tendência a respostas mais "padrão" e clichês | Free com GPT-3.5 · Plus US$ 20/mês |
| **Gemini** (Google) | Pesquisa e fatos atuais, integração Google | Output mais frio, menos natural em PT | Free · Advanced US$ 20/mês |
| **Perplexity** | Busca atualizada com fontes citadas | Não substitui modelo conversacional | Free · Pro US$ 20/mês |
| **DeepSeek / Qwen / Grok** | Alternativas, alguns gratuitos via API | Menos polidos para escrita em PT | Variável |

**Recomendação prática:**

- **Para escrita longa, análise e revisão de CV/textos:** Claude (output mais natural, menos clichê).
- **Para iteração rápida e prompts curtos:** ChatGPT (mais ágil, melhor para mock interviews).
- **Para pesquisa de empresas, salários, tendências:** Perplexity ou Gemini.

Você não precisa pagar 3 — escolhe **1 pago + 1 free** e está resolvido.

### 1.2. Ferramentas específicas

| Ferramenta | Para quê |
|---|---|
| **Cursor / GitHub Copilot** | Auto-complete de código no editor (estudo + portfolio) |
| **v0.dev** (Vercel) | Gerar UI a partir de descrição (prototipar projetos rápidos) |
| **DeepL** | Tradução PT-EN profissional (melhor que Google Tradutor para tech) |
| **Grammarly / LanguageTool** | Revisão gramática e estilo (CV/cover letter em inglês) |
| **Resume Worded** / **Jobscan** | Análise de CV vs ATS, score por JD |
| **Pramp / Interviewing.io** | Mock interview com matching de pares (free/pago) |
| **Hunter.io** + AI | Achar emails corporativos para cold approach |
| **Crunchbase + Perplexity** | Mapear empresas com aporte recente |
| **Loom AI** | Resumo de vídeos de meeting/aula |

---

## 2. Como configurar um "Projeto" persistente

Tanto **Claude** (Projects) quanto **ChatGPT** (Custom GPTs / Projects) permitem criar um espaço com **contexto permanente** — assim você não precisa reexplicar quem é a cada conversa.

### 2.1. O que colocar no contexto persistente

```
Sou [seu nome], desenvolvedor(a) [stack] com [N] anos de experiência.
Atuo em [empresa atual / setor].

Stack técnica: [linguagens], [frameworks], [bancos], [cloud], [práticas].

Diferenciais: [seu nicho ou domínio — ex: saúde pública, fintech, edtech].

Estou em busca de: [tipo de vaga — ex: Pleno backend remoto LATAM em fintech].

Pretensão salarial: R$ [X] CLT ou R$ [Y] PJ.

Contexto importante:
- Inglês: [nível CEFR]
- Localização: [cidade-UF + remoto/híbrido/presencial]
- Disponibilidade: [imediata / 30 dias / pós-aviso]

Anexei: meu CV atual, screenshots do meu LinkedIn, JDs das vagas-alvo.
```

### 2.2. Como criar (Claude Projects)

1. Claude.ai → "+" → "New Project"
2. Nome: "Recolocação 2026"
3. Custom Instructions: cole o contexto acima.
4. Faça upload do PDF do CV, prints do LinkedIn, JDs salvas.
5. Toda conversa nesse Project terá esse contexto carregado.

### 2.3. Como criar (ChatGPT Custom GPTs)

1. ChatGPT → menu Explore → "Create a GPT"
2. Configure as instructions com o contexto.
3. Knowledge: faça upload dos arquivos.
4. Salva e usa quando quiser.

**Vantagem:** prompts ficam 50% menores (você não repete contexto). Saída é mais alinhada ao seu perfil específico.

---

## 3. Prompts: Currículo

### 3.1. Reescrever bullet com fórmula `Ação + Ferramenta + Resultado`

**Quando usar:** você tem um bullet passivo ou genérico e quer transformar.

**Prompt:**

```
Tenho este bullet no meu currículo, mas está fraco:

[cole o bullet original]

Reescreva aplicando a fórmula: VERBO de ação em primeira pessoa + O QUE FEZ + TECNOLOGIA usada + RESULTADO mensurável.

Regras:
- Primeira pessoa ativa (Construí, Reduzi, Implementei).
- Cite stack específica (não "tecnologias modernas").
- Sugira 3 versões diferentes para eu escolher.
- Se faltar métrica no original, ME PERGUNTE qual métrica eu poderia adicionar (não invente).

Contexto: [breve descrição do que você fez de verdade nesse cargo].
```

**Output esperado:** 3 versões com o bullet reescrito + perguntas da IA pedindo dados específicos para você adicionar métrica real.

### 3.2. Auditoria completa do CV

**Quando usar:** você tem um CV pronto e quer feedback antes de enviar.

**Prompt:**

```
Aja como um Tech Recruiter Sênior com 10 anos de experiência triando CVs de devs no Brasil.

Anexei meu CV atual. Faça uma auditoria criteriosa olhando:

1. **Estrutura visual** — coluna única vs dupla, layout ATS-friendly, fontes simples, bullets simples.
2. **Cabeçalho** — tem dados desnecessários (foto, idade, CPF, endereço completo)?
3. **Resumo profissional** — está no padrão "iniciante/fraco" (clichê) ou "avançado/aprovado" (cargo + anos + stack + conquista)?
4. **Experiência** — bullets passivos ou ativos? Tem métricas em pelo menos 50% dos bullets?
5. **Habilidades** — agrupadas por categoria (Linguagens, Frameworks, Cloud, Práticas)? Top 3 alinhadas com cargo-alvo?
6. **Idiomas** — declarados em CEFR (B1, B2, C1)?
7. **Tipos** — algum erro gramatical ou typo?
8. **Customização** — está customizado para o cargo-alvo ou é genérico?

Aponte problemas específicos com linha/seção. Sugira correção concreta para cada um.

Cargo-alvo: [posição que você está mirando]
```

**Output esperado:** lista priorizada de problemas + correção sugerida para cada.

### 3.3. Customizar CV para JD específica

**Quando usar:** vai aplicar para uma vaga específica e quer ajustar o CV em 5 min.

**Prompt:**

```
Tenho meu CV (anexado) e vou aplicar para esta vaga (cole a JD abaixo).

JD:
"""
[cole a JD inteira aqui]
"""

Faça:
1. **Análise de match** — quais skills da JD eu já tenho? Quais faltam?
2. **Ajustes no cabeçalho** — sugira novo "cargo-alvo" alinhado à vaga.
3. **Ajustes no resumo profissional** — reescreva a primeira frase incluindo as 3 keywords mais importantes da JD.
4. **Reordenação dos bullets** — sugira nova ordem (mais relevante para esta vaga primeiro).
5. **Skills a adicionar/destacar** — se já uso mas não aparecem proeminente, indique onde colocar.

Não invente experiência que eu não tenho.
```

**Output esperado:** versão pronta para colar com ajustes apontados.

### 3.4. Traduzir CV para inglês profissional

**Quando usar:** vai aplicar para vaga remota internacional.

**Prompt:**

```
Tenho meu CV em PT-BR (anexado). Traduza para inglês profissional adequado a vagas remotas LATAM em empresas dos EUA/Europa.

Regras:
- Use verbos de ação fortes (Reduced, Built, Led, Migrated, Implemented).
- Mantenha métricas em formato internacional (use "$" para USD se aplicável; ou mantenha R$ + conversão estimada entre parênteses).
- Adapte termos culturais específicos do BR (ex: "CLT" → "full-time employment").
- NÃO traduza nomes de empresas, escolas, certificações.
- Mantenha o nível CEFR para idiomas.
- Sugira melhorias estratégicas para o mercado internacional (ex: adicionar UTC-3 / "Open to remote LATAM").

Output: CV completo em EN, pronto para colar.
```

### 3.5. Identificar fraquezas tipicamente "feitas por IA"

**Quando usar:** você usou IA para gerar partes do CV e quer remover o "cheiro de IA".

**Prompt:**

```
Cole meu CV abaixo. Identifique todas as frases que parecem "tipicamente geradas por IA" — clichês, vocabulário sintético, repetições, frases que poderiam estar em qualquer CV.

Aponte cada uma e sugira reescrita que soe humana e específica.

CV:
"""
[cole]
"""
```

---

## 4. Prompts: LinkedIn

### 4.1. Headline com fórmula

**Prompt:**

```
Aja como Tech Recruiter Sênior. Eu sou [cargo] com [N] anos de experiência em [stack/setor]. Mira vagas de [tipo].

Crie 5 versões de headline LinkedIn aplicando a fórmula:

[O que faço] | [Stack ou contexto] | [Diferencial ou objetivo]

Regras:
- 100-160 caracteres total (limite LinkedIn é 220).
- Inclua o nível ("Pleno", "Sênior") explicitamente — recrutador filtra por isso.
- Inclua nicho ou domínio (não só "Full Stack" — algo como "Full Stack para fintechs").
- Inclua "Open to remote" se for o caso.
- Use pipes (|) como separadores.

Cargo-alvo: [Pleno Backend / Sênior Full Stack / etc.]
Stack principal: [Java + Spring + AWS / etc.]
Nicho/domínio: [pagamentos / saúde / e-commerce / etc.]
```

**Output esperado:** 5 versões para você escolher uma.

### 4.2. Seção "Sobre" estruturada

**Prompt:**

```
Aja como tech recruiter especialista em LinkedIn.

Escreva uma seção "Sobre" do meu LinkedIn (~1.500 caracteres) seguindo esta estrutura:

1. **Hook** (2 linhas): quem sou eu profissionalmente HOJE.
2. **Trajetória condensada** (3-4 linhas): presente → passado → diferencial.
3. **Stack atual** (lista vertical com bullets): linguagens, frameworks, infra, em estudo.
4. **1-2 entregas concretas** com métricas reais.
5. **Diferencial não-técnico** (se houver — mentoria, conteúdo, comunidade).
6. **CTA com email** ("Aberto a oportunidades em X. Contato: email").

Use 1ª pessoa, tom direto e profissional, SEM clichês ("apaixonado por tecnologia", "sempre aprendendo", "vista a camisa").

Meu contexto:
[descreva: cargo atual, anos, stack, principais entregas, idioma, intenção]
```

### 4.3. Reescrever experiência LinkedIn

**Prompt:**

```
Tenho esta descrição de cargo no meu LinkedIn:

"""
[cole o texto atual]
"""

Reescreva em até 1.500 caracteres seguindo:

- Frase de abertura: cargo + empresa + escala (ex: "Pleno Backend numa fintech processando 2M+ transações/dia").
- Stack listada em bullet vertical.
- 3-5 bullets de entregas com fórmula `Ação + Ferramenta + Resultado`.
- 1-2 frases sobre o impacto qualitativo (mentoria, decisões técnicas, etc.).

Sem clichês. Específico, denso, escaneável.

Stack que uso: [...]
Principais entregas reais: [liste 3-5 coisas que você fez de verdade]
```

### 4.4. Post técnico para gerar atividade no LinkedIn

**Prompt:**

```
Quero postar no LinkedIn um conteúdo técnico curto (300-500 caracteres) sobre algo que aprendi essa semana.

Tema: [resolvi problema X com Y / aprendi Z / fiz refatoração W]

Estrutura sugerida:
- 1ª linha: pergunta ou afirmação provocativa.
- 2-4 linhas: contexto do problema/aprendizado.
- Bullets ou exemplo curto.
- Pergunta genuína no fim para gerar comentários.

Tom: profissional mas humano. Sem emoji exagerado. Sem motivacional.

Detalhes do que aprendi:
[conte em 5-10 linhas o que fez/aprendeu]
```

---

## 5. Prompts: Busca Ativa e Cold Approach

### 5.1. Cold message customizada para LinkedIn

**Prompt:**

```
Vou fazer cold approach a esta pessoa no LinkedIn:

Nome: [...]
Cargo: [Engineering Manager / CTO / Tech Recruiter]
Empresa: [...]
Pista de research: [post recente, palestra, projeto público] — [link ou descrição]

Meu contexto:
- Sou [cargo] com [N anos] focado em [nicho].
- Stack: [...]
- Quero saber se há vaga / ficar no radar / pedir referência.

Escreva 3 versões de mensagem de até 350 caracteres, seguindo:
1. Mostrar research específico (não copy-paste).
2. Apresentar minha relevância em 1 frase.
3. Pedir UMA coisa pequena (resposta sim/não, não pedir CV de cara).
4. "Sem compromisso" no fim para desarmar.

Tom: profissional, direto, sem bajulação.
```

### 5.2. Pesquisa de empresas no nicho

**Prompt (use Perplexity ou Gemini):**

```
Liste 30 scale-ups e empresas de médio porte no Brasil que:

- Atuam em [nicho — ex: healthtech, fintech, edtech, marketplace]
- Receberam aporte (Série A, B ou C) entre [data X] e [data Y]
- Têm time de tecnologia ativo (mínimo 20 devs)

Para cada uma, traga:
- Nome e site
- Estágio do investimento e valor (se público)
- Stack técnica conhecida (de blog, GitHub, palestras)
- Localização da sede e modalidade (remoto/híbrido)
- Link da página de carreiras

Priorize empresas com tração real, não apenas seed/pre-seed.
```

### 5.3. Follow-up educado após 7 dias

**Prompt:**

```
Mandei esta mensagem para [nome] há 7 dias e não tive resposta:

[cole a mensagem original]

Escreva um follow-up curto (até 250 caracteres) com:
- Tom respeitoso, não cobrando.
- Dar opção fácil de "não" (tira pressão da pessoa).
- Manter porta aberta para conversas futuras.

Não comece com "Bom dia" / "Espero que esteja bem". Vai direto.
```

### 5.4. Mensagem para Tech Lead após candidatura

**Prompt:**

```
Acabei de me candidatar para a vaga [posição] na [empresa] pelo ATS deles.

Quero mandar mensagem no LinkedIn para o [Tech Lead / Engineering Manager] avisando, no formato de "courtesy ping", sem soar como pulando a fila.

Estrutura:
1. Avisar que candidatei (não pedir nada).
2. TL;DR de 3 linhas com: stack que tenho da JD + 1 entrega recente com métrica + disponibilidade.
3. Desarmar com "sem compromisso de resposta".

Detalhes da vaga: [...]
Meu match: [...]

Output: mensagem pronta de até 600 caracteres.
```

---

## 6. Prompts: Entrevistas (RH e Técnica)

### 6.1. Estruturar resposta STAR

**Prompt:**

```
Tenho esta história do meu trabalho que quero usar em entrevista comportamental:

[descreva em 5-10 linhas o que aconteceu — situação, problema, o que fez, resultado]

Estruture isso em formato STAR (Situação · Tarefa · Ação · Resultado) que dure 60-90 segundos quando falado em voz alta.

Regras:
- Situação e Tarefa juntas: 1-2 frases (contexto).
- Ação: parte mais longa, focada no que EU fiz (não "o time").
- Resultado: métrica concreta + impacto no negócio.
- Sem clichês ("vesti a camisa", "saí da zona de conforto").

Mapeie também quais soft skills essa história demonstra (Iniciativa, Liderança, Conflito, Comunicação, Resolução de problemas, etc.).
```

### 6.2. Antecipar perguntas para a vaga

**Prompt:**

```
Anexei a JD da vaga [posição] na [empresa]. Vou para entrevista de RH em [X] dias.

Liste:

1. **10 perguntas de RH/comportamental** que provavelmente vão me fazer baseadas no que essa empresa valoriza (extraia da JD e da cultura sugerida).

2. **5 perguntas técnicas conceituais** sobre a stack mencionada.

3. **3 perguntas inteligentes que EU devo fazer ao entrevistador** sobre o cargo, time e expectativas — específicas para esta empresa, não genéricas.

JD:
"""
[cole]
"""
```

### 6.3. Mock interview de RH (role play)

**Prompt:**

```
Vou fazer simulado de entrevista de RH com você. Aja como recrutadora sênior de uma [empresa do tipo X] aplicando para vaga de [posição].

Regras do simulado:
- Faça perguntas UMA por vez. Espere minha resposta antes da próxima.
- Faça as 5 perguntas-padrão (Me fala sobre você, Por que essa vaga, Pretensão salarial, Pontos fortes/a desenvolver, Tem perguntas?).
- Adicione 1-2 perguntas comportamentais STAR baseadas na vaga.
- Após cada resposta minha, dê feedback CRÍTICO em 2 frases: o que foi bom, o que melhorar. Aponte clichês, falta de estrutura, falta de métrica.
- Tempo total: 15-20 min.

Comece com "Oi! Vamos começar?" e me espera.

Minha vaga-alvo: [...]
Meu contexto: [...]
```

### 6.4. Simulado técnico — algoritmo

**Prompt:**

```
Aja como entrevistador técnico de uma [empresa do tipo X — Big Tech, fintech, etc.].

Faça uma sessão de live coding comigo:

1. Me dê UM problema medium do LeetCode estilo [array, hash, string, tree, graph, DP — escolha um].
2. Não me dê a solução. Apenas o problema com exemplo.
3. Espere eu explicar minha abordagem em voz alta (vou digitar). Não interrompa.
4. Após eu propor solução: pergunte sobre complexidade tempo/espaço.
5. Se eu travar: dê dica leve, não a resposta.
6. Após eu codar: me peça para tracear meu código com input específico.
7. No final, dê feedback sobre: comunicação, raciocínio, qualidade do código, cobertura de edge cases.

Comece com "Aqui vai o problema:". Espera minha resposta antes de continuar.
```

### 6.5. System Design — orientação passo a passo

**Prompt:**

```
Vou praticar system design para entrevista. Tema: [Twitter feed / URL shortener / chat / pagamento / etc.].

Aja como entrevistador sênior. Conduza a sessão em 4 fases:

**Fase 1 — Requirements (5 min):** me pergunte sobre functional e non-functional requirements. Não desenhe nada ainda. Espere eu perguntar antes de eu propor solução.

**Fase 2 — High-level (10 min):** me peça para listar componentes macro (cliente, load balancer, API, banco, cache, queue, CDN). Confirme se faz sentido antes de aprofundar.

**Fase 3 — Deep dive (15 min):** escolha 2-3 componentes para aprofundar e me pergunte sobre schema, índice, sharding, cache strategy, trade-offs.

**Fase 4 — Scale (5 min):** me pergunte: e se tráfego dobrar? E se um datacenter cair? Como monitorar?

Após cada fase, me dê feedback do que foi bom e o que faltou.

Comece pela Fase 1.
```

### 6.6. Take-home review antes de entregar

**Prompt:**

```
Anexei meu projeto take-home (código + README) para a vaga [posição].

Faça review crítico no nível de Tech Lead, considerando:

1. **README** — está completo? Cobre: o que é, como rodar, decisões técnicas, o que faria com mais tempo?
2. **Estrutura do código** — modular? Organização de pastas faz sentido?
3. **Qualidade** — nomes claros, funções pequenas, tratamento de erros?
4. **Testes** — pelo menos cobre caminho feliz? Edge cases pelo menos comentados?
5. **Decisões técnicas** — justificadas? Sem over-engineering?
6. **Git history** — commits bem nomeados? Sem 1 commit gigante "initial"?

Aponte problemas com prioridade (Crítico / Alto / Médio). Sugira correções concretas.

Não me elogie sem motivo — quero feedback severo de quem vai me eliminar.
```

---

## 7. Prompts: Estudo e Code Review

### 7.1. Explicar conceito que travou

**Prompt:**

```
Estou estudando [conceito — ex: closures em JavaScript, GIL no Python, Mutex vs Semaphore].

Explique para alguém que já programa há [N] anos mas nunca aprofundou nesse tema:

1. **Definição** em 1 frase.
2. **Analogia simples** que torne intuitivo.
3. **Exemplo de código** mínimo (5-15 linhas).
4. **Quando usar** — caso prático real.
5. **Quando NÃO usar** ou armadilhas comuns.
6. **Pergunta de entrevista** sobre esse conceito que provavelmente vão me fazer.

Tom: direto, sem enrolação acadêmica. Linguagem: [Java / Python / JS — escolha].
```

### 7.2. Code review do seu código

**Prompt:**

```
Aja como Tech Lead sênior fazendo code review.

Revise este código aplicando os princípios de Clean Code (Robert C. Martin) e SOLID:

```[linguagem]
[cole o código]
```

Estrutura do feedback:

1. **Problemas críticos** (bugs, segurança, edge cases não tratados).
2. **Code smells** (Long Method, Large Class, Feature Envy, etc.).
3. **Violações de SOLID** específicas.
4. **Sugestões de refactoring** com código antes/depois para 2-3 pontos.
5. **O que está bom** — não só crítica.

Não invente problema. Se está OK, diga "OK".

Contexto: [o que esse código faz / parte de qual sistema].
```

### 7.3. Quiz para auto-avaliação

**Prompt:**

```
Quero testar se domino [tópico — ex: SOLID, índices Postgres, padrões REST, hooks React].

Crie um quiz de 10 perguntas com:
- 5 conceituais (multipla escolha ou aberta).
- 3 cenários práticos ("dado X, qual seria sua abordagem?").
- 2 perguntas de armadilha que pegariam alguém com conhecimento superficial.

Faça uma pergunta por vez. Não me dê a resposta antes de eu responder.

Após eu responder cada uma, comente: certo/errado + por quê. Cite fonte ou referência se aplicável.

No final, dê uma nota de 0-10 e indique 3 áreas para eu aprofundar.
```

### 7.4. Plano de estudo personalizado

**Prompt:**

```
Quero migrar de [stack atual] para [stack-alvo] em [N] meses.

Hoje sei: [liste o que domina].
Quero chegar a: [liste o que precisa dominar para vagas Pleno na nova stack].

Crie plano de estudo semana a semana, considerando que tenho [X] horas/semana disponíveis.

Para cada semana:
- Tópicos a estudar.
- 1 livro ou recurso oficial recomendado (não tutorial random do YouTube).
- 1 projeto pequeno aplicando o que aprendeu.
- Como testar se entendeu (quiz ou exercício).

Seja realista. Em [N] semanas com X h/sem, o que dá pra dominar de verdade?
```

---

## 8. Prompts: Freelance

### 8.1. Estimar preço de projeto

**Prompt:**

```
Cliente me pediu este projeto:

[descrição do escopo em 5-15 linhas]

Quero estimar:

1. **Horas reais necessárias** — desenvolvendo + reuniões + ajustes esperados + gestão.
2. **Buffer recomendado** (geralmente 30-50% acima da estimativa).
3. **Preço fixo razoável** considerando [minha senioridade, R$ X/h, cliente BR ou internacional].
4. **Marcos de pagamento** sugeridos (ex: 50% antes + 50% após entrega; ou 30/40/30 em 3 marcos).
5. **Riscos do projeto** que você identifica (escopo creep, dependências externas, falta de clareza).

Estou em [BR ou international], minha hora-base é R$/US$ [X].
```

### 8.2. Proposta detalhada para cliente

**Prompt:**

```
Vou enviar proposta para este cliente:

Empresa: [nome ou segmento]
Projeto pedido: [descrição]
Valor que vou cobrar: R$ [Y]
Prazo: [N semanas]

Escreva proposta profissional (1-2 páginas) com:

1. **Resumo executivo** — 3 frases sobre o que vou entregar e o impacto.
2. **Escopo detalhado** — bullets com cada entregável.
3. **Cronograma** — marcos por semana.
4. **Investimento** — valor, forma de pagamento, marcos.
5. **O que NÃO está incluso** (importante para evitar escopo creep).
6. **Stack técnica** que vou usar e por quê.
7. **Sobre mim** — 1 parágrafo curto sobre minha experiência relevante.

Tom: profissional, direto, sem rebuscamento. Cliente é técnico [sim/não].
```

### 8.3. Email para cliente difícil

**Prompt:**

```
Estou com problema com cliente:

Situação: [descreva — ex: cliente está pedindo mudanças fora do escopo combinado / pagamento atrasou / não responde há 1 semana].

Já tentei: [...]

Escreva email profissional pra eu enviar com:
- Tom firme mas educado.
- Lembrança do combinado original (escopo, prazo, valor).
- Proposta concreta de solução ou ajuste de contrato.
- Consequência clara se não houver resposta em [X dias].

Não seja agressivo, não seja submisso. Seja claro.
```

### 8.4. Avaliar contrato antes de assinar

**Prompt:**

```
Cliente me mandou este contrato:

"""
[cole o contrato]
"""

Aja como advogado especializado em contratos PJ tech no Brasil. Aponte:

1. **Cláusulas problemáticas** — non-compete, propriedade intelectual abusiva, multa desproporcional, exclusividade não-paga, foro distante.
2. **Cláusulas faltando** — proteção do meu lado (rescisão sem causa, ajustes por escopo creep, atrasos por falha do cliente).
3. **Sugestões de redação** para cada problema apontado.
4. **Red flags** gerais — algo que parece "feito por advogado para esmagar o freelancer".

Sou freelancer pleno, projeto de [escopo em 1 frase], valor R$ [X], prazo [Y semanas].

Não invente problema se não há. Mas também não seja superficial.
```

---

## 9. Como NÃO usar IA (limitações e riscos)

### 9.1. Os erros que recrutador identifica em 5 segundos

❌ **CV inteiro gerado por IA, sem revisão.** Sintomas:
- Vocabulário sintético ("dedicado", "proativo", "apaixonado por desafios").
- Frases simétricas demais (todas com 2-3 cláusulas iguais).
- Falta de personalidade — todo CV gerado por GPT-4 sem custom instructions parece igual.
- Métricas suspeitas (números redondos demais: "aumentei 50%", "reduzi 80%").

❌ **Cover letter genérica disparada para 50 vagas.** Recrutador percebe — não cita nada específico da empresa.

❌ **LinkedIn "Sobre" copiado de exemplo.** Aparece nas buscas do LinkedIn que outras pessoas usaram texto similar.

❌ **Resposta de entrevista decorada palavra por palavra.** Soa robótica. Use IA para estruturar, não para decorar.

### 9.2. Onde IA falha

- **Métricas reais:** IA não sabe quantos hospitais o seu sistema atende. Você tem que dar o número.
- **Personalidade:** seu jeito de escrever não é o jeito do GPT.
- **Contexto cultural específico:** referências locais, gírias profissionais, contexto BR — IA pode escorregar.
- **Decisões técnicas:** IA pode sugerir abordagem ruim com confiança. Sempre revise.
- **Conselho jurídico/tributário definitivo:** IA não substitui advogado/contador.

### 9.3. Regras de uso saudável

1. **IA = primeiro draft, você = revisor final.** Sempre.
2. **Personalize antes de enviar.** Mude pelo menos 30% do texto da IA.
3. **Coloque sua experiência real.** IA não inventa, só reescreve o que você der.
4. **Evite jargão IA-clichê.** Se a frase começa com "Em um cenário em constante evolução..." → apague.
5. **Use IA para iterar, não para decidir.** Decisão final é sua.

### 9.4. O que IA é ÓTIMA para fazer

✅ **Reescrita de bullets** (estruturação).
✅ **Customização de propostas** (em escala).
✅ **Brainstorm** de ideias e perguntas.
✅ **Tradução técnica** PT-EN.
✅ **Code review** preliminar.
✅ **Mock interview** com feedback estruturado.
✅ **Pesquisa de mercado** (com Perplexity / Gemini).
✅ **Estudo conceitual** (explicação adaptada ao seu nível).

---

## 10. Checklist final

Antes de cada uso de IA no processo de recolocação:

### Configuração

- [ ] Tenho um **Project / Custom GPT** com meu contexto carregado (CV + LinkedIn + JD-alvo).
- [ ] Sei quando uso Claude (texto longo, análise) vs ChatGPT (mock rápido) vs Perplexity (pesquisa).
- [ ] Tenho conta paga em pelo menos 1 ferramenta (Claude Pro ou ChatGPT Plus).

### Por uso

- [ ] **Revisei o output** antes de enviar para qualquer pessoa.
- [ ] **Personalizei pelo menos 30%** do texto.
- [ ] **Conferi métricas** — não deixei número inventado.
- [ ] **Apaguei clichês de IA** (palavras genéricas, frases simétricas demais).
- [ ] **Checei se soa como eu**, não como o GPT.

### Estratégia

- [ ] Uso IA para acelerar tarefas mecânicas (reescrita, tradução, estruturação).
- [ ] Faço pessoalmente o que precisa de julgamento (decisão de carreira, negociação, escolha de empresa).
- [ ] Reviso meu workflow a cada 30 dias — o que IA está fazendo bem? Onde estou perdendo tempo manualmente?

---

## Como conectar este guia ao resto do material

- **`Guia: Currículo`** — use os prompts da Seção 3 para auditoria, reescrita de bullets e customização por vaga.
- **`Guia: LinkedIn`** — Seção 4 cobre headline, "Sobre" e posts.
- **`Guia: Busca Ativa`** — Seção 5 traz prompts para cold approach, follow-up, pesquisa de empresas.
- **`Guia: Entrevistas`** — Seção 6 oferece mock interview, STAR, system design, take-home review.
- **`Mapa de Estudo`** — Seção 7 ajuda a estudar fundamentos com explicações, quizzes e planos.
- **`Guia: Freelance`** — Seção 8 ajuda em estimativa, propostas, comunicação com cliente.

A IA é **força multiplicadora** — torna mais rápido tudo o que os outros guias ensinam a fazer.

---

*Os prompts são pontos de partida. Adapte ao seu contexto, itere, e construa seus próprios prompts mestres ao longo do tempo. O verdadeiro hack é ter um arsenal pessoal de 10-20 prompts que você usa repetidamente.*
