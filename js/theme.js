/* ==========================================================
   theme.js — Botón de modo claro / oscuro
   Sin elección guardada, el sitio sigue el tema del sistema.
   Los textos del botón vienen de js/i18n.js.
   ========================================================== */

(function () {
  const root = document.documentElement;
  const boton = document.getElementById('theme-toggle');
  const etiqueta = boton.querySelector('.theme-toggle__label');
  const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)');

  // Tema que se ve ahora mismo
  function temaActual() {
    return root.getAttribute('data-theme') || (sistemaOscuro.matches ? 'dark' : 'light');
  }

  // Actualiza ícono y textos del botón
  function pintarBoton() {
    const oscuro = temaActual() === 'dark';
    boton.classList.toggle('is-dark', oscuro);
    etiqueta.textContent = oscuro ? T.temaClaro : T.temaOscuro;
    boton.setAttribute('aria-label', oscuro ? T.cambiarAClaro : T.cambiarAOscuro);
  }

  boton.addEventListener('click', function () {
    const nuevo = temaActual() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nuevo);
    try {
      localStorage.setItem('tema', nuevo);
    } catch (e) {
      // Si el navegador bloquea el almacenamiento, el cambio igual funciona en esta visita
    }
    pintarBoton();
  });

  // Si cambia el tema del sistema y el visitante no eligió uno, actualiza el botón
  sistemaOscuro.addEventListener('change', pintarBoton);

  pintarBoton();
})();
