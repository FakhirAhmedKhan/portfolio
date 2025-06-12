// cursor-popper.js - Optimized party popper effect
(function () {
  // Create custom cursor
  const cursor = document.createElement('div');
  cursor.className = 'cursor-effect';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = (mouseX - 16) + 'px';
    cursor.style.top = (mouseY - 16) + 'px';
    activatePopper();
  });

  // Efficient particle creation
  const colors = ['#ffd700', '#ff69b4', '#00e1ff', '#ffb300', '#70ff91', '#fff'];
  function createParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'popper-particle';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.background = colors[(Math.random() * colors.length) | 0];
    p.style.transform = `scale(${0.7 + Math.random() * 0.7})`;
    document.body.appendChild(p);
    const angle = Math.random() * 2 * Math.PI;
    const dist = 60 + Math.random() * 40;
    const dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
    p.animate([
      { transform: p.style.transform, opacity: 1 },
      { transform: `translate(${dx}px,${dy}px) scale(0.2)`, opacity: 0 }
    ], {
      duration: 700 + Math.random() * 300,
      easing: 'cubic-bezier(0.4,2,0.6,1)'
    });
    setTimeout(() => p.remove(), 800);
  }

  let popperActive = false;
  let hideTimeout;
  function activatePopper() {
    popperActive = true;
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      popperActive = false;
    }, 700); // Slowly stop after 700ms of no movement
  }

  setInterval(() => {
    if (!popperActive) return;
    for (let i = 0; i < 2; i++) createParticle(mouseX, mouseY);
  }, 60);
})();
