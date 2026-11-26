# niche-reference-hunt

**PT** · [English below](#english)

Skill do Claude para pesquisar **referências visuais reais de um nicho** (ex.: personal trainer, psicologia, advocacia) no Behance, e no Pinterest quando o navegador já estiver logado. Ela analisa cada referência com evidência (fato, hipótese, recomendação) e salva como notas datadas, para você não repetir a pesquisa a cada projeto.

## Baixar e instalar

1. Baixe o `niche-reference-hunt.zip` na página de [Releases](../../releases/latest).
2. **claude.ai:** Configurações > Recursos > Skills > enviar o zip.
3. **Claude Code:** descompacte em `~/.claude/skills/niche-reference-hunt/` (no Windows, `C:\Users\<usuario>\.claude\skills\`).

## Como usar

Peça algo como: "procure 3 referências de site para personal trainer" ou "pesquise no Behance refs de clínica de psicologia e salve".

A skill:
- consulta as notas já salvas antes de buscar;
- busca no Behance (2 a 3 consultas), escolhe poucas referências e garante um contraponto (por exemplo claro × escuro);
- abre as imagens e analisa; só marca `analisada` quando viu as imagens;
- salva as notas e capturas datadas no destino certo.

## Onde as notas são salvas

1. **Vault Obsidian ou biblioteca do usuário**, se o `CLAUDE.md` apontar uma.
2. **Pasta `referencias/`** no projeto (`index.md`, `<nicho>/<nome>.md`, `_anexos/`), se não houver vault.
3. **Markdown no chat**, se não houver acesso a arquivos.
Sem navegador, as notas ficam como `salva`.

## Conteúdo

```
SKILL.md                         instruções e procedimento
references/analise-checklist.md  frontmatter, seções da nota e nota de padrão
scripts/behance-collect.js       roda no console do Behance: lista projetos ou extrai metadados e imagens
scripts/download-images.mjs      baixa as imagens (Node 18+, sem dependências)
```

## Exemplo de nota (resumo)

```markdown
---
tipo: referencia
nome: Exemplo - Landing de personal trainer (Behance)
status: analisada
url: https://www.behance.net/gallery/...
data_consulta: 2026-01-01
---
## Contexto
- [F] Landing de personal trainer; autor cita WordPress e Tailwind.
- [alegação do autor, não verificada] "dobrou o tráfego em 3 meses".
## O que chama atenção
- [F] Fundo preto com um único acento amarelo.
## Análise crítica
- [H] Combinação comum no nicho; precisa de contraponto.
- Em que contexto NÃO funciona: [R] marca de acolhimento.
```

## Limites, direitos e ética

- A skill lê páginas públicas pelo navegador do próprio usuário, poucas por vez. **Não é raspagem em massa.** Respeite os termos do Behance e do Pinterest.
- Imagens baixadas são **material de estudo pessoal**. Não as publique nem as redistribua; `_anexos/` não deve ir para repositórios públicos.
- Nenhuma credencial é pedida ou digitada. Pinterest só é usado com sessão já aberta pelo usuário.
- Os scripts dependem do HTML atual do Behance (JSON-LD e `project_modules`); se o site mudar, ajuste `behance-collect.js`.
- Contadores, selos e depoimentos vistos em templates são anotados como risco, nunca reaproveitados.

Licença: MIT.

---

## English

A Claude skill that researches **real visual references for a specific niche** (e.g. personal trainer, therapist, law firm) on Behance, and on Pinterest when the browser is already signed in. It analyses each reference with evidence (fact, hypothesis, recommendation) and saves dated notes, so you do not repeat the search on every project.

**Download:** get `niche-reference-hunt.zip` from [Releases](../../releases/latest). On claude.ai: Settings > Capabilities > Skills > upload the zip. On Claude Code: unzip into `~/.claude/skills/niche-reference-hunt/`.

**Where notes go:** your Obsidian vault if `CLAUDE.md` points to one; otherwise a `referencias/` folder in the project; otherwise a single Markdown in the chat. Without a browser, notes stay as `salva` (saved, not analysed).

**Limits:** reads a few public pages through your own browser, no bulk scraping; respect each site's terms. Downloaded images are for personal study only and must not be redistributed or committed to public repos. The scripts depend on Behance's current HTML. The skill instructions are written in Portuguese.

License: MIT.
