// ===== Каталог =====
const desc = 'Для первых шагов в тренировках, основанных на сердечном ритме';
const more = [
  'Вы услышите звуковое оповещение о нужном пульсе во время тренировки;',
  'Вы увидите информативный графический индикатор целевых тренировочных зон пульса;',
  'Также Вы увидите информацию о расходе калорий за тренировку;',
  'Вы сможете посмотреть данные по 10 тренировкам.'
];
// Названия и цены для вкладок «Для бега» и «Для триатлона» — примеры, замените своими
const catalog = {
  fitness: [
    {n:'Пульсометр Polar FT1', old:'4 750 руб.', price:'4 500 руб.'},
    {n:'Пульсометр Suunto M2', old:'6 690 руб.', price:'6 641 руб.'},
    {n:'Пульсометр Polar FT4', old:'7 390 руб.', price:'7 021 руб.'},
    {n:'Пульсометр Polar FT1', old:'4 750 руб.', price:'4 500 руб.'},
    {n:'Пульсометр Suunto M2', old:'6 690 руб.', price:'6 641 руб.'},
    {n:'Пульсометр Polar FT4', old:'6 690 руб.', price:'6 641 руб.'}
  ],
  run: [
    {n:'Пульсометр Polar RC3 GPS', old:'12 990 руб.', price:'11 900 руб.'},
    {n:'Пульсометр Garmin Forerunner 220', old:'14 500 руб.', price:'13 990 руб.'},
    {n:'Пульсометр Suunto Ambit2 R', old:'16 200 руб.', price:'15 400 руб.'},
    {n:'Пульсометр Polar RC3', old:'10 490 руб.', price:'9 900 руб.'},
    {n:'Пульсометр Garmin Forerunner 15', old:'8 990 руб.', price:'8 490 руб.'},
    {n:'Пульсометр Suunto Quest', old:'9 800 руб.', price:'9 300 руб.'}
  ],
  tri: [
    {n:'Пульсометр Garmin Forerunner 920XT', old:'27 900 руб.', price:'26 500 руб.'},
    {n:'Пульсометр Polar V800', old:'29 500 руб.', price:'27 990 руб.'},
    {n:'Пульсометр Suunto Ambit3 Sport', old:'31 000 руб.', price:'29 900 руб.'},
    {n:'Пульсометр Garmin Forerunner 620', old:'22 500 руб.', price:'21 400 руб.'},
    {n:'Пульсометр Polar M400', old:'11 990 руб.', price:'11 190 руб.'},
    {n:'Пульсометр Suunto Ambit3 Run', old:'24 900 руб.', price:'23 700 руб.'}
  ]
};
const IMG = {fitness:'img/watch-fitness.png', run:'img/watch-run.png', tri:'img/watch-tri.png'};

const grid = document.getElementById('grid');
const foot = c => `<div class="foot"><div><span class="old">${c.old}</span><span class="new">${c.price}</span></div><button type="button" class="btn buy" data-buy="${c.n}">Купить</button></div>`;
// Каждая карточка = две стороны (лицевая и обратная); «Подробнее» поворачивает её вокруг ребра
const cardHTML = (c, cat) => `<div class="flip"><div class="inner">
  <div class="card front"><div class="pic" style="background-image:url(${IMG[cat]})"></div><h4>${c.n}</h4><p>${desc}</p><a href="#" class="more">Подробнее</a>${foot(c)}</div>
  <div class="card back"><ul>${more.map(t => `<li>${t}</li>`).join('')}</ul><div class="back-link"><a href="#" class="less">Назад</a></div>${foot(c)}</div>
</div></div>`;

function render(cat){
  grid.dataset.cat = cat;
  grid.innerHTML = catalog[cat].map(c => cardHTML(c, cat)).join('');
}
render('fitness');

grid.addEventListener('click', e => {
  const buy = e.target.closest('[data-buy]');
  if (buy) return openModal('Купить: ' + buy.dataset.buy, 'Оставьте контакты — менеджер подтвердит заказ');
  const a = e.target.closest('.more, .less');
  if (!a) return;
  e.preventDefault();
  a.closest('.flip').classList.toggle('turned', a.classList.contains('more'));
});

document.getElementById('tabs').addEventListener('click', e => {
  const t = e.target.closest('.tab');
  if (!t) return;
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  render(t.dataset.cat);
});

// Слайдер: стрелки сдвигают слайды вбок
const track = document.getElementById('track');
const total = track.children.length;
let pos = 0;
const move = d => {
  pos = (pos + d + total) % total;
  track.style.transform = `translateX(-${pos * 100}%)`;
};
document.getElementById('next').onclick = () => move(1);
document.getElementById('prev').onclick = () => move(-1);

// ===== Заявки =====
// Чтобы заявки уходили на ваш сервер/Formspree/Google Script, вставьте адрес сюда:
const FORM_URL = '';

function submitForm(form, msg, topic){
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email.value.trim();
  [...form.querySelectorAll('input')].forEach(i => i.classList.remove('bad'));
  const say = (t, cls) => { msg.hidden = false; msg.textContent = t; msg.className = 'msg ' + cls; };
  if (!name){ form.elements.name.classList.add('bad'); return say('Введите ваше имя', 'err'); }
  if (phone.replace(/\D/g, '').length < 10){ form.elements.phone.classList.add('bad'); return say('Введите телефон полностью, например +7 999 123-45-67', 'err'); }
  if (email && !/^\S+@\S+\.\S+$/.test(email)){ form.elements.email.classList.add('bad'); return say('Проверьте E-mail', 'err'); }

  const data = {name, phone, email, topic: topic || 'Консультация', date: new Date().toISOString()};
  try { const all = JSON.parse(localStorage.getItem('runsmart_leads') || '[]'); all.push(data); localStorage.setItem('runsmart_leads', JSON.stringify(all)); } catch(e){}
  if (FORM_URL) fetch(FORM_URL, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)}).catch(() => {});
  say('Спасибо, ' + name + '! Мы перезвоним вам в течение 10 минут.', 'ok');
  form.reset();
}

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  submitForm(e.target, document.getElementById('msg'), 'Консультация (форма на странице)');
});

// ===== Всплывающее окно =====
const modal = document.getElementById('modal'), mform = document.getElementById('mform'), mmsg = document.getElementById('mmsg');
let lastFocus;
function openModal(title, text){
  lastFocus = document.activeElement;
  document.getElementById('mt').textContent = title;
  document.getElementById('mp').textContent = text || 'Оставьте контакты — мы перезвоним в течение 10 минут';
  mform.elements.topic.value = title;
  mmsg.hidden = true; mform.reset();
  modal.hidden = false;
  mform.elements.name.focus();
}
function closeModal(){ modal.hidden = true; if (lastFocus) lastFocus.focus(); }
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openModal(b.dataset.open)));
document.getElementById('mx').onclick = closeModal;
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
mform.addEventListener('submit', e => {
  e.preventDefault();
  submitForm(mform, mmsg, mform.elements.topic.value);
  if (mmsg.classList.contains('ok')) setTimeout(closeModal, 2200);
});

// ===== Кнопка «наверх» =====
const toTop = document.getElementById('toTop');
const onScroll = () => toTop.classList.toggle('show', window.scrollY > 400);
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
