document.querySelectorAll('.reveal').forEach(function(b){
  b.addEventListener('click',function(){
    var a=document.getElementById(b.getAttribute('aria-controls'));
    var open=b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded',String(!open));
    a.hidden=open;
    b.textContent=open?'Show answer':'Hide answer';
  });
});
