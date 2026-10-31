import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductoCard({ producto, onAgregarAlCarrito }) {
  const { id, nombre, descripcion, precio, imagen, stock } = producto;
  const { toggleFavorito, esFavorito } = useFavorites();
  const enFavoritos = esFavorito(id);

  return (
    <Card className="bg-dark text-white border-secondary h-100 shadow-sm position-relative">
      {/* Botón flotante de Favorito */}
      <Button
        variant="dark"
        size="sm"
        className="position-absolute top-0 end-0 m-2 border-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
        style={{ width: '36px', height: '36px', zIndex: 2 }}
        onClick={() => toggleFavorito(producto)}
        title={enFavoritos ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {enFavoritos ? (
          <FaHeart className="text-danger fs-6" />
        ) : (
          <FaRegHeart className="text-secondary fs-6" />
        )}
      </Button>

      <Card.Img
        variant="top"
        src={imagen || "https://via.placeholder.com/300x200"}
        alt={nombre}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{nombre}</Card.Title>
        <Card.Text className="text-secondary small">
          {descripcion}
        </Card.Text>
        
        <div className="mb-3">
          <small className="text-secondary d-block">
            Stock disponible: {stock}
          </small>
          <span className="fs-5 fw-bold">${precio}</span>
        </div>

        <div className="mt-auto d-flex gap-2">
          {/* Botón para ir al detalle */}
          <Button 
            variant="outline-primary" 
            size="sm" 
            as={Link} 
            to={`/productos/${id}`} 
            className="w-100"
          >
            Ver detalle
          </Button>

          {/* Botón para agregar al carrito si hay función y stock */}
          {onAgregarAlCarrito && (
            <Button
              variant="primary"
              size="sm"
              disabled={stock <= 0}
              onClick={() => onAgregarAlCarrito(producto)}
              className="w-100"
            >
              {stock > 0 ? 'Agregar' : 'Sin stock'}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;