import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Carrito from './pages/Carrito';

// Navbar provisorio para navegar y probar el contador de items
function NavbarProvisorio() {
  const { totalItems } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 mb-4 shadow-sm">
      <Link className="navbar-brand fw-bold" to="/">Tienda React</Link>
      <div className="navbar-nav ms-auto d-flex flex-row gap-3">
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/productos">Productos</Link>
        <Link className="nav-link text-warning fw-bold" to="/carrito">
          🛒 Carrito ({totalItems})
        </Link>
      </div>
    </nav>
  );
}
// Vistas provisorias mientras tus compañeros terminan las suyas
function HomeProvisorio() {
  return (
    <div className="container text-center py-5">
      <h1>Bienvenido a la Tienda</h1>
      <p className="text-muted">Página de inicio (en construcción por el equipo)</p>
      <Link to="/carrito" className="btn btn-outline-primary">Ir a ver el Carrito</Link>
    </div>
  );
}
function ProductosProvisorio() {
  const { agregarAlCarrito } = useCart();
  // Producto de prueba con imagen real y stock definido para testear los topes
  const productoDemo = {
    id: 1,
    nombre: 'Zapatillas Deportivas Demo',
    precio: 45000,
    imagen: '[suspicious link removed]',
    stock: 5
  };
  return (
    <div className="container py-4">
      <h2>Catálogo de Productos (Demo de Prueba)</h2>
      <div className="card p-3 mt-3 shadow-sm" style={{ maxWidth: '300px' }}>
        <img 
          src={productoDemo.imagen} 
          alt={productoDemo.nombre} 
          className="card-img-top mb-2 rounded" 
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <h5 className="card-title">{productoDemo.nombre}</h5>
        <p className="text-success fw-bold fs-5">${productoDemo.precio.toLocaleString('es-AR')}</p>
        <p className="text-muted small">Stock disponible: {productoDemo.stock} unidades</p>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={() => agregarAlCarrito(productoDemo, 1)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarProvisorio />
        <Routes>
          <Route path="/" element={<HomeProvisorio />} />
          <Route path="/productos" element={<ProductosProvisorio />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<HomeProvisorio />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;