import React from 'react';

function CarritoItem({ item, aumentarCantidad, disminuirCantidad, eliminarDelCarrito }) {
  const subtotal = (item.precio || 0) * (item.cantidad || 1);
  const stockMaximoAlcanzado = item.stock !== undefined && item.cantidad >= item.stock;
  return (
    <div className="card bg-dark text-white border-secondary mb-3 shadow-sm">
      <div className="row g-0 align-items-center p-3">
        <div className="col-3 col-md-2 text-center">
          <div
            className="rounded border border-secondary d-flex align-items-center justify-content-center bg-black mx-auto overflow-hidden"
            style={{ width: '70px', height: '70px' }}
          >
            {item.imagen ? (
              <img
                src={item.imagen}
                alt={item.nombre}
                className="img-fluid w-100 h-100"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = '<span class="fs-2">🎮</span>';
                  }
                }}
              />
            ) : (
              <span className="fs-2">🎮</span>
            )}
          </div>
        </div>
        <div className="col-9 col-md-4 ps-2">
          <h5 className="card-title mb-1 fw-bold">{item.nombre}</h5>
          <p className="card-text text-secondary mb-1 small">
            Precio unitario: ${item.precio ? item.precio.toLocaleString('es-AR') : 0}
          </p>
          {item.stock !== undefined && (
            <span className="badge bg-secondary text-light">
              Stock disp: {item.stock}
            </span>
          )}
        </div>
        <div className="col-6 col-md-3 mt-3 mt-md-0 d-flex align-items-center justify-content-md-center">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm text-white px-2 py-0"
            onClick={() => disminuirCantidad(item.id)}
            disabled={item.cantidad <= 1}
            title={item.cantidad <= 1 ? 'Mínimo 1 unidad' : 'Disminuir cantidad'}
          >
            -
          </button>
          <span className="mx-3 fw-bold fs-5">{item.cantidad}</span>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm text-white px-2 py-0"
            onClick={() => aumentarCantidad(item.id)}
            disabled={stockMaximoAlcanzado}
            title={stockMaximoAlcanzado ? 'Límite de stock alcanzado' : 'Aumentar cantidad'}
          >
            +
          </button>
        </div>
        <div className="col-6 col-md-3 mt-3 mt-md-0 d-flex align-items-center justify-content-between justify-content-md-end gap-3">
          <span className="fw-bold fs-5 text-primary">
            ${subtotal.toLocaleString('es-AR')}
          </span>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => eliminarDelCarrito(item.id)}
            title="Eliminar producto"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarritoItem;