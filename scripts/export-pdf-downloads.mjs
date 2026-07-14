// Pull all logged PDF-download events out of the private Vercel Blob store and print as CSV.
// Usage: node scripts/export-pdf-downloads.mjs [industry-slug]
import { list, get } from '@vercel/blob';

const filterSlug = process.argv[2];
const prefix = filterSlug ? `downloads/${filterSlug}/` : 'downloads/';

const { blobs } = await list({ prefix, access: 'private', limit: 1000 });

const rows = [];
for (const b of blobs) {
  const result = await get(b.pathname, { access: 'private' });
  if (!result) continue;
  const text = await new Response(result.stream).text();
  rows.push(JSON.parse(text));
}

rows.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

const cols = ['timestamp', 'industry', 'ip', 'country', 'region', 'city', 'user_agent', 'referrer'];
console.log(cols.join(','));
for (const r of rows) {
  console.log(cols.map((c) => `"${String(r[c] ?? '').replace(/"/g, '""')}"`).join(','));
}
console.error(`\n${rows.length} download(s) found.`);
