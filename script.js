const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

const LANG_STORAGE_KEY = 'lang';

let cmsContent = null;
let contactEmailTo = 'rudgh313@gmail.com';

const I18N = {
  en: {
    skip: 'Skip to content',
    'nav.profile': 'Profile',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.side': 'Side quests',
    'nav.contact': 'Contact',
    'hero.badge': 'Learning & Assessment Advisor',
    'hero.subtitle':
      'Learning &amp; assessment sales professional at <strong>Cambridge University Press &amp; Assessment Korea</strong>.\n            A data-driven problem solver who bridges local market needs and global HQ to deliver practical, long-term solutions.',
    'hero.cta.profile': 'View profile',
    'hero.cta.contact': 'Get in touch',
    'hero.meta.email': 'Email',
    'hero.meta.phone': 'Phone',
    'hero.meta.case': 'Case studies',
    'card.email': 'Email',
    'card.about': 'About',
    'about.title': 'Profile',
    'about.desc': 'A short introduction and how I work.',
    'about.who.title': 'Who I am',
    'about.who.text':
      'Learning &amp; assessment sales professional currently working as a Learning &amp; Assessment Advisor at\n              Cambridge University Press &amp; Assessment Korea, with a background as an elementary school teacher.\n              Experienced in B2B sales to schools and language institutes, managing accounts and rolling out print and\n              digital ELT solutions in collaboration with distributors and global teams.',
    'about.who.li1': 'Clear communication and strong stakeholder management',
    'about.who.li2': 'Comfortable with Salesforce and BI tools for pipelines and forecasting',
    'about.who.li3': 'Translate customer needs into practical, long-term solutions',
    'about.goal.title': 'What I’m building toward',
    'about.goal.callout.title': 'Long-term goal',
    'about.goal.callout.text':
      'Build a service that enables easy data input and turns it into meaningful analysis that people can actually use.',
    'skills.title': 'Skill summary',
    'skills.desc': 'Strengths across sales, coordination, and analytics tools.',
    'skills.c1.title': 'Bridge local ↔ global',
    'skills.c1.text': 'Coordinate with cross-functional teams and follow established processes from planning to launch.',
    'skills.c2.title': 'Communication',
    'skills.c2.text': 'Effective communicator with experience in diverse, international teams.',
    'skills.c3.title': 'Project leadership',
    'skills.c3.text':
      'Skilled in leading projects and achieving successful outcomes with strong organization and problem-solving.',
    'skills.c4.title': 'Sales analytics & CRM tools',
    'skills.c4.text':
      'Salesforce, Power BI, Tableau — pipeline management, forecasting, reporting, and data-driven decisions.',
    'exp.title': 'Experience',
    'exp.desc': 'Roles and impact, summarized.',
    'edu.title': 'Education',
    'edu.desc': 'Academic background and leadership.',
    'projects.title': 'Projects / case studies',
    'projects.desc': 'A template section — share 2–3 projects and I’ll fill this with your real work.',
    'projects.t1.title': 'Title — Problem → Approach → Result',
    'projects.t1.text':
      'What was the problem, what did you do, and what changed? Add measurable outcomes if possible.',
    'projects.t2.title': 'Dashboard / reporting — From data to decision',
    'projects.t2.text':
      'Describe how you tracked pipeline, built insights, or improved forecasting / operations.',
    'projects.t3.title': 'Solution rollout — Planning to launch',
    'projects.t3.text':
      'Explain how you coordinated with distributors/global teams and executed a rollout end-to-end.',
    'side.title': 'Side quests',
    'side.desc': 'Things I build for fun: small tools, automation, and experiments.',
    'side.p1.title': 'Builder mindset',
    'side.p1.text':
      'I enjoy turning messy, real-world problems into simple workflows — especially around data input, tracking, and reporting.',
    'side.p1.li1': 'Prototyping dashboards, trackers, and lightweight data tools',
    'side.p1.li2': 'Automating repetitive tasks and reporting',
    'side.p1.li3': 'Experimenting with UX to make data entry easy',
    'side.p2.title': 'What I’m exploring',
    'side.p2.callout.title': 'Note',
    'side.p2.callout.text':
      'If you share 2–3 real examples you’ve done (even internal work), I can turn this section into concrete case studies.',
    'contact.title': 'Contact',
    'contact.desc': 'If you want to collaborate or talk, feel free to reach out.',
    'contact.quick.title': 'Quick contact',
    'contact.quick.desc': 'Email, phone, and location.',
    'contact.quick.addr': '10-3, Wausan-ro 29 Dagil, Mapo-gu, Seoul, South Korea',
    'contact.form.title': 'Message preview',
    'contact.form.desc': 'This form doesn’t submit (static site). It creates a preview and a mail link.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.msg': 'Message',
    'contact.form.namePh': 'Your name',
    'contact.form.emailPh': 'you@example.com',
    'contact.form.msgPh': 'What can I help you with?',
    'contact.form.submit': 'Create preview',
    'contact.preview.title': 'Preview',
    'contact.preview.mail': 'Send by email',
    'mail.label.name': 'Name',
    'mail.label.email': 'Email',
  },
  ko: {
    skip: '본문 바로가기',
    'nav.profile': '프로필',
    'nav.skills': '강점',
    'nav.experience': '경력',
    'nav.education': '교육',
    'nav.projects': '프로젝트',
    'nav.side': '개발/사이드',
    'nav.contact': '연락',
    'hero.badge': 'Learning & Assessment Advisor',
    'hero.subtitle':
      '<strong>Cambridge University Press &amp; Assessment Korea</strong>에서 Learning &amp; Assessment Advisor로 일하고 있습니다.\n            로컬 시장의 니즈와 글로벌 팀의 방향 사이를 연결하며, 데이터 기반으로 문제를 정의하고 실행합니다.',
    'hero.cta.profile': '프로필 보기',
    'hero.cta.contact': '연락하기',
    'hero.meta.email': '이메일',
    'hero.meta.phone': '전화',
    'hero.meta.case': '사례/프로젝트',
    'card.email': '이메일',
    'card.about': '소개',
    'about.title': '프로필',
    'about.desc': '내가 어떤 사람인지, 어떤 방식으로 일하는지 요약했습니다.',
    'about.who.title': '소개',
    'about.who.text':
      'Learning &amp; Assessment Advisor로 근무하며, 초등교사 경력을 바탕으로 교육 현장의 언어를 이해합니다.\n              학교/어학원 대상 B2B 세일즈와 계정 관리를 수행했고, 유통사 및 글로벌 팀과 협업해 인쇄/디지털 ELT 솔루션을 론칭/확산했습니다.',
    'about.who.li1': '명확한 커뮤니케이션과 이해관계자 관리',
    'about.who.li2': 'Salesforce/BI 툴로 파이프라인, 예측, 리포팅을 운영',
    'about.who.li3': '고객 니즈를 실행 가능한 장기 솔루션으로 번역',
    'about.goal.title': '지향점',
    'about.goal.callout.title': '장기 목표',
    'about.goal.callout.text':
      '사용자가 쉽게 입력할 수 있는 데이터 기반으로, 의미 있는 분석과 의사결정을 돕는 서비스를 만들고 싶습니다.',
    'skills.title': '강점 요약',
    'skills.desc': '세일즈/협업/데이터 활용 역량을 묶어 정리했습니다.',
    'skills.c1.title': '로컬 ↔ 글로벌 연결',
    'skills.c1.text': '시장 니즈를 구조화해 글로벌/유통사/내부와 조율하고, 계획부터 론칭까지 프로세스로 실행합니다.',
    'skills.c2.title': '커뮤니케이션',
    'skills.c2.text': '다양한 문화권/국제 팀과 협업하며, 복잡한 내용을 명확하게 전달합니다.',
    'skills.c3.title': '프로젝트 리딩',
    'skills.c3.text': '조직력과 문제 해결력으로 프로젝트를 끝까지 밀어 결과를 만듭니다.',
    'skills.c4.title': '데이터/CRM 툴',
    'skills.c4.text': 'Salesforce, Power BI, Tableau로 파이프라인 관리/예측/리포팅을 수행합니다.',
    'exp.title': '경력',
    'exp.desc': '역할과 임팩트를 요약했습니다.',
    'edu.title': '교육',
    'edu.desc': '학력과 리더십 경험.',
    'projects.title': '프로젝트 / 사례',
    'projects.desc': '아직 템플릿입니다. 프로젝트 2~3개만 주면 실제 내용으로 채워드릴게요.',
    'projects.t1.title': '제목 — 문제 → 접근 → 결과',
    'projects.t1.text': '어떤 문제였고, 무엇을 했고, 무엇이 달라졌는지(가능하면 수치) 정리해요.',
    'projects.t2.title': '대시보드/리포팅 — 데이터에서 의사결정으로',
    'projects.t2.text': '파이프라인/예측/운영 개선을 위해 어떤 인사이트를 만들었는지 적어주세요.',
    'projects.t3.title': '솔루션 론칭/확산 — 계획부터 실행까지',
    'projects.t3.text': '유통사/글로벌 팀과 어떻게 조율해 실행했는지 써주세요.',
    'side.title': '개발/사이드 프로젝트',
    'side.desc': '업무 밖에서도 작은 도구를 만들고 실험하는 걸 좋아합니다.',
    'side.p1.title': '만드는 사람',
    'side.p1.text': '현실의 복잡한 문제를 단순한 워크플로우로 바꾸는 걸 즐깁니다. 특히 데이터 입력/추적/리포팅을 좋아해요.',
    'side.p1.li1': '간단한 대시보드/트래커/데이터 툴 프로토타이핑',
    'side.p1.li2': '반복 작업 자동화 및 리포트 생성',
    'side.p1.li3': '데이터 입력이 쉬운 UX 실험',
    'side.p2.title': '요즘 하는 것',
    'side.p2.callout.title': '메모',
    'side.p2.callout.text': '실제로 했던 예시 2~3개(사내 작업도 가능)만 주면, 여기 내용을 구체적인 사례로 바꿔드릴게요.',
    'contact.title': '연락',
    'contact.desc': '협업/커리어/프로젝트 이야기는 언제든 환영합니다.',
    'contact.quick.title': '빠른 연락',
    'contact.quick.desc': '이메일, 전화, 위치 정보',
    'contact.quick.addr': '서울특별시 마포구 와우산로29다길 10-3',
    'contact.form.title': '메시지 미리보기',
    'contact.form.desc': '정적 사이트라 제출되진 않고, 미리보기와 메일 링크를 생성합니다.',
    'contact.form.name': '이름',
    'contact.form.email': '이메일',
    'contact.form.msg': '메시지',
    'contact.form.namePh': '이름을 입력하세요',
    'contact.form.emailPh': 'you@example.com',
    'contact.form.msgPh': '어떤 도움이 필요하신가요?',
    'contact.form.submit': '미리보기 생성',
    'contact.preview.title': '미리보기',
    'contact.preview.mail': '메일로 보내기',
    'mail.label.name': '이름',
    'mail.label.email': '이메일',
  },
};

