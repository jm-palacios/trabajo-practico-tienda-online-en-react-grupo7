import React from 'react'

function ProductoCard({ producto }) {
  return (
    <div className='producto-card'>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p> ${producto.precio}</p>
      {producto.stock > 0 ?(
        <button>Agregar al carrito</button>
      ) : (
        <p className="sin-stock">Sin stock</p>
      )}
      
    </div>
  );
}

export default ProductoCard
