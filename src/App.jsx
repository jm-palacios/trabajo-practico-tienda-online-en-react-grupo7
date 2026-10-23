import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Carrito from './pages/Carrito';

// Navbar provisorio para navegar y probar el contador de items
function NavbarProvisorio() {
  const { totalItems } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 mb-4">
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
// Vistas provisorias para que no rompa si aún no existen los archivos de tus compañeros
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
  // Producto de prueba para testear que el carrito sume ítems correctamente
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
      <div className="card p-3 mt-3" style={{ maxWidth: '300px' }}>
        <h5>{productoDemo.nombre}</h5>
        <p className="text-success fw-bold">${productoDemo.precio}</p>
        <button
          className="btn btn-primary"
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