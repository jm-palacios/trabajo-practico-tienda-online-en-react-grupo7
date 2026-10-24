import React from 'react'
import { Link } from 'react-router-dom';

function ProductoCard({ producto, onAgregarAlCarrito }) {
  return (
    <div className='producto-card'>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p> ${producto.precio}</p>
      <p>Stock disponible: {producto.stock}</p>
      
      {producto.stock > 0 ? (
        <>
          <Link to={`/producto/${producto.id}`} className='btn-detalle'>
            <button>Ver detalle</button>
          </Link>
          <button onClick={() => onAgregarAlCarrito(producto)}>
            Agregar al carrito
          </button>
        </>

      ) : (
        <button disabled>Sin stock</button>
      )}

    </div>
  );
}

export default ProductoCard
