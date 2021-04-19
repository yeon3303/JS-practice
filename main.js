const lineX = document.querySelector('.lineX');
const lineY = document.querySelector('.lineY');
const target = document.querySelector('.target');
const xyCoord = document.querySelector('.xyCoord');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mouseover', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    lineX.style.transform = `translateY(${y}px)`;
    lineY.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    xyCoord.style.transform = `translate(${x}px, ${y}px)`;
    xyCoord.innerHTML = `${x}px, ${y}px`
})  
})

