// ==== TERMINAL FX ==== //
// Vanilla JS, sin dependencias, sin bundlear con esbuild: se sirve tal cual.
// Efecto de "tipeo" opcional para cualquier elemento con [data-type].
// Uso en tu markdown/html: <p data-type>Este texto se escribe solo.</p>

(function () {
  'use strict';

  function typeEl(el) {
    var text = el.textContent;
    var speed = parseInt(el.getAttribute('data-type-speed'), 10) || 22;
    el.textContent = '';
    el.style.visibility = 'visible';

    var i = 0;
    function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i += 1;
        window.setTimeout(step, speed);
      }
    }
    step();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('[data-type]');
    targets.forEach(function (el, index) {
      el.style.visibility = 'hidden';
      window.setTimeout(function () {
        typeEl(el);
      }, index * 400);
    });
  });
})();
