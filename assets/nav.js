function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function toggleModule(id) {
  const body = document.getElementById('body-' + id);
  const chev = document.getElementById('chev-' + id);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (chev) chev.classList.toggle('open', !isOpen);
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const ham = document.querySelector('.nav-hamburger');
  if (menu && ham && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Open first module by default on fase pages
window.addEventListener('DOMContentLoaded', function() {
  const first = document.querySelector('.module-body');
  const firstChev = document.querySelector('.module-chevron');
  if (first) { first.classList.add('open'); }
  if (firstChev) { firstChev.classList.add('open'); }
});
