// Baixa imagens de projetos do Behance para uma pasta, nomeando p01, p02, ...
// Uso: node download-images.mjs <pasta-de-saida> <url> [<url> ...]
// Sem dependências (Node 18+). Opcional: se `sharp` estiver instalado, imprime as dimensões.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const [, , out, ...urls] = process.argv;
if (!out || urls.length === 0) {
  console.error('Uso: node download-images.mjs <pasta-de-saida> <url> [<url> ...]');
  process.exit(2);
}
mkdirSync(out, { recursive: true });

let sharp = null;
try { sharp = (await import('sharp')).default; } catch { /* opcional */ }

let n = 0;
for (const url of urls) {
  n += 1;
  const ext = extname(new URL(url).pathname) || '.png';
  const file = join(out, `p${String(n).padStart(2, '0')}${ext}`);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://www.behance.net/' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(file, buf);
    let dim = '';
    if (sharp) { const m = await sharp(buf).metadata(); dim = ` ${m.width}x${m.height}`; }
    console.log(`ok  ${file}${dim}`);
  } catch (e) {
    console.log(`ERRO ${url}: ${e.message}`);
  }
}
