(function(){
  var $=function(s){return document.querySelector(s)};
  // mobile menu
  var burger=$('#burger'),menu=$('#mmenu');
  burger.onclick=function(){burger.classList.toggle('open');menu.classList.toggle('open')};
  menu.querySelectorAll('a').forEach(function(a){a.onclick=function(){burger.classList.remove('open');menu.classList.remove('open')}});
  // scroll up
  var up=$('#up');
  function chk(){up.classList.toggle('show',scrollY>300)}window.addEventListener('scroll',chk);chk();
  up.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
  // halls
  var halls=[
    {n:'№ 1',a:'40 м²',cap:20,imgs:['hall.jpg','hall2.jpg','hall3.jpg','hall4.jpg','hall5.jpg']},
    {n:'№ 2',a:'30 м²',cap:15,imgs:['hall3.jpg','hall4.jpg','hall5.jpg','hall.jpg','hall2.jpg']},
    {n:'№ 3',a:'25 м²',cap:10,imgs:['hall4.jpg','hall5.jpg','hall.jpg','hall2.jpg','hall3.jpg']},
    {n:'№ 4',a:'20 м²',cap:8,imgs:['hall5.jpg','hall.jpg','hall2.jpg','hall3.jpg','hall4.jpg']}
  ];
  var L='ru';
  try{L=localStorage.getItem('lang')||(/^kk|^kz/i.test(navigator.language)?'kz':'ru')}catch(e){}
  if(!window.I18N[L])L='ru';
  function tr(key){return (window.I18N[L]&&window.I18N[L][key])||window.I18N.ru[key]||''}
  var hi=0,si=0,main=$('#mainImg'),thumbs=$('#thumbs');
  function render(){
    var h=halls[hi];
    $('#hNum').textContent=h.n;$('#hArea').textContent=h.a.replace('м²',L==='en'?'m²':'м²');$('#hCap').textContent=tr('cap').replace('{n}',h.cap);
    document.querySelectorAll('#tabs button').forEach(function(b,i){b.textContent=tr('hall')+' №'+(i+1)});
    $('#cur').textContent=si+1;$('#tot').textContent=h.imgs.length;
    main.style.opacity=0;
    setTimeout(function(){main.src='img/'+h.imgs[si];main.style.opacity=1},150);
    thumbs.innerHTML='';
    h.imgs.forEach(function(f,i){
      var b=document.createElement('button');if(i===si)b.className='active';
      b.innerHTML='<img src="img/'+f+'" alt="">';
      b.onclick=function(){si=i;render()};thumbs.appendChild(b);
    });
  }
  document.querySelectorAll('#tabs button').forEach(function(b){
    b.onclick=function(){
      document.querySelectorAll('#tabs button').forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');hi=+b.dataset.i;si=0;render();
    };
  });
  $('#prev').onclick=function(){si=(si-1+halls[hi].imgs.length)%halls[hi].imgs.length;render()};
  $('#next').onclick=function(){si=(si+1)%halls[hi].imgs.length;render()};
  function applyLang(){
    document.documentElement.lang=L==='kz'?'kk':L;
    document.title=tr('title');
    var md=document.querySelector('meta[name=description]');if(md)md.content=tr('desc');
    document.querySelectorAll('[data-i18n]').forEach(function(el){el.innerHTML=tr(el.getAttribute('data-i18n'))});
    document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('active',b.dataset.lang===L)});
    up.setAttribute('aria-label',tr('up'));up.title=tr('up');
    render();
  }
  document.querySelectorAll('.lang button').forEach(function(b){
    b.onclick=function(){L=b.dataset.lang;try{localStorage.setItem('lang',L)}catch(e){}applyLang()};
  });
  applyLang();
  // steps slider
  var steps=[].slice.call(document.querySelectorAll('.step')),box=$('#steps'),k=0;
  function go(i){
    k=(i+steps.length)%steps.length;
    steps.forEach(function(s,j){s.classList.toggle('on',j===k)});
    $('#sCur').textContent=k+1;
    box.scrollTo({left:steps[k].offsetLeft-box.offsetLeft-(box.clientWidth-steps[k].clientWidth)/2,behavior:'smooth'});
  }
  $('#sPrev').onclick=function(){go(k-1)};$('#sNext').onclick=function(){go(k+1)};
  steps.forEach(function(s,j){s.onclick=function(){go(j)}});
  steps[0].classList.add('on');
  // faq: one open at a time
  var ds=document.querySelectorAll('details');
  ds.forEach(function(d){d.addEventListener('toggle',function(){if(d.open)ds.forEach(function(o){if(o!==d)o.open=false})})});
})();
