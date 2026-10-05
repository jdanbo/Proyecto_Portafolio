/* ==========================================================
   data.js — Datos que cambian seguido.
   Edita este archivo para actualizar el sitio sin tocar el HTML.
   Lo usan las dos versiones (español e inglés).
   ========================================================== */

const PORTAFOLIO = {
  // Correo que se copia al hacer clic en "Escríbeme"
  email: 'di.jdbo@gmail.com',

  // Zona horaria para el reloj de la tarjeta "Guatemala"
  zonaHoraria: 'America/Guatemala',

  // Duolingo: el enlace a tu perfil y tu racha actual.
  // Mientras "racha" sea null, la racha no se muestra (el enlace sí).
  duolingo: {
    racha: null,        // ejemplo: 245
    perfil: 'https://www.duolingo.com/profile/jdanielborjao'
  },

  // Fuera de pantalla: tu mes típico.
  // "semanas" = días de gym de cada semana del mes (se muestran de lunes en adelante).
  // Los demás días se marcan como cardio o caminata.
  rutina: {
    semanas: [5, 5, 4, 4],
    pasosDiarios: 10000
  }
};
