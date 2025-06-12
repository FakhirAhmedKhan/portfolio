// cursor.js - Optimized animated cursor effect for all pages
(function () {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-effect';
  document.body.appendChild(cursor);

  const moveCursor = e => {
    cursor.style.left = (e.clientX - 16) + 'px';
    cursor.style.top = (e.clientY - 16) + 'px';
  };
  const activate = () => cursor.classList.add('active');
  const deactivate = () => cursor.classList.remove('active');

  document.addEventListener('mousemove', moveCursor);
  document.addEventListener('mousedown', activate);
  document.addEventListener('mouseup', deactivate);
  document.addEventListener('mouseleave', deactivate);

  ['a', 'button', 'input', 'textarea', 'label'].forEach(tag =>
    document.querySelectorAll(tag).forEach(el => {
      el.addEventListener('mouseenter', activate);
      el.addEventListener('mouseleave', deactivate);
    })
  );
})();
