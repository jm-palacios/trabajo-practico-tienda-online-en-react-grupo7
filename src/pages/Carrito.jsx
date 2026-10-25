import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CarritoItem from '../components/CarritoItem';

function Carrito() {
  const { carrito, vaciarCarrito, totalItems, totalPrecio } = useCart();
  // Estado local para controlar el mensaje de confirmación en pantalla
  const [compraConfirmada, setCompraConfirmada] = useState(false);
  const [datosUltimaCompra, setDatosUltimaCompra] = useState({ totalItems: 0, totalPrecio: 0 });
  const handleConfirmarCompra = () => {
    if (carrito.length === 0) return;
    // Guardamos los totales para mostrarlos en el mensaje de éxito
    setDatosUltimaCompra({ totalItems, totalPrecio });
    setCompraConfirmada(true);
    // Vaciamos el carrito tras confirmar la compra
    vaciarCarrito();
  };
  // 1. Vista de Confirmación de Compra Exitosa (Cartel integrado)
  if (compraConfirmada) {
    return (
      <div className="container py-5 text-center text-white">
        <div className="card bg-dark text-white border-success p-5 shadow-lg col-md-8 mx-auto">
          <div className="display-1 text-success mb-3">✅</div>
          <h2 className="fw-bold mb-3 text-success">¡Compra Confirmada con Éxito!</h2>
          <p className="lead text-light mb-2">
            Tu pedido fue procesado correctamente (Simulación de compra).
          </p>
          <div className="bg-black border border-secondary rounded p-3 my-4 col-md-8 mx-auto">
            <p className="mb-1 text-secondary">
              Productos comprados: <strong className="text-white">{datosUltimaCompra.totalItems}</strong>
            </p>
            <p className="mb-0 text-secondary">
              Total abonado: <strong className="text-primary fs-5">${datosUltimaCompra.totalPrecio.toLocaleString('es-AR')}</strong>
            </p>
          </div>
          <div>
            <Link 
              to="/productos" 
              className="btn btn-primary px-4 py-2 fw-bold"
              onClick={() => setCompraConfirmada(false)}
            >
              Volver al Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // 2. Vista de Carrito Vacío
  if (carrito.length === 0) {
    return (
      <div className="container py-5 text-center text-white">
        <div className="card bg-dark text-white border-secondary p-5 shadow-sm col-md-8 mx-auto">
          <h2 className="fw-bold mb-3">Tu carrito está vacío 🛒</h2>
          <p className="text-secondary mb-4">
            Parece que todavía no agregaste ningún producto a tu compra.
          </p>
          <div>
            <Link to="/productos" className="btn btn-primary px-4 fw-bold">
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // 3. Vista Principal del Carrito
  return (
    <div className="container py-4 text-white">
      <h2 className="mb-4 fw-bold">Mi Carrito de Compras</h2>
      <div className="row g-4">
        {/* Columna Izquierda: Lista de productos */}
        <div className="col-lg-8">
          {carrito.map((item) => (
            <CarritoItem key={item.id} item={item} />
          ))}
          {/* Botón para vaciar todo el carrito */}
          <div className="d-flex justify-content-start mt-3">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
        {/* Columna Derecha: Resumen del Pedido */}
        <div className="col-lg-4">
          <div className="card bg-dark text-white border-secondary p-4 shadow-sm">
            <h4 className="fw-bold mb-3 border-bottom border-secondary pb-2">
              Resumen del Pedido
            </h4>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Cantidad de productos:</span>
              <span className="fw-bold">{totalItems}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="text-secondary">Total a pagar:</span>
              <span className="fw-bold text-primary fs-4">
                ${totalPrecio.toLocaleString('es-AR')}
              </span>
            </div>
            <button
              type="button"
              className="btn btn-primary w-100 py-2 fw-bold"
              onClick={handleConfirmarCompra}
            >
              Confirmar Compra
            </button>
            <small className="text-secondary text-center d-block mt-2">
              Simulación de compra sin cobro real
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;