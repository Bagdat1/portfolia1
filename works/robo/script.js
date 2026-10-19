// mobile menu
const nav = document.getElementById('nav');
document.getElementById('burger').addEventListener('click', () => nav.classList.add('open'));
document.getElementById('navClose').addEventListener('click', () => nav.classList.remove('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// trainers slider
const track = document.getElementById('track');
const bar = document.getElementById('bar');
const step = () => (track.querySelector('.trainer')?.offsetWidth || 300) + 20;
document.getElementById('next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
document.getElementById('prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
function updateBar() {
  const max = track.scrollWidth - track.clientWidth;
  const share = Math.min(1, track.clientWidth / track.scrollWidth);
  bar.style.width = (share * 100) + '%';
  const track_w = bar.parentElement.clientWidth;
  bar.style.marginLeft = max > 0 ? ((track.scrollLeft / max) * (1 - share) * track_w) + 'px' : '0';
}
track.addEventListener('scroll', updateBar, { passive: true });
window.addEventListener('resize', updateBar);
updateBar();

// form (replace with real submit)
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  alert(t('thanks'));
});

// trainer modal
// Данные тренеров по языкам. Пустой массив = вкладка неактивна.
// section: {title?, items:[{date, lines:[...]}]}
const TRAINERS = {
  marina: {
    ru: {
      edu: [
        { items: [{ date: 'Сентябрь 1995 — Июнь 2000', lines: ['Санкт-Петербургский политехнический университет Петра Великого', 'Факультет: Компьютерных наук и технологий', 'Специальность: Математика и компьютерные науки', 'Форма обучения: Очная'] }] },
        { title: 'Курсы и тренинги', items: [{ date: 'Ноябрь 2020 — Февраль 2021', lines: ['Программа дополнительного образования «3D Моделирование»', 'Место проведения: Институт дополнительного образования «Политех»'] }] }
      ],
      exp: [{ items: [{ date: '2015 — н.в.', lines: ['Преподаватель робототехники', 'Образовательный центр R:ED LAB'] }] }],
      awards: []
    },
    kk: {
      edu: [
        { items: [{ date: 'Қыркүйек 1995 — Маусым 2000', lines: ['Ұлы Петр атындағы Санкт-Петербург политехникалық университеті', 'Факультет: Компьютерлік ғылымдар және технологиялар', 'Мамандығы: Математика және компьютерлік ғылымдар', 'Оқу түрі: Күндізгі'] }] },
        { title: 'Курстар мен тренингтер', items: [{ date: 'Қараша 2020 — Ақпан 2021', lines: ['Қосымша білім беру бағдарламасы «3D модельдеу»', 'Өткізілген орны: «Политех» қосымша білім беру институты'] }] }
      ],
      exp: [{ items: [{ date: '2015 — қазіргі уақытқа дейін', lines: ['Робототехника оқытушысы', 'R:ED LAB білім беру орталығы'] }] }],
      awards: []
    },
    en: {
      edu: [
        { items: [{ date: 'September 1995 — June 2000', lines: ['Peter the Great St. Petersburg Polytechnic University', 'Faculty: Computer Science and Technology', 'Major: Mathematics and Computer Science', 'Study mode: Full-time'] }] },
        { title: 'Courses and trainings', items: [{ date: 'November 2020 — February 2021', lines: ['Supplementary education program “3D Modeling”', 'Venue: Polytech Institute of Supplementary Education'] }] }
      ],
      exp: [{ items: [{ date: '2015 — present', lines: ['Robotics teacher', 'R:ED LAB Educational Center'] }] }],
      awards: []
    }
  }
};
const emptyData = () => ({ edu: [{ items: [{ date: '', lines: [t('soon')] }] }], exp: [], awards: [] });

const modal = document.getElementById('modal');
const content = document.getElementById('mContent');
const tabs = document.querySelectorAll('#tabs button');
let currentCard = null, currentTab = 'edu';

function dataFor(card) {
  const d = TRAINERS[card.dataset.id];
  return (d && (d[LANG] || d.ru)) || emptyData();
}
function esc(s) { return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function render(tab) {
  const data = dataFor(currentCard);
  const sections = data[tab] || [];
  currentTab = tab;
  tabs.forEach(b => {
    b.classList.toggle('is-active', b.dataset.tab === tab);
    b.disabled = !(data[b.dataset.tab] || []).length && b.dataset.tab !== 'edu';
  });
  content.scrollTop = 0;
  content.innerHTML = sections.length ? sections.map(s =>
    '<section>' + (s.title ? '<h4>' + esc(s.title) + '</h4>' : '') +
    s.items.map(i => '<div class="item">' + (i.date ? esc(i.date) + '<br>' : '') + i.lines.map(esc).join('<br>') + '</div>').join('') +
    '</section>').join('') : '<p class="empty">' + esc(t('empty')) + '</p>';
}
function fillModal() {
  const img = currentCard.querySelector('img');
  document.getElementById('mImg').src = img.src;
  document.getElementById('mImg').alt = img.alt;
  document.getElementById('mName').textContent = currentCard.querySelector('h3').textContent;
  document.getElementById('mRole').textContent = currentCard.querySelector('p').textContent;
  render(currentTab);
}
tabs.forEach(b => b.addEventListener('click', () => { if (!b.disabled) render(b.dataset.tab); }));

document.querySelectorAll('.more').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  currentCard = a.closest('.trainer');
  currentTab = 'edu';
  fillModal();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}));
// при смене языка обновляем открытое окно
document.addEventListener('langchange', () => { if (currentCard && !modal.hidden) fillModal(); });
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }
modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// кнопка «наверх»
const toTop = document.getElementById('toTop');
function toggleTop() { toTop.classList.toggle('is-show', window.scrollY > 500); }
window.addEventListener('scroll', toggleTop, { passive: true });
toggleTop();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
