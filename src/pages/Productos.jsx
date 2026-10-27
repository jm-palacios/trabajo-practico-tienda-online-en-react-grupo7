import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";


export const Productos = () => {
  const { agregarAlCarrito } = useCart();
  const [mensaje, setMensaje] = useState("");

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
    setMensaje(`${producto.nombre} se agregó al carrito.`);
  };

  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h1 className="text-center mb-4 fw-bold">
          Catálogo de <span className="text-primary">Productos</span>
        </h1>
        {mensaje && (
          <Alert
            variant="success"
            dismissible
            onClose={() => setMensaje("")}
          >
            {mensaje}
          </Alert>
)}
        <Row className="g-4">
          {productos.map((p) => (
            <Col key={p.id} sm={6} md={4} lg={3}>
              <ProductoCard
                producto={p}
                onAgregarAlCarrito={handleAgregarAlCarrito}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Productos;