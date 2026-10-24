import React from 'react'
import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";

function DetalleProductos() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className='detalle-producto'>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>

      {/*BOTÓN PARA VOLVER AL CATÁLOGO*/}
      <Link to="/" className='btn-volver'>
        Volver al catálogo
      </Link>
    </div>
  );
}

export default DetalleProductos;
