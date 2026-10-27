import { useState } from "react";

function BuscadorFiltros({ productos = [] }) {
  // Guardamos lo que escribe o selecciona el usuario
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [ordenPrecio, setOrdenPrecio] = useState("ninguno");

  // Filtramos por nombre y categoría
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    return coincideNombre && coincideCategoria;
  });

  // Ordenamos por precio
  if (ordenPrecio === "menor") {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  }

  if (ordenPrecio === "mayor") {
    productosFiltrados.sort((a, b) => b.precio - a.precio);
  }

  return (
    <section>
      <h2>Buscar productos</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas las categorías</option>
        <option value="Videojuegos">Videojuegos</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Servicios">Servicios</option>
        <option value="Hardware">Hardware</option>
      </select>

      <select
        value={ordenPrecio}
        onChange={(evento) => setOrdenPrecio(evento.target.value)}
      >
        <option value="ninguno">Orden original</option>
        <option value="menor">Precio: menor a mayor</option>
        <option value="mayor">Precio: mayor a menor</option>
      </select>

      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>

      {productosFiltrados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </section>
  );
}

export default BuscadorFiltros;
