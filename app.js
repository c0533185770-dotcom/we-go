/* WE GO - app logic. Data is sample data; everything is saved in this browser only. */
'use strict';

Object.assign(P, {
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  logout: '<path d="M14 4h5v16h-5M10 8l-4 4 4 4M6 12h9"/>',
  trash: '<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M16 13h.01M3 10h18"/>',
  sort: '<path d="M7 5v14l-3-3M17 19V5l3 3"/>',
});

/* ---------- Static data ---------- */
const CONTINENTS = [
  { id: 'africa', name: 'אפריקה', flag: 'ZA' }, { id: 'america', name: 'אמריקה', flag: 'US' }, { id: 'asia', name: 'אסיה', flag: 'JP' },
  { id: 'oceania', name: 'אוסטרליה', flag: 'AU' }, { id: 'israel', name: 'ישראל', flag: 'IL' }, { id: 'europe', name: 'אירופה', flag: 'GB' },
];
const dest = (city, area, code, fl, en) => ({ city, area, code, flag: fl, en });
const DESTS = {
  europe: [dest('לונדון', 'אירופה', 'LON', 'GB', 'LONDON'), dest('רומא', 'איטליה', 'FCO', 'IT', 'ROME'), dest('פריז', 'צרפת', 'CDG', 'FR', 'PARIS'), dest('אמסטרדם', 'הולנד', 'AMS', 'NL', 'AMSTERDAM'), dest('ברצלונה', 'ספרד', 'BCN', 'ES', 'BARCELONA'), dest('בודפשט', 'הונגריה', 'BUD', 'HU', 'BUDAPEST'), dest('ונציה', 'איטליה', 'VCE', 'IT', 'VENICE'), dest('אתונה', 'יוון', 'ATH', 'GR', 'ATHENS'), dest('פראג', 'צ׳כיה', 'PRG', 'CZ', 'PRAGUE')],
  america: [dest('ניו יורק', 'ארה״ב', 'JFK', 'US', 'NEW YORK'), dest('לוס אנג׳לס', 'ארה״ב', 'LAX', 'US', 'LOS ANGELES'), dest('טורונטו', 'קנדה', 'YYZ', 'CA', 'TORONTO')],
  asia: [dest('טוקיו', 'יפן', 'HND', 'JP', 'TOKYO'), dest('בנגקוק', 'תאילנד', 'BKK', 'TH', 'BANGKOK')],
  africa: [dest('קייפטאון', 'דרום אפריקה', 'CPT', 'ZA', 'CAPE TOWN'), dest('מרקש', 'מרוקו', 'RAK', 'MA', 'MARRAKESH')],
  oceania: [dest('סידני', 'אוסטרליה', 'SYD', 'AU', 'SYDNEY'), dest('אוקלנד', 'ניו זילנד', 'AKL', 'NZ', 'AUCKLAND')],
  israel: [dest('ירושלים', 'ישראל', 'JRS', 'IL', 'JERUSALEM'), dest('תל אביב', 'ישראל', 'TLV', 'IL', 'TEL AVIV'), dest('אילת', 'ישראל', 'ETM', 'IL', 'EILAT'), dest('טבריה', 'ישראל', 'TIB', 'IL', 'TIBERIAS'), dest('צפת', 'ישראל', 'SFD', 'IL', 'SAFED')],
};
const ALL_DESTS = Object.entries(DESTS).flatMap(([continent, list]) => list.map(d => ({ ...d, continent })));
const ACTIVITIES = [['קניות', 'bag'], ['טבע', 'tree'], ['אטרקציות', 'ticket'], ['משולב', 'mix'], ['עירוני', 'city'], ['היסטוריה', 'column']];
const STAYS = [['מלון', 'hotel'], ['דירה', 'home'], ['כבר יש לנו', 'check'], ['חיפוש', 'search']];
const MOVES = [['רכבל', 'cable'], ['אוטובוס', 'bus'], ['רכב', 'car'], ['אופניים', 'bike']];
const AIRLINES = [
  { id: 'EL AL', img: 'assets/elal.png', price: 420 }, { id: 'ARKIA', color: '#0071BC', price: 340 }, { id: 'ISRAIR', color: '#00A0DF', price: 360 },
  { id: 'WIZZ AIR', color: '#C6007E', price: 210 }, { id: 'BRITISH AIRWAYS', color: '#075AAA', price: 480 },
];
const SLOTS = [['8:50', '13:22', '5h32'], ['6:15', '10:40', '5h25'], ['11:30', '16:05', '5h35'], ['15:45', '20:10', '5h25'], ['22:05', '02:40', '5h35']];
const CARS = [
  { id: 'glk', name: 'Mercedes Benz GLK', price: 260 }, { id: 's500', name: 'S 500 Sedan', price: 400 },
  { id: 'c200', name: 'Mercedes Benz C 200', price: 220 }, { id: 'e300', name: 'Mercedes Benz E 300', price: 320 },
];
const RATES = [['שכירות יומית', 1, 1], ['שכירות שבועית', 7, 6], ['שכירות חודשית', 30, 22]];
const ROOMS = ['assets/room.png', 'assets/room-3.png', 'assets/room-4.png', 'assets/room-2.png'];
const LONDON_PICS = ['assets/london-hero.jpg', 'assets/london-1.jpg', 'assets/london-2.jpg', 'assets/london-3.jpg'];
const MONTHS = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
const TABS = [['flights', 'טיסות', 'plane'], ['attractions', 'אטרקציות', 'ticket'], ['hotels', 'מלונות', 'hotel'], ['cars', 'השכרת רכב', 'car']];
const LIST_TITLES = { flights: 'כל הטיסות', attractions: 'כל האטרקציות', hotels: 'כל המלונות', cars: 'כל הרכבים' };

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const money = n => `${Math.round(Number(n)).toLocaleString('en-US')}$`;
const pad = n => String(n).padStart(2, '0');
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;
const now = new Date();
const todayIso = iso(now.getFullYear(), now.getMonth(), now.getDate());
const fmt = v => { if (!v) return ''; const [y, m, d] = v.split('-'); return `${d}/${m}/${y.slice(2)}`; };
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const daysBetween = (a, b) => Math.round((new Date(`${b}T12:00`) - new Date(`${a}T12:00`)) / 864e5);
const hash = s => { let h = 2166136261; for (const c of `wego:${s}`) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); };

const blankTrip = () => ({
  id: Date.now().toString(36), done: false, domestic: false, continent: null, code: null, budget: 200,
  dep: null, ret: null, pax: { adults: 2, kids: 0, babies: 0, pets: 0 }, activities: [], stay: null, move: null, airline: null,
  plan: [], tab: 'flights',
});

/* ---------- State: only `saved` survives a reload ---------- */
const saved = { account: null, loggedIn: false, onboarded: false, trip: blankTrip(), trips: [], draftFrom: null, prefs: { notifications: true, budgetAlerts: true }, seen: 0 };
const S = {
  screen: 'splash', arg: null, hist: [], dir: 1, ob: 0, otp: null, resendAt: 0, sheet: null, drawer: false,
  query: '', listSort: 'recommended', listBudget: false, flightDir: 'out', searchKind: 'all', searchQ: '',
  dateTab: 'accordion', dateField: 'dep', calY: now.getFullYear(), calM: now.getMonth(), lgOpen: 'stay', heroIdx: 0, carRate: 0,
  editUntil: null, pendingEmail: '', pendingAccount: null,
};
const STORE = 'wego.v1';
function persist() { try { localStorage.setItem(STORE, JSON.stringify(saved)); } catch (e) { /* private window: keep working in memory */ } }
function restore() {
  try { const raw = localStorage.getItem(STORE); if (raw) Object.assign(saved, JSON.parse(raw)); } catch (e) { /* start fresh */ }
}
const T = () => saved.trip;
const city = () => ALL_DESTS.find(d => d.code === T().code) || DESTS.europe[0];
const firstName = () => saved.account?.name || 'מטייל';
const travelers = () => T().pax.adults + T().pax.kids + T().pax.babies;
const seatsNeeded = () => T().pax.adults + T().pax.kids;
const nights = () => (T().dep && T().ret ? Math.max(1, daysBetween(T().dep, T().ret)) : 1);
const seatList = () => ['18B', '19A', '19B', '19C', '20A', '20B', '20C', '21A', '21B', '21C', '22A', '22B', '22C', '23A', '23B', '23C', '24A', '24B'].slice(0, Math.max(1, seatsNeeded())).join(',');

