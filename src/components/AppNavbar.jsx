import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // <- Importamos el ícono
import logoG7 from '../assets/G7.png';

function AppNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" className="py-2">
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
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito" className="d-flex align-items-center gap-1">
              <FaShoppingCart /> Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;