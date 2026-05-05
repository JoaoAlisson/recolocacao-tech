# Guia Definitivo de Currículos para Desenvolvedores

> Material de apoio para profissionais de tecnologia do Brasil em recolocação ou transição de carreira.

---

## Sumário

1. [A anatomia do currículo tech perfeito](#1-a-anatomia-do-curriculo-tech-perfeito)
2. [O fantasma do ATS](#2-o-fantasma-do-ats)
3. [Cabeçalho e dados pessoais](#3-cabecalho-e-dados-pessoais)
4. [Resumo profissional (Summary)](#4-resumo-profissional-summary)
5. [Experiência profissional](#5-experiencia-profissional)
6. [Habilidades técnicas (Skills)](#6-habilidades-tecnicas-skills)
7. [Educação, idiomas e certificações](#7-educacao-idiomas-e-certificacoes)
8. [Para quem tem pouca experiência](#8-para-quem-tem-pouca-experiencia)
9. [Checklist final](#9-checklist-final)

---

## 1. A anatomia do currículo tech perfeito

### 1.1. A regra dos 6 segundos

Recrutador tech experiente bate o olho no seu CV em **6 segundos** e decide:

- **Vai para a pilha "talvez"** → leitura completa depois.
- **Vai para a lixeira** → eliminado.

Antes desses 6 segundos, o seu CV passou (ou não passou) pelo **ATS** — o robô de triagem que filtra por palavras-chave. Quem fala "meu CV não tem retorno" geralmente está perdendo em uma das duas etapas: ou não passa no ATS, ou passa mas é descartado pelo humano em 6 segundos.

Este guia ataca os dois filtros, em ordem.

### 1.2. As 5 verdades não-negociáveis

Antes de qualquer estrutura, lembre disso:

1. **1 página em tech vence.** Exceção: sêniores 10+ anos com casos extensos (até 2 páginas). Acima disso, é histórico, não currículo.
2. **Resultado > responsabilidade.** "Reduzi tempo de build em 6x" pesa mais que "trabalhei com CI/CD".
3. **Stack visível em todo lugar.** ATS busca palavra-chave; humano escaneia palavra-chave. Sem palavras-chave, você é invisível.
4. **Customizado por vaga, sempre.** CV genérico é CV ignorado. 5 minutos de customização triplicam taxa de resposta.
5. **PDF, nunca .docx.** Word renderiza diferente em cada computador. PDF preserva o layout.

### 1.3. Estrutura visual recomendada

```
┌─────────────────────────────────────────────────┐
│ NOME COMPLETO                                   │
│ Cargo-alvo (Backend Engineer)                   │
│ Email · Cidade-UF · LinkedIn · GitHub           │
├─────────────────────────────────────────────────┤
│ RESUMO PROFISSIONAL (3-4 linhas)                │
├─────────────────────────────────────────────────┤
│ EXPERIÊNCIA PROFISSIONAL                        │
│   Cargo · Empresa · Período                     │
│   - Bullet 1 (ação + ferramenta + resultado)    │
│   - Bullet 2                                    │
│   - Bullet 3                                    │
├─────────────────────────────────────────────────┤
│ HABILIDADES TÉCNICAS                            │
│ Linguagens: ... · Frameworks: ...               │
├─────────────────────────────────────────────────┤
│ EDUCAÇÃO E CERTIFICAÇÕES                        │
├─────────────────────────────────────────────────┤
│ IDIOMAS                                         │
└─────────────────────────────────────────────────┘
```

Coluna única, hierarquia clara, sem ícones decorativos. Esse é o esqueleto que o ATS lê e o humano escaneia.

---

## 2. O fantasma do ATS

ATS (**Applicant Tracking System**) é o software que **lê seu CV antes do humano**. As maiores plataformas no Brasil são **Gupy**, **Kenoby**, **Greenhouse** (mais usado por empresas internacionais), **Lever**, **Workday**.

Se o ATS não consegue ler seu CV, **você não chega** ao recrutador humano. Acabou.

### 2.1. Como o ATS lê seu CV

O ATS converte seu PDF em texto puro e:

1. Identifica seções padrão (Experiência, Educação, Skills).
2. Extrai palavras-chave e compara com a JD (Job Description).
3. Calcula um **score de match** (geralmente 0–100%).
4. Mostra ao recrutador apenas os candidatos com score acima de um threshold.

Threshold típico: **60–70%**. Abaixo disso, seu CV nem é mostrado.

### 2.2. Regras de formatação ATS-friendly

**Use:**

- **Coluna única.** ATS lê de cima para baixo, esquerda para direita. Layout de duas colunas confunde o parser.
- **Fontes simples**: Arial, Helvetica, Calibri, Times New Roman. Tamanho 10–11 para corpo, 14–18 para nome.
- **PDF gerado a partir de Word/Google Docs.** Nunca PDF "imagem" (escaneado, foto convertida).
- **Hierarquia clara** com headers em negrito (EXPERIÊNCIA, EDUCAÇÃO).
- **Datas no formato `MMM AAAA`** ("Mar 2023") ou `MM/AAAA` ("03/2023").
- **Bullets simples** (• ou -).

**Evite:**

- ❌ **Tabelas** para diagramar conteúdo (ATS quebra a leitura, lê em ordem errada).
- ❌ **Texto em caixas, headers/footers do Word** (não leem ou leem como ruído).
- ❌ **Ícones, emojis, símbolos decorativos** dentro do texto.
- ❌ **Barras de progresso visuais** ("Java ████████░░ 80%") — ATS lê como ruído. Pior: o "80%" não significa nada para o recrutador humano.
- ❌ **Imagens, gráficos, infográficos.**
- ❌ **Fontes exóticas** (Comic Sans, Papyrus, fontes manuscritas).
- ❌ **Texto em colunas múltiplas.**
- ❌ **Templates do Canva** com elementos visuais — muitos quebram completamente em ATS.

### 2.3. Por que Canva quebra (e o que usar no lugar)

Templates do Canva são bonitos mas usam:

- Caixas de texto sobrepostas (ATS lê fora de ordem).
- Layout multi-coluna (ATS embaralha o texto).
- Ícones em vez de texto que viram ruído na extração.

**Use no lugar:**

- **Google Docs** (gratuito, exporta PDF limpo).
- **Microsoft Word** (templates simples, evite os "creative").
- **LaTeX** (se você curte; **Overleaf** tem templates de CV ATS-friendly).
- **Canva apenas em templates explicitamente "ATS-friendly"** — coluna única, sem ícones decorativos.

### 2.4. Como testar se seu CV passa pelo ATS

3 testes rápidos:

1. **Ctrl+A → Ctrl+C → Ctrl+V em um Notepad/TextEdit.** Se o texto sair na ordem certa e legível, o ATS provavelmente lê bem. Se sair embaralhado, refaça o layout.
2. **Salve como `.txt`** (no Word: Salvar Como → Texto sem Formatação). Veja como ficou — se virou bagunça, o ATS vai ver bagunça.
3. **Use ferramentas online** como **Jobscan** ou **Resume Worded** — analisam seu CV vs uma JD e dão score. Versões gratuitas têm limite mas servem para 2–3 testes.

### 2.5. Nome do arquivo

Sim, isso conta. **Nunca** envie como:

- ❌ `cv_final_FINAL_v3_corrigido.pdf`
- ❌ `Documento1.pdf`
- ❌ `Curriculo Joao.pdf` (com espaço, sem versionamento)

Use:

- ✅ `Joao-Silva-Backend-Java.pdf`
- ✅ `JoaoSilva-CV-2026.pdf`
- ✅ `JoaoSilva_BackendEngineer.pdf`

Recrutador salva os PDFs em pastas; o nome do arquivo é a primeira impressão no Finder/Explorer dele.

---

## 3. Cabeçalho e dados pessoais

### 3.1. O que INCLUIR

- **Nome completo** (não apelido, não nome social abreviado).
- **Cargo-alvo** abaixo do nome (ex: "Backend Engineer | Java, Spring Boot, AWS").
- **E-mail profissional.** Se você tem `dragaobranco88@hotmail.com`, crie uma conta nova `nome.sobrenome@gmail.com`. Custo zero, ganho enorme em credibilidade.
- **Telefone** (com DDI **+55** para vagas internacionais).
- **Cidade e UF** (sem bairro nem rua).
- **LinkedIn** (URL customizada — ver dica abaixo).
- **GitHub** (se você tem perfil ativo com pelo menos 6 repos pinados).
- **Portfolio** (se aplicável — frontend, mobile, design).

**Hack do LinkedIn customizado:** mude sua URL de `linkedin.com/in/joao-silva-12345-67890` para `linkedin.com/in/joaosilva-backend`. Faz no próprio LinkedIn em Perfil → Editar URL pública. Mais profissional, fácil de digitar e cabe melhor no CV.

### 3.2. O que NUNCA incluir (modelo brasileiro)

O modelo de currículo brasileiro **NÃO usa foto** — diferente de alguns países europeus (Alemanha, Áustria, partes da França e Suíça) onde foto ainda é norma. Foto introduz viés inconsciente, ocupa espaço útil e prejudica a leitura do ATS. Recrutador vê sua foto no LinkedIn — não precisa no CV.

Lista do que mantém fora:

- ❌ **Foto.** Padrão BR e EUA.
- ❌ **Idade ou data de nascimento.** Lei brasileira proíbe discriminação por idade; recrutador profissional não pede.
- ❌ **Estado civil.** Irrelevante para a vaga.
- ❌ **Filhos / dependentes.** Idem.
- ❌ **CPF, RG, número de passaporte.** Esses dados ficam para o momento da contratação, NUNCA no CV.
- ❌ **Endereço completo** (rua, número, CEP). Cidade-UF basta.
- ❌ **Religião, time de futebol, hobbies pessoais.** Exceção: hobby relevante para a vaga (ex: contribuições open source — mas vai em outra seção).
- ❌ **Pretensão salarial no CV.** Discute na entrevista, não em texto pré-filtragem.

### 3.3. Vagas internacionais: ajustes

Para vagas remotas em **dólar/euro**:

- Mantenha **sem foto** (norma global tech).
- Mantenha **cidade-UF + país** ("São Paulo, Brazil").
- Inclua **fuso horário** (UTC-3) se for vaga remota assíncrona com times globais.
- **Telefone com DDI internacional** (`+55 11 9XXXX-XXXX`).
- **Cabeçalho em inglês** quando aplicar para empresa fora do Brasil.

### 3.4. Modelo de cabeçalho (Brasil)

```
JOÃO DA SILVA
Backend Engineer | Java, Kotlin, AWS, Kafka

joao.silva@gmail.com · +55 11 9XXXX-XXXX · São Paulo, SP
linkedin.com/in/joaosilva-backend · github.com/joaosilva
```

3 linhas, tudo o que recrutador precisa para te contatar. Nada além.

### 3.5. Modelo de cabeçalho (vagas internacionais)

```
JOÃO DA SILVA
Backend Engineer | Java, Kotlin, AWS, Kafka

joao.silva@gmail.com · +55 11 9XXXX-XXXX · São Paulo, Brazil (UTC-3)
linkedin.com/in/joaosilva-backend · github.com/joaosilva
```

A única diferença é o "Brazil" e o fuso horário, que comunica ao recrutador internacional que você é candidato LATAM-remoto.

---

## 4. Resumo profissional (Summary)

### 4.1. Função do resumo

3–4 linhas no topo, **logo abaixo do cabeçalho**, antes da experiência. Função: **dar contexto em 6 segundos** sobre quem você é e por que vale a pena ler o resto.

Recrutador lê o cabeçalho (1s) → resumo (4s) → escaneia experiência mais recente (10s). Se nessas 15 segundos ele não decidiu manter, vai para a lixeira.

### 4.2. Estrutura

```
[Cargo / nível] com [N anos] de experiência em [stack/setor].
Especialização em [diferencial técnico].
[Conquista mais relevante em 1 frase]. [Idioma + nível].
```

3 linhas, no máximo 4. Sem motivacional, sem "apaixonado por tecnologia", sem clichês.

### 4.3. Contraste

❌ **Iniciante/Fraco:**

```
Profissional dedicado e proativo, com formação em Análise e Desenvolvimento
de Sistemas e experiência em desenvolvimento web. Apaixonado por tecnologia
e em busca de novos desafios para crescer profissionalmente. Possuo
conhecimentos em diversas linguagens de programação e frameworks modernos.
```

Problemas:

- "Profissional dedicado" → aplicável a 90% da força de trabalho.
- "Diversas linguagens" → quais? **ATS não sabe.**
- "Apaixonado por tecnologia" → frase morta, ocupa espaço útil.
- "Em busca de novos desafios" → todo currículo diz isso.

Score do ATS: ~30%. Score do humano: zero memorabilidade.

✅ **Avançado/Aprovado:**

```
Backend Engineer com 6 anos focado em sistemas de pagamento de alta escala.
Especialização em arquitetura event-driven com Java/Kotlin, Spring Boot e
Kafka rodando em AWS (EKS, RDS). Reduzi latência p99 do gateway de
pagamentos de 800ms para 120ms. Inglês C1.
```

Por que funciona:

- **Cargo + senioridade** explícita ("Backend Engineer com 6 anos").
- **Setor** definido ("pagamentos de alta escala").
- **Stack** indexável: **Java**, **Kotlin**, **Spring Boot**, **Kafka**, **AWS**, **EKS**, **RDS**.
- **1 conquista** com métrica concreta.
- **Idioma + nível** declarado honestamente (C1).

Score do ATS para vaga de Backend Java: 85%+. Score do humano: lembra do candidato.

### 4.4. Variações por contexto

**Júnior com 1–2 anos:**

```
Desenvolvedor Backend Júnior com 2 anos em desenvolvimento de APIs REST com
Node.js e PostgreSQL. Construí 3 projetos em produção integrando Stripe e
SendGrid. Inglês B2.
```

**Em transição de carreira:**

```
Desenvolvedor em transição para Backend Java após 4 anos em sistemas de
suporte técnico em fintech. Stack atual: Java 17, Spring Boot, Postgres,
AWS. Concluí Bootcamp Backend (Alura) e mantenho 5 projetos no GitHub
aplicando os conceitos. Inglês B2.
```

**Sênior 10+ anos:**

```
Tech Lead Backend com 12 anos em sistemas distribuídos (fintech e e-commerce).
Especialização em arquiteturas event-driven, observabilidade e migrações on-prem
para AWS. Liderei times de 3-8 devs em entregas de produtos com 5M+ usuários.
Inglês C1, espanhol B2.
```

Cada variação tem stack visível, número de anos, escala/contexto e uma diferenciação concreta.

---

## 5. Experiência profissional

Essa é a seção que mais pesa — e onde a maioria comete os erros mais caros.

### 5.1. Estrutura por cargo

```
CARGO · Empresa · Mês/Ano – Mês/Ano (ou Atual)
Cidade-UF · Modalidade (Híbrido / Remoto / Presencial)

- Bullet 1: ação + ferramenta + resultado
- Bullet 2: ...
- Bullet 3: ...
- Bullet 4: ...
- Bullet 5: ... (máximo)
```

3–5 bullets por cargo. Cargos antigos (>5 anos) podem ter 2.

### 5.2. O método STAR aplicado a bullets

**STAR = Situação · Tarefa · Ação · Resultado.**

Em entrevista, STAR é uma resposta de 60–90 segundos. Em CV, **não há espaço** para narrativa de 5 linhas. STAR vira **uma linha condensada** que deixa os 4 elementos visíveis:

```
[Situação implícita no contexto] [Ação que VOCÊ tomou]
[Ferramenta usada] [Resultado mensurável]
```

A "Situação" e a "Tarefa" ficam **implícitas no contexto do cargo + empresa**. A "Ação" é o verbo. A "Ferramenta" é a stack. O "Resultado" é a métrica.

### 5.3. A fórmula final

```
[Verbo de ação] + [O que fez] + [Tecnologia/ferramenta] + [Resultado/métrica]
```

### 5.4. Verbos de ação que funcionam

- **PT-BR:** Implementei, Reduzi, Migrei, Liderei, Refatorei, Construí, Otimizei, Desenhei, Automatizei, Integrei, Escalei, Modernizei.
- **EN:** Implemented, Reduced, Migrated, Led, Refactored, Built, Optimized, Designed, Automated, Integrated, Scaled, Modernized.

Banidos: "Atuei em", "Trabalhei com", "Participei de", "Auxiliei em", "Realizei", "Fui responsável por". São passivos, dizem nada e ocupam espaço de bullets que poderiam vender você.

### 5.5. Contraste

❌ **Iniciante/Fraco:**

```
DESENVOLVEDOR FULL STACK · Empresa X · Jan 2022 – Atual

- Atuei no desenvolvimento de funcionalidades em Java
- Trabalhei com banco de dados e APIs REST
- Participei de daily, planning e retrospectivas
- Realizei manutenção de sistemas legados
- Auxiliei na migração para a nuvem
- Trabalhei em equipe seguindo metodologias ágeis
```

Problemas:

- 6 bullets, **zero métrica.**
- "Banco de dados" → qual? **Postgres? Oracle? MongoDB?** ATS não sabe.
- "APIs REST" sem contexto de escala → todo dev faz isso.
- "Daily, planning, retrospectivas" → todo time ágil faz; ocupa linha.
- "Trabalhei em equipe" → você esperava trabalhar sozinho?

Score: você acabou de descrever 80% dos backends do Brasil. Lixeira.

✅ **Avançado/Aprovado:**

```
BACKEND ENGINEER · Fintech XYZ · Jan 2022 – Atual
São Paulo, SP · Híbrido

- Reduzi latência p99 do gateway de pagamentos de 800ms para 120ms refatorando
  endpoint Java/Spring com cache Redis e índices Postgres, aumentando
  throughput em 6x.
- Liderei migração de 23 microsserviços de EC2 para EKS (Kubernetes) com zero
  downtime, economizando ~R$ 30k/mês em infra.
- Construí pipeline de eventos com Kafka + Spring Cloud Stream que processa
  2M+ transações/dia, substituindo arquitetura síncrona que travava o checkout.
- Implementei observabilidade com Datadog + OpenTelemetry, reduzindo MTTR de
  incidentes de 45min para 8min.
- Mentorei 3 devs juniores promovidos a pleno em 18 meses; criei programa de
  code review estruturado adotado por 4 squads.
```

Por que funciona:

- 5 bullets, **5 métricas concretas.**
- 15+ palavras-chave indexáveis para ATS (**Java**, **Spring**, **Redis**, **Postgres**, **EKS**, **Kubernetes**, **Kafka**, **Datadog**, **OpenTelemetry**).
- Cada bullet conta uma micro-história de impacto (Situação implícita + Ação + Ferramenta + Resultado).
- Liderança e mentoria mencionadas (relevante para senioridade pleno+).

Score do ATS para vaga sênior backend: 85%+. Score do humano: candidato vai para entrevista.

### 5.6. Como recuperar métricas que você não anotou

Se você não acompanhou as métricas em tempo real, faça **engenharia reversa** antes de redigir:

- Pergunte ao seu **gestor / ex-gestor**.
- Olhe no **Jira / Linear / GitHub** o tamanho das entregas (PRs, tickets fechados).
- Cheque **dashboards históricos** (Grafana, Datadog) se ainda tem acesso.
- **Estime com tilde**: "~30h/mês economizadas" é melhor que ausência de número. Recrutador entende que `~` = aproximação honesta.

### 5.7. Bullets para diferentes níveis

**Júnior** (foco em entrega + aprendizado):

```
- Construí 4 microsserviços em Node.js + Express integrando APIs de pagamento
  (Stripe, MercadoPago) com cobertura de testes >80% (Jest).
- Implementei autenticação JWT em 3 aplicações em produção, seguindo padrões
  OWASP de segurança.
- Reduzi tempo de build do CI/CD em 40% otimizando Dockerfile e GitHub Actions.
```

**Pleno** (entrega + escala):

```
- Refatorei módulo de relatórios em Python que gerava OOM em produção,
  paralelizando com Celery + Redis e reduzindo memória em 70%.
- Integrei sistema legado em PHP/Laravel a nova API GraphQL em Node.js,
  permitindo migração gradual de 12 telas para React.
```

**Sênior** (entrega + escala + influência):

```
- Liderei redesign arquitetural do core de billing (Java/Spring Boot) que
  passou a suportar 5x mais clientes (de 200k para 1M) sem aumento de infra.
- Defini RFC de adoção de Kafka como event bus, validada com 3 squads e
  implementada gradualmente em 6 meses.
```

Note a progressão: **júnior implementa**, **pleno integra/refatora**, **sênior lidera/define**.

### 5.8. Quando você não tem entregas técnicas (ainda)

Se sua experiência atual é mais "tarefa" que "entrega" (suporte técnico, QA manual, estágio), **mude o frame**:

- Pegue o trabalho que você faz e procure o **impacto** dele no negócio.
- Suporte técnico: "Resolvi 200+ tickets/mês com SLA <4h, criei base de conhecimento que reduziu chamados recorrentes em 30%."
- QA manual: "Documentei 80+ casos de teste para fluxo crítico de checkout, identifiquei 12 bugs críticos antes de release."

A pergunta de teste: **se eu fosse promovido amanhã, o que provaria que eu mereci?** Esses são seus bullets.

### 5.9. Versão em inglês para vagas internacionais

Se você mira vagas em USD/EUR, traduza os 2–3 cargos mais recentes:

```
BACKEND ENGINEER · Fintech XYZ · Jan 2022 – Present
São Paulo, Brazil · Hybrid

- Reduced p99 latency of payment gateway from 800ms to 120ms by refactoring
  Java/Spring endpoint with Redis cache and Postgres indexes, increasing
  throughput 6x.
- Led migration of 23 microservices from EC2 to EKS (Kubernetes) with zero
  downtime, saving ~$6k/month in infra costs.
```

Converta valores em real para dólar (aproximado, com `~`) — soa mais natural para recrutador internacional.

---

## 6. Habilidades técnicas (Skills)

### 6.1. Por que a seção Skills importa MUITO

ATS faz match palavra-chave por palavra-chave. Se a JD pede **Java**, **Spring Boot** e **AWS**, e seu CV menciona apenas no resumo, o score cai. Repetir essas palavras na seção Skills aumenta o match.

Não é redundância — é estratégia.

### 6.2. Estrutura recomendada (escaneável)

Agrupe por categoria, separado por bullets ou pontos:

```
HABILIDADES TÉCNICAS

Linguagens:        Java, Kotlin, Python, SQL, JavaScript
Frameworks:        Spring Boot, JUnit, Mockito, Spring Cloud Stream
Bancos de Dados:   PostgreSQL, MySQL, Redis, MongoDB
Cloud & Infra:     AWS (EKS, RDS, SQS, Lambda, S3), Docker, Kubernetes, Terraform
Mensageria:        Kafka, RabbitMQ, AWS SQS
Observabilidade:   Datadog, OpenTelemetry, Prometheus, Grafana
Práticas:          Microservices, Event-Driven Architecture, DDD, TDD, Code Review
```

7 linhas, 30+ palavras-chave indexadas, fácil de escanear em 3 segundos.

### 6.3. Categorias úteis (use as relevantes para você)

- **Linguagens**: Java, Python, Go, TypeScript, Kotlin, etc.
- **Frameworks Backend**: Spring Boot, Express, Django, FastAPI, NestJS.
- **Frameworks Frontend**: React, Next.js, Vue, Angular, Svelte.
- **Bancos de Dados**: PostgreSQL, MySQL, MongoDB, Redis, DynamoDB.
- **Cloud**: AWS, GCP, Azure (com serviços específicos entre parênteses).
- **DevOps / Infra**: Docker, Kubernetes, Terraform, Ansible, GitHub Actions, Jenkins.
- **Mensageria**: Kafka, RabbitMQ, SQS, Pub/Sub.
- **Observabilidade**: Datadog, New Relic, Grafana, Prometheus, OpenTelemetry.
- **Testes**: JUnit, Jest, Pytest, Cypress, Playwright.
- **Práticas**: Microservices, DDD, TDD, BDD, Event-Driven, Clean Architecture.

### 6.4. Não infle, mas declare honestamente

Se você usou **Kafka** 1 vez em projeto pessoal, não liste como skill principal. Mas pode listar com qualificador:

- "Kafka (projeto pessoal)" se foi só estudo.
- "Familiaridade com Rust" se você está aprendendo.

**Regra:** se o recrutador puder te perguntar "fala 5 minutos sobre essa stack" e você travar, **tire da lista**.

### 6.5. Variações de stacks para ATS

Pequena redundância controlada ajuda:

- **Java**, **Java 17** (se aplicável).
- **React**, **React.js**, **ReactJS** (escolha 1 ou 2 variações).
- **Node.js**, **Node**.
- **AWS**, **Amazon Web Services**.
- **K8s**, **Kubernetes**.

Listar a variação principal + 1 sinônimo é razoável. Listar 5 variações da mesma palavra é spam — **ATS detecta keyword stuffing** e pode penalizar.

---

## 7. Educação, idiomas e certificações

### 7.1. Educação

**O que listar:**

```
EDUCAÇÃO

Bacharelado em Ciência da Computação
Universidade de São Paulo (USP) · 2018 – 2022
```

Em tech, **diploma pesa MENOS do que se imagina**. A maioria das empresas tech no Brasil aceitam:

- **Tecnólogo** (ADS, Sistemas para Internet) — equivalente prático.
- **Bootcamp** (Alura, Rocketseat, Cubos) — sinaliza dedicação à transição.
- **Autodidata + GitHub forte** — funciona se a stack está sólida.

**O que NÃO listar:**

- Cursos extracurriculares de 20h ("Curso de Java na Udemy") — vão em "Certificações" SE forem relevantes; cursos genéricos NÃO precisam aparecer.
- Ensino médio (a não ser que você seja júnior sem outra formação superior).
- **Notas (CRA / coeficiente)** — não importa em tech no Brasil.

### 7.2. Certificações: o que vale a pena no mercado atual

**Alto impacto** (vale o investimento):

- **AWS Certified Solutions Architect** (Associate ou Professional).
- **AWS Certified Developer**.
- **Google Cloud Professional Cloud Architect** ou **Data Engineer**.
- **Microsoft Azure** (AZ-104, AZ-204, AZ-305).
- **Certified Kubernetes Administrator (CKA)** ou **Application Developer (CKAD)**.
- **HashiCorp Terraform Associate**.

**Médio impacto** (vale para júnior abrir portas):

- **AWS Cloud Practitioner.**
- **Scrum Master / PSM I.**
- Certificações de framework específico (Spring Professional, etc.).

**Baixo impacto** (não vale o investimento OU o espaço no CV):

- Cursos da **Udemy / Coursera / Alura** listados como "certificação". São úteis para aprender, mas pesam pouco no CV. Use como argumento em entrevista, não como item de currículo.
- Certificações de produtos pequenos sem reconhecimento de mercado.

### 7.3. Como listar certificações

```
CERTIFICAÇÕES

AWS Certified Solutions Architect – Associate · 2024
HashiCorp Terraform Associate · 2023
```

Sem mais, sem menos. Nome oficial + ano. Se o link da credencial estiver ativo (Credly, AWS), pode incluir; se não, pula.

### 7.4. Idiomas — declare honestamente

Tech no Brasil usa o **quadro CEFR** (A1 a C2) como referência de nível.

```
IDIOMAS

Português · Nativo
Inglês · Avançado (C1) — leio, escrevo, falo fluente em ambiente profissional
Espanhol · Intermediário (B1) — leio com facilidade
```

**Como classificar honestamente:**

- **A1/A2 (Básico)**: leio textos simples, vocabulário limitado. **Não inclua se for só A2** — vai te queimar em validação.
- **B1 (Intermediário)**: entendo conversa cotidiana, comunico com erros.
- **B2 (Intermediário avançado)**: trabalho proficient. Posso participar de meetings em inglês com algum esforço.
- **C1 (Avançado)**: fluente em ambiente profissional. Apresento, debato, escrevo.
- **C2 (Proficiente)**: nível de nativo educado.

**Regra de ouro:** declare o nível em que você funciona em **call de trabalho real**. Recrutador vai te chamar para uma call de 5 minutos em inglês para validar — se você travou, **queimou para sempre na rede dele**.

### 7.5. Inglês para vagas em USD/EUR

Para vagas remotas internacionais:

- **B2 mínimo** para empresas com sede USA/EU. Abaixo disso, não vai passar do filtro RH.
- **C1+ ideal** para roles que envolvem comunicação assíncrona escrita (a maioria).
- Especifique área: "Inglês C1 — proficient in technical writing and async communication, comfortable in calls."

### 7.6. Como acelerar o inglês (panorama rápido)

Se você está em B1 e precisa chegar em B2 em 6 meses para mirar internacional:

- 30 min/dia ouvindo podcasts tech em inglês (**Lex Fridman**, **Software Engineering Daily**, **Syntax**).
- 1 conversation class por semana (**Cambly**, **italki**, **Preply**).
- Mude **IDE, sistema operacional, redes sociais** para inglês.
- Aceite calls/meetings em inglês mesmo nervoso — exposição é a aceleração.

---

## 8. Para quem tem pouca experiência

Se você está no início (estágio, transição, recém-formado), seu CV não pode ter "Experiência" vazia. Use **2 estratégias**:

1. Tratar **projetos pessoais** como experiência válida.
2. Tratar **contribuições open source** como experiência válida.

### 8.1. Projetos pessoais como experiência

ATS não distingue "trabalho remunerado" de "projeto pessoal" — distingue **descrição rica** vs **descrição vazia**. Se você descreve um projeto pessoal com a mesma estrutura de um trabalho, ele passa pelo filtro.

**Estrutura recomendada:**

```
PROJETOS

API de Gestão de Despesas Pessoais (projeto pessoal)
github.com/joaosilva/despesas-api · Mai 2024 – Atual

- Construí API REST em Node.js + Express + PostgreSQL para registro
  de despesas com 12 endpoints autenticados via JWT.
- Implementei testes automatizados com Jest (cobertura 85%) e CI/CD
  com GitHub Actions, deploy automático para Render.
- Documentei API com OpenAPI/Swagger e mantenho README detalhado em
  inglês explicando decisões arquiteturais.
```

Note que cada bullet segue a mesma fórmula `Ação + Ferramenta + Resultado` da seção de experiência profissional.

### 8.2. Critérios para projeto pessoal valer

Não é qualquer projeto que conta. Para passar credibilidade:

✅ **Vale a pena listar:**

- Projeto que **alguém usa** (mesmo que seja você mesmo, no dia a dia).
- Projeto **completo** (deploy ativo, README, testes).
- Projeto que demonstra **a stack-alvo** que você quer atacar.
- Projeto **original** (não clone de tutorial).

❌ **Não vale a pena listar:**

- Tutoriais copiados ("To-Do List em React seguindo o tutorial X").
- Projetos abandonados sem README e sem deploy.
- Repositórios "first commit" e nada depois.
- 50 projetos pequenos sem profundidade — prefira **3 sólidos** a 30 superficiais.

### 8.3. Contribuições open source

Tem **alto impacto** se você consegue mostrar PRs reais aceitos em projetos relevantes.

```
CONTRIBUIÇÕES OPEN SOURCE

- Contribuidor em [Projeto X] (5k+ stars no GitHub) — 4 PRs mergeados,
  incluindo correção de race condition em pool de conexões e adição
  de retry logic exponencial.
- Mantenedor de [Biblioteca Y] (200+ stars) — autor de extensão para
  integração com Postgres, 8 issues resolvidas.
```

**Por que pesa muito:**

- Mostra que você consegue ler código que **não escreveu**.
- Mostra colaboração com pessoas que você **não conhece**.
- PR mergeado = código revisado por outro dev = **validação externa**.

**Como começar (se você nunca contribuiu):**

1. Identifique uma **biblioteca que você usa** no dia a dia.
2. Olhe issues marcadas `good-first-issue` ou `help-wanted`.
3. Resolva 1 issue pequena, abra PR seguindo o `CONTRIBUTING.md` do repo.
4. Repita 2–3 vezes — em 2 meses você tem material para o CV.

### 8.4. Bootcamps, hackathons, comunidades

Pode ser uma seção curta separada ou ir junto com Educação:

```
ATIVIDADES COMPLEMENTARES

- Bootcamp Backend Java (Alura) · 2024 — 200h, projeto final integrado
  publicado em github.com/joaosilva/alura-backend.
- Hackathon AWS GenAI · 3º lugar entre 40 times · Mai 2024 — construí
  app de transcrição de reuniões usando Lambda + Bedrock.
- Membro ativo da comunidade Backend Brasil (Discord, 5k+ membros).
```

Listar comunidade com **participação real** (responde dúvidas, contribui) é diferente de "estou no grupo" — só liste se você participa de verdade.

### 8.5. Estágio: não desvalorize

Estágio é experiência profissional válida. Use a mesma fórmula:

```
ESTAGIÁRIO DE DESENVOLVIMENTO · Empresa Y · Jul 2023 – Jun 2024

- Construí 2 features no app principal (React Native + TypeScript)
  usadas por 50k usuários, sob mentoria do Tech Lead.
- Migrei testes manuais de QA para automação com Detox, reduzindo
  tempo de regressão de 3 dias para 4 horas.
- Apresentei 2 tech talks internas sobre testes E2E e arquitetura modular.
```

### 8.6. CV de quem está em transição (ex: outra área → tech)

Se você vem de outra área (vendas, marketing, administração) e está virando dev:

- **Resumo profissional** assume a transição com clareza ("Desenvolvedor em transição após 5 anos em [área anterior]").
- **Projetos pessoais** vão **ANTES** de Experiência Profissional anterior.
- **Habilidades técnicas** ganham destaque imediato.
- **Experiência anterior** vai resumida, focando em transferable skills (analytics, comunicação, gerenciamento).

A regra é: **o que se vê primeiro deve ser o que você é hoje, não o que você foi**.

---

## 9. Checklist final

Antes de enviar qualquer candidatura, passe por este checklist:

### 9.1. Estrutura

- [ ] **1 página** (ou 2 se sênior 10+ anos).
- [ ] **Coluna única**, fonte simples (Arial/Calibri/Helvetica/Times), tamanho 10–11.
- [ ] **PDF** (não .docx, não .png).
- [ ] **Nome do arquivo** profissional: `Nome-Sobrenome-Cargo.pdf`.
- [ ] **Sem foto, sem CPF, sem idade, sem estado civil, sem endereço completo**.

### 9.2. Conteúdo

- [ ] **Cabeçalho** com nome, cargo-alvo, e-mail profissional, telefone, cidade-UF, LinkedIn, GitHub.
- [ ] **Resumo profissional** de 3–4 linhas com cargo, anos, stack, conquista, idioma.
- [ ] **Experiência** com 3–5 bullets por cargo, fórmula `Ação + Ferramenta + Resultado`, métrica em pelo menos 50% dos bullets.
- [ ] **Habilidades técnicas** agrupadas por categoria (Linguagens, Frameworks, Cloud, etc.).
- [ ] **Educação, certificações e idiomas** declarados honestamente.
- [ ] **Projetos pessoais e open source** se a experiência é curta.

### 9.3. Customização por vaga

- [ ] **Cargo-alvo no header** alinha à JD.
- [ ] **Top 3–5 palavras-chave da JD** aparecem no Resumo + Habilidades + Experiência.
- [ ] **Ordem dos bullets** das experiências priorizada (mais relevante para a vaga primeiro).
- [ ] **Custo total**: ~5 minutos por candidatura. Retorno: ~3x mais resposta.

### 9.4. Teste final do ATS

- [ ] **Ctrl+A → Ctrl+C → Ctrl+V em Notepad**: texto sai legível e em ordem?
- [ ] **Score em Jobscan ou Resume Worded**: 70%+?
- [ ] **Tempo total de leitura em voz alta**: <90 segundos?

Se passou nos 4 testes acima, está pronto para enviar.

---

## Anexo: exemplo completo (sênior backend)

```
JOÃO DA SILVA
Senior Backend Engineer | Java, Kotlin, AWS, Kafka

joao.silva@gmail.com · +55 11 9XXXX-XXXX · São Paulo, SP
linkedin.com/in/joaosilva-backend · github.com/joaosilva

──────────────────────────────────────────────────────────

RESUMO PROFISSIONAL

Backend Engineer com 6 anos focado em sistemas de pagamento
de alta escala. Especialização em arquitetura event-driven com
Java/Kotlin, Spring Boot e Kafka rodando em AWS (EKS, RDS).
Reduzi latência p99 do gateway de pagamentos de 800ms para
120ms. Inglês C1.

──────────────────────────────────────────────────────────

EXPERIÊNCIA PROFISSIONAL

BACKEND ENGINEER · Fintech XYZ · Jan 2022 – Atual
São Paulo, SP · Híbrido

- Reduzi latência p99 do gateway de pagamentos de 800ms para
  120ms refatorando endpoint Java/Spring com cache Redis e
  índices Postgres, aumentando throughput em 6x.
- Liderei migração de 23 microsserviços de EC2 para EKS
  (Kubernetes) com zero downtime, economizando ~R$ 30k/mês.
- Construí pipeline de eventos com Kafka + Spring Cloud Stream
  que processa 2M+ transações/dia.
- Implementei observabilidade com Datadog + OpenTelemetry,
  reduzindo MTTR de incidentes de 45min para 8min.
- Mentorei 3 devs juniores promovidos a pleno em 18 meses.

DEVELOPER · E-commerce ABC · Mar 2020 – Dez 2021
Remoto

- Construí API GraphQL em Node.js consumida por 4 squads,
  centralizando dados de produto antes dispersos em 7 bancos.
- Migrei sistema de billing legado de PHP para Java/Spring,
  reduzindo bugs em produção de ~40 para <5 por sprint.
- Reduzi tempo de build do CI/CD de 22min para 6min com
  Docker BuildKit e cache de dependências.

JUNIOR DEVELOPER · Startup DEF · Mai 2018 – Fev 2020
São Paulo, SP

- Construí 5 microsserviços em Node.js + Express com 80%+
  cobertura de testes (Jest).
- Implementei autenticação OAuth2 em 3 aplicações em produção.

──────────────────────────────────────────────────────────

HABILIDADES TÉCNICAS

Linguagens:        Java 17, Kotlin, JavaScript, TypeScript, SQL
Frameworks:        Spring Boot, Spring Cloud Stream, JUnit,
                   Mockito, Express, Jest
Bancos de Dados:   PostgreSQL, MySQL, Redis, MongoDB
Cloud & Infra:     AWS (EKS, RDS, SQS, Lambda, S3), Docker,
                   Kubernetes, Terraform, GitHub Actions
Mensageria:        Kafka, RabbitMQ, AWS SQS
Observabilidade:   Datadog, OpenTelemetry, Prometheus, Grafana
Práticas:          Microservices, Event-Driven Architecture,
                   DDD, TDD

──────────────────────────────────────────────────────────

EDUCAÇÃO

Bacharelado em Ciência da Computação
Universidade Federal de São Paulo · 2014 – 2018

──────────────────────────────────────────────────────────

CERTIFICAÇÕES

AWS Certified Solutions Architect – Associate · 2024
HashiCorp Terraform Associate · 2023

──────────────────────────────────────────────────────────

IDIOMAS

Português · Nativo
Inglês · Avançado (C1) — fluente em comunicação técnica e
                          calls profissionais
Espanhol · Intermediário (B1)
```

Esse modelo cabe em 1 página com fonte 10pt e margens 1,5cm. É o padrão sênior que passa em ATS de **Gupy**, **Greenhouse**, **Lever** e **Workday**.

---

*Material complementar ao minicurso de recolocação tech. Adapte ao seu contexto e revise a cada candidatura.*
