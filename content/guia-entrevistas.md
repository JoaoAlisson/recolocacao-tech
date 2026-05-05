# Guia Completo de Entrevistas Tech: RH, Técnica e os Métodos do Cracking the Coding Interview

> Para profissionais de tecnologia do Brasil em recolocação ou transição de carreira.

---

## Sumário

1. [A anatomia do processo seletivo tech](#1-a-anatomia-do-processo-seletivo-tech)
2. [Entrevista de RH (Behavioral / Cultural Fit)](#2-entrevista-de-rh-behavioral--cultural-fit)
3. [Entrevista técnica: panorama](#3-entrevista-tecnica-panorama)
4. [Os métodos do Cracking the Coding Interview](#4-os-metodos-do-cracking-the-coding-interview)
5. [Live coding na prática](#5-live-coding-na-pratica)
6. [System design (essencial para pleno+)](#6-system-design-essencial-para-pleno)
7. [Take-home / estudo de caso](#7-take-home--estudo-de-caso)
8. [A oferta e a negociação](#8-a-oferta-e-a-negociacao)
9. [Erros que custam vagas](#9-erros-que-custam-vagas)
10. [Cronograma de preparação (4 / 8 / 12 semanas)](#10-cronograma-de-preparacao)
11. [Checklist final](#11-checklist-final)

---

## 1. A anatomia do processo seletivo tech

### 1.1. Os estágios típicos

Em ordem (na maioria das empresas BR e EUA):

| # | Estágio | Duração | Quem conduz |
|---|---|---|---|
| 1 | Triagem do CV (ATS + recrutador) | 5–15 min | Tech Recruiter |
| 2 | Triagem RH (call inicial) | 30 min | Tech Recruiter |
| 3 | Entrevista RH formal | 60 min | RH ou Hiring Manager |
| 4 | Entrevista técnica 1 (live coding ou system design) | 60–90 min | Engineer |
| 5 | Take-home (opcional) | 4–8h em casa | Engineer reviewer |
| 6 | Entrevista técnica 2 (mais profunda) | 60–90 min | Engineer / Tech Lead |
| 7 | Entrevista final (manager / CTO) | 45–60 min | Manager / VP |
| 8 | Proposta + negociação | Variável | Tech Recruiter / Manager |

Tempo total: **30 a 60 dias** em empresas BR; **60 a 120 dias** em FAANG/BigTech.

### 1.2. O que cada estágio realmente avalia

| Estágio | Avalia | Eliminado por |
|---|---|---|
| Triagem CV | Match palavra-chave + senioridade | CV genérico, sem stack |
| Triagem RH | Comunicação básica, pretensão, disponibilidade | Travar em pergunta simples, mentir |
| RH formal | Fit cultural, motivação, soft skills | Falar mal do anterior, falta de exemplos |
| Técnica 1 | Raciocínio + comunicação técnica | Travar em silêncio, não perguntar antes de codar |
| Take-home | Qualidade de código + decisões | Entrega incompleta, sem README, escopo errado |
| Técnica 2 | Profundidade técnica, trade-offs | Não saber justificar escolhas |
| Final | Visão de longo prazo, fit estratégico | Falta de perguntas, energia baixa |

### 1.3. Por que entender o processo importa

Cada estágio pede preparação **diferente**. Em RH, comunicação > técnico. Em live coding, raciocínio em voz alta > solução perfeita. Em system design, trade-offs > arquitetura "correta". Quem trata todos os estágios igual perde nos 3 últimos.

---

## 2. Entrevista de RH (Behavioral / Cultural Fit)

### 2.1. O que o RH realmente filtra

4 coisas:

1. **Fit cultural** com a empresa.
2. **Motivação real** para essa vaga (não vaga genérica).
3. **Compatibilidade** salarial e de disponibilidade.
4. **Red flags** comportamentais (instabilidade, reclamação crônica, descontrole).

RH não testa técnica. Mas você **é eliminado aqui** se comunica mal, não consegue falar de você sem decoração, trava em pretensão salarial ou desliza em pergunta comportamental.

### 2.2. As 5 perguntas-padrão (90% das entrevistas RH têm essas)

#### Pergunta 1: "Me fala sobre você"

**Não é pedido autobiográfico. É teste de comunicação.**

Fórmula: **presente → passado → futuro**, em **60–90 segundos**.

✅ Resposta-modelo:

> "Hoje sou Backend Engineer focado em sistemas de pagamento na Fintech XYZ — lidero tecnicamente um time de 4 devs [presente]. Cheguei aqui depois de 3 anos em fintechs menores, onde migrei de PHP para Java/Spring [passado]. Estou buscando uma posição que me deixe liderar tecnicamente um time maior, idealmente em produto B2B [futuro]."

❌ Anti-padrão: começar com "bom, eu nasci em..." (autobiografia) ou listar todos os empregos em ordem cronológica.

#### Pergunta 2: "Por que está saindo / por que se interessou pela vaga?"

**NUNCA fale mal do anterior.** Mesmo que seja verdade, te marca como pessoa-problema.

Frame neutro: "busco crescer em **X** que aqui não tem espaço."

Para a vaga atual: cite **1–2 coisas específicas que você pesquisou** (produto, time, tecnologia, rodada de investimento, palestra do CTO).

✅ "Acompanho o tech blog de vocês há 6 meses, em particular o post sobre como migraram para Kafka. Estou em uma fase da carreira em que quero atuar com event-driven em escala — e vocês são uma das poucas empresas no Brasil fazendo isso seriamente."

#### Pergunta 3: "Pretensão salarial" (a mais temida)

**Nunca dê número sem ter pesquisado.** Vai sair muito alto (perde) ou muito baixo (perde).

Pesquise antes em **Glassdoor**, **Levels.fyi**, **Salário.com.br** ou pergunte ao recrutador "qual o range da vaga?".

✅ Resposta-modelo:

> "Pesquisei a faixa para [posição] em [contexto: empresa porte X, modalidade Y] e considero R$ [Z] razoável como salário base. Estou aberto a discutir o pacote completo — bônus, benefícios, equity. O que vocês têm em mente?"

3 elementos: você pesquisou (autoridade), deu número (firmeza), abriu negociação (flexibilidade).

#### Pergunta 4: "Pontos fortes e a desenvolver"

**Fortes**: 2–3 com **EXEMPLO concreto**, nunca rótulo.

❌ "Sou comunicativo, proativo e dedicado."

✅ "Comunicação técnica — fui escolhido para documentar o sistema de pagamentos que 4 squads usam, e mantenho o blog interno de arquitetura há 1 ano."

**A desenvolver**: 1 ponto **real** + o que você está fazendo para melhorar.

❌ "Sou perfeccionista." (eles riem internamente)

✅ "Tenho dificuldade em delegar. Estou trabalhando isso pegando um estagiário no time atual e me forçando a passar tarefas que eu faria mais rápido."

#### Pergunta 5: "Você tem alguma pergunta?"

**NUNCA responda "não".** Sinaliza desinteresse.

SEMPRE tenha 2–3 prontas:

- "Como é o processo de decisão técnica no time? RFCs, design docs, votação?"
- "Qual a expectativa para os primeiros 90 dias na vaga?"
- "Como você descreve o estilo de gestão direta — micromanaging, hands-off, etc.?"
- "Qual o maior desafio técnico do time hoje?"
- "Como vocês medem sucesso de um engenheiro nessa posição?"

Boas perguntas mostram **maturidade** — você está avaliando a empresa, não só sendo avaliado.

### 2.3. Perguntas situacionais e o método STAR

Quando aparece **"me conta uma vez que..."**, responda em **STAR**:

- **S**ituação: contexto rápido (1–2 frases).
- **T**arefa: o que você precisava fazer (1 frase).
- **A**ção: o que **VOCÊ** fez (3–4 frases — a parte mais longa).
- **R**esultado: o impacto, com métrica se houver (1–2 frases).

**90 segundos por história.** Treine 3–5 prontas que cubram: entrega complexa, conflito interpessoal, falha/aprendizado, liderança/iniciativa, decisão sob pressão.

### 2.4. Soft Skills Matrix (do livro Cracking the Coding Interview)

Gayle McDowell sugere uma **matriz** para preparar histórias comportamentais.

A ideia: em vez de decorar resposta para cada pergunta possível, você tem **5–10 histórias prontas** e mapeia para qual soft skill cada uma demonstra. Quando a pergunta chega, você seleciona a melhor história.

Exemplo da sua matriz:

| História pessoal | Iniciativa | Liderança | Conflito | Falha | Comunicação |
|---|---|---|---|---|---|
| Migração de sistema de pagamentos | ✅ | ✅ | | | ✅ |
| Bug crítico na madrugada de Black Friday | | | | ✅ | ✅ |
| Mentoria do júnior promovido a pleno | | ✅ | ✅ | | |
| Refatoração do legado proibida pelo PM | ✅ | | ✅ | | |
| Aprendizado fracassado de Kafka antes de adoção | | | | ✅ | |
| Apresentação de RFC contra opinião do CTO | ✅ | ✅ | ✅ | | ✅ |

**Como usar:**

1. Liste **5–10 histórias pessoais** de trabalho com detalhes que você lembra.
2. Para cada, marque com ✅ as soft skills que ela demonstra.
3. Em entrevista, ouça a pergunta, identifique a soft skill alvo, escolha a história com ✅ que melhor encaixa, conte em STAR.

Vantagem: você não decora resposta — você **adapta** uma história verdadeira ao formato da pergunta. Soa natural e não robótico.

### 2.5. Sinais de fit cultural — você TAMBÉM avalia a empresa

Sinais a observar durante o RH:

✅ **Green flags da empresa:**

- Recrutador chega no horário, agenda bem organizada.
- Processo seletivo descrito por escrito (etapas, prazos).
- Respondem suas perguntas com **exemplos concretos**, não jargão.
- Faixa salarial discutida abertamente.
- Não pressionam decisão imediata.
- Mencionam plano de carreira / framework de evolução.

🚩 **Red flags da empresa:**

- "A gente é uma família aqui" → significa cobrança fora do horário.
- "Trabalhamos duro mas a recompensa vem" → horas extras não pagas.
- "Aqui é dinâmico, ambiente de startup" em empresa de 500 pessoas → confusão.
- Recusam dizer faixa salarial até você dar a sua primeiro.
- Pressão para você "decidir hoje" ou "amanhã no máximo".
- Recrutador atrasa sem aviso ou cancela 3 vezes.
- Te oferecem aumento informal **só** quando você fala que está saindo (sinal: empresa não te valorizava).

### 2.6. Erros que matam em RH

1. **Falar mal do emprego anterior.** Mesmo verdadeiro, te marca como problema.
2. **Mentir sobre nível de inglês.** Recrutador entra em inglês na call. Se travou, queimou para sempre na rede dele.
3. **Pretensão salarial sem pesquisa.**
4. **Decoração robótica.** Ler scripts derruba autenticidade.
5. **Não ter perguntas.**
6. **Energia baixa / monotônica.** Não precisa fingir entusiasmo, mas tom de voz morto = candidato eliminado.

---

## 3. Entrevista técnica: panorama

### 3.1. Os 4 formatos

1. **Live coding** (leetcode-style): resolver problema na hora, 30–60 min.
2. **System design** (médio/sênior): desenhar sistema do zero, 45–60 min.
3. **Take-home / estudo de caso**: problema para resolver em casa, 4–8h.
4. **Pair programming**: você + dev do time codam juntos, 60 min.

Cada um pede preparação diferente. Empresas geralmente **combinam 2–3 formatos** no processo (ex: live coding + system design + take-home).

### 3.2. O que está sendo avaliado (não é só "código certo")

Em **live coding**, peso aproximado:

| Critério | Peso |
|---|---|
| Comunicação / pensar em voz alta | 40% |
| Raciocínio / abordagem | 30% |
| Código limpo e correto | 20% |
| Edge cases / testes | 10% |

**Quem chega à solução perfeita silenciosamente perde** para quem chega numa solução boa explicando o caminho.

### 3.3. Big O notation (essencial)

Você PRECISA saber falar sobre complexidade. Em entrevista, **sempre comente a complexidade da sua solução** ao final.

Tabela de complexidades comuns:

| Complexidade | Nome | Exemplo |
|---|---|---|
| O(1) | Constante | Acesso a HashMap, array por índice |
| O(log n) | Logarítmica | Busca binária, BST balanceada |
| O(n) | Linear | Loop simples, busca sequencial |
| O(n log n) | Linearítmica | Mergesort, Quicksort médio |
| O(n²) | Quadrática | Loops aninhados, bubble sort |
| O(2^n) | Exponencial | Recursão sem memoization (fibonacci ingênuo) |
| O(n!) | Fatorial | Permutações |

Frase final padrão: *"Essa solução é O(n log n) em tempo e O(n) em espaço — gostaria que eu otimizasse mais?"*

### 3.4. Estruturas de dados que aparecem em 80% das entrevistas

Para cada uma, saber: como funciona, custo de inserção/busca/remoção, quando usar.

- **Array** (acesso O(1), inserção meio O(n))
- **HashMap / HashSet** (acesso O(1) médio — sua arma secreta)
- **Linked List** (inserção O(1) na ponta, acesso O(n))
- **Stack** (LIFO — desfazer, parsing, recursion stack)
- **Queue** (FIFO — BFS, processamento de tarefas)
- **Tree / BST** (busca O(log n) se balanceada)
- **Heap / Priority Queue** (top-K, scheduler)
- **Graph** (BFS, DFS, shortest path)

### 3.5. Padrões algorítmicos comuns

- **Two pointers** (arrays/strings ordenados).
- **Sliding window** (subarray contínuo).
- **Hash table** para lookup O(1).
- **Binary search** (array ordenado, ou search-space).
- **DFS / BFS** (grafos, árvores).
- **Dynamic programming** (memoization, tabulation).
- **Greedy** (escolha local ótima).
- **Recursion / backtracking** (combinações, permutações).

---

## 4. Os métodos do Cracking the Coding Interview

O livro **Cracking the Coding Interview** (Gayle Laakmann McDowell, 6ª edição) é a referência mais citada para entrevistas técnicas em FAANG e BigTech. Estes são os métodos do livro que mais convertem em entrevista real.

### 4.1. Os 7 passos para resolver QUALQUER problema de coding

Cada problema deve ser atacado **nesta ordem**, sem pular passos:

#### 1. Listen carefully (Escute com atenção)

- Anote os detalhes do problema enquanto o entrevistador fala.
- Pergunte: "os números podem ser negativos?", "o input é sempre válido?", "tem ordenação prévia?", "pode ter duplicatas?".
- Cada detalhe é uma **pista** sobre a solução esperada (ex: "ordenado" sugere binary search).

#### 2. Draw an example (Desenhe um exemplo)

- Use input **GENÉRICO e GRANDE o suficiente** para mostrar comportamento real.
- ❌ NÃO use `[1,2,3]` — é pequeno demais e não mostra padrão.
- ❌ NÃO use edge case como exemplo principal (ex: array vazio).
- ✅ Use algo como `[5, 3, 8, 1, 9, 2, 7]` que tem variedade.

Mostre o exemplo passo a passo no quadro/tela enquanto fala.

#### 3. State a brute force (Apresente uma solução bruta)

- Mesmo que seja O(n²) ou O(n³), declare uma solução qualquer **antes de tentar otimizar**.
- Não codifique ainda — só diga em voz alta.
- Isso te dá baseline e mostra que você não trava.

> "Posso fazer brute force checando todos os pares — O(n²). Vou pensar se dá para otimizar."

#### 4. Optimize (Otimize)

Use **BUD** (próxima seção) ou **pattern matching**.

Pense em estruturas auxiliares: **HashMap**, **Set**, **Heap**, **Stack** quase sempre cortam complexidade.

#### 5. Walk through (Caminhe pela solução)

**Antes de codificar**, descreva linha a linha o que você vai fazer.

> "Vou criar um HashMap. Para cada número no array, vou verificar se `target - num` já está no map. Se sim, retorno o par. Se não, adiciono `num` no map. No final, retorno null."

Garante que você sabe a solução **antes de digitar**. Se travar aqui, você não está pronto para codar.

#### 6. Implement (Implemente)

- **Código modular**: extraia em funções pequenas se a solução tem 30+ linhas.
- **Variáveis com nomes claros**: `numToIndex` > `m`.
- **Não force micro-otimizações** na primeira versão. Funcione primeiro, otimize depois se sobrar tempo.

#### 7. Test (Teste)

Em ordem:

1. **Teste conceitual**: explique o algoritmo passo a passo com um exemplo, sem rodar o código.
2. **Casos incomuns**: input estranho, array com 1 elemento, todos elementos iguais.
3. **Edge cases**: array vazio, máximo, mínimo, overflow de int.
4. **Trace o código**: linha a linha com input real.

Se encontrar bug, corrija calmamente — corrigir bug em entrevista pontua positivamente.

### 4.2. Técnica BUD (otimização)

McDowell descreve **BUD** como "as 3 perguntas para otimizar qualquer solução":

- **B — Bottlenecks** (Gargalos): qual é a parte mais lenta? Geralmente onde está o O(n²) ou O(n³). Foque ali.
- **U — Unnecessary work** (Trabalho desnecessário): há cálculo que você faz mas não usa? Há iteração que pode sair antes do fim?
- **D — Duplicated work** (Trabalho duplicado): você está computando o mesmo valor múltiplas vezes? Use memoization, hash, cache.

**Aplique BUD após o brute force.** Isso te leva da solução O(n²) para O(n log n) ou O(n) na maioria dos casos.

Exemplo: encontrar pares que somam X num array.

- Brute force: O(n²) — dois loops checando todos os pares.
- BUD análise: o "duplicated work" é que para cada `i`, você varre o array todo de novo procurando `X - arr[i]`. **Você já viu esses números.**
- Otimização: HashMap armazena números já vistos, lookup O(1). Solução final: O(n).

### 4.3. Pattern Matching (reconhecimento de padrões)

McDowell argumenta: problemas de entrevista têm **padrões repetidos**. Você não memoriza problemas — você reconhece o **tipo** de problema.

Padrões mais comuns e sinais para identificar:

| Sinal no problema | Padrão a usar |
|---|---|
| "Encontre par que soma X" / "elementos únicos" | **HashMap** ou **Two Pointers** |
| "Subarray contínuo com soma X" | **Sliding Window** ou **Prefix Sum** |
| "Caminho mais curto sem peso" | **BFS** |
| "Caminho mais barato com pesos" | **Dijkstra** ou **DP** |
| "Todas as combinações / permutações" | **Backtracking / Recursion** |
| "Você já viu esse antes?" | **HashMap / Set** |
| "Array ordenado, ache valor" | **Binary Search** |
| "Construir resposta de subproblemas" | **Dynamic Programming** |
| "Top-K elementos" | **Heap** |
| "Ordem de processamento por dependência" | **Topological Sort** |
| "Validar parênteses / nesting" | **Stack** |

Quando encontrar um problema novo, pergunte-se: **"isso parece com qual problema clássico?"**.

### 4.4. Best Conceivable Runtime (BCR)

Antes de gastar tempo otimizando, calcule o **menor tempo teoricamente possível** para o problema.

**Exemplo:** "ache o segundo maior em um array de N números". BCR = O(N) — você precisa olhar cada elemento ao menos uma vez.

Se sua solução já está em BCR, **pare de otimizar**. Você está perdendo tempo. Vá para o passo Walk Through.

BCR ajuda a evitar o erro comum: ficar tentando otimizar uma solução já ótima. **Saber quando parar é tão importante quanto saber otimizar.**

### 4.5. Estrutura ideal de resposta para perguntas teóricas

McDowell sugere estrutura de resposta para perguntas conceituais:

> [Resposta direta em 1 frase]. [Explicação em 2-3 frases]. [Exemplo concreto em 1-2 frases]. [Trade-off ou nuance em 1 frase, se houver].

**Exemplo** — pergunta: "diferença entre ArrayList e LinkedList?":

> "ArrayList é baseado em array contíguo, LinkedList em nós ligados. ArrayList tem acesso indexado O(1) mas inserção no meio O(n). LinkedList tem inserção/remoção no início e fim O(1) mas acesso indexado O(n). Na prática, ArrayList vence quase sempre porque caches de CPU favorecem memória contígua — só uso LinkedList em casos muito específicos de fila de inserção pelas pontas."

4 partes: definição → custos → exemplo prático → trade-off real. Em 30 segundos você mostrou domínio.

---

## 5. Live coding na prática

### 5.1. Antes da entrevista (preparação)

Checklist:

- [ ] **Treine no LeetCode** com timer (limite de 30 min por problema).
- [ ] **Resolva em voz alta**, gravando-se no celular. Resolver no silêncio é diferente de resolver explicando.
- [ ] **Sente em mock interview** com colega/comunidade — Pramp.com (gratuito, parceiro aleatório) é excelente para isso.
- [ ] **Confira a ferramenta** que vão usar (CoderPad, HackerRank Live, Google Doc). Nem todas têm autocomplete.
- [ ] **Tenha papel e caneta** para rascunhar exemplo, mesmo em entrevista remota.

### 5.2. Durante — os primeiros 5 minutos definem 50% do resultado

1. **Repita o problema em voz alta.** "Então o problema é X, com input Y, e preciso retornar Z. Está correto?"
2. **Pergunte 2–3 detalhes**: range do input, edge cases, requisitos de performance.
3. **Desenhe um exemplo** no quadro/whiteboard.
4. **Diga UMA solução em voz alta** (mesmo brute force). Não fique calado pensando.

### 5.3. Como pensar em voz alta

A regra é simples: **se você está pensando, está falando**.

❌ Em vez de:

> [silêncio de 30 segundos] "Vou usar um HashMap."

✅ Faça assim:

> "Pensando alto: posso fazer brute force O(n²) com dois loops. Mas é provavelmente otimizável... onde está o gargalo? Estou checando se cada par soma X. Posso reduzir essa verificação? Sim, se eu armazenar `X - num` em um HashMap enquanto percorro... isso me dá O(n)."

O entrevistador vê **seu raciocínio**. Mesmo se a solução final não for perfeita, ele viu como você pensa — que é o que ele realmente quer avaliar.

### 5.4. Quando você TRAVA

McDowell tem conselho específico: **NÃO finja confiança falsa.**

Se travou, faça em ordem:

1. **Volte ao exemplo**: trace o problema com um input concreto, passo a passo.
2. **Volte à brute force**: o que faria sem qualquer otimização?
3. **Pergunte alto**: "estou pensando em usar [X], faz sentido?".
4. **Peça ajuda explícita**: "estou travado nesse ponto, posso pedir uma dica?".

**Pedir dica NÃO desclassifica.** Travar em silêncio sim. Empresas querem ver como você se desbloqueia.

### 5.5. Encerramento (últimos 5 minutos)

Sempre faça:

1. **Confirme complexidade** de tempo e espaço.
2. **Liste o que faria com mais tempo** (otimizações, edge cases adicionais que não cobriu).
3. **Pergunte** se há cenário específico que ele queria ver.
4. **Agradeça** e mostre interesse no time/produto.

---

## 6. System design (essencial para pleno+)

### 6.1. O framework de 4 passos

Para qualquer pergunta de system design (de "design Twitter" a "design URL shortener"):

#### Passo 1: Requirements (5–10 min)

**SEMPRE pergunte antes de desenhar.** Quem desenha primeiro perde.

- **Functional**: quais features? Login? Upload? Notificações? Search?
- **Non-functional**: quantos usuários (DAU/MAU)? QPS (queries per second)? Latência aceitável (p50, p99)? Consistência forte ou eventual? Disponibilidade (99.9%, 99.99%)?

#### Passo 2: High-level Design (10–15 min)

Desenhe os blocos macro:

- Cliente (web, mobile)
- Load balancer
- API gateway
- Microsserviços
- Banco de dados (SQL ou NoSQL)
- Cache (Redis)
- Message queue (Kafka, SQS)
- CDN (se aplicável)

**Não entre em detalhe ainda.** Mostre o desenho ao entrevistador e **CONFIRME se está no caminho certo** antes de aprofundar.

#### Passo 3: Deep Dive (20–30 min)

O entrevistador vai pedir para aprofundar 2–3 componentes:

- **Schema do banco**: tabelas, índices, particionamento.
- **Algoritmo de cache**: cache-aside, write-through, TTL.
- **Tratamento de falha**: o que acontece se um microsserviço cair?
- **Sharding** do banco se a escala pede.

**Trade-offs SEMPRE.** "Eu uso Redis aqui porque preciso de latência <10ms e os dados cabem em memória, mas se [Y] usaria Memcached pela simplicidade".

#### Passo 4: Scale + Edge Cases (10 min)

- E se o tráfego dobrar / 10x?
- E se um datacenter cair?
- Como você monitora isso em produção?
- Onde está o gargalo nessa escala?

### 6.2. Perguntas comuns no Brasil e exterior

- Design **Twitter / Instagram feed**.
- Design **URL shortener** (bit.ly).
- Design **sistema de notificação** push.
- Design **chat / messenger** (WhatsApp, Slack).
- Design **rate limiter**.
- Design **Uber / iFood** (geolocalização + matching).
- Design **Netflix recomendador** (alto nível).
- Design **parking lot** (clássico OOP).
- Design **gateway de pagamento** (idempotência, retry).
- Design **e-commerce checkout**.

### 6.3. Conceitos que você precisa saber explicar

- **CAP theorem** (Consistency, Availability, Partition tolerance).
- **Eventual consistency vs strong consistency**.
- **Sharding** (range-based, hash-based, geo-based).
- **Read replicas** + replication lag.
- **Cache strategies**: cache-aside, write-through, write-back.
- **Load balancing**: round-robin, least connections, IP hash.
- **Microsserviços vs monolito** — quando cada um faz sentido.
- **Síncrono vs assíncrono** (REST vs message queue).
- **Idempotência** (especialmente em pagamentos).
- **Circuit breaker** e **bulkhead pattern**.
- **Backpressure** (sistemas de fila).

---

## 7. Take-home / estudo de caso

### 7.1. Como atacar (regras de ouro)

1. **Respeite o escopo declarado.** Se pediram 4h, entregue MVP em 4–6h, não em 16h. **Tempo extra sinaliza mau gerenciamento de tempo.**
2. **Funcional > perfeito.** Algoritmo simples que funciona vale mais que arquitetura sofisticada quebrada.
3. **README é metade da nota.** Documentação importa mais que código bonito.
4. **Testes mínimos viáveis.** Pelo menos cubra o caminho feliz. Sem teste, perde pontos automáticos.
5. **Git history limpo.** Commits intermediários nomeados (`feat:`, `fix:`, `test:`). Não envie 1 commit gigante "initial commit".

### 7.2. README de take-home que pontua

```markdown
# Nome do Projeto

Resumo de 1 frase do que faz.

## Como rodar

```bash
docker-compose up
# Acessar http://localhost:3000
```

## Decisões técnicas

- **Banco**: escolhi Postgres porque [motivo concreto].
- **Cache**: NÃO usei cache nessa versão porque o volume não justifica.
- **Auth**: JWT por simplicidade; em produção usaria refresh tokens.

## O que faria com mais tempo

- Adicionar testes de integração (cobri só unitários).
- Implementar paginação no endpoint X.
- Adicionar rate limiting.

## Decisões que não fiz

- Persistência distribuída — fora do escopo.
- Migração — projeto em estado inicial.
```

3 partes-chave: **rodar fácil**, **decisões justificadas**, **o que ficou de fora explícito**.

### 7.3. O que NÃO fazer

- **Usar framework que você não domina.** Vai te queimar em pergunta posterior.
- **Copiar-colar código sem entender.**
- **Esconder limitação.** Se algo não funciona em edge case, **declare**. Honestidade conta.
- **Entregar sem documentação.** Mesmo que o código seja claro.

### 7.4. Quando entregar

Geralmente eles dão 5–7 dias. **Entregue em 3–5.** Mostra produtividade, não desespero.

---

## 8. A oferta e a negociação

McDowell dedica capítulo inteiro à negociação no livro. Os pontos principais.

### 8.1. Princípios de negociação

1. **Sempre negocie.** No mínimo 5–10% acima da primeira oferta. Empresas têm margem.
2. **Negocie por escrito quando possível.** E-mail dá tempo de pensar a resposta.
3. **Não compare ofertas falsamente.** Se for pego mentindo, perde a oferta na hora.
4. **Negocie o pacote, não só o salário base**: bônus de assinatura, equity, férias adicionais, learning budget, equipamento, plano de saúde família.

### 8.2. Script de contraproposta básico

Quando recebeu a oferta:

> Obrigado pela oferta — estou animado com a [empresa]. Olhando o pacote, considerando minha experiência em [X anos / stack Y / entregas Z] e o range de mercado para [posição] que pesquisei, gostaria de explorar se há flexibilidade no [salário base / signing bonus / equity]. Especificamente, eu estaria pronto para fechar em [valor X% maior]. O que vocês conseguem?

3 elementos:

- **Mostra entusiasmo** ("animado com a empresa") — não pareça mercenário.
- **Justifica com pesquisa e fatos** (experiência + range de mercado).
- **Dá número específico** — não "quanto vocês podem", você dirige a conversa.

### 8.3. Negociando o pacote (não só o salário)

Se a empresa diz que não pode mexer no salário base, peça outras coisas:

- **Signing bonus** (bônus de contratação): geralmente é mais fácil de aprovar que salário base.
- **Equity** (RSU / stock options): pergunte sobre vesting, cliff, refresh.
- **Bônus de performance**: percentual e critérios.
- **Férias adicionais** (acima dos 30 dias CLT).
- **Learning budget**: R$ 3–8k/ano para cursos e conferências é padrão em scale-ups.
- **Equipamento próprio** (orçamento home office).
- **Data de início flexível** (você precisa de 30 dias para descansar).

### 8.4. Quando NÃO negociar agressivamente

- Primeira oferta já está acima do que você esperava E acima do mercado.
- Você está exausto e quer fechar.
- A vaga é seu plano B (você tem outra oferta forte).

Mesmo nesses casos, **faça pelo menos 1 contraproposta** — empresa raramente recua a oferta inicial só porque você pediu.

---

## 9. Erros que custam vagas

Padrões que matam candidatos em entrevista (em ordem de gravidade):

1. **Mentir sobre stack ou inglês.** Descoberto na primeira pergunta de validação. Te queima na rede do recrutador.
2. **Travar em silêncio.** Pense alto sempre. Silêncio derruba mais que solução errada.
3. **Codar antes de entender.** Pula passo 1 e 2 do método dos 7 passos.
4. **Não perguntar antes de codar.** Mostra que você assume premissas — sinal de imaturidade.
5. **Falar mal do emprego anterior.** Te marca como pessoa-problema.
6. **Não ter perguntas para o entrevistador.** Sinaliza desinteresse.
7. **Pretensão salarial sem pesquisa.**
8. **Não calcular Big O ao final.** Falta de maturidade técnica.
9. **Decoração robótica.** Lê scripts em vez de adaptar histórias.
10. **Levar mais tempo que o pedido no take-home.** Mau gerenciamento de tempo.
11. **Não testar o próprio código.** Não trace, não pensa em edge cases.
12. **Energia baixa / monotônica.** Tom de voz morto = candidato eliminado em RH.

---

## 10. Cronograma de preparação

### 10.1. 4 semanas (entrevista próxima)

| Semana | Foco |
|---|---|
| **1** | LeetCode Easy diário (3/dia) + ler capítulos 1–4 do CtCI |
| **2** | LeetCode Medium (2/dia) + estruturas de dados (HashMap, Tree, Heap) |
| **3** | System design (1 problema/dia) + revisar trade-offs |
| **4** | Mock interviews (Pramp 3x) + revisão de comportamental + preparar perguntas para os entrevistadores |

### 10.2. 8 semanas (preparação confortável)

| Semana | Foco |
|---|---|
| **1–2** | Big O + estruturas de dados básicas (Array, HashMap, LinkedList, Stack, Queue) |
| **3–4** | Algoritmos clássicos (sort, binary search, BFS/DFS) + LeetCode Easy 50 |
| **5–6** | LeetCode Medium 30 + Padrões (sliding window, two pointers, DP básico) |
| **7** | System design (4–5 problemas clássicos) + livro CtCI capítulos 8–10 |
| **8** | Mock interviews + matriz comportamental (5–10 histórias) + simulação completa |

### 10.3. 12 semanas (transição séria, ex: júnior → pleno)

| Mês | Foco |
|---|---|
| **Mês 1** | Fundamentos: Big O + estruturas de dados + livro CtCI capítulos 1–6 |
| **Mês 2** | Algoritmos avançados + DP + grafos + LeetCode Medium 50 + Hard 10 |
| **Mês 3** | System design profundo + livro Designing Data-Intensive Applications + mocks semanais |

---

## 11. Checklist final

### Antes de qualquer entrevista, confirme:

#### Preparação técnica

- [ ] Resolvi pelo menos 50 LeetCode Easy ou 30 Medium nos últimos 30 dias.
- [ ] Sei explicar Big O das estruturas básicas sem consultar.
- [ ] Treinei live coding em voz alta (gravando ou em mock).
- [ ] Tenho 4–5 padrões algorítmicos memorizados (two pointers, sliding window, BFS, DFS, DP básico).
- [ ] (Pleno+) Estudei system design e tenho framework de 4 passos memorizado.

#### Preparação comportamental

- [ ] Tenho 5–10 histórias pessoais escritas e mapeadas em Soft Skills Matrix.
- [ ] Memorizei resposta de "me fala sobre você" em 60–90s, fórmula presente-passado-futuro.
- [ ] Pesquisei faixa salarial em Glassdoor + Levels.fyi para essa posição.
- [ ] Tenho 3 perguntas prontas para o entrevistador.

#### Preparação prática (logística)

- [ ] Testei áudio + vídeo + internet na ferramenta da entrevista.
- [ ] Tenho ambiente silencioso e iluminado.
- [ ] Tenho papel e caneta na mesa.
- [ ] Pesquisei 3 coisas específicas sobre a empresa (produto, time, rodada de investimento, blog técnico).
- [ ] Sei o nome e o cargo do entrevistador (LinkedIn).

#### Pós-entrevista

- [ ] Mandei mensagem de agradecimento em 24h citando 1 ponto específico discutido.
- [ ] Atualizei o estágio no funil (ver `guia-busca-ativa.md`).
- [ ] Anotei o que funcionou e o que faria diferente da próxima vez.

Se passou nessa lista, está pronto.

---

## Anexo: leituras essenciais

- **Cracking the Coding Interview** (Gayle Laakmann McDowell, 6ª ed.) — a bíblia. Foque em: capítulos 1–3 (processo + behavioral), 6 (Big O), 7 (técnica BUD), 8 (recursão), 9 (system design), 14 (Java/OOP).
- **Elements of Programming Interviews** (Aziz, Lee, Prakash) — alternativa mais densa, melhor para sêniores.
- **Designing Data-Intensive Applications** (Martin Kleppmann) — para system design profundo, pleno+.
- **Clean Code** (Robert C. Martin) — para take-homes que avaliam qualidade de código.
- **System Design Interview** (Alex Xu, vols. 1 e 2) — para preparação focada em system design.

---

## Como conectar este guia ao resto do minicurso

- **Dia 2 (Bloco 5)** introduziu os 4 formatos de entrevista técnica e as 5 perguntas-padrão de RH. Este guia **aprofunda** ambos.
- **Dia 3** é o **simulado prático** — use a Soft Skills Matrix (Seção 2.4) e os 7 passos (Seção 4.1) ao se preparar para a dinâmica.
- O **mapa-estudo-junior-pleno.md** cobre os fundamentos teóricos. Este guia cobre como **vender** esses fundamentos em entrevista.

---

*Material complementar ao minicurso de recolocação tech. Adapte ao seu contexto e revise antes de cada entrevista.*
