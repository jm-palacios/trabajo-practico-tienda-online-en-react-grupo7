import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/productos'>Producto</Nav.Link>
            <Nav.Link as={NavLink} to='/contacto'>Contacto</Nav.Link>
            <Nav.Link as={NavLink} to='/carrito'>Carrito</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </>
  );
}

export default AppNavbar;