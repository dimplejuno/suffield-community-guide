// One-off: geocode the directory's street addresses via OpenStreetMap Nominatim.
// Respects the 1 req/sec usage policy. Run: node scripts/geocode.mjs
const addresses = [
  '83 Mountain Road, Suffield, CT 06078',
  '50 North Main Street, Suffield, CT 06078',
  '350 Mountain Road, Suffield, CT 06078',
  '945 Mountain Road, West Suffield, CT 06093',
  '260 Mountain Road, Suffield, CT 06078',
  '1060 Sheldon Street, West Suffield, CT 06093',
  '185 North Main Street, Suffield, CT 06078',
  '450 South Street, Suffield, CT 06078',
  '145 Bridge Street, Suffield, CT 06078',
  '1305 Mapleton Avenue, Suffield, CT 06078',
  '972 Sheldon Street, West Suffield, CT 06093',
  '232 South Main Street, Suffield, CT 06078',
  '55 South Main Street, Suffield, CT 06078',
  '81 High Street, Suffield, CT 06078',
  '1408 Mountain Road, West Suffield, CT 06093',
  '446 Mountain Road, Suffield, CT 06078',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const out = {};

for (const addr of addresses) {
  const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&q=' + encodeURIComponent(addr);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'suffield-community-guide/1.0 (demo)' } });
    const data = await res.json();
    if (data && data[0]) {
      out[addr] = [Number(Number(data[0].lat).toFixed(6)), Number(Number(data[0].lon).toFixed(6))];
    } else {
      out[addr] = null;
    }
  } catch (e) {
    out[addr] = null;
  }
  console.error(addr, '->', JSON.stringify(out[addr]));
  await sleep(1200);
}

console.log(JSON.stringify(out, null, 2));
