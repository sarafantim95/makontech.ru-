document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (window.innerWidth <= 768) {
    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
      if (touchendX < touchstartX - 60) {
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
          window.location.href = 'products.html';
        } else if (window.location.pathname.includes('products.html')) {
          window.location.href = 'contacts.html';
        }
      }
      if (touchendX > touchstartX + 60) {
        if (window.location.pathname.includes('products.html')) {
          window.location.href = 'index.html';
        } else if (window.location.pathname.includes('contacts.html')) {
          window.location.href = 'products.html';
        }
      }
    }

    document.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    }, { passive: true });
  }
});
