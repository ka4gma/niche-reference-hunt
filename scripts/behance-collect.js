// Cole no console (ou rode via javascript_tool) em uma página do Behance.
// - Em /search/projects/...: lista os projetos encontrados.
// - Em /gallery/<id>/...: devolve metadados e URLs das imagens em alta (max_1200).
// Retorna uma string JSON.
(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const path = location.pathname;

  if (path.startsWith('/search/')) {
    await wait(1500);
    const seen = new Set();
    const items = [];
    for (const a of document.querySelectorAll('a[href*="/gallery/"]')) {
      const href = a.href.split('?')[0];
      const label = (a.getAttribute('aria-label') || a.textContent || '').replace(/^Link para o projeto - /, '').trim();
      if (!label || seen.has(href)) continue;
      seen.add(href);
      items.push({ titulo: label.slice(0, 100), url: href });
    }
    return JSON.stringify({ tipo: 'busca', total: items.length, itens: items.slice(0, 40) }, null, 1);
  }

  if (path.startsWith('/gallery/')) {
    await wait(2000);
    window.scrollTo(0, document.body.scrollHeight); // força o carregamento das imagens
    await wait(1500);
    window.scrollTo(0, 0);
    let ld = {};
    try { ld = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent); } catch (e) {}
    const main = (document.querySelector('main') || document.body).innerText;
    const publicado = (main.match(/(?:Publicado em|Published on): [^\n]+/) || [''])[0];
    const tags = [...new Set([...document.querySelectorAll('a[href*="field="]')].map((a) => a.textContent.trim()).filter(Boolean))].slice(0, 12);
    const autores = [...new Set([...document.querySelectorAll('a[class*="Owner"]')].map((a) => a.textContent.trim()).filter(Boolean))].slice(0, 6);
    const imagens = [...new Set([...document.querySelectorAll('img')]
      .map((i) => i.currentSrc || i.src)
      .filter((s) => /project_modules/.test(s))
      .map((s) => s.replace(/\/project_modules\/[^/]+\//, '/project_modules/max_1200/')))];
    return JSON.stringify({
      tipo: 'projeto',
      titulo: document.title.replace(/ :: Behance$/, ''),
      url: location.href.split('?')[0],
      descricao: ld.description || '',
      publicado,
      autores,
      tags,
      imagens,
    }, null, 1);
  }

  return JSON.stringify({ erro: 'Abra uma página de busca ou de projeto do Behance.' });
})();
