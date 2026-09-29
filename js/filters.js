/* ==========================================================
   filters.js — Filtra los módulos por categoría
   Cada tarjeta tiene data-cat="sobre-mi trabajo ..." en el HTML.
   ========================================================== */

(function () {
  const botones = document.querySelectorAll('[data-filter]');
  const tarjetas = document.querySelectorAll('#bento > [data-cat]');
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Nombre único por tarjeta para que la transición las anime al reacomodarse
  tarjetas.forEach(function (tarjeta, i) {
    tarjeta.style.viewTransitionName = 'modulo-' + i;
  });

  function aplicarFiltro(filtro) {
    tarjetas.forEach(function (tarjeta) {
      const categorias = tarjeta.dataset.cat.split(' ');
      tarjeta.hidden = filtro !== 'todo' && !categorias.includes(filtro);
    });

    botones.forEach(function (boton) {
      boton.setAttribute('aria-pressed', String(boton.dataset.filter === filtro));
    });
  }

  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      const filtro = boton.dataset.filter;

      // Transición suave donde el navegador la soporte
      if (document.startViewTransition && !sinMovimiento.matches) {
        document.startViewTransition(function () {
          aplicarFiltro(filtro);
        });
      } else {
        aplicarFiltro(filtro);
      }
    });
  });
})();
