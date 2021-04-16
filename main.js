const target = document.querySelector('.target');
const img = document.querySelector('.img');
const xy = document.querySelector('.xy');

document.addEventListener('mousemove', (e) => {
  xy.innerText = `${e.clientX}, ${e.clientY}`;
  target.style.position = "absolute";
  target.style.left = e.clientX + -30 + 'px';
  target.style.top = e.clientY + -30 + 'px';
});