let currentLang = 'en';

function getPreferredLang() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'ko' || stored === 'en') return stored;
  const navLang = (navigator.language || '').toLowerCase();
  return navLang.startsWith('ko') ? 'ko' : 'en';
}

function t(key) {
  return I18N[currentLang]?.[key] ?? I18N.en[key] ?? '';
}

function applyLang(lang) {
  currentLang = lang === 'ko' ? 'ko' : 'en';
  document.documentElement.lang = currentLang;

  const btn = $('#langToggle');
  if (btn) {
    const isKo = currentLang === 'ko';
    btn.setAttribute('aria-pressed', String(isKo));
    const icon = $('.iconbtn__icon', btn);
    if (icon) icon.textContent = isKo ? 'KO' : 'EN';
  }

  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const value = t(key);
    if (value) el.textContent = value;
  });

  $$('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (!key) return;
    const value = t(key);
    if (value) el.innerHTML = value;
  });

  $$('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const value = t(key);
    if (value) el.setAttribute('placeholder', value);
  });
}

function setupLang() {
  applyLang(getPreferredLang());
  const btn = $('#langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem(LANG_STORAGE_KEY, next);
    applyLang(next);
  });
}

function applyCmsOverrides(data) {
  if (!data) return;

  const en = data.copyEn || {};
  const ko = data.copyKo || {};

  if (typeof en.heroBadge === 'string') I18N.en['hero.badge'] = en.heroBadge;
  if (typeof en.heroSubtitleHtml === 'string') I18N.en['hero.subtitle'] = en.heroSubtitleHtml;
  if (typeof en.aboutTitle === 'string') I18N.en['about.title'] = en.aboutTitle;
  if (typeof en.aboutDesc === 'string') I18N.en['about.desc'] = en.aboutDesc;
  if (typeof en.sideTitle === 'string') I18N.en['side.title'] = en.sideTitle;
  if (typeof en.sideDesc === 'string') I18N.en['side.desc'] = en.sideDesc;
  if (typeof en.contactTitle === 'string') I18N.en['contact.title'] = en.contactTitle;
  if (typeof en.contactDesc === 'string') I18N.en['contact.desc'] = en.contactDesc;

  if (typeof ko.heroBadge === 'string') I18N.ko['hero.badge'] = ko.heroBadge;
  if (typeof ko.heroSubtitleHtml === 'string') I18N.ko['hero.subtitle'] = ko.heroSubtitleHtml;
  if (typeof ko.aboutTitle === 'string') I18N.ko['about.title'] = ko.aboutTitle;
  if (typeof ko.aboutDesc === 'string') I18N.ko['about.desc'] = ko.aboutDesc;
  if (typeof ko.sideTitle === 'string') I18N.ko['side.title'] = ko.sideTitle;
  if (typeof ko.sideDesc === 'string') I18N.ko['side.desc'] = ko.sideDesc;
  if (typeof ko.contactTitle === 'string') I18N.ko['contact.title'] = ko.contactTitle;
  if (typeof ko.contactDesc === 'string') I18N.ko['contact.desc'] = ko.contactDesc;

  const contact = data.contact || {};
  if (typeof contact.addressEn === 'string') I18N.en['contact.quick.addr'] = contact.addressEn;
  if (typeof contact.addressKo === 'string') I18N.ko['contact.quick.addr'] = contact.addressKo;
}

