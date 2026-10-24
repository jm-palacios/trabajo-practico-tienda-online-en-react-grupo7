import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
export const CartProvider = ({ children }) => {
  // Inicialización con try/catch para evitar caídas por datos corruptos
  const [carrito, setCarrito] = useState(() => {
    try {
      const guardado = localStorage.getItem('carrito_tienda');
      return guardado ? JSON.parse(guardado) : [];
    } catch (error) {
      console.error('Error al leer de localStorage:', error);
      return [];
    }
  });
  // Guardado en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carrito_tienda', JSON.stringify(carrito));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [carrito]);
  // Agregar al carrito con validación de stock
  const agregarAlCarrito = (producto, cantidad = 1) => {
    const stockDisponible = producto.stock ?? Infinity;
    if (stockDisponible <= 0) return; // Bloquear si no hay stock
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        const nuevaCantidad = existe.cantidad + cantidad;
        // Si supera el stock, lo limitamos al máximo disponible
        if (nuevaCantidad > stockDisponible) {
          return prevCarrito.map((item) =>
            item.id === producto.id ? { ...item, cantidad: stockDisponible } : item
          );
        }
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: nuevaCantidad } : item
        );
      }
      const cantidadInicial = Math.min(cantidad, stockDisponible);
      return [...prevCarrito, { ...producto, cantidad: cantidadInicial }];
    });
  };
  // Aumentar cantidad con tope de stock
  const aumentarCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) => {
        if (item.id === id) {
          const maxStock = item.stock ?? Infinity;
          if (item.cantidad < maxStock) {
            return { ...item, cantidad: item.cantidad + 1 };
          }
        }
        return item;
      })
    );
  };
  // Disminuir cantidad
  const disminuirCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) => {
          if (item.id === id) {
            return item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };
  // Eliminar producto
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };
  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const totalItems = carrito.reduce((acum, item) => acum + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);
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