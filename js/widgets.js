/* ==========================================================
   widgets.js — Módulos "vivos": copiar correo, reloj,
   Duolingo, rutina de gym e imágenes de respaldo.
   Lee sus datos de js/data.js y sus textos de js/i18n.js.
   ========================================================== */

(function () {
  const datos = PORTAFOLIO;

  /* ---------- Aviso breve ---------- */
  const toast = document.getElementById('toast');
  let temporizador = null;

  function avisar(mensaje) {
    toast.textContent = mensaje;
    toast.classList.add('is-visible');
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2200);
  }

  /* ---------- Copiar correo ---------- */
  // Si el navegador no deja copiar, selecciona el texto para copiarlo a mano
  function seleccionarCorreo() {
    const texto = document.getElementById('email-text');
    const rango = document.createRange();
    rango.selectNodeContents(texto);
    const seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
  }

  document.addEventListener('click', function (evento) {
    if (!evento.target.closest('[data-copy-email]')) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(datos.email)
        .then(function () {
          avisar(T.correoCopiado + datos.email);
        })
        .catch(function () {
          seleccionarCorreo();
          avisar(T.correoSeleccionado);
        });
    } else {
      seleccionarCorreo();
      avisar(T.correoSeleccionado);
    }
  });

  /* ---------- Reloj de Guatemala ---------- */
  const reloj = document.getElementById('local-time');
  const formatoHora = new Intl.DateTimeFormat(T.locale, {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: datos.zonaHoraria
  });

  function actualizarReloj() {
    const ahora = new Date();
    reloj.textContent = formatoHora.format(ahora);
    reloj.setAttribute('datetime', ahora.toISOString());
  }

  actualizarReloj();
  setInterval(actualizarReloj, 30000);

  /* ---------- Duolingo ---------- */
  if (typeof datos.duolingo.racha === 'number') {
    document.getElementById('duolingo-dias').textContent = datos.duolingo.racha + ' ' + T.dias;
    document.getElementById('duolingo-streak').hidden = false;
  }

  if (datos.duolingo.perfil) {
    const enlace = document.getElementById('duolingo-link');
    enlace.href = datos.duolingo.perfil;
    enlace.hidden = false;
  }

  /* ---------- Fuera de pantalla: rutina del mes ---------- */
  const rutina = document.getElementById('gym-rutina');
  const DIAS_4 = [0, 1, 3, 4]; // semanas de 4 días: lunes, martes, jueves y viernes

  function crear(etiqueta, clase, texto) {
    const el = document.createElement(etiqueta);
    el.className = clase;
    if (texto) el.textContent = texto;
    return el;
  }

  // Fila de encabezado: espacio vacío + días de la semana
  rutina.appendChild(crear('span', 'routine__label', ''));
  T.diasSemana.forEach(function (dia) {
    rutina.appendChild(crear('span', 'routine__label', dia));
  });

  let totalGym = 0;

  datos.rutina.semanas.forEach(function (diasGym, i) {
    rutina.appendChild(crear('span', 'routine__label', T.semana + (i + 1)));

    for (let dia = 0; dia < 7; dia++) {
      // 5 o más días: de lunes en adelante; 4 días: lunes, martes, jueves y viernes
      const esGym = diasGym === 4 ? DIAS_4.includes(dia) : dia < diasGym;
      rutina.appendChild(crear('span', 'routine__cell ' + (esGym ? 'is-gym' : 'is-cardio'), ''));
      if (esGym) totalGym++;
    }
  });

  document.getElementById('gym-total').textContent = totalGym;
  document.getElementById('gym-pasos').textContent = Math.round(datos.rutina.pasosDiarios / 1000) + 'k';
  rutina.setAttribute('aria-label', T.rutina(totalGym));

  /* ---------- Imágenes de respaldo ---------- */
  // Si una imagen marcada con data-fallback no existe, se oculta y queda el respaldo
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    function ocultar() {
      img.hidden = true;
    }
    if (img.complete && img.naturalWidth === 0) ocultar();
    img.addEventListener('error', ocultar);
  });

  /* ---------- Año del pie de página ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
