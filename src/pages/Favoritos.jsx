import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { FaHeart, FaTrash, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

function Favoritos() {
  const { favoritos, toggleFavorito, vaciarFavoritos } = useFavorites();
  const { agregarAlCarrito } = useCart();

  if (favoritos.length === 0) {
    return (
      <div className="container py-5 text-center text-white min-vh-100 d-flex align-items-center justify-content-center">
        <div className="card bg-dark text-white border-secondary p-5 shadow-sm col-md-8 col-lg-6">
          <div className="fs-1 text-danger mb-3">
            <FaHeart />
          </div>
          <h2 className="fw-bold mb-3">Aún no tenés favoritos ❤️</h2>
          <p className="text-secondary mb-4">
            Explorá el catálogo y marcá los juegos o periféricos que más te gusten para guardarlos acá.
          </p>
          <div>
            <Link to="/productos" className="btn btn-primary px-4 py-2 fw-bold">
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 text-white min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-3">
        <div>
          <h2 className="fw-bold mb-1">
            Mis Favoritos <span className="text-primary">❤️</span>
          </h2>
          <p className="text-secondary mb-0 small">
            Tenés {favoritos.length} {favoritos.length === 1 ? 'producto guardado' : 'productos guardados'}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={vaciarFavoritos}
        >
          <FaTrash className="me-2" /> Vaciar Favoritos
        </button>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {favoritos.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card bg-dark text-white border-secondary h-100 shadow-sm position-relative">
              {/* Botón flotante para quitar de favoritos */}
              <button
                type="button"
                className="btn btn-sm btn-dark position-absolute top-0 end-0 m-2 border-secondary text-danger"
                onClick={() => toggleFavorito(producto)}
                title="Quitar de favoritos"
              >
                <FaHeart />
              </button>

              <div
                className="bg-black d-flex align-items-center justify-content-center border-bottom border-secondary overflow-hidden"
                style={{ height: '180px' }}
              >
                {producto.imagen ? (
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="img-fluid h-100 w-100 p-2"
                    style={{ objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = '<span class="fs-1">🎮</span>';
                      }
                    }}
                  />
                ) : (
                  <span className="fs-1">🎮</span>
                )}
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-white mb-2">{producto.nombre}</h5>
                  <p className="card-text text-primary fs-5 fw-bold mb-3">
                    ${producto.precio ? producto.precio.toLocaleString('es-AR') : 0}
                  </p>
                </div>

                <div className="d-grid gap-2 mt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm fw-bold"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    <FaShoppingCart className="me-2" /> Agregar al Carrito
                  </button>
                  <Link
                    to={`/producto/${producto.id}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Link to="/productos" className="btn btn-outline-secondary">
          <FaArrowLeft className="me-2" /> Volver al Catálogo
        </Link>
      </div>
    </div>
  );
}

export default Favoritos;