# Portafolio · Daniel Borja

Sitio en HTML, CSS y JavaScript puro, sin librerías ni herramientas de build.
Abre `index.html` en el navegador o publícalo tal cual en GitHub Pages.
Hay dos versiones: español (`index.html`) e inglés (`en/index.html`), con un botón ES/EN en el encabezado.

Concepto: **el jardín**. Cada módulo de la cuadrícula es una maceta; al abrirlo, "crece" y muestra el contenido completo.

## Estructura

```
index.html          Versión en español: estructura, tarjetas y contenido de los modales (<template>)
en/index.html       Versión en inglés (misma estructura, comparte css/, js/ e img/)
css/tokens.css      Colores de marca, tipografía y radios (modo claro y oscuro)
css/base.css        Estilos generales, botones, chips, aviso
css/layout.css      Encabezado, cuadrícula bento, pie y versiones tablet/móvil
css/cards.css       Estilo de cada módulo
css/modal.css       Módulo expandido y galerías
js/i18n.js          Textos que escribe JavaScript, en español e inglés
js/data.js          Datos que cambian seguido (Duolingo, rutina, correo)
js/theme.js         Modo claro / oscuro
js/filters.js       Filtros Todo / Sobre mí / Trabajo / Habilidades / Personal
js/modal.js         Abre los módulos en grande
js/widgets.js       Copiar correo, reloj, rutina del mes, imágenes de respaldo
img/                Foto, imágenes de proyectos y logo en SVG
cv/                 CV en PDF
favicon.*, apple-touch-icon.png, web-app-manifest-*.png, site.webmanifest   Íconos
```

## Pendientes

1. `js/data.js`: tu racha y perfil de Duolingo. La rutina del mes también se ajusta ahí.
2. `cv/CV_Daniel_Borja.pdf` es público: considera una versión sin número de teléfono (y, si quieres, una en inglés).

## Al cambiar un texto

Cambia el texto en `index.html` y su traducción en `en/index.html`. Las rutas en la versión en inglés empiezan con `../`.

## Cómo agregar un módulo

1. Copia una tarjeta `<article class="card" data-cat="...">` en `index.html`.
2. Si se expande, crea una `<template id="tpl-nombre">` y pon `data-open="tpl-nombre"` en su botón.
3. `data-cat` define en qué filtros aparece (puedes poner varios, separados por espacio).
4. `span-2` la hace de dos columnas y `row-2` de dos filas.
