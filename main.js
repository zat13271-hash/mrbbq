/* ============================================================
   Mr. BBQ — main.js
   i18n (RU/EN) · menu tabs · mobile menu · scroll reveal ·
   stats counter · marquee · hero parallax
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     1. I18N — словарь переводов
     ============================================================ */
  const I18N = {
    ru: {
      'nav.menu': 'Меню',
      'nav.branches': 'Филиалы',
      'nav.about': 'О нас',
      'nav.contacts': 'Контакты',

      'hero.tag': 'Халал фастфуд · Кыргызстан',
      'hero.t1': 'Магия',
      'hero.t2': 'мясного',
      'hero.t3': 'дела',
      'hero.sub': '100% мясо. Готовим на огне за 4–7 минут. Вкусно, доступно, безопасно.',
      'hero.cta1': 'Смотреть меню',
      'hero.cta2': 'Найти филиал',
      'hero.stamp': '100%<br>мясо',
      'marquee': 'Вкусно ✦ Доступно ✦ Безопасно ✦ 100% халал ✦ На огне ✦&nbsp;',

      'stats.branches': 'филиалов',
      'stats.cities': 'городов',
      'stats.meat': 'мясо и халал',
      'stats.minutes': 'минут — и готово',

      'menu.title': 'Меню',
      'menu.sub': 'Главные хиты. Полное меню — в филиалах и в 2ГИС.',
      'menu.cat.burgers': 'Бургеры',
      'menu.cat.snacks': 'Закуски',
      'menu.cat.combo': 'Комбо',
      'menu.cat.sides': 'Гарниры и напитки',
      'menu.hit': 'Хит продаж',
      'menu.crunchy': 'Хрустящее',
      'menu.comboNote': 'бургер + фри + напиток',
      'menu.sidesNote': 'к любому бургеру',
      'menu.note': 'Цены актуальны для филиалов Бишкека и могут отличаться в разных городах.',

      'm.b1': 'Мистер Брискет', 'm.b1d': 'брискет 12 ч в смокере, чеддер, дымный BBQ-соус',
      'm.b2': 'Двойной чизбургер', 'm.b2d': 'две котлеты, двойной чеддер, фирменный соус',
      'm.b3': 'Рэд бургер', 'm.b3d': 'говядина, чеддер, шрирача — с огоньком',
      'm.b4': 'Мистер Биг', 'm.b4d': 'говяжья котлета, чеддер, цезарь и бургер-соус',
      'm.b5': 'Мистер Чикен', 'm.b5d': 'сочная куриная котлета, сливочная булочка',
      'm.b6': 'Мистер Гамбургер', 'm.b6d': 'классика в мини-булочке бриошь',

      'm.s1': 'Крылышки · 6 шт', 'm.s1d': 'обжарены до золотистой корочки',
      'm.s2': 'Стрипсы · 5 шт', 'm.s2d': 'куриное филе в хрустящей панировке',
      'm.s3': 'Королевские креветки · 6 шт', 'm.s3d': 'морской вкус и хрустящая текстура',
      'm.s4': 'Наггетсы · 6 шт', 'm.s4d': 'идеальны с фирменными соусами',
      'm.s5': 'Чикен ролл', 'm.s5d': 'стрипсы, овощи и соусы в тортилье',

      'm.c1': 'Комбо Мистер Брискет',
      'm.c2': 'Комбо Двойной чизбургер',
      'm.c3': 'Комбо Рэд бургер',
      'm.c4': 'Комбо Мистер Чикен',
      'm.c5': 'Комбо Мистер Гамбургер',

      'm.g1': 'Картофель фри', 'm.g1d': 'хрустящий снаружи, мягкий внутри',
      'm.g2': 'Картофель по-деревенски', 'm.g2d': 'с ароматными специями',
      'm.g3': 'Фирменные соусы', 'm.g3d': 'барбекю, сырный, чесночный, горчичный, томатный',
      'm.g4': 'Напитки 400 мл', 'm.g4d': 'Coca-Cola, Fanta, Sprite, Fuse Tea, морс',
      'm.g5': 'Донат ягодный', 'm.g5d': 'воздушный, с ягодной начинкой',

      'about.title': 'Сеть с душой',
      'about.p1': 'Mr.BBQ — кыргызстанская сеть халал-фастфуда. За два года выросли до 17 филиалов в пяти городах: Бишкек, Ош, Каракол, Кызыл-Кия и Манас.',
      'about.p2': 'Готовим только из 100% мяса, на открытом огне — и подаём за 4–7 минут. Три простых принципа: вкусно, доступно, безопасно.',
      'about.tag1': '100% халал',
      'about.tag2': 'На огне',
      'about.tag3': '4–7 минут',

      'branches.title': 'Филиалы',
      'branches.sub': '17 точек по Кыргызстану. Нажми на филиал — откроется карта 2ГИС.',
      'br.bishkek': 'Бишкек',
      'br.1': 'Проспект Чуй, 217',
      'br.2': 'Исы Ахунбаева, 100',
      'br.3': 'Bishkek Park · Киевская, 148',
      'br.4': 'ТРК DJAl · Джал-23, 1/3',
      'br.5': 'Asia Mall · Айтматова, 3 этаж',
      'br.6': 'ТЦ Marks · Юнусалиева, 185/1',
      'br.247': '24/7',
      'branches.all': 'Все 17 филиалов в 2ГИС',

      'footer.slogan': 'Магия мясного дела',
      'footer.contacts': 'Контакты',
      'footer.cities': 'Города',
      'footer.citiesList': 'Бишкек · Ош · Каракол · Кызыл-Кия · Манас',
      'footer.made': 'Вкусно · Доступно · Безопасно'
    },

    en: {
      'nav.menu': 'Menu',
      'nav.branches': 'Locations',
      'nav.about': 'About',
      'nav.contacts': 'Contacts',

      'hero.tag': 'Halal fast food · Kyrgyzstan',
      'hero.t1': 'The magic',
      'hero.t2': 'of meat',
      'hero.t3': 'craft',
      'hero.sub': '100% meat. Flame-grilled in 4–7 minutes. Tasty, affordable, safe.',
      'hero.cta1': 'See the menu',
      'hero.cta2': 'Find a location',
      'hero.stamp': '100%<br>meat',
      'marquee': 'Tasty ✦ Affordable ✦ Safe ✦ 100% halal ✦ Flame-grilled ✦&nbsp;',

      'stats.branches': 'locations',
      'stats.cities': 'cities',
      'stats.meat': 'meat & halal',
      'stats.minutes': 'minutes — done',

      'menu.title': 'Menu',
      'menu.sub': 'The greatest hits. Full menu — in our locations and on 2GIS.',
      'menu.cat.burgers': 'Burgers',
      'menu.cat.snacks': 'Snacks',
      'menu.cat.combo': 'Combos',
      'menu.cat.sides': 'Sides & drinks',
      'menu.hit': 'Best seller',
      'menu.crunchy': 'Crispy',
      'menu.comboNote': 'burger + fries + drink',
      'menu.sidesNote': 'goes with any burger',
      'menu.note': 'Prices are current for Bishkek locations and may vary by city.',

      'm.b1': 'Mr. Brisket', 'm.b1d': '12-hour smoked brisket, cheddar, smoky BBQ sauce',
      'm.b2': 'Double Cheeseburger', 'm.b2d': 'two patties, double cheddar, signature sauce',
      'm.b3': 'Red Burger', 'm.b3d': 'beef, cheddar, sriracha — with a kick',
      'm.b4': 'Mr. Big', 'm.b4d': 'beef patty, cheddar, caesar & burger sauce',
      'm.b5': 'Mr. Chicken', 'm.b5d': 'juicy chicken patty, creamy bun',
      'm.b6': 'Mr. Hamburger', 'm.b6d': 'the classic in a mini brioche bun',

      'm.s1': 'Wings · 6 pc', 'm.s1d': 'fried to a golden crunch',
      'm.s2': 'Strips · 5 pc', 'm.s2d': 'chicken fillet in a crispy coating',
      'm.s3': 'King Shrimps · 6 pc', 'm.s3d': 'sea flavour, crispy texture',
      'm.s4': 'Nuggets · 6 pc', 'm.s4d': 'perfect with our signature sauces',
      'm.s5': 'Chicken Roll', 'm.s5d': 'strips, veggies and sauces in a tortilla',

      'm.c1': 'Mr. Brisket Combo',
      'm.c2': 'Double Cheeseburger Combo',
      'm.c3': 'Red Burger Combo',
      'm.c4': 'Mr. Chicken Combo',
      'm.c5': 'Mr. Hamburger Combo',

      'm.g1': 'French fries', 'm.g1d': 'crispy outside, soft inside',
      'm.g2': 'Country-style potatoes', 'm.g2d': 'with aromatic spices',
      'm.g3': 'Signature sauces', 'm.g3d': 'BBQ, cheese, garlic, mustard, tomato',
      'm.g4': 'Drinks 400 ml', 'm.g4d': 'Coca-Cola, Fanta, Sprite, Fuse Tea, mors',
      'm.g5': 'Berry donut', 'm.g5d': 'fluffy, with a berry filling',

      'about.title': 'A chain with a soul',
      'about.p1': 'Mr.BBQ is a Kyrgyz halal fast-food chain. In two years we grew to 17 locations across five cities: Bishkek, Osh, Karakol, Kyzyl-Kiya and Manas.',
      'about.p2': 'We cook only with 100% meat, over an open flame — and serve it in 4–7 minutes. Three simple principles: tasty, affordable, safe.',
      'about.tag1': '100% halal',
      'about.tag2': 'Flame-grilled',
      'about.tag3': '4–7 minutes',

      'branches.title': 'Locations',
      'branches.sub': '17 spots across Kyrgyzstan. Tap a location — it opens in 2GIS maps.',
      'br.bishkek': 'Bishkek',
      'br.1': 'Chuy Ave, 217',
      'br.2': 'Isa Akhunbaeva St, 100',
      'br.3': 'Bishkek Park · Kievskaya St, 148',
      'br.4': 'DJAl Mall · Dzhal-23, 1/3',
      'br.5': 'Asia Mall · Aitmatov Ave, 3rd floor',
      'br.6': 'Marks Mall · Yunusalieva Ave, 185/1',
      'br.247': '24/7',
      'branches.all': 'All 17 locations on 2GIS',

      'footer.slogan': 'The magic of meat craft',
      'footer.contacts': 'Contacts',
      'footer.cities': 'Cities',
      'footer.citiesList': 'Bishkek · Osh · Karakol · Kyzyl-Kiya · Manas',
      'footer.made': 'Tasty · Affordable · Safe'
    }
  };

  const LANG_KEY = 'mrbbq-lang';
  const htmlEl = document.documentElement;

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.ru;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });
    htmlEl.setAttribute('lang', lang);
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }
    document.title = lang === 'en'
      ? 'Mr. BBQ — The magic of meat craft | Burgers Bishkek'
      : 'Mr. BBQ — Магия мясного дела | Бургеры Бишкек';
  }

  let saved = 'ru';
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'en' || urlLang === 'ru') {
    saved = urlLang;
  } else {
    try { saved = localStorage.getItem(LANG_KEY) || 'ru'; } catch (e) { /* ignore */ }
  }

  document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  /* ============================================================
     2. MOBILE MENU
     ============================================================ */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMenu(force) {
    const open = typeof force === 'boolean' ? force : !mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function () { toggleMenu(); });
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { toggleMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') toggleMenu(false);
  });

  /* ============================================================
     3. MENU TABS
     ============================================================ */
  const tabs = document.querySelectorAll('.menu__tab');
  const panels = document.querySelectorAll('.menu__panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', String(t === tab));
      });
      panels.forEach(function (p) {
        const active = p.dataset.panel === tab.dataset.cat;
        p.classList.toggle('is-active', active);
        if (active) {
          // перезапуск reveal-анимации элементов внутри панели
          p.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.remove('in');
            requestAnimationFrame(function () {
              requestAnimationFrame(function () { el.classList.add('in'); });
            });
          });
        }
      });
    });
  });

  /* ============================================================
     4. SCROLL REVEAL
     ============================================================ */
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ============================================================
     5. STATS COUNTER
     ============================================================ */
  const counters = document.querySelectorAll('.stat__num [data-count], .stat__num[data-count]');
  const counterIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      counterIO.unobserve(entry.target);
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const dur = 1200;
      const t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.4 });
  counters.forEach(function (el) { counterIO.observe(el); });

  /* ============================================================
     6. MARQUEE — дублируем контент для бесшовной ленты
     ============================================================ */
  const marqueeTrack = document.getElementById('marqueeTrack');
  function fillMarquee() {
    const item = marqueeTrack.querySelector('.marquee__item');
    if (!item) return;
    // сохраняем «чистый» экземпляр и заполняем дорожку копиями
    const html = item.outerHTML;
    marqueeTrack.innerHTML = '';
    const copies = Math.max(2, Math.ceil((window.innerWidth * 2) / 400));
    for (let i = 0; i < copies; i++) marqueeTrack.insertAdjacentHTML('beforeend', html);
  }
  fillMarquee();

  /* ============================================================
     7. HERO PARALLAX (только для точных указателей)
     ============================================================ */
  const heroWrap = document.getElementById('heroParallax');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (heroWrap && fine) {
    const layers = heroWrap.querySelectorAll('[data-depth]');
    const cell = heroWrap.closest('.hero__cell--img');
    cell.addEventListener('mousemove', function (e) {
      const r = cell.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      layers.forEach(function (layer) {
        const d = parseFloat(layer.dataset.depth) || 16;
        layer.style.transform = 'translate(' + (-x * d) + 'px,' + (-y * d) + 'px)' +
          (layer.classList.contains('hero__stamp') ? ' rotate(10deg)' : '');
      });
    });
    cell.addEventListener('mouseleave', function () {
      layers.forEach(function (layer) {
        layer.style.transform = layer.classList.contains('hero__stamp') ? 'rotate(10deg)' : '';
      });
    });
  }

  /* ============================================================
     8. MISC
     ============================================================ */
  document.getElementById('year').textContent = new Date().getFullYear();

  // применяем язык в конце, чтобы marquee заполнился финальным текстом
  applyLang(saved === 'en' ? 'en' : 'ru');
  fillMarquee();
  window.addEventListener('resize', fillMarquee);
})();
