(function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(!toggle || !nav) return;

  toggle.addEventListener('click', function(){
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // close when clicking a nav link
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));

  // close on escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && nav.classList.contains('open')){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.focus();
    }
  });
})();
