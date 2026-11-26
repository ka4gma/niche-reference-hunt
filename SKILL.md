---
name: niche-reference-hunt
description: >-
  Pesquisa referências visuais reais de um nicho específico (ex.: personal
  trainer, psicologia, advocacia) no Behance, e no Pinterest quando houver
  acesso, analisa cada uma com evidência e salva como notas datadas na
  biblioteca de referências do usuário (vault Obsidian), para não repetir a
  pesquisa a cada projeto. Sempre consulta o vault antes de buscar.
when_to_use: >-
  Use quando o usuário pedir referências, inspirações ou "refs" de um nicho
  para um site ou landing page; antes da fase de direção criativa de um
  projeto novo; ou para alimentar a biblioteca de design com um nicho ainda
  não coberto. Exemplos: "procure refs de site para personal trainer",
  "pesquise no Behance refs de clínica de psicologia", "salve 3 referências
  no Obsidian". Não use para analisar uma única página já conhecida sem
  salvar, nem para construir o site.
---

# Niche Reference Hunt

Transforma "preciso de referências para o site de X" em notas permanentes no vault. O objetivo não é coletar muito: é ter poucas referências **abertas, observadas e comparadas**, guardadas para o próximo projeto do mesmo nicho.

## Regras fixas

1. **Vault primeiro.** Antes de qualquer busca na web, procure no vault pelo nicho, pelas URLs e por notas de projeto parecidas. Se o nicho já tem referências analisadas, reutilize e só complete o que falta.
2. **Quantidade pedida manda.** Sem número, traga 3. Nunca colete em massa.
3. **Variedade.** Das refs escolhidas, pelo menos uma deve resolver o mesmo problema de forma diferente (por exemplo claro × escuro, editorial × template). Um nicho dominado por um clichê precisa de um contraponto.
4. **`analisada` só com observação direta.** Abra as imagens, descreva só o que viu. Cada afirmação leva **[F]** fato, **[H]** hipótese ou **[R]** recomendação. Fonte, tecnologia ou animação não confirmada vira "não verificado".
5. **Uma referência isolada não vira regra.** Padrão só nasce com 2 ou mais referências analisadas (ou 1 referência + 1 projeto).
6. **Sem copiar, sem dado inventado.** Extraia princípios. Contadores, selos e depoimentos de template são anotados como risco, nunca reaproveitados.
7. **Sem credenciais.** Não digite senha nem peça tokens. Pinterest e outros com login só entram se o navegador já estiver autenticado pelo usuário.
8. **Capturas são material de estudo** salvo no vault do usuário. Não publique nem redistribua.

## Procedimento

### 1. Localizar o vault e o template
Ache o caminho da biblioteca no `CLAUDE.md` do usuário (procure "biblioteca", "Obsidian" ou "designer zika"). Se não houver, pergunte uma vez. Leia o índice da área de referências e o template de referência do vault. Sem template, use [references/analise-checklist.md](references/analise-checklist.md).

### 2. Consultar o que já existe
Busque por palavra-chave: nicho, sinônimos, nome de projetos do mesmo setor. Anote as referências já analisadas e as cores/abordagens que elas ocupam, para escolher contrapontos.

### 3. Buscar
Monte 2 a 3 consultas combinando o nicho com o tipo de peça, em inglês e português (ex.: `personal trainer website ui`, `landing page personal trainer`).

**Behance** (principal, funciona sem login no navegador embutido; a página pode responder 403 e ainda assim renderizar):
1. Abra `https://www.behance.net/search/projects/<consulta>` e redimensione o viewport para 1440×900.
2. Rode [scripts/behance-collect.js](scripts/behance-collect.js) no console da página de busca para listar projetos (título, autor, curtidas, link).
3. Escolha os candidatos e abra cada projeto. Rode o mesmo script na página do projeto: ele devolve título, descrição, data, tags (que podem incluir ferramentas, como Figma ou WordPress) e as URLs das imagens em `max_1200`.
4. Baixe as imagens com `node scripts/download-images.mjs <saida> <url>...` e abra-as (o painel do navegador reduz a imagem, por isso o arquivo baixado é melhor para observar detalhe).

**Pinterest:** só se o navegador já estiver logado. Se aparecer tela de login, registre "Pinterest não acessado" e siga só com o Behance. Use para atmosfera e direção de arte, não como fonte de análise de site.

**Aplicativos de desktop** (quando a referência está fora do navegador): use o Agent Desktop, consultando elementos específicos em vez de árvores completas.

### 4. Escolher
Cruze com o vault: descarte duplicatas, descarte quem só repete um clichê já coberto, garanta um contraponto. Prefira estudos de caso com texto do autor (dão decisões explicadas) a quadros isolados.

### 5. Analisar
Para cada referência, siga [references/analise-checklist.md](references/analise-checklist.md). Imagem de apresentação do autor não é captura de viewport: registre isso na coluna Viewport. Texto do autor com métricas ("dobrou o tráfego") entra como **alegação do autor, não verificada**.

### 6. Salvar no vault
- Capturas datadas em `_anexos/<nome-da-nota>/` (jpg, até 1200 px de largura, `nome-NN-descricao-AAAA-MM-DD.jpg`).
- Uma nota por referência, com o template do vault, `status: analisada` somente depois da análise.
- Atualize o índice da pasta, o dashboard (últimas 10 referências) e confira se todos os `[[links]]` resolvem.
- Se 2 ou mais referências analisadas mostram o mesmo princípio, crie a nota de padrão (maturidade `emergente`), compare as abordagens e registre no índice central de padrões.

### 7. Relatar
Liste as notas criadas e atualizadas, o que ficou "não verificado" e o que não foi acessado (Pinterest, por exemplo). Diga qual contraponto cada referência oferece.

## O que esta skill não faz
Não projeta o site, não define a direção criativa e não substitui a análise de código. Ela alimenta a fase de descoberta e direção de qualquer fluxo de criação de sites.

## Armadilhas conhecidas
- A busca do Behance mistura portfólios sem texto; prefira projetos com descrição.
- Projetos "template" trazem números e selos de exemplo: anote como risco.
- O viewport do painel do navegador é pequeno; a leitura de layout vem das imagens baixadas, não da tela.
- Datas em fuso local do autor; use a data de publicação do projeto, não a de consulta.
