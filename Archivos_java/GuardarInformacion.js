// Inicializar localStorage utilizando los productos del esquema
function inicializarStorage() {
  if (!localStorage.getItem("rollo_catalogo")) {
    localStorage.setItem("rollo_catalogo", JSON.stringify(dataSchema.productos));
  }
}

// Renderizado de tarjetas semánticas <article> en el HTML
function renderizarProductos(productos) {
  const container = document.getElementById("contenedorProductos");
  if (!container) return;

  container.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("article");
    card.className = "tarjeta-producto";

    const badges = prod.medidasDisponibles
      .map(medida => `<span class="etiqueta-medida">${medida}</span>`)
      .join(" ");

    card.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p style="margin: 0.6rem 0; color: #555;">${prod.descripcion}</p>
      <div style="margin-top: 1rem;">
        <strong>Medidas y Formatos:</strong>
        <div style="margin-top: 0.4rem;">${badges}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Filtro interactivo por material
window.filtrarProductos = function() {
  const select = document.getElementById("filtroMaterial");
  if (!select) return;

  const valor = select.value;
  const catalogo = JSON.parse(localStorage.getItem("rollo_catalogo")) || dataSchema.productos;

  if (valor === "todos") {
    renderizarProductos(catalogo);
  } else {
    const filtrados = catalogo.filter(p => p.material === valor);
    renderizarProductos(filtrados);
  }
};

// Carga inicial
const video = document.getElementById('video-boomerang');

if (video) {
  let retrocediendo = false;
  let intervaloRetroceso = null;

  // 1. Cuando llega al final, activamos el rebobinado suave
  video.addEventListener('ended', () => {
    retrocediendo = true;
    intervaloRetroceso = setInterval(() => {
      // Va retrocediendo de a 0.06 segundos
      if (video.currentTime > 0.08) {
        video.currentTime -= 0.06;
      } else {
        // Al llegar al inicio, vuelve a arrancar hacia adelante
        clearInterval(intervaloRetroceso);
        retrocediendo = false;
        video.currentTime = 0;
        video.play();
      }
    }, 33); // Aproximadamente 30 cuadros por segundo
  });
}