/* ---------- Catalog for the current destination ---------- */
function flights(dir) {
  const d = city(), mine = T().airline;
  const list = AIRLINES.map((a, i) => ({
    id: `fl-${dir}-${a.id}`, kind: 'flight', group: `fl-${dir}`, dir, airline: a.id,
    from: dir === 'out' ? 'ישראל' : d.city, fromCode: dir === 'out' ? 'TLV' : d.code,
    to: dir === 'out' ? d.city : 'ישראל', toCode: dir === 'out' ? d.code : 'TLV', toEn: dir === 'out' ? d.en : 'TLV',
    dep: SLOTS[i][0], arr: SLOTS[i][1], dur: SLOTS[i][2], unit: a.price, no: `${a.id.slice(0, 2)}${316 + i * 7}`, icon: 'plane',
    title: dir === 'out' ? `ישראל ← ${d.city}` : `${d.city} ← ישראל`, tags: [a.id],
  }));
  return list.sort((a, b) => (b.airline === mine) - (a.airline === mine));
}
function attractions() {
  const d = city();
  const base = d.code === 'LON'
    ? [['London Eye', 'SE1 7PB', 'חוויה משפחתית', 1500, 'אטרקציות', 'גלגל הענק של לונדון, סיבוב אחד שנותן לך את כל העיר בפריים מושלם – התמזה, ביג בן והאופק עד האינסוף. חוויה שחייבים לראות לפחות פעם אחת (ואז עוד פעם).'],
      ['Big Ben', 'SW1A 0AA', 'סיור היסטורי', 120, 'היסטוריה', 'מגדל השעון המפורסם בעולם, והסיפור של הפרלמנט הבריטי סביבו. סיור קצר שמתאים לכל המשפחה.'],
      ['Tower Bridge', 'SE1 2UP', 'תצפית על התמזה', 90, 'עירוני', 'הולכים על רצפת הזכוכית מעל הנהר ורואים איך הגשר נפתח. נקודת הצילום הכי טובה בעיר.'],
      ['Hyde Park', 'W2 2UH', 'יום בטבע', 40, 'טבע', 'פארק ענק באמצע העיר עם סירות, אגם ומסלולי אופניים. עצירה רגועה בין האטרקציות.']]
    : [[d.en, d.area, 'חוויה משפחתית', 180, 'אטרקציות', `חוויה משפחתית ב${d.city}, שנותנת לך את כל העיר בפריים מושלם.`],
      [`${d.en} Old Town`, d.area, 'סיור היסטורי', 90, 'היסטוריה', `סיור רגלי ברחובות הישנים של ${d.city} עם כל הסיפורים של המקום.`],
      [`${d.en} Market`, d.area, 'שוק וקניות', 60, 'קניות', `השוק המרכזי של ${d.city}: אוכל מקומי, מזכרות ואווירה.`],
      [`${d.en} Park`, d.area, 'יום בטבע', 40, 'טבע', `יום רגוע בפארק הגדול של ${d.city}.`]];
  return base.map(([en, place, label, price, tag, about], i) => ({
    id: `at-${d.code}-${i}`, kind: 'attraction', en, place, label, unit: price, about, icon: 'ticket',
    title: `${d.city} I , ${label}`, hours: ['10:00- 13:50', '09:00- 12:00', '11:00- 17:00', '07:00- 20:00'][i], tags: [tag],
    pics: d.code === 'LON' ? (i === 0 ? LONDON_PICS : [LONDON_PICS[0]]) : null,
  }));
}
function hotels() {
  const d = city();
  const names = [d.code === 'LON' ? 'מלון בקינגהם קיסר' : `מלון ${d.city} סנטרל`, `רזידנס ${d.city}`, `בוטיק ${d.city}`, `גרנד ${d.city}`];
  return names.map((name, i) => ({
    id: `ho-${d.code}-${i}`, kind: 'hotel', group: 'hotel', title: name, unit: [350, 280, 220, 510][i], stars: [3, 4, 3, 5][i], icon: 'hotel',
    pics: ROOMS.map((_, n) => ROOMS[(n + i) % ROOMS.length]), tags: ['מלון'],
  }));
}
const cars = () => CARS.map(c => ({ id: `car-${c.id}`, kind: 'car', group: 'car', title: c.name, carId: c.id, unit: c.price, icon: 'car', tags: ['רכב'] }));
const catalog = () => [...(T().domestic ? [] : [...flights('out'), ...flights('ret')]), ...attractions(), ...hotels(), ...cars()];
const lookup = id => catalog().find(i => i.id === id);
const entryOf = id => T().plan.find(p => p.id === id);
const inPlan = id => !!entryOf(id);

function priceOf(item, rate = entryOf(item.id)?.rate ?? 0) {
  if (item.kind === 'flight') return item.unit * Math.max(1, seatsNeeded());
  if (item.kind === 'hotel') return item.unit * nights();
  if (item.kind === 'car') { const [, days, mult] = RATES[rate]; return item.unit * mult * Math.ceil(nights() / days); }
  return item.unit;
}
const subOf = item => ({
  flight: `${item.airline}, מושבים ${seatList()}`,
  hotel: `${nights()} לילות, ${T().dep ? `${fmt(T().dep)} - ${fmt(T().ret)}` : ''}`,
  car: `${RATES[entryOf(item.id)?.rate ?? 0][0]}, ${nights()} ימים`,
  attraction: `שעות ביקור: ${item.hours}`,
}[item.kind]);
const planItems = () => T().plan.map(p => ({ entry: p, item: lookup(p.id) })).filter(x => x.item);
const spent = () => planItems().reduce((a, x) => a + priceOf(x.item), 0);
const unpaid = () => planItems().filter(x => !x.entry.paid);
const fitsBudget = item => priceOf(item, 0) <= T().budget - spent() || inPlan(item.id);

