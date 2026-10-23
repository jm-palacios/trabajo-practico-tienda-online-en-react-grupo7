import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CarritoItem from '../components/CarritoItem';

function Carrito() {
  const { carrito, vaciarCarrito, totalItems, totalPrecio } = useCart();
  const [compraConfirmada, setCompraConfirmada] = useState(false);
  // Manejador para la simulación de compra
  const handleFinalizarCompra = () => {
    if (carrito.length === 0) return;
    setCompraConfirmada(true);
    vaciarCarrito();
  };
  // 1. Vista cuando el carrito está vacío
  if (carrito.length === 0 && !compraConfirmada) {
    return (
      <div className="container my-5 text-center py-5">
        <h2 className="mb-3">🛒 Tu carrito está vacío</h2>
        <p className="text-muted mb-4">
          Parece que todavía no agregaste ningún producto a tu compra.
        </p>
        <Link to="/productos" className="btn btn-primary btn-lg">
          Ver Catálogo de Productos
        </Link>
      </div>
    );
  }
  // 2. Vista principal del carrito
  return (
    <div className="container my-4">
      <h2 className="mb-4">Mi Carrito de Compras</h2>
      {/* Alerta/Mensaje de simulación de compra exitosa */}
      {compraConfirmada && (
        <div className="alert alert-success p-4 my-4 shadow-sm" role="alert">
          <h4 className="alert-heading">🎉 ¡Felicitaciones! Compra realizada con éxito</h4>
          <p>
            Hemos registrado tu pedido correctamente. Esta es una simulación de compra para el TP.
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <span>¡Muchas gracias por elegirnos!</span>
            <Link to="/productos" className="btn btn-outline-success btn-sm">
              Volver al Catálogo
            </Link>
          </div>
        </div>
      )}
      {/* Listado y resumen si no se confirmó la compra todavía */}
      {!compraConfirmada && (
        <div className="row">
          {/* Columna izquierda: Lista de ítems */}
          <div className="col-lg-8">
            {carrito.map((item) => (
              <CarritoItem key={item.id} item={item} />
            ))}
            <div className="d-flex justify-content-start my-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={vaciarCarrito}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
          {/* Columna derecha: Resumen del Pedido */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-3">
              <h4 className="card-title mb-3">Resumen del Pedido</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Cantidad total de productos:</span>
                <span className="fw-bold">{totalItems}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 border-top pt-2">
                <span className="fs-5">Total a pagar:</span>
                <span className="fs-5 fw-bold text-success">
                  ${totalPrecio ? totalPrecio.toLocaleString('es-AR') : 0}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-success w-100 py-2 fs-5"
                onClick={handleFinalizarCompra}
                disabled={carrito.length === 0}
              >
                Confirmar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;