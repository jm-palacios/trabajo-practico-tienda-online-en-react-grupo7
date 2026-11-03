import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import BuscadorFiltros from '../components/BuscadorFiltros';


export const Productos = () => {
  const { agregarAlCarrito } = useCart();
  const [mensaje, setMensaje] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [ordenPrecio, setOrdenPrecio] = useState("ninguno");

  const productosFiltrados = productos
    .filter((producto) => {

      // Comprobar nombre
      const coincideNombre = producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      // Comprobar categoría
      const coincideCategoria =
        categoria === "Todas" ||
        producto.categoria === categoria;

      return coincideNombre && coincideCategoria;
    })
    .sort((a, b) => {

      // Menor a mayor
      if (ordenPrecio === "menor") {
        return a.precio - b.precio;
      }

      // Mayor a menor
      if (ordenPrecio === "mayor") {
        return b.precio - a.precio;
      }

      return 0;
    });

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setOrdenPrecio("ninguno");
  };

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
        <BuscadorFiltros
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          categoria={categoria}
          setCategoria={setCategoria}
          ordenPrecio={ordenPrecio}
          setOrdenPrecio={setOrdenPrecio}
          limpiarFiltros={limpiarFiltros}
        />

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 fw-bold mb-0">
            Nuestros productos
          </h2>

          <span className="badge bg-primary fs-6">
            {productosFiltrados.length} resultados
          </span>
        </div>

        <Row className="g-4">
          {productosFiltrados.map((p) => (
            <Col key={p.id} sm={6} md={4} lg={3}>
              <ProductoCard
                producto={p}
                onAgregarAlCarrito={handleAgregarAlCarrito}
              />
            </Col>
          ))}
        </Row>

        {productosFiltrados.length === 0 && (
          <Alert variant="warning" className="text-center mt-4">
            No se encontraron productos que coincidan con tu búsqueda.
          </Alert>
        )}

      </Container>
    </div>
  );
};

export default Productos;