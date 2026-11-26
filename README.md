# niche-reference-hunt

Skill do Claude para pesquisar referências visuais reais de um nicho (Behance, e Pinterest quando o navegador já estiver logado), analisar com evidência e salvar como notas datadas em uma biblioteca de referências (vault Obsidian). Consulta o vault antes de buscar, para não repetir pesquisa.

## Conteúdo

```
SKILL.md                         instruções e procedimento
references/analise-checklist.md  checklist de análise e nota de padrão (usado quando o vault não tem template)
scripts/behance-collect.js       roda no console do Behance: lista projetos ou extrai metadados e imagens
scripts/download-images.mjs      baixa as imagens (Node 18+, sem dependências)
```

## Instalar

- **Claude Code:** copie a pasta para `~/.claude/skills/niche-reference-hunt/` (no Windows, `C:\Users\<usuario>\.claude\skills\`).
- **claude.ai (Skills):** envie o arquivo `niche-reference-hunt.zip` em Configurações > Recursos > Skills.

## Requisitos e limites

- Precisa de um navegador controlável pelo Claude (painel embutido, Playwright ou Claude in Chrome) para abrir o Behance.
- A skill procura o caminho do vault no `CLAUDE.md` do usuário; sem isso, pergunta uma vez. Ela não funciona bem sem alguma biblioteca de notas para gravar.
- Os scripts dependem do HTML atual do Behance (JSON-LD e `project_modules`); se o site mudar, ajustar `behance-collect.js`.
- Pinterest não é acessado sem sessão já aberta pelo usuário. Nenhuma credencial é pedida ou digitada.
- As imagens baixadas são material de estudo; não publique nem redistribua.
