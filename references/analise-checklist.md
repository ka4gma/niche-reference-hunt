# Checklist de análise de uma referência

Use quando o vault não tiver template próprio. Preencha só o que foi observado. Cada afirmação: **[F]** fato, **[H]** hipótese, **[R]** recomendação. O que não foi conferido: "não verificado".

## Frontmatter

```yaml
tipo: referencia
nome:
status: salva | analisada
categoria:
url:
autor_estudio:
data_consulta: AAAA-MM-DD
data_analise: AAAA-MM-DD
tags: []
padroes: []
aplicada_em: []
```

## Seções

1. **Registro rápido:** nome, URL, data, por que salvei, onde olhar.
2. **Capturas:** tabela com arquivo, data, viewport (ou "prancha do autor, 1200 px") e o que mostra.
3. **Contexto:** o que é, para quem, quem fez, data de publicação, ferramentas citadas pelo autor.
4. **O que chama atenção:** 3 a 5 fatos visuais.
5. **Hierarquia e composição:** ordem das seções, o que se lê primeiro, grid, ritmo.
6. **Tipografia e identidade:** famílias só se declaradas ou verificadas; paleta com hex só se impresso na prancha; tom.
7. **Interações e motion:** quase sempre "não verificado" em quadros estáticos; indicar hipótese quando houver pista (carrossel, acordeão).
8. **Responsividade e 9. Acessibilidade:** o que as imagens mostram; contraste só medido se calculado.
10. **Tecnologias:** só com fonte (texto do autor, código, créditos).
11. **Análise crítica:** pontos fortes, pontos fracos, **em que contexto NÃO funciona**.
12. **Comparação** com as outras referências do vault (tabela).
13. **O que podemos aprender:** frases "Quando [situação], [técnica] porque [efeito]", marcadas como fonte única.
14. **O que pode ser adaptado:** princípio, contexto, adaptação necessária. Nunca copiar interface.
15. **Relacionadas:** índice, padrões, projetos.

## Nota de padrão (quando 2+ referências concordam)

Problema, princípio em uma frase, tabela de abordagens (onde aparece, prós, contras, quando usar), critérios de decisão, antipadrões, evidências. Maturidade: `emergente` (2+ referências analisadas), `validado` (aplicado em projeto com resultado), `consolidado` (vários projetos).

## Verificação final

- Todos os `[[links]]` apontam para arquivos que existem.
- Nenhuma afirmação sem marcação F/H/R nas seções de análise.
- Métricas do autor marcadas como alegação, não como fato.
- Capturas datadas e dentro de `_anexos/<nome-da-nota>/`.
