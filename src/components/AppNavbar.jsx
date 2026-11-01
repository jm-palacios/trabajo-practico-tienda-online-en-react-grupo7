import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';
import logoG7 from '../assets/G7.png';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useState, useEffect } from 'react';

function AppNavbar() {
  const { totalItems } = useCart();
  const { totalFavoritos } = useFavorites();
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  const cambiarTema = () => {
    setTema((temaActual) => (temaActual === 'dark' ? 'light' : 'dark'));
  };

  return (
    // Quitamos data-bs-theme="dark" para que la Navbar acompañe al tema global
    <Navbar bg="dark" expand="md" className="py-2">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center gap-2">
          <img
            src={logoG7}
            alt="Logo G7 Games"
            width="48"
            height="48"
            className="rounded-circle shadow-sm"
          />
          <span className="fw-bold text-white fs-4">G7 Games</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/favoritos" className="d-flex align-items-center gap-1 position-relative">
              Favoritos
              {totalFavoritos > 0 && (
                <span className="badge rounded-pill bg-danger ms-1">
                  {totalFavoritos}
                </span>
              )}
            </Nav.Link>

            {/* Corregido el template literal con backticks (`) */}
            <Nav.Link 
              as={NavLink} 
              to="/carrito" 
              className="d-flex align-items-center gap-2 position-relative" 
              aria-label={`Carrito de compras, ${totalItems} productos`}
            >
              <span className="position-relative d-inline-flex">
                <FaShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="badge rounded-pill bg-danger carrito-badge">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </span>
              Carrito
            </Nav.Link>

            {/* Botón integrado como si fuera un Nav.Link más */}
            <button 
              type="button"
              className="btn nav-link d-flex align-items-center gap-2 border-0 px-2 py-1 ms-md-2"
              onClick={cambiarTema}
              aria-label={tema === 'dark' ? 'Activar modo Claro' : 'Activar modo Oscuro'}
              title={tema === 'dark' ? 'Activar modo Claro' : 'Activar modo Oscuro'}
            >
              {tema === 'dark' ? (
                <>
                  <FaSun className="text-warning" size={18} />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <FaMoon className="text-info" size={18} />
                  <span>Modo Oscuro</span>
                </>
              )}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;