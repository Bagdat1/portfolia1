// Переводы: kk — қазақша, ru — русский, en — English.
// Чтобы изменить текст, правьте значения ниже. В HTML ключ указан в data-i18n="...".
const I18N = {
  ru: {
    title: 'ROBO SCHOOL — курсы по робототехнике для педагогов',
    menu_open: 'Открыть меню', menu_close: 'Закрыть меню', to_top: 'Наверх', prev: 'Назад', next: 'Вперёд',
    nav_about: 'О школе', nav_trainers: 'Тренеры', nav_price: 'Стоимость',
    hero_text: 'Курсы повышения квалификации по робототехнике для педагогов начальной школы',
    hero_btn: 'Записаться на курс',
    about_lead: '<b>Robo School</b> — учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования',
    s1: 'УМК по различным направлениям по робототехнике',
    s2: 'Школ, в которых запущена робототехника',
    s3: 'Педагогов прошедших курсы повышения квалификации',
    s4: 'Обученных детей на базе собственных центров',
    benefits_title: 'Что вы получите после курса',
    b1_t: 'Удостоверение', b1_p: 'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
    b2_t: 'Знания', b2_p: 'По основам разработки учебно-методических комплексов по робототехнике и программированию',
    b3_t: 'Практику', b3_p: 'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в офлайн или онлайн формате)',
    tip: 'При наличии свободных мест',
    trainers_title: 'Профессиональные тренеры',
    n_irina: 'Ирина Лайм', n_marina: 'Марина Орлова', n_maxim: 'Максим Петров', n_konstantin: 'Константин Назаров', n_alina: 'Алина Власова',
    role_robo: 'преподаватель робототехники', role_prog: 'преподаватель по программированию',
    more: 'Подробнее',
    price_title: 'Выберите нужный пакет',
    p_pro: 'УМК по робототехнике<br>и программированию', p_robo: 'УМК по робототехнике', p_prog: 'УМК по программированию',
    apply: 'Оставить заявку',
    order_title: 'Запишитесь на курс<br>со скидкой 10%',
    order_note: 'Акция действительна до 10 марта 2022 года',
    ph_name: 'Имя', ph_phone: 'Телефон',
    submit: 'Оформить заявку',
    thanks: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    close: 'Закрыть', tab_edu: 'Образование', tab_exp: 'Опыт работы', tab_awards: 'Награды',
    empty: 'Нет данных', soon: 'Информация скоро появится'
  },
  kk: {
    title: 'ROBO SCHOOL — педагогтерге арналған робототехника курстары',
    menu_open: 'Мәзірді ашу', menu_close: 'Мәзірді жабу', to_top: 'Жоғары', prev: 'Артқа', next: 'Алға',
    nav_about: 'Мектеп туралы', nav_trainers: 'Тренерлер', nav_price: 'Құны',
    hero_text: 'Бастауыш сынып педагогтеріне арналған робототехника бойынша біліктілікті арттыру курстары',
    hero_btn: 'Курсқа жазылу',
    about_lead: '<b>Robo School</b> — робототехника және бағдарламалау саласында педагогикалық кадр резервін қалыптастыруға арналған мекеме',
    s1: 'Робототехниканың әртүрлі бағыттары бойынша ОӘК',
    s2: 'Робототехника іске қосылған мектептер',
    s3: 'Біліктілікті арттыру курстарынан өткен педагогтер',
    s4: 'Өз орталықтарымызда оқытылған балалар',
    benefits_title: 'Курстан кейін не аласыз',
    b1_t: 'Куәлік', b1_p: 'Білім беру мекемелерінде 6-12 жас аралығындағы балаларға робототехниканы оқытуға құқық беретін',
    b2_t: 'Білім', b2_p: 'Робототехника және бағдарламалау бойынша оқу-әдістемелік кешендерді әзірлеу негіздері бойынша',
    b3_t: 'Практика', b3_p: 'R:ED LAB базасында робототехниканы оқыту бойынша практикадан өту мүмкіндігі (офлайн немесе онлайн форматта)',
    tip: 'Бос орын болған жағдайда',
    trainers_title: 'Кәсіби тренерлер',
    n_irina: 'Ирина Лайм', n_marina: 'Марина Орлова', n_maxim: 'Максим Петров', n_konstantin: 'Константин Назаров', n_alina: 'Алина Власова',
    role_robo: 'робототехника оқытушысы', role_prog: 'бағдарламалау оқытушысы',
    more: 'Толығырақ',
    price_title: 'Қажетті пакетті таңдаңыз',
    p_pro: 'Робототехника және<br>бағдарламалау бойынша ОӘК', p_robo: 'Робототехника бойынша ОӘК', p_prog: 'Бағдарламалау бойынша ОӘК',
    apply: 'Өтінім қалдыру',
    order_title: 'Курсқа 10% жеңілдікпен<br>жазылыңыз',
    order_note: 'Акция 2022 жылғы 10 наурызға дейін жарамды',
    ph_name: 'Аты-жөні', ph_phone: 'Телефон',
    submit: 'Өтінімді рәсімдеу',
    thanks: 'Рақмет! Біз сізбен жақын арада байланысамыз.',
    close: 'Жабу', tab_edu: 'Білімі', tab_exp: 'Жұмыс тәжірибесі', tab_awards: 'Марапаттары',
    empty: 'Деректер жоқ', soon: 'Ақпарат жақында пайда болады'
  },
  en: {
    title: 'ROBO SCHOOL — robotics courses for teachers',
    menu_open: 'Open menu', menu_close: 'Close menu', to_top: 'Back to top', prev: 'Previous', next: 'Next',
    nav_about: 'About', nav_trainers: 'Trainers', nav_price: 'Pricing',
    hero_text: 'Professional development courses in robotics for primary school teachers',
    hero_btn: 'Enroll in the course',
    about_lead: '<b>Robo School</b> is an institution that builds a pool of teaching staff in robotics and programming',
    s1: 'Teaching kits for different areas of robotics',
    s2: 'Schools where robotics has been launched',
    s3: 'Teachers who completed the professional development courses',
    s4: 'Children trained at our own centers',
    benefits_title: 'What you get after the course',
    b1_t: 'Certificate', b1_p: 'Entitling you to teach robotics to children aged 6–12 in educational institutions',
    b2_t: 'Knowledge', b2_p: 'On the basics of developing teaching and methodology kits for robotics and programming',
    b3_t: 'Practice', b3_p: 'The chance to complete teaching practice in robotics at R:ED LAB (offline or online)',
    tip: 'Subject to availability',
    trainers_title: 'Professional trainers',
    n_irina: 'Irina Laim', n_marina: 'Marina Orlova', n_maxim: 'Maxim Petrov', n_konstantin: 'Konstantin Nazarov', n_alina: 'Alina Vlasova',
    role_robo: 'robotics teacher', role_prog: 'programming teacher',
    more: 'Learn more',
    price_title: 'Choose your package',
    p_pro: 'Teaching kit for robotics<br>and programming', p_robo: 'Teaching kit for robotics', p_prog: 'Teaching kit for programming',
    apply: 'Submit a request',
    order_title: 'Enroll in the course<br>with a 10% discount',
    order_note: 'Offer valid until March 10, 2022',
    ph_name: 'Name', ph_phone: 'Phone',
    submit: 'Place request',
    thanks: 'Thank you! We will contact you shortly.',
    close: 'Close', tab_edu: 'Education', tab_exp: 'Experience', tab_awards: 'Awards',
    empty: 'No data', soon: 'Information coming soon'
  }
};

let LANG = 'ru';
const t = key => (I18N[LANG] && I18N[LANG][key]) || I18N.ru[key] || key;

function setLang(lang) {
  if (!I18N[lang]) lang = 'ru';
  LANG = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('.trainer').forEach(el => { el.querySelector('img').alt = el.querySelector('h3').textContent; });
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
  document.dispatchEvent(new CustomEvent('langchange'));
}

document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
(function init() {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  setLang(saved && I18N[saved] ? saved : 'ru');
})();
