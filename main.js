const lineX = document.querySelector('.lineX');
const lineY = document.querySelector('.lineY');
const target = document.querySelector('.target');
const xyCoord = document.querySelector('.xyCoord');

document.addEventListener('mouseover', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  lineX.style.top = `${y}px`;
  lineY.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  xyCoord.style.top = `${y}px`;
  xyCoord.style.left = `${x}px`;
  xyCoord.innerHTML = `${x}px, ${y}px`
})