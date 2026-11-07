# Informe de Cierre y Documentación Técnica — Sprint 2

**Proyecto:** Sitio Web Corporativo "Adhesivos Rollo a Rollo"  
**Objetivo del Sprint:** Consolidación de identidad visual, jerarquía de marca, optimización semántica de código HTML5 y arquitectura multimedia responsiva.  
**Estado:** Finalizado con éxito.

---

## 1. Resumen Ejecutivo del Sprint
Durante el desarrollo del Sprint 2 se resolvieron los principales cuellos de botella visuales y estructurales detectados en la versión inicial desplegada. Se corrigió la distorsión de navegación interna, se reestructuró la escala gráfica del logotipo corporativo respetando las directrices de la marca y se integró el activo multimedia (`video_rollo_a_rollo.mp4`) mediante una arquitectura CSS Grid semántica, compacta y libre de contenedores genéricos redundantes (`<div>`).

---

## 2. Entregables y Modificaciones Técnicas

### A. Jerarquía Gráfica y Reestructuración del Logotipo
* **Ajuste de Escala:** Se redimensionó la palabra principal **"ADHESIVOS"** para otorgarle protagonismo visual de primer nivel, reduciendo de forma proporcional el elemento conectivo del rollo verde y la frase secundaria "ROLLO A ROLLO".
* **Contraste y Estabilidad:** Se mantuvo el encabezado en fondo blanco puro (`#ffffff`) con una línea divisoria inferior verde corporativo de 4px (`border-bottom: 4px solid var(--color-primary)`), asegurando nitidez sobre los caracteres oscuros con textura.
* **Corrección de Navegación (Bug Fix):** Se corrigió la referencia del ancla en el logo (`href="index.html"` en lugar de `href="#inicio"`), eliminando el solapamiento del encabezado fijo sobre el banner principal tras hacer clic.

### B. Optimización Semántica (Arquitectura Limpia HTML5)
* **Eliminación de `<div>` Redundantes:** Se refactorizó el marcado del archivo `index.html` migrando hacia etiquetas nativas del estándar HTML5 (`<header>`, `<main>`, `<figure>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **Integración del Video en el Banner:** Se utilizó la etiqueta semántica `<figure class="caja-video-intro">` directamente dentro de `<section id="inicio" class="banner-hero">`, prescindiendo de envoltorios intermedios.

### C. Integración Multimedia y Solución de Distribución (CSS Grid)
* **Distribución a Dos Columnas:** Para solucionar el crecimiento desproporcionado del banner vertical por el formato del video, se implementó una rejilla de dos áreas (`grid-template-columns: 1fr 260px`):
  * **Columna Izquierda:** Título principal, eslogan institucional y botones de llamada a la acción (*Call to Action*).
  * **Columna Derecha:** Activo multimedia incrustado en marco de 200px con `object-fit: cover`, bordes redondeados y sombras de contraste.
* **Diseño Responsivo:** En resoluciones móviles ($\le 768\text{px}$), la cuadrícula conmuta de forma fluida a una sola columna centrada (`grid-template-columns: 1fr`), optimizando el rendimiento de carga y la visualización táctil.

---

## 3. Matriz de Cambios Técnicos

| Componente | Estado Anterior (Sprint 1) | Estado Implementado (Sprint 2) | Beneficio Técnico / Visual |
| :--- | :--- | :--- | :--- |
| **Logotipo Header** | Reducido (~40px), palabra "Adhesivos" ilegible. | Proporción horizontal optimizada, "Adhesivos" dominante y rollo balanceado. | Identidad de marca sólida y lectura clara. |
| **Enlace del Logo** | `href="#inicio"` (provocaba salto y corte de texto). | `href="index.html"` con `scroll-margin-top` en CSS. | Navegación fluida sin desfasar el banner principal. |
| **Estructura HTML** | Múltiples contenedores `div` anidados. | Semántica pura HTML5 (`figure`, `nav`, `section`). | Código limpio, accesible y más ligero de transferir. |
| **Banner Hero** | Fondo negro plano y apilamiento vertical excesivo. | Degradado verde industrial oscuro en 2 columnas con CSS Grid. | Menor altura de pantalla; el catálogo sube a la primera vista. |
| **Video Intro** | Desbordado al fondo de página en tamaño vertical. | Integrado en `<figure>` compacto (200px) con reproducción fluida. | Impacto visual moderno sin bloquear el flujo web. |

---

## 4. Backlog Priorizado para el Sprint 3

Con la base visual, el logotipo aprobado y la portada estabilizada, el **Sprint 3** se enfocará en la navegación de producto y catálogo:

1. **Menú Desplegable (Dropdown) de Insumos:**
   * Implementación del submenú en la barra de navegación para categorizar: Adhesivos, Papel Litográfico, Nylon/Textil y Cintas Ribbon.
2. **Reubicación y Retiro del Filtro Inferior:**
   * Reestructuración del formulario selector hacia vistas dedicadas por categoría.
3. **Páginas de Aterrizaje por Material:**
   * Maquetación de tarjetas con cajones para fotografías de producto y pastillas de medidas técnicas ($32\times25$, $100\times50$, $110\text{mm}\times74\text{m}$).
4. **Integración Fotográfica en Servicios:**
   * Inclusión del tercer bloque funcional y montaje de las galerías de impresoras industriales (Zebra, TSC, Ricoh, Epson).