function addToPlan(item, rate = 0) {
  const t = T();
  if (entryOf(item.id)?.paid) return toast('הפריט הזה כבר שולם');
  if (inPlan(item.id)) { t.plan = t.plan.filter(p => p.id !== item.id); toast('הוסר מהמסלול'); persist(); return; }
  if (item.group) {
    const old = t.plan.find(p => lookup(p.id)?.group === item.group && !p.paid);
    if (old) t.plan = t.plan.filter(p => p !== old);
  }
  t.plan.push({ id: item.id, paid: false, rate });
  toast('נוסף למסלול');
  persist();
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- Navigation ---------- */
let timer;
let resendTick;
let lastKey = '';
const NO_RETURN = new Set(['splash', 'verified', 'loading', 'paid']);
function go(screen, arg = null, { root = false, replace = false } = {}) {
  clearInterval(resendTick);
  if (root) S.hist = [];
  else if (!replace && !NO_RETURN.has(S.screen)) S.hist.push({ screen: S.screen, arg: S.arg, scroll: $('.screen')?.scrollTop || 0 });
  S.screen = screen;
  S.arg = arg;
  S.dir = 1;
  S.heroIdx = 0;
  S.drawer = false;
  render();
}
function back() {
  const prev = S.hist.pop();
  if (!prev) return;
  clearInterval(resendTick);
  S.screen = prev.screen;
  S.arg = prev.arg;
  S.dir = -1;
  S.heroIdx = 0;
  if (S.editUntil && prev.screen === 'home') S.editUntil = null;
  render();
  const el = $('.screen');
  if (el) el.scrollTop = prev.scroll;
}
function render() {
  clearTimeout(timer);
  const app = $('#app');
  const key = S.screen + (S.arg ?? '');
  const prev = $('.screen', app);
  const keep = key === lastKey && prev ? prev.scrollTop : 0;
  const bodyKeep = key === lastKey ? $('.wiz-body', app)?.scrollTop : 0;
  app.innerHTML = VIEWS[S.screen]() + overlays();
  const el = $('.screen', app);
  if (key !== lastKey) el.classList.add(S.dir < 0 ? 'enter-back' : 'enter');
  el.scrollTop = keep;
  const body = $('.wiz-body', app);
  if (body && bodyKeep) body.scrollTop = bodyKeep;
  lastKey = key;
  $('#statusbar').classList.toggle('light', ['splash', 'region'].includes(S.screen));
  AFTER[S.screen]?.();
}
function refreshOverlays() {
  $$('.scrim, .sheet, .drawer').forEach(n => n.remove());
  $('#app').insertAdjacentHTML('beforeend', overlays());
}
function route() {
  if (!saved.account) return go('signup', null, { root: true });
  if (!saved.loggedIn) return go('login', null, { root: true });
  if (!saved.onboarded) return go('onboarding', null, { root: true });
  if (T().done) return go('home', null, { root: true });
  return go('region', null, { root: true });
}
function login(account) {
  saved.account = account;
  saved.loggedIn = true;
  persist();
}
function askConfirm(title, text, okLabel, act, val, danger) {
  S.sheet = { title, text, okLabel, act, val, danger };
  refreshOverlays();
}

/* ---------- Wizard ---------- */
const STEPS = () => (T().domestic
  ? ['region', 'dest', 'budget', 'dates', 'pax', 'activities', 'logistics']
  : ['region', 'continent', 'dest', 'budget', 'dates', 'pax', 'activities', 'logistics', 'airline']);
function stepNext() {
  const steps = STEPS(), i = steps.indexOf(S.screen);
  if (S.editUntil === S.screen) { S.editUntil = null; return go('home', null, { root: true }); }
  if (i === steps.length - 1) {
    T().done = true;
    T().tab = T().domestic ? 'attractions' : 'flights';
    if (saved.draftFrom) { saved.trips.unshift(saved.draftFrom); saved.draftFrom = null; }
    persist();
    return go('loading', null, { root: true });
  }
  go(steps[i + 1]);
}
const backBtn = () => `<button class="top-back" data-act="back" aria-label="חזרה">${icon('chevL', 22, 2)}</button>`;
function wizard(body, canNext = true) {
  const steps = STEPS();
  const pct = Math.round(((steps.indexOf(S.screen) + 1) / steps.length) * 100);
  const saving = S.editUntil === S.screen;
  return `<section class="screen wizard" aria-label="תכנון טיול">
    ${backBtn()}
    <div class="wiz-body">${body}</div>
    <div class="wiz-foot">
      <button class="btn btn-primary" data-act="next" ${canNext ? '' : 'disabled'}>${saving ? 'שמירה' : `הבא ${icon('chevL', 16)}`}</button>
      <button class="btn btn-outline" data-act="back">${icon('chevR', 16)} הקודם</button>
    </div>
    <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
  </section>`;
}
const pick = (act, val, label, ic, on, inner) =>
  `<button class="pick ${on ? 'on' : ''}" data-act="${act}" data-val="${esc(val)}" aria-pressed="${!!on}">
     <span class="pick-circle">${inner || icon(ic, 34, 1.5)}</span>${esc(label)}</button>`;
const destRows = found => (found.length
  ? found.map(d => `<button class="row-pick ${T().code === d.code ? 'on' : ''}" data-act="dest" data-val="${d.code}" aria-pressed="${T().code === d.code}">${flag(d.flag)} ${esc(d.city)}, ${esc(d.area)}</button>`).join('')
  : '<p class="empty">לא מצאנו אזור כזה</p>');
const destsNow = () => {
  const list = DESTS[T().domestic ? 'israel' : T().continent] || [];
  const q = S.query.trim().toLowerCase();
  return list.filter(d => !q || d.city.includes(q) || d.area.includes(q) || d.en.toLowerCase().includes(q));
};
function calendarHtml(cls) {
  const t = T(), y = S.calY, m = S.calM, days = new Date(y, m + 1, 0).getDate();
  const isFirst = y === now.getFullYear() && m === now.getMonth();
  let cells = '';
  for (let d = 1; d <= days; d++) {
    const v = iso(y, m, d), c = [];
    if (t.dep === v) c.push('start');
    if (t.ret === v || (t.dep === v && !t.ret)) c.push('end');
    if (t.dep && t.ret && v > t.dep && v < t.ret) c.push('in');
    cells += `<button class="day ${c.join(' ')}" data-act="day" data-val="${v}" ${v < todayIso ? 'disabled' : ''}>${d}</button>`;
  }
  const spill = (7 - (days % 7)) % 7;
  for (let d = 1; d <= spill; d++) cells += `<span class="day spill">${d}</span>`;
  return `<div class="cal ${cls}">
    <div class="cal-nav">
      <button data-act="calMove" data-val="-1" aria-label="חודש קודם" ${isFirst ? 'disabled' : ''}>${icon('chevR', 22, 2.2)}</button>
      <span>${MONTHS[m]} ${y === now.getFullYear() ? '' : y}</span>
      <button data-act="calMove" data-val="1" aria-label="חודש הבא">${icon('chevL', 22, 2.2)}</button>
    </div>
    <div class="cal-grid">${cells}</div></div>`;
}

/* ---------- Shared parts ---------- */
function notifications() {
  if (!saved.prefs.notifications) return [];
  const t = T(), list = [];
  if (t.done && t.dep) {
    const left = daysBetween(todayIso, t.dep);
    if (left >= 0) list.push(['plane', `עוד ${left} ימים ל${city().city}`, `יציאה ב-${fmt(t.dep)}`]);
  }
  if (saved.prefs.budgetAlerts && t.done) {
    const pct = (spent() / t.budget) * 100;
    if (pct > 100) list.push(['wallet', 'חרגת מהתקציב', `המסלול עולה ${money(spent())} והתקציב ${money(t.budget)}`]);
    else if (pct >= 80) list.push(['wallet', 'התקציב כמעט נגמר', `נשאר לך ${money(t.budget - spent())}`]);
  }
  if (unpaid().length) list.push(['ticket', `${unpaid().length} פריטים מחכים לתשלום`, 'אפשר לשלם מתוך "הטיולים שלי"']);
  planItems().filter(x => x.entry.paid).forEach(x => list.push(['check', `${x.item.title} אושר`, 'התשלום לדוגמה בוצע']));
  list.push(['heart', `ברוך הבא, ${firstName()}`, 'החשבון שלך מוכן']);
  return list;
}
const unread = () => Math.max(0, notifications().length - saved.seen);
const avatarMark = () => (saved.account?.avatar ? `<img class="avatar-img" src="${saved.account.avatar}" alt="">` : logo(22));
const topbar = () => `<div class="topbar">
  <div class="who"><button class="who-mark" data-act="goProfile" aria-label="פרופיל">${avatarMark()}</button><div><b>היי, ${esc(firstName())}</b><small>${fmt(T().dep) || fmt(todayIso)}</small></div></div>
  <div class="top-icons">
    <button data-act="openNotif" aria-label="התראות" class="bell">${icon('bell', 24, 1.5)}${unread() ? `<i class="dot">${unread()}</i>` : ''}</button>
    <button data-act="openDrawer" aria-label="תפריט">${icon('menu', 24, 1.5)}</button>
  </div></div>`;
function budgetCard() {
  const t = T(), used = spent(), left = t.budget - used, pct = Math.min(100, Math.round((used / t.budget) * 100));
  return `<div class="budget ${left < 0 ? 'over' : ''}">
    <div class="budget-top">
      <div class="budget-place">${flag(city().flag)} <span>${esc(city().city)}</span></div>
      <div class="budget-amount">${Number(t.budget).toLocaleString('en-US')}<small>$</small></div>
    </div>
    <p class="budget-left">${left >= 0 ? `נשאר לך <bdi>${money(left)}</bdi>` : `חריגה של <bdi>${money(-left)}</bdi> מהתקציב`}</p>
    <div class="meter" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="ניצול תקציב"><i style="width:${pct}%"></i><span>${pct}%</span></div>
  </div>`;
}
const visibleTabs = () => (T().domestic ? TABS.filter(x => x[0] !== 'flights') : TABS);
const airlineMark = (id, small) => {
  const a = AIRLINES.find(x => x.id === id) || AIRLINES[0];
  return a.img ? `<img src="${a.img}" alt="${a.id}" ${small ? 'style="height:14px"' : ''}>` : `<span class="wm" style="color:${a.color}">${a.id}</span>`;
};
const planBtn = (item, label) => {
  const e = entryOf(item.id);
  return `<button class="btn-sm ${e ? 'added' : ''}" data-act="open" data-val="${item.id}">${e ? (e.paid ? 'שולם ✓' : 'במסלול ✓ לפרטים') : label}</button>`;
};
const flightCard = f => `<article class="card flight">
  <div class="fl-route">
    <div class="fl-city"><b>${esc(f.from)}</b><small dir="ltr" style="text-align:right">${esc(f.fromCode)}</small><div class="dash"></div><span>${f.dep}</span></div>
    <span class="fl-plane">${icon('plane', 22)}</span>
    <div class="fl-city to"><b>${esc(f.to)}</b><small dir="ltr" style="text-align:left">${esc(f.toEn)}</small><div class="dash"></div><span>${f.arr}</span></div>
  </div>
  <div class="fl-meta">
    <div class="fl-logo">${airlineMark(f.airline)}</div>
    <div><b>price</b><span>${money(priceOf(f))}</span></div>
    <div><b>seat</b><span>${seatList()}</span></div>
  </div>
  ${planBtn(f, 'לפרטים והוספה למסלול >')}
</article>`;
const attractionPhoto = (a, i = 0) => (a.pics
  ? `<img src="${a.pics[i] || a.pics[0]}" alt="${esc(a.en)}">`
  : skyline.replaceAll('sky', `sky${a.id.replace(/\W/g, '')}`));
const attractionCard = a => `<article class="card attraction">
  <button class="at-photo" data-act="open" data-val="${a.id}" aria-label="פרטי ${esc(a.en)}">${attractionPhoto(a)}</button>
  <h3>${esc(a.title)}</h3>
  <div class="at-meta"><span>שעות ביקור: <bdi>${a.hours}</bdi></span>
    <span><button data-act="open" data-val="${a.id}">קצת על המקום</button> · <button data-act="openMap" data-val="${a.id}">מיקום על המפה</button></span></div>
  ${planBtn(a, 'לפרטים והוספה למסלול')}
</article>`;
const hotelCard = h => `<article class="card hotel">
  <div><h3>${esc(h.title)}</h3>
    <p class="ho-tags">$${h.unit} FOR ONE NIGHT · HOTEL DELUX</p>
    <div class="ho-date">${icon('cal', 14)} <bdi>${T().dep ? `${fmt(T().dep)} - ${fmt(T().ret)}` : ''}</bdi></div></div>
  <img class="hotel-photo" src="${h.pics[0]}" alt="" data-act="open" data-val="${h.id}" style="cursor:pointer">
  <div class="ho-foot">
    <div class="stars" aria-label="${h.stars} כוכבים">${[0, 1, 2, 3, 4].map(n => `<span class="${n < h.stars ? '' : 'off'}">${stroke(P.star.replace('<path', '<path fill="currentColor"'), 14, 1)}</span>`).join('')}</div>
    ${planBtn(h, 'לפרטים והוספה למסלול')}
  </div>
</article>`;
const carCard = c => `<article class="card car">
  <img src="assets/car.png" alt="${esc(c.title)}" data-act="open" data-val="${c.id}">
  <h3>${esc(c.title)}</h3>
  <small dir="ltr">$${c.unit}/Day</small>
  <button class="btn-sm ${inPlan(c.id) ? 'added' : ''}" data-act="carToggle" data-val="${c.id}">${entryOf(c.id)?.paid ? 'שולם ✓' : inPlan(c.id) ? 'במסלול ✓' : 'להוספה למסלול'}</button>
</article>`;
const anyCard = i => ({ flight: flightCard, attraction: attractionCard, hotel: hotelCard, car: carCard }[i.kind](i));
const attractionsRanked = () => {
  const liked = T().activities;
  return attractions().sort((a, b) => liked.includes(b.tags[0]) - liked.includes(a.tags[0]));
};
function tabContent() {
  const tab = T().tab, more = `<button class="see-all" data-act="openList" data-val="${tab}">${LIST_TITLES[tab]} ${icon('chevL', 14, 2)}</button>`;
  if (tab === 'flights' && !T().domestic) {
    const pickOne = dir => flights(dir).find(f => inPlan(f.id)) || flights(dir)[0];
    return `<div class="cards">${flightCard(pickOne('out'))}${flightCard(pickOne('ret'))}</div>${more}`;
  }
  if (tab === 'attractions') return `<div class="cards">${attractionsRanked().slice(0, 2).map(attractionCard).join('')}</div>${more}`;
  if (tab === 'hotels') {
    const note = T().stay === 'כבר יש לנו' ? '<p class="note">סימנת שכבר יש לכם איפה לישון. המלונות כאן רק אם תרצו להחליף.</p>' : '';
    return `${note}<div class="cards">${hotels().slice(0, 3).map(hotelCard).join('')}</div>${more}`;
  }
  return `<div class="cars">${cars().map(carCard).join('')}</div>${more}`;
}
const nav = active => `<nav class="nav" aria-label="ניווט ראשי">
  <button class="${active === 'home' ? 'on' : ''}" data-act="goHome">${logo(26, 'currentColor', '#2400A7')}דף הבית</button>
  <button class="${active === 'search' ? 'on' : ''}" data-act="goSearch">${icon('search', 24)}חיפוש</button>
  <button class="${active === 'trips' ? 'on' : ''}" data-act="goTrips">${icon('heart', 24)}הטיולים שלי</button>
  <button class="${active === 'profile' ? 'on' : ''}" data-act="goProfile">${icon('user', 24)}פרופיל</button>
</nav>`;
const subhead = title => `<div class="subhead"><button data-act="back" aria-label="חזרה">${icon('chevL', 22)}</button><h1>${title}</h1></div>`;
const subheadPlain = title => `<div class="subhead"><h1 style="padding:0">${title}</h1></div>`;
const overlays = () => {
  let html = '';
  if (S.sheet) {
    const s = S.sheet;
    html += `<div class="scrim" data-act="closeOverlay"></div>
    <div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(s.title)}">
      <h2>${esc(s.title)}</h2><p>${esc(s.text)}</p>
      ${s.okLabel ? `<button class="btn btn-block ${s.danger ? 'btn-danger' : 'btn-primary'}" data-act="${s.act}" data-val="${esc(s.val ?? '')}">${esc(s.okLabel)}</button>` : ''}
      <button class="btn btn-block btn-outline" data-act="closeOverlay">${s.okLabel ? 'ביטול' : 'סגירה'}</button>
    </div>`;
  }
  if (S.drawer) {
    const row = (act, ic, label) => `<button data-act="${act}">${icon(ic, 22)} ${label}</button>`;
    html += `<div class="scrim" data-act="closeOverlay"></div>
    <aside class="drawer" aria-label="תפריט">
      <div class="drawer-head"><span class="who-mark">${avatarMark()}</span><div><b>${esc(firstName())}</b><small>${esc(saved.account?.email)}</small></div></div>
      ${row('goHome', 'home', 'דף הבית')}${row('goSearch', 'search', 'חיפוש')}${row('goTrips', 'heart', 'הטיולים שלי')}${row('openNotif', 'bell', 'התראות')}${row('goProfile', 'user', 'פרופיל')}${row('newTrip', 'plus', 'טיול חדש')}
      <button class="drawer-out" data-act="askLogout">${icon('logout', 22)} התנתקות</button>
    </aside>`;
  }
  return html;
};
const authSocial = () => `<div class="socials" aria-label="כניסה מהירה">
  <button data-act="social" aria-label="כניסה עם Twitter" style="color:#1DA1F2">t</button>
  <button data-act="social" aria-label="כניסה עם Facebook" style="color:#1877F2">f</button>
  <button data-act="social" aria-label="כניסה עם Gmail" style="color:#EA4335">M</button>
</div>`;

/* ---------- Views ---------- */
const VIEWS = {
  splash: () => `<section class="screen splash" data-act="endSplash" aria-label="WE GO">${logo(132)}<div class="wordmark">WE GO</div></section>`,

  onboarding: () => {
    const slides = [
      ['מטיילים בראש שקט', 'עוקבים אחרי התקציב, בלי הפתעות.', '<img src="assets/onboarding-1.png" alt="">'],
      ['בוחרים יעד אהוב', 'מקבלים הצעות מותאמות.<br>מטיילים בראש שקט', scene2],
      ['קובעים תקציב', 'ורואים רק מה שמתאים.<br>בוחרים מה אוהבים', scene3],
    ];
    const [t, s, art] = slides[S.ob];
    return `<section class="screen onboarding">
      ${S.ob ? `<button class="top-back" data-act="obBack" aria-label="חזרה">${icon('chevL', 22, 2)}</button>` : ''}
      <div class="ob-art">${art}</div>
      <div class="ob-panel"><h1>${t}</h1><p>${s}</p>
        <div class="ob-dots" aria-label="שלב ${S.ob + 1} מתוך 3">${slides.map((_, i) => `<i class="${i === S.ob ? 'on' : ''}"></i>`).join('')}</div>
        <div class="ob-actions"><button class="btn btn-ghost" data-act="obDone">SKIP</button><button class="btn btn-teal" data-act="obNext">NEXT</button></div>
      </div></section>`;
  },

  signup: () => `<section class="screen auth">
    <div class="auth-head"><span class="auth-avatar">${icon('user', 24, 1.5)}</span><h1>צור חשבון</h1></div>
    <form class="form" id="signup" novalidate>
      <label class="field"><input id="su-name" name="name" placeholder="שם משתמש" aria-label="שם משתמש" autocomplete="username"></label>
      <label class="field"><input id="su-email" name="email" type="email" dir="auto" placeholder="דוא”ל" aria-label="דוא״ל" autocomplete="email"></label>
      <label class="field"><input id="su-pass" name="password" type="password" placeholder="סיסמה" aria-label="סיסמה" autocomplete="new-password"><button type="button" class="eye" data-act="togglePass" aria-label="הצגת סיסמה">${icon('eye', 20)}</button></label>
      <label class="field"><span class="field-label">תאריך לידה</span><input id="su-birth" name="birth" type="date" aria-label="תאריך לידה" max="${todayIso}"></label>
      <p class="form-err" id="suErr" role="alert"></p>
      <button class="btn btn-primary btn-block" type="submit">הבא ←</button>
    </form>
    <div class="terms" id="terms"><input id="su-terms" type="checkbox" aria-label="אישור התנאים"> <button type="button" data-act="openTerms">הנך מסכים לתנאים וההגבלות שלנו.</button></div>
    ${authSocial()}
    <button class="link auth-foot" data-act="toLogin">כבר יש לי חשבון</button>
  </section>`,

  login: () => `<section class="screen auth">
    ${S.hist.length ? backBtn() : ''}
    <div class="auth-head"><span class="auth-avatar">${icon('user', 24, 1.5)}</span><h1>התחברות</h1></div>
    <form class="form" id="login" novalidate>
      <label class="field"><input id="li-email" name="email" type="email" dir="auto" placeholder="דוא”ל" aria-label="דוא״ל" autocomplete="email" value="${esc(saved.account?.email)}"></label>
      <label class="field"><input id="li-pass" name="password" type="password" placeholder="סיסמה" aria-label="סיסמה" autocomplete="current-password"><button type="button" class="eye" data-act="togglePass" aria-label="הצגת סיסמה">${icon('eye', 20)}</button></label>
      <p class="form-err" id="liErr" role="alert"></p>
      <button class="btn btn-primary btn-block" type="submit">כניסה ←</button>
    </form>
    ${authSocial()}
    <button class="link auth-foot" data-act="toSignup">אין לי חשבון, להרשמה</button>
  </section>`,

  verify: () => `<section class="screen auth">
    ${backBtn()}
    <div class="auth-head"><h1>החשבון כמעט מוכן</h1></div>
    <p class="verify-copy">אנא הזן את הקוד בן 6 הספרות שנשלח לכתובת הדוא"ל שלך לצורך אימות.<b dir="ltr">${esc(S.pendingEmail)}</b></p>
    <p class="demo-code">זו הדגמה ולא נשלח מייל. הקוד שלך: <b dir="ltr">${S.otp}</b></p>
    <div class="otp" role="group" aria-label="קוד אימות">
      ${[0, 1, 2, 3, 4, 5].map(i => `<input id="otp-${i}" inputmode="numeric" maxlength="1" aria-label="ספרה ${i + 1}" data-otp="${i}">`).join('')}
    </div>
    <p class="form-err" id="otpErr" role="alert"></p>
    <button class="btn btn-primary btn-block" id="verifyBtn" data-act="checkOtp" disabled>לאימות ←</button>
    <button class="link" id="resend" style="margin-top:18px" data-act="resend">לא קיבלתי קוד אימות</button>
  </section>`,

  verified: () => `<section class="screen success">
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" role="img" aria-label="הצלחה"><circle cx="65" cy="65" r="58" stroke="#2400A7" stroke-width="6"/><path d="m41 67 17 17 32-36" stroke="#3FE3DB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <h1>האימות עבר בהצלחה</h1></section>`,

  region: () => `<section class="screen region">
    ${saved.draftFrom ? `<button class="top-back light" data-act="cancelTrip" aria-label="ביטול טיול חדש">${icon('chevL', 22, 2)}</button>` : ''}
    <div class="brand">${logo(92)}<div class="wordmark">WE GO</div></div>
    <h1>באיזה אזור תרצה לטייל?</h1>
    <p class="greet">שלום ${esc(firstName())}, התחברת בהצלחה!</p>
    <div class="choices">
      <button class="btn btn-white" data-act="region" data-val="il">ארץ ישראל</button>
      <button class="btn btn-teal" data-act="region" data-val="abroad">חו”ל</button>
    </div></section>`,

  continent: () => wizard(`
    <div class="wiz-head"><h1>איזה מדינה?</h1><p>עכשיו נבחר את <b>היעד</b> האהוב עליך</p></div>
    <div class="grid-3" style="margin-top:44px">
      ${CONTINENTS.map(c => pick('continent', c.id, c.name, null, T().continent === c.id,
        `<span class="flag" style="width:100%;height:100%"><svg viewBox="0 0 30 30" aria-hidden="true">${FLAGS[c.flag]}</svg></span>`)).join('')}
    </div>`, !!T().continent),

  dest: () => wizard(`
    <div class="wiz-head"><h1>הארץ שלך?</h1><p>עכשיו נבחר את <b>האזור</b> האהוב עליך</p></div>
    <label class="search"><input id="q" placeholder="בחר אזור" aria-label="חיפוש אזור" value="${esc(S.query)}">${icon('search', 22)}</label>
    <div class="list" id="destList">${destRows(destsNow())}</div>`, !!T().code),

  budget: () => wizard(`
    <div class="wiz-head" style="margin-top:20px"><span style="color:var(--primary)">${icon('wallet', 42, 1.4)}</span>
      <h1 style="margin-top:8px">כמה תרצה להשקיע?</h1></div>
    <div class="dial" id="dial" role="slider" tabindex="0" aria-label="תקציב" aria-valuemin="200" aria-valuemax="10000" aria-valuenow="${T().budget}">
      <svg viewBox="0 0 324 324" aria-hidden="true">
        <defs><filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#2400A7" flood-opacity=".1"/></filter></defs>
        <circle cx="162" cy="162" r="160" fill="#fff" filter="url(#sh)"/>
        <circle cx="162" cy="162" r="102" fill="#fff" filter="url(#sh)"/>
        ${[...Array(8)].map((_, i) => { const a = (i * 45 + 22.5) * Math.PI / 180; return `<circle cx="${162 + 131 * Math.sin(a)}" cy="${162 - 131 * Math.cos(a)}" r="4" fill="#3FE3DB"/>`; }).join('')}
        <path id="dialArc" fill="none" stroke="#2400A7" stroke-width="44" stroke-linecap="round"/>
        <circle id="dialKnob" r="18" fill="#fff"/>
      </svg>
      <div class="dial-value" id="dialValue" dir="ltr">${money(T().budget)}</div>
    </div>
    <p class="dial-hint">גררו את העיגול כדי לשנות את התקציב</p>`),

  dates: () => {
    const d = city(), t = T();
    const body = S.dateTab === 'accordion'
      ? `<div class="acc"><button class="acc-head" data-act="dateField" data-val="dep" aria-expanded="${S.dateField === 'dep'}"><span>תאריך יציאה</span><b>${fmt(t.dep)}</b></button>${S.dateField === 'dep' ? calendarHtml('') : ''}</div>
         <div class="acc"><button class="acc-head" data-act="dateField" data-val="ret" aria-expanded="${S.dateField === 'ret'}"><span>תאריך חזרה</span><b>${fmt(t.ret)}</b></button>${S.dateField === 'ret' ? calendarHtml('') : ''}</div>`
      : calendarHtml('solo');
    return wizard(`
      <div class="place">${icon('pin', 18)} ${esc(d.city)}, ${esc(d.area)}</div>
      <div class="seg" role="tablist">
        <button role="tab" aria-selected="${S.dateTab === 'solo'}" class="${S.dateTab === 'solo' ? 'on' : ''}" data-act="dateTab" data-val="solo">תאריכים</button>
        <button role="tab" aria-selected="${S.dateTab === 'accordion'}" class="${S.dateTab === 'accordion' ? 'on' : ''}" data-act="dateTab" data-val="accordion">חודשים</button>
      </div>${body}`, !!(t.dep && t.ret));
  },

  pax: () => {
    const p = T().pax;
    const row = (k, t, sub) => `<div class="pax"><div><b>${t}</b>${sub ? `<small>${sub}</small>` : ''}</div>
      <div class="stepper">
        <button data-act="pax" data-val="${k}:-1" aria-label="הפחתה ${t}" ${p[k] === 0 || (k === 'adults' && p[k] === 1) ? 'disabled' : ''}>−</button>
        <span aria-live="polite">${p[k]}</span>
        <button data-act="pax" data-val="${k}:1" aria-label="הוספה ${t}" ${p[k] >= 9 ? 'disabled' : ''}>+</button>
      </div></div>`;
    return wizard(`
      <div class="wiz-head" style="margin-top:60px"><h1>תאריך מצוין!!!</h1><h1>מי יוצא איתנו?</h1></div>
      ${row('adults', 'מבוגרים', 'מגיל 15 ומעלה')}${row('kids', 'ילדים', '14-2')}${row('babies', 'תינוקות', 'מתחת לגיל 2')}${row('pets', 'חיות מחמד')}`);
  },

  activities: () => wizard(`
    <div class="wiz-head" style="margin-top:60px;margin-bottom:60px"><h1>מה בא לנו לעשות בחופש?</h1></div>
    <div class="grid-3" style="row-gap:36px">
      ${ACTIVITIES.map(([n, ic]) => pick('activity', n, n, ic, T().activities.includes(n))).join('')}
    </div>`, T().activities.length > 0),

  logistics: () => {
    const section = (k, title, opts, val, act) => `<div class="lg ${S.lgOpen === k ? 'open' : ''}">
      <button class="lg-head" data-act="lgOpen" data-val="${k}" aria-expanded="${S.lgOpen === k}"><span>${title}</span><span>${S.lgOpen === k || !val ? '' : esc(val)}</span></button>
      ${S.lgOpen === k ? `<div class="lg-opts">${opts.map(([n, ic]) => pick(act, n, n, ic, val === n)).join('')}</div>` : ''}
    </div>`;
    return wizard(`
      <div class="wiz-head" style="margin-top:60px"><h1 style="color:var(--ink)">כבר כמעט מסיימים</h1></div>
      ${section('stay', 'איפה תלונו?', STAYS, T().stay, 'stay')}
      ${section('move', 'איך נזוז ממקום למקום?', MOVES, T().move, 'move')}`, !!(T().stay && T().move));
  },

  airline: () => wizard(`
    <div class="wiz-head" style="margin-top:60px"><h1 style="color:var(--ink)">באיזה טיסה תרצה לטוס</h1></div>
    <label class="search" style="height:44px"><input style="font-size:13px" placeholder="בחר...." aria-label="חיפוש חברת תעופה" id="alq">${icon('search', 18)}</label>
    <div class="airlines">
      ${AIRLINES.map(a => `<button class="airline ${T().airline === a.id ? 'on' : ''}" data-act="airline" data-val="${a.id}" aria-pressed="${T().airline === a.id}" style="color:${a.color || 'inherit'}">
        ${a.img ? `<img src="${a.img}" alt="${a.id}">` : a.id}</button>`).join('')}
    </div>`, !!T().airline),

  loading: () => `<section class="screen loading" aria-busy="true">
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20 86A48 48 0 0 1 90 22" stroke="#2400A7"/><path d="m76 8 18 16-16 18" stroke="#2400A7"/>
      <path d="M110 44a48 48 0 0 1-70 64" stroke="#3FE3DB"/><path d="m54 122-18-16 16-18" stroke="#3FE3DB"/>
    </svg>
    <h1>מכינים לך מסלול</h1></section>`,

  home: () => `<section class="screen home">
    ${topbar()}${budgetCard()}
    <div class="quick">
      <button data-act="edit" data-val="dest">${icon('globe', 13)} שינוי יעד</button>
      <button data-act="edit" data-val="dates">${icon('cal', 13)} החלפת תאריכים</button>
      <button data-act="edit" data-val="budget">${icon('edit', 13)} עריכת תקציב</button>
    </div>
    <div class="tabs" role="tablist">
      ${visibleTabs().map(([id, n, ic]) => `<button role="tab" aria-selected="${T().tab === id}" class="${T().tab === id ? 'on' : ''}" data-act="tab" data-val="${id}">${icon(ic, 13)} ${n}</button>`).join('')}
    </div>
    ${tabContent()}
  </section>${nav('home')}`,

  list: () => {
    const kind = S.arg;
    let items = { flights: () => flights(S.flightDir), attractions: attractionsRanked, hotels, cars }[kind]();
    if (S.listBudget) items = items.filter(fitsBudget);
    if (S.listSort === 'price') items = [...items].sort((a, b) => priceOf(a, 0) - priceOf(b, 0));
    return `<section class="screen home list-screen">
      ${subhead(LIST_TITLES[kind])}
      ${kind === 'flights' ? `<div class="seg" style="margin:0 0 14px"><button class="${S.flightDir === 'out' ? 'on' : ''}" data-act="flightDir" data-val="out">הלוך</button><button class="${S.flightDir === 'ret' ? 'on' : ''}" data-act="flightDir" data-val="ret">חזור</button></div>` : ''}
      <div class="filters">
        <button class="chip ${S.listSort === 'price' ? 'on' : ''}" data-act="listSort">${icon('sort', 14)} ${S.listSort === 'price' ? 'מהזול ליקר' : 'מומלצים'}</button>
        <button class="chip ${S.listBudget ? 'on' : ''}" data-act="listBudget" aria-pressed="${S.listBudget}">${icon('wallet', 14)} מתאים לתקציב</button>
      </div>
      ${items.length ? `<div class="${kind === 'cars' ? 'cars' : 'cards'}">${items.map(anyCard).join('')}</div>` : '<p class="empty">אין כאן משהו שמתאים לתקציב שנשאר. אפשר לכבות את הסינון או לעדכן את התקציב.</p>'}
    </section>`;
  },

  ticket: () => {
    const f = lookup(S.arg), t = T();
    const date = (f.dir === 'out' ? t.dep : t.ret) || todayIso;
    const when = new Date(`${date}T12:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const e = entryOf(f.id);
    return `<section class="screen ticket-screen">
      ${subhead('כרטיס הטיסה שלך')}
      <div class="ticket">
        <div class="tk-top">${airlineMark(f.airline, true)}<span>${when}</span></div>
        <div class="tk-times">
          <div><b>${f.dep}</b><small>${f.fromCode}</small></div>
          <div class="tk-mid">${icon('plane', 24)}<small>${f.dur}</small></div>
          <div><b>${f.arr}</b><small>${f.toCode}</small></div>
        </div>
        <div class="tk-specs">
          <div><span>Economy</span><b>Class</b></div><div><span>8</span><b>Gate</b></div>
          <div><span>Y1</span><b>Terminal</b></div><div><span>${f.no}</span><b>Flight</b></div>
        </div>
        <div class="tk-pass">
          <div class="tk-seat"><span>${seatList()}</span>${icon('seat', 20)}</div>
          <p>${esc(firstName())}<br>${seatsNeeded()} נוסעים · <bdi>${money(priceOf(f))}</bdi></p>
          <span class="who-mark">${logo(20)}</span>
        </div>
        ${barcode(f.no.charCodeAt(2) + f.no.length)}
        <div class="tk-foot">${icon('plane', 20)}<span>${esc(f.airline)}</span><span aria-hidden="true">✈</span></div>
      </div>
      ${e?.paid ? '<p class="paid-note">הכרטיס שולם ✓</p>' : `<button class="link center" data-act="toggleItem" data-val="${f.id}">${e ? 'הסרה מהמסלול' : 'הוספה למסלול בלי לשלם עכשיו'}</button>`}
      <div class="two-btn">
        ${e?.paid ? '<button class="fill" data-act="goTrips">למסלול שלי</button>' : `<button class="fill" data-act="payItem" data-val="${f.id}">מעבר לתשלום</button>`}
        <button data-act="moreFlights">לעוד כרטיסים</button>
      </div></section>`;
  },

  attraction: () => {
    const a = lookup(S.arg), e = entryOf(a.id);
    return `<section class="screen detail attraction-screen">
      <div class="detail-hero at-hero">
        ${attractionPhoto(a, S.heroIdx)}
        <button class="detail-back" data-act="back" aria-label="חזרה">${icon('chevL', 20)}</button>
        <div class="hero-title">${esc(a.en)}<small>${esc(a.place)}</small></div>
        <div class="hero-price">${icon('wallet', 26, 1.6)}<span>$ ${a.unit.toLocaleString('en-US')}</span></div>
      </div>
      <div class="detail-body">
        <h2>למה נבקר שם?</h2>
        <p>${esc(a.about)}</p>
        <button class="link map-link" data-act="openMap" data-val="${a.id}">${icon('pin', 16)} מיקום על המפה</button>
        ${a.pics && a.pics.length > 1 ? `<div class="thumbs three">${a.pics.slice(1).map((src, i) => `<button data-act="hero" data-val="${i + 1}" aria-label="תמונה ${i + 2}"><img src="${src}" alt=""></button>`).join('')}</div>` : ''}
        <button class="btn btn-primary btn-block" data-act="toggleBack" data-val="${a.id}" ${e?.paid ? 'disabled' : ''}>${e?.paid ? 'שולם ✓' : e ? 'הסרה מהמסלול' : 'להוספה למסלול'}</button>
      </div></section>`;
  },

  hotel: () => {
    const h = lookup(S.arg), e = entryOf(h.id);
    return `<section class="screen detail">
      <div class="detail-hero">
        <button class="detail-back" data-act="back" aria-label="חזרה">${icon('chevL', 20)}</button>
        <img src="${h.pics[S.heroIdx]}" alt="חדר ב${esc(h.title)}">
      </div>
      <div class="detail-body">
        <h2>${esc(h.title)}</h2>
        <p class="price-line"><bdi>${money(h.unit)}</bdi> ללילה · ${nights()} לילות · סה"כ <bdi>${money(priceOf(h))}</bdi></p>
        <h3 dir="ltr" class="en-h">Room Specifications for rooms</h3>
        <p dir="ltr" class="en-p">The elegant luxury bedrooms in this gallery showcase custom interior designs &amp; decorating ideas. View pictures and find your perfect luxury bedroom design.</p>
        <div class="thumbs" dir="ltr">${h.pics.map((src, i) => `<button class="${i === S.heroIdx ? 'on' : ''}" data-act="hero" data-val="${i}" aria-label="תמונה ${i + 1}"><img src="${src}" alt=""></button>`).join('')}</div>
        <button class="btn btn-primary btn-block" data-act="toggleBack" data-val="${h.id}" ${e?.paid ? 'disabled' : ''}>${e?.paid ? 'שולם ✓' : e ? 'הסרה מהמסלול' : 'הוספה למסלול'}</button>
      </div></section>`;
  },

  car: () => {
    const c = lookup(S.arg), units = RATES.map(([, , m]) => c.unit * m);
    return `<section class="screen car-screen">
      ${subhead('')}
      <h1>${esc(c.title)}</h1>
      <div class="rating"><span>(230 Reviews)</span> 4.9 ${icon('star', 15)}</div>
      <img class="car-hero" src="assets/car.png" alt="${esc(c.title)}">
      <div class="car-specs" dir="rtl">
        <div>כוח<b>429 hp @ 6,100 rpm</b></div><div>מהירות מרבית<b>280 km/h</b></div><div>תאוצה<b>4.9 sec 0-60 mph</b></div>
      </div>
      <div class="rates" role="radiogroup" aria-label="סוג שכירות">${RATES.map(([t], i) => `<button class="rate ${i === S.carRate ? 'on' : ''}" role="radio" aria-checked="${i === S.carRate}" data-act="carRate" data-val="${i}"><b>${t}</b><small>מתאים לנסיעות</small><span>${money(units[i])}</span></button>`).join('')}</div>
      <button class="addr" data-act="carMap" data-val="${c.id}">${icon('pin', 20)} רחוב CLAPTON COMMON ${esc(city().city)}, ${esc(city().area)}</button>
      <div class="two-btn">
        <button class="fill" data-act="carMap" data-val="${c.id}">להשכרה</button>
        <button data-act="moreCars">לעוד רכבים</button>
      </div></section>`;
  },

  carMap: () => {
    const c = lookup(S.arg), e = entryOf(c.id);
    return `<section class="screen map-screen">
      ${mapArt}
      <button class="detail-back" data-act="back" aria-label="חזרה">${icon('chevL', 20)}</button>
      <div class="map-pin">${stroke(P.pin, 44, 1.8)}</div>
      <div class="map-card">
        <div class="map-card-top"><h2>${esc(c.title)}</h2><img src="assets/car.png" alt=""></div>
        <div class="map-line"><span>דיזל</span><span>5 מושבים</span><span>אוטומטי</span></div>
        <div class="map-price"><span><b>${money(Math.round(c.unit / 5))}</b> לשעה</span><span><b>${money(c.unit)}</b> ליום</span></div>
        <button class="btn btn-primary" data-act="rentCar" data-val="${c.id}" ${e?.paid ? 'disabled' : ''}>${e?.paid ? 'שולם ✓' : e ? 'הסרה מהמסלול' : 'להשכרה עכשיו'}</button>
      </div></section>`;
  },

  placeMap: () => {
    const a = lookup(S.arg), e = entryOf(a.id);
    return `<section class="screen map-screen">
      ${mapArt}
      <button class="detail-back" data-act="back" aria-label="חזרה">${icon('chevL', 20)}</button>
      <div class="map-pin">${stroke(P.pin, 44, 1.8)}</div>
      <div class="map-card">
        <h2>${esc(a.en)}</h2>
        <div class="map-line"><span dir="ltr">${esc(a.place)}</span><span>שעות ביקור: <bdi>${a.hours}</bdi></span></div>
        <button class="btn btn-primary" data-act="toggleBack" data-val="${a.id}" ${e?.paid ? 'disabled' : ''}>${e?.paid ? 'שולם ✓' : e ? 'הסרה מהמסלול' : 'להוספה למסלול'}</button>
      </div></section>`;
  },

  search: () => `<section class="screen home">
    ${subheadPlain('חיפוש')}
    <label class="search"><input id="searchQ" placeholder="מה בא לך למצוא?" aria-label="חיפוש" value="${esc(S.searchQ)}">${icon('search', 22)}</label>
    <div class="filters scroll">
      ${[['all', 'הכל'], ['dest', 'יעדים'], ['flight', 'טיסות'], ['attraction', 'אטרקציות'], ['hotel', 'מלונות'], ['car', 'רכבים']].filter(([k]) => k !== 'flight' || !T().domestic).map(([k, n]) => `<button class="chip ${S.searchKind === k ? 'on' : ''}" data-act="searchKind" data-val="${k}">${n}</button>`).join('')}
    </div>
    <div id="results">${searchResults()}</div>
  </section>${nav('search')}`,

  trips: () => {
    const t = T(), items = planItems(), due = unpaid().reduce((a, x) => a + priceOf(x.item), 0);
    const tripCard = o => { const d = ALL_DESTS.find(x => x.code === o.code); return `<div class="card plan-row"><span class="plan-ic">${flag(d?.flag)}</span>
      <div><b>${esc(d?.city)}, ${esc(d?.area)}</b><small>${fmt(o.dep)} - ${fmt(o.ret)}</small></div>
      <button data-act="switchTrip" data-val="${o.id}">מעבר לטיול</button></div>`; };
    return `<section class="screen home">
      ${topbar()}
      ${subheadPlain('הטיולים שלי')}
      ${budgetCard()}
      <div class="trip-facts">
        <span>${icon('cal', 14)} <bdi>${fmt(t.dep)} - ${fmt(t.ret)}</bdi></span>
        <span>${icon('user', 14)} ${travelers()} נוסעים</span>
        ${t.pax.pets ? `<span>${icon('heart', 14)} ${t.pax.pets} חיות</span>` : ''}
      </div>
      <h2 class="sec-title">המסלול שלי</h2>
      <div class="cards">
        ${items.length ? items.map(({ entry, item }) => `<div class="card plan-row"><button class="plan-open" data-act="open" data-val="${item.id}"><span class="plan-ic">${icon(item.icon, 20)}</span>
          <div><b>${esc(item.title)}</b><small>${esc(subOf(item))}</small></div></button>
          <span class="price">${money(priceOf(item))}</span>
          ${entry.paid ? '<span class="paid-tag">שולם</span>' : `<button data-act="planRemove" data-val="${item.id}">הסרה</button>`}</div>`).join('')
          : '<p class="empty">עדיין לא הוספת כלום למסלול. אפשר להתחיל בדף הבית.</p>'}
      </div>
      ${due ? `<button class="btn btn-primary btn-block" style="margin-top:16px;flex:none" data-act="goCheckout">לתשלום <bdi>${money(due)}</bdi></button>` : ''}
      <h2 class="sec-title">טיולים נוספים</h2>
      <div class="cards">${saved.trips.map(tripCard).join('') || '<p class="empty small">אין טיולים נוספים עדיין</p>'}</div>
      <button class="btn btn-outline btn-block" style="margin-top:14px;flex:none" data-act="newTrip">${icon('plus', 18)} טיול חדש</button>
    </section>${nav('trips')}`;
  },

  checkout: () => {
    const rows = unpaid(), total = rows.reduce((a, x) => a + priceOf(x.item), 0);
    return `<section class="screen home ticket-like">
      ${subhead('תשלום')}
      <div class="card receipt">
        ${rows.map(({ item }) => `<div class="rc-row"><span>${esc(item.title)}<small>${esc(subOf(item))}</small></span><bdi>${money(priceOf(item))}</bdi></div>`).join('') || '<p class="empty">אין מה לשלם</p>'}
        <div class="rc-total"><span>סה"כ לתשלום</span><bdi>${money(total)}</bdi></div>
      </div>
      <p class="demo-code">זו הדגמה: לא צריך פרטי אשראי ולא מתבצע חיוב אמיתי.</p>
      <button class="btn btn-primary btn-block" style="margin-top:auto;flex:none" data-act="payAll" ${rows.length ? '' : 'disabled'}>אישור תשלום <bdi>${money(total)}</bdi></button>
    </section>`;
  },

  paid: () => `<section class="screen success">
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" role="img" aria-label="הצלחה"><circle cx="65" cy="65" r="58" stroke="#2400A7" stroke-width="6"/><path d="m41 67 17 17 32-36" stroke="#3FE3DB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <h1>התשלום אושר, נסיעה טובה!</h1>
    <button class="btn btn-primary" style="padding:0 34px" data-act="goTrips">למסלול שלי</button></section>`,

  notif: () => {
    const list = notifications();
    return `<section class="screen home ticket-like">
      ${subhead('התראות')}
      <div class="cards">${list.map(([ic, t, s]) => `<div class="card plan-row"><span class="plan-ic">${icon(ic, 20)}</span><div><b>${esc(t)}</b><small>${esc(s)}</small></div></div>`).join('') || '<p class="empty">ההתראות כבויות. אפשר להדליק אותן בפרופיל.</p>'}</div>
    </section>`;
  },

  profile: () => {
    const a = saved.account || {};
    const toggle = (k, label) => `<div class="card set-row"><span>${label}</span><button class="switch ${saved.prefs[k] ? 'on' : ''}" role="switch" aria-checked="${saved.prefs[k]}" aria-label="${label}" data-act="pref" data-val="${k}"><i></i></button></div>`;
    return `<section class="screen home">
      ${subheadPlain('פרופיל')}
      <div class="profile-head">
        <label class="avatar-pick" for="pf-photo" aria-label="החלפת תמונת פרופיל">
          <span class="avatar">${a.avatar ? `<img class="avatar-img" src="${a.avatar}" alt="תמונת הפרופיל שלך">` : esc(firstName().slice(0, 1))}</span>
          <span class="avatar-edit">${icon('edit', 14, 2)}</span>
        </label>
        <input id="pf-photo" class="visually-hidden" type="file" accept="image/*">
        <div class="avatar-actions">
          <label class="link" for="pf-photo">${a.avatar ? 'החלפת תמונה' : 'הוספת תמונה'}</label>
          ${a.avatar ? '<button class="link" data-act="removePhoto">הסרה</button>' : ''}
        </div>
        <b>${esc(firstName())}</b><small dir="ltr">${esc(a.email)}</small></div>
      <form class="form tight" id="profile" novalidate>
        <label class="field"><span class="field-label">שם</span><input id="pf-name" name="name" aria-label="שם" value="${esc(a.name)}"></label>
        <label class="field"><span class="field-label">דוא"ל</span><input id="pf-email" name="email" type="email" dir="auto" aria-label="דוא״ל" value="${esc(a.email)}"></label>
        <p class="form-err" id="pfErr" role="alert"></p>
        <button class="btn btn-outline btn-block" type="submit">שמירת שינויים</button>
      </form>
      <h2 class="sec-title">הגדרות</h2>
      <div class="cards">${toggle('notifications', 'התראות')}${toggle('budgetAlerts', 'התראה לפני חריגה מהתקציב')}</div>
      <h2 class="sec-title">חשבון</h2>
      <div class="cards">
        <button class="card set-row" data-act="goTrips"><span>הטיולים שלי</span><span class="muted">${saved.trips.length + 1}</span></button>
        <button class="card set-row" data-act="askLogout"><span>התנתקות</span>${icon('logout', 20)}</button>
        <button class="card set-row danger" data-act="askWipe"><span>מחיקת החשבון וכל הנתונים</span>${icon('trash', 20)}</button>
      </div>
    </section>${nav('profile')}`;
  },
};

function searchResults() {
  const q = S.searchQ.trim().toLowerCase(), k = S.searchKind;
  const match = text => !q || text.toLowerCase().includes(q);
  const dests = k === 'all' || k === 'dest'
    ? ALL_DESTS.filter(d => (q || k === 'dest') && d.code !== T().code && (match(d.city) || match(d.area) || match(d.en))).map(d => `<button class="card plan-row" data-act="switchDest" data-val="${d.code}"><span class="plan-ic">${flag(d.flag)}</span><div><b>${esc(d.city)}, ${esc(d.area)}</b><small>לשנות יעד לטיול הזה</small></div></button>`)
    : [];
  const items = k === 'dest' ? [] : catalog()
    .filter(i => (k === 'all' || i.kind === k) && match(`${i.title} ${i.en || ''} ${i.airline || ''} ${i.label || ''}`))
    .filter(i => q || !(i.kind === 'flight' && i.dir === 'ret'));
  const rows = items.map(i => `<button class="card plan-row" data-act="open" data-val="${i.id}"><span class="plan-ic">${icon(i.icon, 20)}</span><div><b>${esc(i.title)}</b><small>${esc(i.kind === 'flight' ? `${i.airline}, ${i.dep}` : i.kind === 'attraction' ? i.en : i.kind === 'hotel' ? `${i.stars} כוכבים` : `$${i.unit}/Day`)}</small></div><span class="price">${money(priceOf(i, 0))}</span></button>`);
  const all = [...dests, ...rows];
  return all.length ? `<div class="cards">${all.join('')}</div>` : `<p class="empty">לא מצאנו תוצאות${q ? ` עבור "${esc(S.searchQ)}"` : ''}</p>`;
}

/* ---------- Actions ---------- */
const openItem = id => {
  const i = lookup(id);
  if (!i) return;
  S.carRate = entryOf(id)?.rate ?? 0;
  go({ flight: 'ticket', attraction: 'attraction', hotel: 'hotel', car: 'car' }[i.kind], id);
};
const leaveRoot = screen => go(screen, null, { root: true });
const actions = {
  back,
  closeOverlay() { S.sheet = null; S.drawer = false; refreshOverlays(); },
  endSplash() { route(); },

  obNext() { if (S.ob < 2) { S.ob++; S.dir = 1; lastKey = ''; render(); } else actions.obDone(); },
  obBack() { S.ob--; S.dir = -1; lastKey = ''; render(); },
  obDone() { saved.onboarded = true; persist(); leaveRoot('region'); },
  toLogin() { go('login'); },
  toSignup() { if (S.hist.length) back(); else leaveRoot('signup'); },
  openTerms() { S.sheet = { title: 'תנאים והגבלות', text: 'זו אפליקציית הדגמה. כל הנתונים נשמרים רק במכשיר שלך, לא מתבצעים תשלומים אמיתיים ולא נשלחים מיילים.' }; refreshOverlays(); },
  togglePass(_, el) { const inp = el.parentElement.querySelector('input'); inp.type = inp.type === 'password' ? 'text' : 'password'; },
  social() {
    if (!saved.account) login({ name: 'מטייל', email: 'demo@wego.app', pass: null });
    else { saved.loggedIn = true; persist(); }
    toast('התחברת');
    route();
  },
  checkOtp() {
    const code = $$('[data-otp]').map(b => b.value).join('');
    if (code !== S.otp) {
      $('#otpErr').textContent = 'הקוד לא נכון. בדקו את הספרות ונסו שוב.';
      const o = $('.otp');
      o.classList.remove('shake');
      void o.offsetWidth;
      o.classList.add('shake');
      return;
    }
    login(S.pendingAccount);
    leaveRoot('verified');
  },
  resend() {
    if (Date.now() < S.resendAt) return;
    S.otp = String(100000 + Math.floor(Math.random() * 900000));
    S.resendAt = Date.now() + 30000;
    render();
    toast('שלחנו קוד חדש');
  },

  next: stepNext,
  cancelTrip() { saved.trip = saved.draftFrom; saved.draftFrom = null; persist(); leaveRoot('trips'); },
  region(v) {
    const t = T();
    t.domestic = v === 'il';
    t.continent = t.domestic ? 'israel' : null;
    t.code = null;
    S.query = '';
    persist();
    go(t.domestic ? 'dest' : 'continent');
  },
  continent(v) {
    const t = T();
    t.continent = v;
    t.code = null;
    t.domestic = v === 'israel';
    S.query = '';
    persist();
    render();
  },
  dest(v) { T().code = v; persist(); render(); },
  dateTab(v) { S.dateTab = v; render(); },
  dateField(v) { S.dateField = v; render(); },
  calMove(v) { const d = new Date(S.calY, S.calM + Number(v), 1); S.calY = d.getFullYear(); S.calM = d.getMonth(); render(); },
  day(v) {
    const t = T();
    const wantsEnd = S.dateTab === 'accordion' ? S.dateField === 'ret' : !!(t.dep && !t.ret);
    if (wantsEnd && t.dep && v > t.dep) t.ret = v;
    else { t.dep = v; t.ret = null; S.dateField = 'ret'; }
    persist();
    render();
  },
  pax(v) { const [k, d] = v.split(':'); T().pax[k] = Math.max(0, T().pax[k] + Number(d)); persist(); render(); },
  activity(v) { const a = T().activities, i = a.indexOf(v); if (i < 0) a.push(v); else a.splice(i, 1); persist(); render(); },
  lgOpen(v) { S.lgOpen = v; render(); },
  stay(v) { T().stay = v; S.lgOpen = 'move'; persist(); render(); },
  move(v) { T().move = v; persist(); render(); },
  airline(v) { T().airline = v; persist(); render(); },

  tab(v) { T().tab = v; persist(); render(); },
  goHome() { if (!T().done) return leaveRoot('region'); leaveRoot('home'); },
  goSearch() { leaveRoot('search'); },
  goTrips() { leaveRoot('trips'); },
  goProfile() { leaveRoot('profile'); },
  openDrawer() { S.drawer = true; refreshOverlays(); },
  openNotif() { saved.seen = notifications().length; persist(); go('notif'); },
  edit(v) {
    if (v === 'dest' && T().plan.length) return askConfirm('לשנות יעד?', 'שינוי יעד ינקה את הפריטים שעדיין לא שולמו מהמסלול.', 'כן, לשנות', 'startEditDest');
    if (v === 'dest') return actions.startEditDest();
    S.editUntil = v;
    if (v === 'dates') S.dateField = 'dep';
    go(v);
  },
  startEditDest() {
    const t = T();
    S.sheet = null;
    t.plan = t.plan.filter(p => p.paid);
    S.query = '';
    S.editUntil = 'dest';
    persist();
    go(t.domestic ? 'dest' : 'continent');
  },
  switchDest(v) {
    const d = ALL_DESTS.find(x => x.code === v);
    askConfirm(`לעבור ל${d.city}?`, 'הפריטים שעדיין לא שולמו יימחקו מהמסלול.', 'כן, לעבור', 'confirmDest', v);
  },
  confirmDest(v) {
    const t = T(), d = ALL_DESTS.find(x => x.code === v);
    S.sheet = null;
    t.plan = t.plan.filter(p => p.paid);
    t.code = v;
    t.continent = d.continent;
    t.domestic = d.continent === 'israel';
    if (t.domestic && t.tab === 'flights') t.tab = 'attractions';
    persist();
    toast(`היעד עודכן ל${d.city}`);
    leaveRoot('home');
  },
  open: openItem,
  openList(v) { go('list', v); },
  openMap(v) { go('placeMap', v); },
  hero(v) { S.heroIdx = Number(v); render(); },
  listSort() { S.listSort = S.listSort === 'price' ? 'recommended' : 'price'; render(); },
  listBudget() { S.listBudget = !S.listBudget; render(); },
  flightDir(v) { S.flightDir = v; render(); },
  moreFlights() { S.flightDir = lookup(S.arg).dir; go('list', 'flights'); },
  moreCars() { go('list', 'cars'); },
  toggleItem(v) { addToPlan(lookup(v)); render(); },
  toggleBack(v) { addToPlan(lookup(v)); if (S.hist.length) back(); else render(); },
  payItem(v) { if (!inPlan(v)) addToPlan(lookup(v)); go('checkout'); },
  carRate(v) { S.carRate = Number(v); const e = entryOf(S.arg); if (e && !e.paid) { e.rate = S.carRate; persist(); } render(); },
  carMap(v) { go('carMap', v); },
  carToggle(v) { addToPlan(lookup(v)); render(); },
  rentCar(v) {
    addToPlan(lookup(v), S.carRate);
    S.hist = S.hist.filter(h => !['car', 'carMap'].includes(h.screen));
    if (S.hist.length) back(); else leaveRoot('home');
  },
  planRemove(v) { T().plan = T().plan.filter(p => p.id !== v); persist(); toast('הוסר מהמסלול'); render(); },
  goCheckout() { go('checkout'); },
  payAll() {
    unpaid().forEach(x => { x.entry.paid = true; });
    persist();
    leaveRoot('paid');
  },
  newTrip() {
    S.drawer = false;
    if (T().done) saved.draftFrom = T();
    saved.trip = blankTrip();
    Object.assign(S, { lgOpen: 'stay', dateField: 'dep', dateTab: 'accordion', calY: now.getFullYear(), calM: now.getMonth(), query: '' });
    persist();
    leaveRoot('region');
  },
  switchTrip(v) {
    const i = saved.trips.findIndex(o => o.id === v);
    if (i < 0) return;
    const other = saved.trips[i];
    saved.trips[i] = T();
    saved.trip = other;
    persist();
    toast(`עברת לטיול ל${city().city}`);
    leaveRoot('home');
  },
  searchKind(v) { S.searchKind = v; render(); },
  pref(v) { saved.prefs[v] = !saved.prefs[v]; persist(); render(); },
  removePhoto() { delete saved.account.avatar; persist(); render(); toast('התמונה הוסרה'); },
  askLogout() { S.drawer = false; askConfirm('להתנתק?', 'הטיולים שלך יישארו שמורים במכשיר הזה.', 'התנתקות', 'logout'); },
  logout() { S.sheet = null; saved.loggedIn = false; persist(); leaveRoot('login'); },
  askWipe() { askConfirm('למחוק הכל?', 'החשבון, הטיולים והמסלולים יימחקו מהמכשיר הזה. אי אפשר לבטל את זה.', 'מחיקה', 'wipe', '', true); },
  wipe() {
    S.sheet = null;
    try { localStorage.removeItem(STORE); } catch (e) { /* nothing stored */ }
    Object.assign(saved, { account: null, loggedIn: false, onboarded: false, trip: blankTrip(), trips: [], draftFrom: null, seen: 0, prefs: { notifications: true, budgetAlerts: true } });
    S.ob = 0;
    leaveRoot('signup');
  },
};

/* ---------- Per-screen behaviour ---------- */
const fieldError = (input, bad) => input.closest('.field').classList.toggle('invalid', bad);
// Center-crops a photo to a small square so it fits in browser storage.
async function squarePhoto(file, size = 256) {
  const bitmap = await createImageBitmap(file);
  const side = Math.min(bitmap.width, bitmap.height);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  canvas.getContext('2d').drawImage(bitmap, (bitmap.width - side) / 2, (bitmap.height - side) / 2, side, side, 0, 0, size, size);
  bitmap.close();
  return canvas.toDataURL('image/jpeg', 0.85);
}
const AFTER = {
  splash() { timer = setTimeout(route, 1800); },
  verified() { timer = setTimeout(route, 1400); },
  loading() { timer = setTimeout(() => leaveRoot('home'), 2200); },

  signup() {
    $('#signup').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target.elements, name = f.name.value.trim(), email = f.email.value.trim();
      const checks = [[f.name, name.length >= 2, 'כתבו שם משתמש'], [f.email, /^\S+@\S+\.\S+$/.test(email), 'כתובת הדוא"ל לא תקינה'], [f.password, f.password.value.length >= 4, 'הסיסמה צריכה לפחות 4 תווים'], [f.birth, !!f.birth.value, 'בחרו תאריך לידה']];
      let msg = '';
      checks.forEach(([inp, ok, m]) => { fieldError(inp, !ok); if (!ok && !msg) msg = m; });
      const terms = $('#su-terms').checked;
      $('#terms').classList.toggle('invalid', !terms);
      if (!msg && !terms) msg = 'צריך לאשר את התנאים';
      $('#suErr').textContent = msg;
      if (msg) return;
      S.pendingEmail = email;
      S.pendingAccount = { name, email, pass: hash(f.password.value), birth: f.birth.value };
      S.otp = String(100000 + Math.floor(Math.random() * 900000));
      S.resendAt = Date.now() + 30000;
      go('verify');
    });
  },

  login() {
    $('#login').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target.elements, a = saved.account;
      if (!a || a.email.toLowerCase() !== f.email.value.trim().toLowerCase()) { fieldError(f.email, true); $('#liErr').textContent = 'לא מצאנו חשבון עם הדוא"ל הזה במכשיר.'; return; }
      fieldError(f.email, false);
      if (a.pass && a.pass !== hash(f.password.value)) { fieldError(f.password, true); $('#liErr').textContent = 'הסיסמה לא נכונה.'; return; }
      saved.loggedIn = true;
      persist();
      route();
    });
  },

  verify() {
    const boxes = $$('[data-otp]'), btn = $('#verifyBtn');
    const sync = () => { btn.disabled = !boxes.every(b => b.value); if (!btn.disabled) actions.checkOtp(); };
    boxes[0].focus();
    boxes.forEach((b, i) => {
      b.addEventListener('input', () => {
        b.value = b.value.replace(/\D/g, '').slice(0, 1);
        $('#otpErr').textContent = '';
        if (b.value && boxes[i + 1]) boxes[i + 1].focus();
        sync();
      });
      b.addEventListener('keydown', e => { if (e.key === 'Backspace' && !b.value && boxes[i - 1]) boxes[i - 1].focus(); });
      b.addEventListener('paste', e => {
        e.preventDefault();
        const digits = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
        [...digits].forEach((c, n) => { if (boxes[n]) boxes[n].value = c; });
        boxes[Math.min(digits.length, 5)].focus();
        sync();
      });
    });
    const label = $('#resend');
    const tick = () => {
      const left = Math.ceil((S.resendAt - Date.now()) / 1000);
      label.disabled = left > 0;
      label.textContent = left > 0 ? `אפשר לשלוח קוד חדש בעוד ${left} שניות` : 'לא קיבלתי קוד אימות';
      if (left <= 0) clearInterval(resendTick);
    };
    clearInterval(resendTick);
    resendTick = setInterval(tick, 1000);
    tick();
  },

  dest() {
    const q = $('#q');
    q.addEventListener('input', () => { S.query = q.value; $('#destList').innerHTML = destRows(destsNow()); });
  },

  airline() {
    const q = $('#alq');
    q.addEventListener('input', () => {
      const t = q.value.trim().toLowerCase();
      $$('.airline').forEach(b => { b.hidden = !!t && !b.dataset.val.toLowerCase().includes(t); });
    });
  },

  budget() {
    const MIN = 200, MAX = 10000, STEP = 50, CX = 162, CY = 162, R = 138;
    const dial = $('#dial'), arc = $('#dialArc'), knob = $('#dialKnob'), label = $('#dialValue');
    const pt = deg => { const a = deg * Math.PI / 180; return [CX + R * Math.sin(a), CY - R * Math.cos(a)]; };
    const paint = () => {
      // The start of the arc stays put; only the knob's end moves, so the arc grows with the budget.
      const f = (T().budget - MIN) / (MAX - MIN), start = -20, end = 30 + f * 300;
      const [x1, y1] = pt(start), [x2, y2] = pt(end);
      arc.setAttribute('d', `M${x1} ${y1}A${R} ${R} 0 ${end - start > 180 ? 1 : 0} 1 ${x2} ${y2}`);
      knob.setAttribute('cx', x2);
      knob.setAttribute('cy', y2);
      label.textContent = money(T().budget);
      dial.setAttribute('aria-valuenow', T().budget);
      dial.setAttribute('aria-valuetext', money(T().budget));
    };
    const set = v => { T().budget = Math.min(MAX, Math.max(MIN, Math.round(v / STEP) * STEP)); paint(); persist(); };
    const fromEvent = e => {
      const b = dial.getBoundingClientRect();
      let deg = Math.atan2(e.clientX - (b.left + b.width / 2), -(e.clientY - (b.top + b.height / 2))) * 180 / Math.PI;
      if (deg < 0) deg += 360;
      set(MIN + Math.min(1, Math.max(0, (deg - 30) / 300)) * (MAX - MIN));
    };
    dial.addEventListener('pointerdown', e => { dial.setPointerCapture(e.pointerId); fromEvent(e); });
    dial.addEventListener('pointermove', e => { if (dial.hasPointerCapture(e.pointerId)) fromEvent(e); });
    dial.addEventListener('keydown', e => {
      const d = { ArrowUp: STEP, ArrowRight: STEP, ArrowDown: -STEP, ArrowLeft: -STEP, PageUp: 500, PageDown: -500 }[e.key];
      if (d) { e.preventDefault(); set(T().budget + d); }
    });
    paint();
  },

  search() {
    const q = $('#searchQ');
    q.addEventListener('input', () => { S.searchQ = q.value; $('#results').innerHTML = searchResults(); });
  },

  profile() {
    $('#pf-photo').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        if (!file.type.startsWith('image/')) throw new Error('not an image');
        saved.account.avatar = await squarePhoto(file);
        persist();
        render();
        toast('התמונה עודכנה');
      } catch (err) {
        toast('לא הצלחנו לפתוח את הקובץ. נסו תמונה אחרת.');
      }
    });
    $('#profile').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target.elements, name = f.name.value.trim(), email = f.email.value.trim();
      const okName = name.length >= 2, okMail = /^\S+@\S+\.\S+$/.test(email);
      fieldError(f.name, !okName);
      fieldError(f.email, !okMail);
      $('#pfErr').textContent = okName && okMail ? '' : 'בדקו את השם והדוא"ל';
      if (!okName || !okMail) return;
      Object.assign(saved.account, { name, email });
      persist();
      render();
      toast('השינויים נשמרו');
    });
  },
};

/* ---------- Bootstrap ---------- */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  actions[el.dataset.act]?.(el.dataset.val, el);
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (S.sheet || S.drawer) actions.closeOverlay();
  else if (S.hist.length) back();
});
function fit() {
  const s = window.innerWidth <= 500 ? 1 : Math.min(1, (window.innerHeight - 24) / 874, (window.innerWidth - 24) / 402);
  document.documentElement.style.setProperty('--scale', s);
}
window.addEventListener('resize', fit);
fit();
restore();

// Review link for a single screen with sample data: index.html#demo-home, #demo-list_hotels
if (location.hash.startsWith('#demo-')) {
  const [screen, arg] = location.hash.slice(6).split('_');
  const y = now.getFullYear() + 1;
  Object.assign(saved, { account: { name: 'יואב', email: 'name@example.com', pass: null }, loggedIn: true, onboarded: true });
  Object.assign(T(), { done: true, continent: 'europe', code: 'LON', dep: iso(y, 0, 16), ret: iso(y, 0, 19), budget: 1680, stay: 'מלון', airline: 'EL AL', activities: ['אטרקציות'] });
  S.calY = y;
  S.calM = 0;
  const defaults = { ticket: 'fl-out-EL AL', attraction: 'at-LON-0', hotel: 'ho-LON-0', car: 'car-s500', carMap: 'car-s500', placeMap: 'at-LON-0', list: 'flights' };
  if (screen === 'home' && arg) T().tab = arg;
  if (VIEWS[screen]) { S.screen = screen; S.arg = (screen === 'home' ? null : arg) ?? defaults[screen] ?? null; S.hist = [{ screen: 'home', arg: null, scroll: 0 }]; }
}
render();
