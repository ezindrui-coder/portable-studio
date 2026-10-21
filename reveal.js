document.querySelectorAll('.reveal').forEach(function(b){
  b.addEventListener('click',function(){
    var a=document.getElementById(b.getAttribute('aria-controls'));
    var open=b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded',String(!open));
    a.hidden=open;
    b.textContent=open?'Show answer':'Hide answer';
  });
});

document.querySelectorAll('.slider').forEach(function(s){
  var track=s.querySelector('.slides');
  var dots=s.querySelector('.dots');
  for(var i=0;i<track.children.length;i++){
    var d=document.createElement('button');
    d.className='dot';
    d.setAttribute('aria-label','Picture '+(i+1));
    (function(i){d.addEventListener('click',function(){track.scrollTo({left:i*track.clientWidth,behavior:'smooth'});});})(i);
    dots.appendChild(d);
  }
  function update(){
    var i=Math.round(track.scrollLeft/track.clientWidth)||0;
    Array.prototype.forEach.call(dots.children,function(d,k){d.classList.toggle('active',k===i);});
  }
  track.addEventListener('scroll',update);
  s.querySelector('.prev').addEventListener('click',function(){track.scrollBy({left:-track.clientWidth,behavior:'smooth'});});
  s.querySelector('.next').addEventListener('click',function(){track.scrollBy({left:track.clientWidth,behavior:'smooth'});});
  update();
});
