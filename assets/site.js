
(function(){var b=document.querySelector('.burger'),m=document.getElementById('menu');if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus();}});}
if(location.search.indexOf('shot')>-1){document.querySelectorAll('.mock').forEach(function(e){e.remove()});}})();
