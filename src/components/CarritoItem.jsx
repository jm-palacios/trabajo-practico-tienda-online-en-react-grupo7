import React from 'react';
import { useCart } from '../context/CartContext';

function CarritoItem({ item }) {
  const { aumentarCantidad, disminuirCantidad, eliminarDelCarrito } = useCart();
  // Subtotal individual: precio unitario * cantidad
  const subtotal = item.precio * item.cantidad;
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center p-2">
        {/* Imagen del producto */}
        <div className="col-3 col-md-2 text-center">
          <img
            src={item.imagen || '[suspicious link removed]'}
            alt={item.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: '80px', objectFit: 'cover' }}
          />
        </div>
        {/* Datos: Nombre y Precio Unitario */}
        <div className="col-9 col-md-4">
          <h5 className="card-title mb-1">{item.nombre}</h5>
          <p className="card-text text-muted mb-0 small">
            Precio unitario: ${item.precio ? item.precio.toLocaleString('es-AR') : 0}
          </p>
        </div>
        {/* Controles para modificar cantidad (+ / -) */}
        <div className="col-6 col-md-3 mt-2 mt-md-0 d-flex align-items-center justify-content-md-center">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => disminuirCantidad(item.id)}
            title="Disminuir cantidad"
          >
            -
          </button>
          <span className="mx-3 fw-bold">{item.cantidad}</span>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => aumentarCantidad(item.id)}
            title="Aumentar cantidad"
          >
            +
          </button>
        </div>
        {/* Subtotal y Botón de Eliminar */}
        <div className="col-6 col-md-3 mt-2 mt-md-0 d-flex align-items-center justify-content-between justify-content-md-end gap-2">
          <span className="fw-bold text-primary">
            ${subtotal.toLocaleString('es-AR')}
          </span>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => eliminarDelCarrito(item.id)}
            title="Eliminar del carrito"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarritoItem;