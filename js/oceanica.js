const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('open', expanded);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
});
const dialog = document.querySelector('.lightbox');
document.querySelectorAll('[data-image]').forEach(link => link.addEventListener('click', event => {
  if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey) return;
  event.preventDefault();
  dialog.querySelector('img').src = link.href;
  dialog.querySelector('img').alt = link.dataset.title;
  dialog.querySelector('p').textContent = link.dataset.title;
  dialog.showModal(); document.body.classList.add('lightbox-open');
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
