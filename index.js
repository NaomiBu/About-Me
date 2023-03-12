const underline = document.querySelector('#underline')
const menu = document.querySelector('nav');

menu.addEventListener('click', e => {
  if (e.target.nodeName ==='A') {
  underline.style.left = e.target.offsetLeft + 'px';
  underline.style.width = e.target.offsetWidth + 'px';
}
}); 