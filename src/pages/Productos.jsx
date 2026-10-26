import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";

export const Productos = () => {
  const handleAgregarAlCarrito = (producto) => {
    console.log("Agregado al carrito:", producto);
    // Aquí iría la lógica global o Context del carrito de tu equipo
  };

  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h1 className="text-center mb-4 fw-bold">
          Catálogo de <span className="text-primary">Productos</span>
        </h1>

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