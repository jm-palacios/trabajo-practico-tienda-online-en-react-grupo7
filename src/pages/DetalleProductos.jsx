import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { productos } from '../data/productos';
import { useCart } from '../context/CartContext';
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function DetalleProductos({ onAgregarAlCarrito }) {
  const { id } = useParams();
  const { agregarAlCarrito } = useCart();
  const [mensaje, setMensaje] = useState("");
  
  // Buscar producto por ID
  const producto = productos.find((p) => p.id === parseInt(id));

  // Manejo de producto no encontrado
  if (!producto) {
    return (
      <div className="bg-dark text-white py-5 min-vh-100 d-flex align-items-center">
        <Container className="text-center">
          <h2 className="mb-3">Producto no encontrado</h2>
          <p className="text-secondary mb-4">El producto que buscas no existe o fue removido.</p>
          <Button as={Link} to="/productos" variant="primary">
            Volver al catálogo
          </Button>
        </Container>
      </div>
    );
  }

  const handleAgregar = () => {
    if (agregarAlCarrito) {
      agregarAlCarrito(producto);
      setMensaje(`${producto.nombre} se agregó al carrito.`);
    } else {
      
    }
  };

  return (
    <div className="bg-dark text-white py-5 min-vh-100">
      <Container>
        {/* BOTÓN PARA VOLVER AL CATÁLOGO */}
        <Button as={Link} to="/productos" variant="outline-secondary" className="mb-4">
          ← Volver al catálogo
        </Button>

        <Row className="gy-4 align-items-start">
          {/* IMAGEN AMPLIADA */}
          <Col md={6}>
            <div className="bg-black p-3 rounded border border-secondary text-center">
              <img
                src={producto.imagen || 'https://via.placeholder.com/500x350'}
                alt={producto.nombre}
                className="img-fluid rounded"
                style={{ maxHeight: '450px', objectFit: 'contain' }}
              />
            </div>
          </Col>

          {/* INFORMACIÓN DEL PRODUCTO */}
          <Col md={6}>
            {/* CATEGORÍA */}
            <Badge bg="primary" className="mb-2 fs-6">
              {producto.categoria || 'Gamer'}
            </Badge>

            {/* NOMBRE DEL PRODUCTO */}
            <h1 className="display-5 fw-bold mb-3">{producto.nombre}</h1>

            {/* PRECIO */}
            <h2 className="display-6 fw-bold text-primary mb-3">
              ${producto.precio}
            </h2>

            {/* DESCRIPCIÓN COMPLETA */}
            <p className="lead text-secondary mb-4">
              {producto.descripcion}
            </p>

            {/* STOCK DISPONIBLE */}
            <div className="mb-4">
              <span className={`fw-bold ${producto.stock > 0 ? 'text-success' : 'text-danger'}`}>
                {producto.stock > 0 ? `Stock disponible: ${producto.stock} unidades` : 'Sin stock disponible'}
              </span>
            </div>
            
            {/* MENSAJE AL AGREGAR AL CARRITO */}
            {mensaje && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setMensaje("")}
                className="mb-4"
              >
                {mensaje}
              </Alert>
            )}


            {/* CARACTERÍSTICAS PRINCIPALES */}
            {producto.caracteristicas && producto.caracteristicas.length > 0 && (
              <div className="mb-4">
                <h5 className="fw-bold mb-2">Características principales:</h5>
                <ListGroup variant="flush" className="rounded border border-secondary">
                  {producto.caracteristicas.map((item, index) => (
                    <ListGroup.Item key={index} className="bg-dark text-white border-secondary small">
                      • {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}

            {/* BOTÓN AGREGAR AL CARRITO */}
            <Button
              variant="primary"
              size="lg"
              disabled={producto.stock <= 0}
              onClick={handleAgregar}
              className="w-100 fw-bold py-2"
            >
              {producto.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetalleProductos;