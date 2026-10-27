// Modelo conceptual de datos
const dataSchema = {
  comerciales: [
    { id: 1, nombre: "Comercial Principal", email: "ventas@rolloarollo.com" }
  ],
  clientes: [
    { 
      id: 101, 
      comercialId: 1, // Regla: vinculado a un único comercial
      razonSocial: "Confecciones Textil S.A.", 
      nit: "900.123.456-1",
      telefono: "3001234567" 
    }
  ],
  productos: [
    {
      id: "PROD-01",
      nombre: "Etiqueta Polipropileno",
      tipo: "Insumo",
      material: "Polipropileno brillante",
      descripcion: "Resistente a la fricción y humedad. Ideal para códigos de barras duraderos.",
      medidasDisponibles: ["32x25", "100x50", "100x100", "100x150", "100x200", "64x25"],
      aplicacion: "Precios y marcación textil"
    },
    {
      id: "PROD-02",
      nombre: "Nylon / Cinta Textil",
      tipo: "Insumo",
      material: "Nylon",
      descripcion: "Especial para instrucciones de lavado y costura en prendas de vestir.",
      medidasDisponibles: ["30mm", "35mm", "40mm"],
      aplicacion: "Instrucciones de lavado"
    }
  ],
  cotizaciones: [
    {
      id: "COT-2026-001",
      clienteId: 101,
      fecha: "2026-10-27",
      items: [
        { productoId: "PROD-01", medida: "100x50", cantidad: 10 }
      ],
      estado: "Pendiente"
    }
  ]
};