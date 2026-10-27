import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useCarritoState } from './context/CartContext';
import Carrito from './pages/Carrito';

function NavbarProvisorio({ totalItems }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary px-4 py-3 mb-4 shadow-sm">
      <Link className="navbar-brand fw-bold text-white" to="/">
        TIENDA <span className="text-primary">GAMER</span>
      </Link>
      <div className="navbar-nav ms-auto d-flex flex-row gap-3">
        <Link className="nav-link text-light" to="/">Inicio</Link>
        <Link className="nav-link text-light" to="/productos">Productos</Link>
        <Link className="nav-link text-warning fw-bold" to="/carrito">
          🛒 Carrito ({totalItems})
        </Link>
      </div>
    </nav>
  );
}
function HomeProvisorio() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold mb-3">
        ELEVÁ TU EXPERIENCIA <span className="text-primary">GAMER</span>
      </h1>
      <p className="text-secondary col-md-6 mx-auto mb-4">
        Página de inicio en desarrollo por el equipo.
      </p>
      <Link to="/productos" className="btn btn-primary px-4 fw-bold">
        Ver Catálogo de Prueba
      </Link>
    </div>
  );
}
function ProductosProvisorio({ carrito, agregarAlCarrito }) {
  const productoDemo = {
    id: 1,
    nombre: 'Joystick Inalámbrico G7',
    precio: 45000,
    imagen: 'https://via.placeholder.com/300x200',
    stock: 5
  };
  const enCarrito = carrito.find((item) => item.id === productoDemo.id);
  const cantidadActual = enCarrito ? enCarrito.cantidad : 0;
  const sinStock = cantidadActual >= productoDemo.stock;
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Catálogo de Productos (Demo)</h2>
      <div className="card bg-dark text-white border-secondary p-3 shadow-sm" style={{ maxWidth: '320px' }}>
        <img 
          src={productoDemo.imagen} 
          alt={productoDemo.nombre} 
          className="card-img-top mb-3 rounded border border-secondary" 
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <h5 className="card-title fw-bold">{productoDemo.nombre}</h5>
        <p className="text-primary fw-bold fs-5 mb-1">${productoDemo.precio.toLocaleString('es-AR')}</p>
        <p className="text-secondary small mb-3">
          Stock disponible: {productoDemo.stock - cantidadActual} de {productoDemo.stock}
        </p>
        <button
          type="button"
          className="btn btn-primary w-100 fw-bold"
          onClick={() => agregarAlCarrito(productoDemo, 1)}
          disabled={sinStock}
        >
          {sinStock ? 'Tope de Stock Alcanzado' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
}
function App() {
  // Obtenemos el estado y funciones sin usar Contexto
  const {
    carrito,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    totalItems,
    totalPrecio
  } = useCarritoState();

  return (
    <BrowserRouter>
      <div className="bg-dark text-white min-vh-100 d-flex flex-column">
        <NavbarProvisorio totalItems={totalItems} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeProvisorio />} />
            <Route 
              path="/productos" 
              element={<ProductosProvisorio carrito={carrito} agregarAlCarrito={agregarAlCarrito} />} 
            />
            <Route 
              path="/carrito" 
              element={
                <Carrito 
                  carrito={carrito} 
                  aumentarCantidad={aumentarCantidad} 
                  disminuirCantidad={disminuirCantidad} 
                  eliminarDelCarrito={eliminarDelCarrito} 
                  vaciarCarrito={vaciarCarrito} 
                  totalItems={totalItems} 
                  totalPrecio={totalPrecio} 
                />
              } 
            />
            <Route path="*" element={<HomeProvisorio />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;