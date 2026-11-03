import { Form, Row, Col, Button } from "react-bootstrap";

function BuscadorFiltros({ 
  busqueda,
  setBusqueda,
  categoria,
  setCategoria,
  ordenPrecio,
  setOrdenPrecio,
  limpiarFiltros
}) {
  return (
    <section className="buscador-filtros mb-5">

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h2 className="h4 fw-bold mb-0">
          Buscar y filtrar productos
        </h2>

        <Button
          variant="outline-primary"
          size="sm"
          onClick={limpiarFiltros}
        >
          Limpiar filtros
        </Button>
      </div>

      <Row className="g-3">

        {/* BUSCADOR */}
        <Col xs={12} md={4}>
          <Form.Group>
            <Form.Label>Buscar producto</Form.Label>

            <Form.Control
              type="text"
              placeholder="Ej: The Sims..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Form.Group>
        </Col>

        {/* CATEGORÍAS */}
        <Col xs={12} md={4}>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>

            <Form.Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Todas">Todas las categorías</option>
              <option value="Videojuegos">Videojuegos</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Servicios">Servicios</option>
              <option value="Hardware">Hardware</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* ORDEN POR PRECIO */}
        <Col xs={12} md={4}>
          <Form.Group>
            <Form.Label>Ordenar por precio</Form.Label>

            <Form.Select
              value={ordenPrecio}
              onChange={(e) => setOrdenPrecio(e.target.value)}
            >
              <option value="ninguno">Orden original</option>
              <option value="menor">Menor a mayor</option>
              <option value="mayor">Mayor a menor</option>
            </Form.Select>
          </Form.Group>
        </Col>

      </Row>
    </section>
  );
}

export default BuscadorFiltros;
