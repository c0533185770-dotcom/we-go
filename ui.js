/* WE GO - icons, flags and drawn artwork. */
'use strict';

/* ---------- Icons ---------- */
const stroke = (d, size = 20, w = 1.7) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const P = {
  chevL: '<path d="m15 5-7 7 7 7"/>',
  chevR: '<path d="m9 5 7 7-7 7"/>',
  plane: '<path d="M21 12c0-.8-.7-1.5-1.5-1.5H15L10 3H8l2.4 7.5H6L4.2 8.5H3L4 12l-1 3.500h1.200L6 13.500h4.400L8 21h2l5-7.500h4.500c.8 0 1.500-.7 1.500-1.500Z"/>',
  ticket: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z"/><path d="M14 6v2M14 11v2M14 16v2"/>',
  hotel: '<path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"/><path d="M2 21h20M9 7h1M14 7h1M9 11h1M14 11h1M10 21v-5h4v5"/>',
  car: '<path d="M5 11 6.500 6.500A2 2 0 0 1 8.400 5h7.200a2 2 0 0 1 1.900 1.500L19 11"/><path d="M3 16v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M6 17v2M18 17v2M7 14h.01M17 14h.01"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  heart: '<path d="M12 20S3.500 15 3.500 9A4.500 4.500 0 0 1 12 6.800 4.500 4.500 0 0 1 20.500 9c0 6-8.500 11-8.500 11Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.500-3.500"/>',
  bell: '<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4Z"/><path d="M10 21h4"/>',
  menu: '<path d="M4 6h16M4 12h10M4 18h16"/>',
  cal: '<rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  pin: '<path d="M12 21s-7-6.500-7-11.500a7 7 0 0 1 14 0C19 14.500 12 21 12 21Z"/><circle cx="12" cy="9.500" r="2.500"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  edit: '<path d="m4 20 1-4L16 5l3 3L8 19Z"/>',
  bag: '<path d="M6 8h12l1 13H5Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  tree: '<path d="m12 3 6 8h-3l4 6H5l4-6H6Z"/><path d="M12 17v4"/>',
  star: '<path d="m12 3 2.700 5.800 6.300.800-4.600 4.300 1.200 6.300L12 17l-5.600 3.200 1.200-6.300L3 9.600l6.300-.800Z"/>',
  mix: '<path d="M4 7h10l-3-3M20 17H10l3 3"/><path d="M14 7h6M4 17h6"/>',
  city: '<path d="M3 21h18M5 21V9l5-3v15M10 21V3l9 4v14"/><path d="M13 9h3M13 13h3M13 17h3"/>',
  column: '<path d="M4 8 12 3l8 5ZM6 21h12M6 8v13M18 8v13M10 8v13M14 8v13"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M10 21v-6h4v6"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  bus: '<rect x="4" y="4" width="16" height="14" rx="3"/><path d="M4 11h16M8 18v2M16 18v2M8 15h.01M16 15h.01"/>',
  bike: '<circle cx="6" cy="16" r="4"/><circle cx="18" cy="16" r="4"/><path d="m6 16 4-8h5l3 8M10 8l4 8H6M9 5h3"/>',
  cable: '<path d="M3 5l18-2M12 4v5"/><rect x="6" y="9" width="12" height="11" rx="3"/><path d="M6 14h12"/>',
  seat: '<path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3Z"/>',
};
const icon = (name, size, w) => stroke(P[name], size, w);

const logo = (w = 132, c = '#3FE3DB', hole = '#2400A7') => `
  <svg class="logo" width="${w}" viewBox="0 0 132 98" aria-label="WE GO" role="img">
    <path fill="${c}" d="M19 0C8.500 0 0 8.500 0 19c0 14 19 44 19 44s19-30 19-44C38 8.500 29.500 0 19 0Z"/>
    <circle cx="19" cy="18" r="6.500" fill="${hole}"/>
    <path stroke="${c}" stroke-width="24" stroke-linecap="round" d="M74 12 38 86M120 12 84 86"/>
  </svg>`;

/* ---------- Flags (drawn, so they work on every OS) ---------- */
const bands = (cols, vertical) => cols.map((c, i) => vertical
  ? `<rect x="${(i * 30) / cols.length}" width="${30 / cols.length + .5}" height="30" fill="${c}"/>`
  : `<rect y="${(i * 30) / cols.length}" width="30" height="${30 / cols.length + .5}" fill="${c}"/>`).join('');
