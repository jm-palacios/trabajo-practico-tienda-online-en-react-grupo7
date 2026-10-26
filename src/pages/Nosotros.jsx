import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaGamepad, FaBullseye, FaRocket, FaUsers } from 'react-icons/fa6';

function Nosotros() {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        {/* TITULO PRINCIPAL */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Sobre <span className="text-primary">G7 Games</span></h1>
          <p className="lead text-secondary col-lg-8 mx-auto">
            Pasión por los videojuegos, compromiso con la comunidad gamer.
          </p>
        </div>

        {/* 1. NUESTRA HISTORIA */}
        <Row className="align-items-center mb-5 gy-4">
          <Col md={6}>
            <h2 className="fw-bold mb-3">Nuestra Historia</h2>
            <p className="text-secondary">
              Nacimos como un proyecto apasionado por la tecnología y los videojuegos. Vimos la necesidad de contar con una tienda especializada que no solo venda hardware y juegos, sino que entienda el valor de cada partida y la exigencia de cada jugador.
            </p>
            <p className="text-secondary">
              Desde nuestros inicios, trabajamos para seleccionar los mejores componentes, consolas y periféricos, garantizando calidad, autenticidad y el mejor soporte técnico postventa.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="p-5 bg-gradient rounded-3 border border-secondary d-flex flex-column align-items-center justify-content-center">
              <FaGamepad className="display-1 text-primary mb-3" />
              <h4 className="fw-bold">G7 Games Team</h4>
            </div>
          </Col>
        </Row>

        {/* 2. OBJETIVOS / MISION Y VISION */}
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="bg-dark text-white border-secondary h-100 p-3 shadow-sm">
              <Card.Body>
                <FaBullseye className="fs-1 text-primary mb-3" />
                <Card.Title className="fw-bold fs-3 mb-3">Nuestra Misión</Card.Title>
                <Card.Text className="text-secondary">
                  Brindar a la comunidad gamer acceso a la última tecnología, consolas y videojuegos con una experiencia de compra transparente, rápida y un asesoramiento de jugador a jugador.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-dark text-white border-secondary h-100 p-3 shadow-sm">
              <Card.Body>
                <FaRocket className="fs-1 text-primary mb-3" />
                <Card.Title className="fw-bold fs-3 mb-3">Nuestra Visión</Card.Title>
                <Card.Text className="text-secondary">
                  Consolidarnos como el e-commerce gamer referente en la región, expandiendo nuestro catálogo continuo y fomentando el crecimiento del ecosistema gaming y los eSports.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* 3. VALORES */}
        <div className="text-center pt-4 border-top border-secondary">
          <h3 className="fw-bold mb-4">¿Por qué elegirnos?</h3>
          <Row className="g-4">
            <Col sm={6} md={4}>
              <div className="p-3">
                <FaUsers className="fs-2 text-primary mb-2" />
                <h5 className="fw-bold">Comunidad Primero</h5>
                <small className="text-secondary">Entendemos tus necesidades porque compartimos la misma pasión.</small>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <FaGamepad className="fs-2 text-primary mb-2" />
              <h5 className="fw-bold">Calidad Garantizada</h5>
              <small className="text-secondary">Trabajamos exclusivamente con marcas y distribuidores oficiales.</small>
            </Col>
            <Col sm={6} md={4}>
              <FaRocket className="fs-2 text-primary mb-2" />
              <h5 className="fw-bold">Innovación Constante</h5>
              <small className="text-secondary">Actualizamos nuestro catálogo con los últimos lanzamientos del mercado.</small>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Nosotros;