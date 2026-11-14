document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function(e) {
      e.preventDefault();
      nav.classList.toggle('is-open');
      this.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
    });
  }
});
