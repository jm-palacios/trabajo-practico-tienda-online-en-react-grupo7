import { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el contexto
export const CartContext = createContext();
// Hook personalizado para usar el carrito fácilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
// 2. Proveedor del contexto
export const CartProvider = ({ children }) => {
  // Inicializamos el carrito (opcional: intenta leer de localStorage si existe)
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito_tienda');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  // Guardar en localStorage cada vez que el carrito cambie (Punto extra de persistencia)
  useEffect(() => {
    localStorage.setItem('carrito_tienda', JSON.stringify(carrito));
  }, [carrito]);
  // Función para agregar producto al carrito
  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        // Si ya está, aumentamos su cantidad respetando el stock disponible si existe
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // Si no está, lo agregamos como nuevo ítem
        return [...prevCarrito, { ...producto, cantidad }];
      }
    });
  };
  // Función para eliminar un producto por completo
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };
  // Función para incrementar cantidad (+)
  const aumentarCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };
  // Función para decrementar cantidad (-)
  const disminuirCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) => {
          if (item.id === id) {
            return item.cantidad > 1
              ? { ...item, cantidad: item.cantidad - 1 }
              : null; // Si llega a 0, se filtra después
          }
          return item;
        })
        .filter(Boolean)
    );
  };
  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  // Cantidad total de productos (para mostrar en el badge del Navbar)
  const totalItems = carrito.reduce((acum, item) => acum + item.cantidad, 0);
  // Monto total general (suma de precio * cantidad)
  const totalPrecio = carrito.reduce(
    (acum, item) => acum + item.precio * item.cantidad,
    0
  );
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};