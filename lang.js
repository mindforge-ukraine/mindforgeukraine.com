(function(){
  var btns=document.querySelectorAll('.lang button');
  function set(l){
    document.body.classList.toggle('uk',l==='uk');
    document.documentElement.lang=l==='uk'?'uk':'en';
    btns.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l?'true':'false')});
    try{localStorage.setItem('mf-lang',l)}catch(e){}
  }
  btns.forEach(function(b){b.addEventListener('click',function(){set(b.dataset.lang)})});
  var s=null;try{s=localStorage.getItem('mf-lang')}catch(e){}
  if(!s&&(navigator.language||'').toLowerCase().indexOf('uk')===0)s='uk';
  set(s||'en');
  if(location.hash==='#cookies'&&document.body.classList.contains('uk')){var c=document.getElementById('cookies-uk');if(c)c.scrollIntoView()}
  // inside an embedded preview mailto links are blocked: send them to the contact form instead
  var embedded=false;try{embedded=window.self!==window.top}catch(e){embedded=true}
  if(embedded)document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.setAttribute('href','index.html#start')});
  var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
})();
