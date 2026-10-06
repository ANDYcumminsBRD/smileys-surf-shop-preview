
document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('.nav ul').classList.toggle('open'));
window.addEventListener('scroll',()=>document.body.classList.toggle('scrolled',scrollY>500),{passive:true});if(!document.querySelector('.hero'))document.body.classList.add('scrolled');
if(location.search.includes('shot')){document.querySelectorAll('.wa-float,.mock').forEach(e=>e.remove());}
