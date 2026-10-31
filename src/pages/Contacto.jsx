import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h1 className="fw-bold text-white">
              Contacto <span className="text-primary">G7</span>
            </h1>
            <p className="text-secondary">
              ¿Tenés dudas, consultas o buscás un producto específico? Escribinos y te responderemos a la brevedad.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Información de Contacto */}
          <Col md={5}>
            <Card className="bg-dark text-white border-secondary h-100 shadow-sm p-3">
              <Card.Body>
                <h3 className="card-title h4 mb-4 text-primary fw-bold">Información de Atención</h3>
                
                <div className="d-flex align-items-center mb-4">
                  <FaEnvelope className="text-primary me-3 fs-4" />
                  <div>
                    <h6 className="mb-0 text-white">Email</h6>
                    <small className="text-secondary">soporte@g7games.com</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <FaPhone className="text-primary me-3 fs-4" />
                  <div>
                    <h6 className="mb-0 text-white">Teléfono / WhatsApp</h6>
                    <small className="text-secondary">+54 11 4444-5555</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <FaMapMarkerAlt className="text-primary me-3 fs-4" />
                  <div>
                    <h6 className="mb-0 text-white">Ubicación</h6>
                    <small className="text-secondary">Buenos Aires, Argentina</small>
                  </div>
                </div>

                <hr className="border-secondary my-4" />

                <div>
                  <h6 className="text-primary fw-bold">Horarios de Atención</h6>
                  <p className="small text-secondary mb-1">Lunes a Viernes: 09:00 - 18:00 hs</p>
                  <p className="small text-secondary mb-0">Sábados: 10:00 - 14:00 hs</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario de Contacto */}
          <Col md={7}>
            <Card className="bg-dark text-white border-secondary shadow-sm p-3">
              <Card.Body>
                <h3 className="card-title h4 mb-4 text-primary fw-bold">Envíanos tu mensaje</h3>

                {enviado && (
                  <Alert variant="success" className="mb-4 bg-success text-white border-0">
                    ¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="nombre">
                        <Form.Label className="text-secondary small">Nombre Completo</Form.Label>
                        <Form.Control
                          type="text"
                          name="nombre"
                          placeholder="Ej: Juan Pérez"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label className="text-secondary small">Correo Electrónico</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="nombre@ejemplo.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="asunto">
                        <Form.Label className="text-secondary small">Asunto</Form.Label>
                        <Form.Control
                          type="text"
                          name="asunto"
                          placeholder="Consulta sobre stock, envío, etc."
                          value={formData.asunto}
                          onChange={handleChange}
                          required
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="mensaje">
                        <Form.Label className="text-secondary small">Mensaje</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="mensaje"
                          placeholder="Escribí tu consulta aquí..."
                          value={formData.mensaje}
                          onChange={handleChange}
                          required
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} className="text-end mt-4">
                      <Button variant="primary" type="submit" className="px-4 fw-bold">
                        <FaPaperPlane className="me-2" /> Enviar Mensaje
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacto;