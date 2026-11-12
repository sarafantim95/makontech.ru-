(() => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();