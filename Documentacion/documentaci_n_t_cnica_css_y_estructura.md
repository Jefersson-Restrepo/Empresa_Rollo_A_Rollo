# Bitácora Técnica de Arquitectura, CSS y Estructura

**Proyecto:** Adhesivos Rollo a Rollo  
**Rol:** Gestión Ágil (Scrum) y Arquitectura Frontend  
**Versión:** 2.0 (Sprint 1 - Refactorización Semántica y Transición a MPA)  
**Fecha de actualización:** Octubre 2026  

---

## 1. Control de Cambios y Decisiones Técnicas (Changelog de Arquitectura)

### ¿Qué se cambió y por qué?

1. **Eliminación del abuso de `<div>` (Erradicación de "Divitis"):**
   * *Antes:* Se usaban contenedores genéricos (`<div class="header">`, `<div class="service-card">`, `<div class="product-card">`).
   * *Ahora:* Se migraron a etiquetas semánticas estándar de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`).
   * *Motivo:* Mejora directa en accesibilidad, posicionamiento orgánico (SEO) y orden estructural para el mantenimiento del código.

2. **Fijación y comportamiento del Logo institucional:**
   * *Solución aplicada:* Se descartó `position: absolute` en la imagen para evitar solapamientos en dispositivos móviles o cambios de resolución. El logo ahora fluye dentro de `<figure class="marca">` y el contenedor `.barra-navegacion` mantiene `position: sticky; top: 0;` con un `z-index: 1000`.

3. **Transición de Landing Page (One-Page) a Sitio Multipágina (MPA):**
   * *Antes:* El menú apuntaba a identificadores internos (`href="#servicios"`, `href="#nosotros"`), obligando a concentrar toda la información en un solo archivo saturado.
   * *Ahora:* Cada sección clave cuenta con su propio archivo independiente (`Index.html`, `Nosotros.html`, `Servicios.html`, `Insumos.html`, `Contacto.html`).
   * *Motivo:* Permite profundizar en el catálogo de insumos (por ejemplo, ficha de detalle para rollos con selección de material: térmico directo, lito/cera, polipropileno) y en la información institucional sin recargar el `Index.html`.

4. **Retiro de Misión y Visión de `Index.html`:**
   * La misión y visión completas se trasladaron a `Nosotros.html` junto con los canales de atención y ubicación. En el `Index.html` se conservó una franja comercial enfocada en la propuesta de valor y servicios destacados.

5. **Sincronización JavaScript y Modelo de Datos:**
   * Se ajustó el renderizado dinámico en `guardarInformacion.js` para inyectar elementos semánticos `<article class="tarjeta-producto">` dentro del contenedor con selector `id="contenedorProductos"`, manteniendo la persistencia temporal en `localStorage`.

---

## 2. Tabla Maestra de Selectores CSS (Estilos Semánticos Actuales)

La siguiente tabla describe qué componente visual o estructural controla cada regla del archivo `Styles.css`:

| Selector CSS / Regla | ¿A qué elemento visual afecta? | Explicación técnica y funcional |
| :--- | :--- | :--- |
| `:root` | **Variables del sistema de diseño** | Centraliza la paleta de colores institucional (`--color-primary: #9BC53D`, `--color-primary-dark`, `--color-dark: #1E1E1E`, grises) y tipografía base. |
| `*` (asterisco) | **Todos los elementos HTML** | Reseteo universal: quita márgenes y rellenos por defecto de fábrica del navegador e impone `box-sizing: border-box` para cálculos de caja exactos. |
| `body` | **Fondo general y tipografía** | Asigna la tipografía corporativa del sistema, el color de texto base y el color de fondo neutro (`--color-bg-light`). |
| `.barra-navegacion` | **Contenedor `<header>` principal** | Barra fija superior (`position: sticky; top: 0;`). Mantiene el menú accesible durante todo el scroll y delimita el borde inferior con el verde distintivo de la marca. |
| `.enlace-logo` / `.marca` | **Contenedor `<figure>` del logo** | Alinea verticalmente el logo dentro del menú sin romper márgenes ni deformar la navegación. |
| `.logo-principal` | **Imagen del logotipo (`<img>`)** | Fija una altura controlada (`height: 52px; width: auto;`) con `object-fit: contain` para no distorsionar las proporciones del arte original. |
| `.menu-principal` | **Contenedor de enlaces (`<nav>`)** | Organiza horizontalmente los accesos usando `display: flex; gap: 1.5rem;`. |
| `.item-menu` | **Enlaces de navegación (`<a>`)** | Tipografía con peso semi-negrita (`font-weight: 600`), sin subrayado decorativo y con transición suave al pasar el cursor. |
| `.item-menu:hover` | **Estado interactivo del menú** | Cambia el color del texto a verde oscuro cuando el usuario pasa el mouse por encima. |
| `.boton-destacado` | **Botón de cotización en el menú** | Transforma el último enlace en una llamada a la acción resaltada en verde lima con bordes redondeados. |
| `.banner-hero` | **Sección de bienvenida (`<section>`)** | Bloque oscuro superior con alto contraste, centrado de títulos y botones de acción rápida. |
| `.titulo-principal` | **Encabezado principal (`<h1>`)** | Texto titular de gran jerarquía que expone la propuesta de valor principal de la empresa. |
| `.eslogan-marca` | **Eslogan institucional (`<p>`)** | Destaca la frase de marca en el verde institucional (`--color-primary`). |
| `.acciones-hero` | **Contenedor de botones del Hero** | Distribuye los botones principales y secundarios centrados en pantalla. |
| `.boton-primario` / `.boton-secundario` | **Botones de acción (CTA)** | El primario en verde sólido para acciones clave (ver catálogo) y el secundario con contorno blanco para soporte técnico. |
| `.seccion-servicios`, `.seccion-insumos` | **Secciones de contenido (`<section>`)** | Limitan el ancho máximo a $1200\text{ px}$, centrando el contenido con márgenes simétricos para pantallas amplias. |
| `.rejilla-servicios`, `.rejilla-productos` | **Contenedores Grid** | Cuadrículas automáticas responsivas (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) que adaptan las tarjetas de 1 a 4 columnas según la pantalla. |
| `.tarjeta-servicio`, `.tarjeta-producto` | **Tarjetas individuales (`<article>`)** | Bloques blancos con sombra ligera (`box-shadow`), borde superior interactivo y animación sutil hacia arriba (`transform: translateY(-4px)`) al pasar el cursor. |
| `.icono-servicio` | **Icono de cada tarjeta** | Formato de tamaño y separación para los distintivos visuales (térmico y color). |
| `.etiqueta-medida` | **Pastillas de medidas/formatos (`<span>`)** | Pequeños distintivos con fondo verde claro donde se despliegan las dimensiones ($32 \times 25$, $100 \times 50$, nylon, etc.). |
| `.control-filtros` | **Barra de filtros (`<form>`)** | Alinea la etiqueta y el selector desplegable de materiales encima del catálogo. |
| `.pie-pagina` | **Pie de página (`<footer>`)** | Franja oscura inferior con créditos legales y mención a las marcas aliadas (Zebra, TSC, Epson, Ricoh). |

