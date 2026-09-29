/* ==========================================================
   modal.js — Abre un módulo en grande
   Los botones con data-open="tpl-..." copian esa <template>
   dentro del único <dialog> de la página.
   ========================================================== */

(function () {
  const modal = document.getElementById('modal');
  const cuerpo = document.getElementById('modal-body');
  let botonOrigen = null; // para devolver el foco al cerrar

  function abrir(idPlantilla, boton) {
    const plantilla = document.getElementById(idPlantilla);
    if (!plantilla) return;

    cuerpo.replaceChildren(plantilla.content.cloneNode(true));

    // El título de la plantilla nombra el diálogo para lectores de pantalla
    const titulo = cuerpo.querySelector('#modal-title');
    if (titulo) modal.setAttribute('aria-labelledby', 'modal-title');

    // Si ya hay un módulo abierto (un botón dentro del modal), solo cambia el contenido
    if (!modal.open) {
      botonOrigen = boton;
      modal.showModal();
    } else {
      modal.querySelector('.modal__close').focus();
    }
    modal.scrollTop = 0;
  }

  function cerrar() {
    modal.close();
  }

  // Abrir: un solo "escucha" para todos los botones
  document.addEventListener('click', function (evento) {
    const boton = evento.target.closest('[data-open]');
    if (boton) abrir(boton.dataset.open, boton);
  });

  // Cerrar con el botón X
  modal.addEventListener('click', function (evento) {
    if (evento.target.closest('[data-close]')) cerrar();
  });

  // Cerrar al hacer clic fuera del contenido (en el fondo oscuro)
  modal.addEventListener('click', function (evento) {
    if (evento.target === modal) {
      const caja = modal.getBoundingClientRect();
      const dentro =
        evento.clientX >= caja.left && evento.clientX <= caja.right &&
        evento.clientY >= caja.top && evento.clientY <= caja.bottom;
      if (!dentro) cerrar();
    }
  });

  // La tecla Esc cierra el <dialog> por sí sola; aquí solo devolvemos el foco
  modal.addEventListener('close', function () {
    if (botonOrigen) botonOrigen.focus();
    botonOrigen = null;
  });
})();
