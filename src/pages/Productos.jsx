import React from 'react';
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";



export const Productos = () => {
  return (
    <div className="productos-container">
      {productos.map((p) => (
        <ProductoCard key={p.id} producto={p} />
      ))}
    </div>
  );
};

export default Productos
