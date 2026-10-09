(function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  var b=document.getElementById('navBtn'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded',false)})});
  var f=document.getElementById('form');f.addEventListener('submit',function(e){e.preventDefault();f.classList.add('sent')});
  // prepínače v rozvádzači: postupne "zapnúť"
  var sw=[].slice.call(document.querySelectorAll('.sw'));sw.forEach(function(s){s.classList.remove('on')});
  sw.forEach(function(s,i){setTimeout(function(){s.classList.add('on')},900+i*260)});
})();