function applyCmsToDom(data) {
  if (!data) return;

  const profile = data.profile || {};
  const contact = data.contact || {};

  const brandMark = $('#brandMark');
  const brandText = $('#brandText');
  const heroTitle = $('#heroTitle');
  const profileAvatar = $('#profileAvatar');
  const profileName = $('#profileName');
  const profileRole = $('#profileRole');
  const profileLocation = $('#profileLocation');

  if (brandMark && typeof profile.brandMark === 'string') brandMark.textContent = profile.brandMark;
  if (brandText && typeof profile.brandText === 'string') brandText.textContent = profile.brandText;
  if (heroTitle && typeof profile.heroTitle === 'string') heroTitle.textContent = profile.heroTitle;

  if (profileName && typeof profile.profileName === 'string') profileName.textContent = profile.profileName;
  if (profileRole && typeof profile.role === 'string') profileRole.textContent = profile.role;
  if (profileLocation && typeof profile.location === 'string') profileLocation.textContent = profile.location;

  const initialsSource =
    (typeof profile.brandMark === 'string' && profile.brandMark.trim()) ||
    (typeof profile.profileName === 'string' && profile.profileName.trim()) ||
    'KA';
  const initials = initialsSource
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0] || '')
    .join('')
    .toUpperCase();
  if (profileAvatar) profileAvatar.textContent = initials || 'KA';

  const emailEl = $('#contactEmail');
  const phoneEl = $('#contactPhone');

  if (typeof contact.email === 'string' && contact.email.trim()) {
    contactEmailTo = contact.email.trim();
    if (emailEl) {
      emailEl.textContent = contactEmailTo;
      emailEl.href = `mailto:${contactEmailTo}?subject=%5BPortfolio%5D%20Contact`;
    }
  }

  const phoneHref = typeof contact.phone === 'string' ? contact.phone.trim() : '';
  const phoneDisplay = typeof contact.phoneDisplay === 'string' ? contact.phoneDisplay.trim() : '';
  if (phoneEl) {
    if (phoneHref) phoneEl.href = `tel:${phoneHref}`;
    if (phoneDisplay) phoneEl.textContent = phoneDisplay;
  }
}

