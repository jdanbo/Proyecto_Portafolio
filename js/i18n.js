/* ==========================================================
   i18n.js — Textos que escribe JavaScript, en español e inglés.
   El idioma sale del atributo lang de <html>:
   index.html usa lang="es" y en/index.html usa lang="en".
   ========================================================== */

const TEXTOS = {
  es: {
    locale: 'es-GT',
    temaClaro: 'Claro',
    temaOscuro: 'Oscuro',
    cambiarAClaro: 'Cambiar a modo claro',
    cambiarAOscuro: 'Cambiar a modo oscuro',
    correoCopiado: 'Correo copiado: ',
    correoSeleccionado: 'Correo seleccionado, cópialo con Ctrl + C',
    dias: 'días',
    diasSemana: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    semana: 'S',
    rutina: function (total) {
      return 'Rutina mensual: ' + total + ' días de gym al mes, y cardio o caminata los demás días.';
    }
  },
  en: {
    locale: 'en-US',
    temaClaro: 'Light',
    temaOscuro: 'Dark',
    cambiarAClaro: 'Switch to light mode',
    cambiarAOscuro: 'Switch to dark mode',
    correoCopiado: 'Email copied: ',
    correoSeleccionado: 'Email selected, copy it with Ctrl + C',
    dias: 'days',
    diasSemana: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    semana: 'W',
    rutina: function (total) {
      return 'Monthly routine: ' + total + ' gym days a month, and cardio or walking on the other days.';
    }
  }
};

const IDIOMA = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
const T = TEXTOS[IDIOMA];
