import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaTruckFast, FaShieldHalved, FaCreditCard, FaHeadset } from 'react-icons/fa6';

function Inicio() {
  return (
    <div className="bg-dark text-white">
      {/* 1. HERO SECTION */}
      <section className="py-5 text-center bg-gradient border-bottom border-secondary">
        <Container className="py-4">
          <h1 className="display-4 fw-bold text-white mb-3">
            ELEVÁ TU EXPERIENCIA <span className="text-primary">GAMER</span>
          </h1>
          <p className="lead text-secondary col-lg-8 mx-auto mb-4">
            Encontrá las mejores consolas, accesorios y juegos de última generación con envío inmediato y garantía oficial.
          </p>
          <Button as={Link} to="/productos" variant="primary" size="lg" className="fw-bold px-4">
            Ver Catálogo
          </Button>
        </Container>
      </section>

      {/* 2. VENTAJAS / CONFIANZA */}
      <section className="py-4 bg-dark border-bottom border-secondary">
        <Container>
          <Row className="text-center gy-3">
            <Col sm={6} md={3}>
              <FaTruckFast className="fs-2 text-primary mb-2" />
              <h6 className="fw-bold mb-1">Envíos a todo el país</h6>
              <small className="text-secondary">Rápido y seguro</small>
            </Col>
            <Col sm={6} md={3}>
              <FaShieldHalved className="fs-2 text-primary mb-2" />
              <h6 className="fw-bold mb-1">Garantía Oficial</h6>
              <small className="text-secondary">En todos los productos</small>
            </Col>
            <Col sm={6} md={3}>
              <FaCreditCard className="fs-2 text-primary mb-2" />
              <h6 className="fw-bold mb-1">Cuotas sin interés</h6>
              <small className="text-secondary">Con tarjetas seleccionadas</small>
            </Col>
            <Col sm={6} md={3}>
              <FaHeadset className="fs-2 text-primary mb-2" />
              <h6 className="fw-bold mb-1">Soporte 24/7</h6>
              <small className="text-secondary">Atención personalizada</small>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. PRODUCTOS DESTACADOS (Preview) */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Productos Destacados</h2>
          <Row className="g-4">
            {/* Ejemplo de tarjeta 1 */}
            <Col md={4}>
              <Card className="bg-dark text-white border-secondary h-100 shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Producto" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Joystick Inalámbrico G7</Card.Title>
                  <Card.Text className="text-secondary small">
                    Control de alta precisión con vibración háptica.
                  </Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fs-5 fw-bold">$45.000</span>
                    <Button variant="outline-primary" size="sm" as={Link} to="/productos">
                      Ver detalle
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Inicio;