async function loadCmsContent() {
  try {
    const res = await fetch('content/site.json', { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    cmsContent = data;
    applyCmsOverrides(data);
    applyCmsToDom(data);

    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored !== 'ko' && stored !== 'en') {
      const def = data.defaultLang === 'en' ? 'en' : 'ko';
      applyLang(def);
    } else {
      applyLang(stored);
    }
    return data;
  } catch {
    return null;
  }
}

function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = $('#themeToggle');
  if (btn) {
    const isLight = theme === 'light';
    btn.setAttribute('aria-pressed', String(isLight));
    const icon = $('.iconbtn__icon', btn);
    if (icon) icon.textContent = isLight ? '☀' : '☾';
  }
}

function setupTheme() {
  applyTheme(getPreferredTheme());
  const btn = $('#themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}

function setupMobileMenu() {
  const menuBtn = $('#menuToggle');
  const mobile = $('#mobileMenu');
  if (!menuBtn || !mobile) return;

  const open = () => {
    mobile.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', '메뉴 닫기');
  };

  const close = () => {
    mobile.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', '메뉴 열기');
  };

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  $$('[data-close]', mobile).forEach((a) => a.addEventListener('click', close));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

function setupActiveNav() {
  const links = $$('[data-nav]');
  const sections = $$('[data-section]');
  if (links.length === 0 || sections.length === 0) return;

  const byKey = new Map(links.map((a) => [a.dataset.nav, a]));
  const setActive = (key) => {
    links.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === key));
  };

  const header = $('.header');
  const getOffset = () => (header ? header.getBoundingClientRect().height : 64) + 12;

  let ticking = false;
  const update = () => {
    ticking = false;
    const offset = getOffset();

    let bestKey = null;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const s of sections) {
      const key = s.getAttribute('data-section');
      if (!key || !byKey.has(key)) continue;

      const rect = s.getBoundingClientRect();
      const within = rect.top <= offset && rect.bottom > offset;
      if (within) {
        bestKey = key;
        break;
      }

      const dist = Math.abs(rect.top - offset);
      if (dist < bestDist) {
        bestDist = dist;
        bestKey = key;
      }
    }

    if (bestKey) setActive(bestKey);
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  requestUpdate();
}

function setupReveal() {
  const els = $$('.reveal');
  if (els.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
}

function setupContactPreview() {
  const form = $('#contactForm');
  const wrap = $('#messagePreview');
  const body = $('#previewBody');
  const mailto = $('#mailtoLink');
  if (!form || !wrap || !body || !mailto) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const lines = [
      `${t('mail.label.name')}: ${name}`,
      `${t('mail.label.email')}: ${email}`,
      '',
      message,
    ].join('\n');

    body.textContent = lines;
    wrap.hidden = false;

    const subject = encodeURIComponent('[Portfolio] Contact');
    const mailBody = encodeURIComponent(lines);
    mailto.href = `mailto:${contactEmailTo}?subject=${subject}&body=${mailBody}`;
  });
}

function setupYear() {
  const el = $('#year');
  if (el) el.textContent = String(new Date().getFullYear());
}

async function init() {
  setupTheme();
  await loadCmsContent();
  setupLang();
  setupMobileMenu();
  setupActiveNav();
  setupReveal();
  setupContactPreview();
  setupYear();
}

init();
