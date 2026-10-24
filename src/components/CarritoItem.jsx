import React from 'react';
import { useCart } from '../context/CartContext';

function CarritoItem({ item }) {
  const { aumentarCantidad, disminuirCantidad, eliminarDelCarrito } = useCart();
  const subtotal = item.precio * item.cantidad;
  const stockMaximoAlcanzado = item.stock !== undefined && item.cantidad >= item.stock;
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center p-2">
        <div className="col-3 col-md-2 text-center">
          <img
            src={item.imagen || '/img/placeholder.png'}
            alt={item.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: '80px', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.src = '[suspicious link removed]';
            }}
          />
        </div>
        <div className="col-9 col-md-4">
          <h5 className="card-title mb-1">{item.nombre}</h5>
          <p className="card-text text-muted mb-0 small">
            Precio unitario: ${item.precio ? item.precio.toLocaleString('es-AR') : 0}
          </p>
          {item.stock !== undefined && (
            <span className="badge bg-light text-secondary border">
              Stock disp: {item.stock}
            </span>
          )}
        </div>
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
            disabled={stockMaximoAlcanzado}
            title={stockMaximoAlcanzado ? 'Límite de stock alcanzado' : 'Aumentar cantidad'}
          >
            +
          </button>
        </div>
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