const FLAGS = {
  GB: '<rect width="30" height="30" fill="#012169"/><path d="M0 0 30 30M30 0 0 30" stroke="#fff" stroke-width="6"/><path d="M0 0 30 30M30 0 0 30" stroke="#C8102E" stroke-width="2.500"/><path d="M15 0v30M0 15h30" stroke="#fff" stroke-width="9"/><path d="M15 0v30M0 15h30" stroke="#C8102E" stroke-width="5"/>',
  IT: bands(['#009246', '#fff', '#CE2B37'], true),
  FR: bands(['#0055A4', '#fff', '#EF4135'], true),
  NL: bands(['#AE1C28', '#fff', '#21468B']),
  HU: bands(['#CD2A3E', '#fff', '#436F4D']),
  ES: bands(['#AA151B', '#F1BF00', '#F1BF00', '#AA151B']),
  CZ: bands(['#fff', '#D7141A']) + '<path d="M0 0 15 15 0 30Z" fill="#11457E"/>',
  GR: bands(['#0D5EAF', '#fff', '#0D5EAF', '#fff', '#0D5EAF']) ,
  US: bands(['#B22234', '#fff', '#B22234', '#fff', '#B22234', '#fff', '#B22234']) + '<rect width="15" height="15" fill="#3C3B6E"/>',
  CA: bands(['#D80621', '#fff', '#fff', '#D80621'], true) + '<circle cx="15" cy="15" r="4" fill="#D80621"/>',
  JP: '<rect width="30" height="30" fill="#fff"/><circle cx="15" cy="15" r="7" fill="#BC002D"/>',
  TH: bands(['#A51931', '#F4F5F8', '#2D2A4A', '#2D2A4A', '#F4F5F8', '#A51931']),
  AU: '<rect width="30" height="30" fill="#00247D"/><circle cx="21" cy="10" r="1.500" fill="#fff"/><circle cx="24" cy="17" r="1.500" fill="#fff"/><circle cx="18" cy="20" r="1.500" fill="#fff"/><path d="M0 0h13v13H0Z" fill="#C8102E" opacity=".9"/>',
  NZ: '<rect width="30" height="30" fill="#00247D"/><circle cx="21" cy="12" r="1.500" fill="#CC142B"/><circle cx="24" cy="18" r="1.500" fill="#CC142B"/><circle cx="19" cy="22" r="1.500" fill="#CC142B"/>',
  MA: '<rect width="30" height="30" fill="#C1272D"/><circle cx="15" cy="15" r="5" fill="none" stroke="#006233" stroke-width="1.500"/>',
  ZA: bands(['#DE3831', '#fff', '#007A4D', '#fff', '#002395']),
  IL: '<rect width="30" height="30" fill="#fff"/><rect y="4" width="30" height="4" fill="#0038B8"/><rect y="22" width="30" height="4" fill="#0038B8"/><path d="m15 9.500 4.500 8h-9ZM15 20.500l-4.500-8h9Z" fill="none" stroke="#0038B8" stroke-width="1.200"/>',
};
const flag = code => `<span class="flag"><svg viewBox="0 0 30 30" aria-hidden="true">${FLAGS[code] || FLAGS.IL}</svg></span>`;

/* ---------- Illustrations ---------- */
const scene2 = `<svg viewBox="0 0 340 300" aria-hidden="true">
  <ellipse cx="170" cy="160" rx="160" ry="125" fill="#E6F9F8"/>
  <circle cx="86" cy="96" r="48" fill="#fff" stroke="#111" stroke-width="2"/>
  <path d="M38 96h96M86 48c22 24 22 72 0 96M86 48c-22 24-22 72 0 96" fill="none" stroke="#111" stroke-width="2"/>
  <rect x="146" y="40" width="112" height="216" rx="18" fill="#fff" stroke="#111" stroke-width="2.500"/>
  <rect x="158" y="62" width="88" height="88" rx="10" fill="#3FE3DB" opacity=".4"/>
  <path d="M202 74c-13 0-23 10-23 22 0 17 23 40 23 40s23-23 23-40c0-12-10-22-23-22Z" fill="#2400A7"/>
  <circle cx="202" cy="96" r="8" fill="#fff"/>
  <rect x="158" y="166" width="88" height="10" rx="5" fill="#E9EAF2"/>
  <rect x="158" y="186" width="60" height="10" rx="5" fill="#E9EAF2"/>
  <rect x="158" y="212" width="88" height="26" rx="13" fill="#2400A7"/>
  <path d="m284 140 8 8 14-16" fill="none" stroke="#3FE3DB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="m42 200 6 6 11-12" fill="none" stroke="#3FE3DB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const scene3 = `<svg viewBox="0 0 340 300" aria-hidden="true">
  <ellipse cx="170" cy="165" rx="160" ry="120" fill="#E6F9F8"/>
  <rect x="70" y="98" width="200" height="140" rx="20" fill="#fff" stroke="#111" stroke-width="2.500"/>
  <path d="M70 134h200" stroke="#111" stroke-width="2.500"/>
  <path d="M96 98c10-30 130-40 150 0" fill="#3FE3DB" stroke="#111" stroke-width="2.500"/>
  <rect x="222" y="154" width="66" height="44" rx="14" fill="#2400A7"/>
  <circle cx="244" cy="176" r="8" fill="#fff"/>
  <rect x="94" y="164" width="88" height="10" rx="5" fill="#E9EAF2"/>
  <rect x="94" y="184" width="60" height="10" rx="5" fill="#E9EAF2"/>
  <circle cx="62" cy="66" r="24" fill="#3FE3DB" stroke="#111" stroke-width="2"/>
  <text x="62" y="74" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="700" font-size="22" fill="#111">$</text>
  <circle cx="284" cy="60" r="16" fill="#fff" stroke="#111" stroke-width="2"/>
  <text x="284" y="66" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="700" font-size="15" fill="#111">$</text>
</svg>`;
const skyline = `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE2EE"/><stop offset="1" stop-color="#E9F4F2"/></linearGradient></defs>
  <rect width="400" height="240" fill="url(#sky)"/>
  <g fill="none" stroke="#2400A7" stroke-width="3">
    <circle cx="255" cy="110" r="72"/><circle cx="255" cy="110" r="10"/>
    <path d="M255 38v144M183 110h144M204 59l102 102M204 161 306 59"/>
    <path d="M255 110 220 215M255 110l35 105"/>
  </g>
  <path d="M90 215V82l14-30 14 30v133Z" fill="#2400A7"/><circle cx="104" cy="100" r="8" fill="#3FE3DB"/>
  <path d="M0 215h60v-55l30-10v65h30v-30h40v30h240v25H0Z" fill="#2400A7" opacity=".85"/>
  <rect y="215" width="400" height="25" fill="#3FE3DB" opacity=".55"/>
</svg>`;
const barcode = (seed = 7) => {
  let x = seed * 9973, cells = '';
  const n = 29;
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    x = (x * 1103515245 + 12345) & 0x7fffffff;
    if ((x >> 16) & 1) cells += `<rect x="${c}" y="${r}" width="1.050" height="1.050"/>`;
  }
  return `<svg class="tk-code" viewBox="0 0 ${n} ${n}" fill="#000" role="img" aria-label="קוד כרטיס לדוגמה">${cells}</svg>`;
};
const mapArt = `<svg viewBox="0 0 402 874" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="402" height="874" fill="#F4F1E8"/>
  <path d="M260-20 430 150v80L200-20Z" fill="#A9DCF0"/><path d="M0 610c60 20 90 90 80 160l-10 110H0Z" fill="#A9DCF0"/>
  <path d="M0 0h120L0 90Z" fill="#CDE7BE"/><path d="M402 620v120l-90-40Z" fill="#CDE7BE"/>
  <g fill="#E7E4DB"><rect x="40" y="170" width="120" height="70" transform="rotate(25 100 205)"/><rect x="220" y="260" width="130" height="80" transform="rotate(25 285 300)"/><rect x="50" y="340" width="130" height="90" transform="rotate(25 115 385)"/><rect x="230" y="430" width="120" height="70" transform="rotate(25 290 465)"/></g>
  <g fill="none" stroke="#fff" stroke-width="12"><path d="M-20 170 440 390M-20 330 440 560M150 80 40 500M340 170 210 620"/></g>
</svg>`;

