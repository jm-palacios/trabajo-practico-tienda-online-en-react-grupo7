import React from 'react';
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";



export const Productos = () => {
  const handleAgregarAlCarrito = (producto) => {
    console.log("Agregado al carrito:", producto);
  };

  return (
    <div className="productos-container">
      {productos.map((p) => (
        <ProductoCard
          key={p.id}
          producto={p}
          onAgregarAlCarrito={handleAgregarAlCarrito}
        />
      ))}
    </div>
  );
};

export default Productos