---

## 3. Mapa de Archivos del Proyecto Actual

```text
proyecto-rollo-a-rollo/
│
├── Index.html                  # Portada comercial (Hero, servicios, resumen de insumos)
├── Nosotros.html               # Misión, visión institucional, sedes y cobertura
├── Servicios.html              # Venta y soporte técnico (Zebra, TSC, Epson, Ricoh)
├── Insumos.html                # Catálogo interactivo completo con filtros
├── Contacto.html               # Formulario de cotización e información comercial
│
├── Stylo_Css/
│   └── Styles.css              # Hoja de estilos compartida por todas las vistas
│
├── js/
│   ├── models.js               # Esquema de datos (dataSchema: comerciales, clientes, productos)
│   └── guardarInformacion.js   # Lógica de renderizado y persistencia en localStorage
│
├── Imagenes/
│   └── IMG-20261026-WA0030.jpg # Archivo del logotipo oficial
│
└── DOCUMENTACION_CSS.md        # Esta bitácora técnica de arquitectura y estilos
```

---

## 4. Próximos Entregables del Backlog (Sprint 1 $\rightarrow$ Sprint 2)

* [x] Definición de paleta corporativa y refactorización a HTML5 semántico.
* [x] Maquetación fija del encabezado con logo en flujo estable.
* [x] División del sistema en arquitectura multipágina (`Index.html`, `Nosotros.html`).
* [ ] Maquetación de la vista `Insumos.html` con enlace a ficha detallada por tipo de rollo/material.
* [ ] Formulario de cotización en `Contacto.html` que capture los requerimientos y los guarde en el esquema de clientes de `localStorage`.
* [ ] Preparación del script SQL correlativo al diagrama UML para el posterior despliegue en base de datos.