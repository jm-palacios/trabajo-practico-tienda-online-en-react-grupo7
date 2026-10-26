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
  // Inicialización con try/catch contra datos corruptos en localStorage
  const [carrito, setCarrito] = useState(() => {
    try {
      const guardado = localStorage.getItem('carrito_tienda');
      return guardado ? JSON.parse(guardado) : [];
    } catch (error) {
      console.error('Error al leer de localStorage:', error);
      return [];
    }
  });
  // Guardado automático en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carrito_tienda', JSON.stringify(carrito));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [carrito]);
  // Agregar al carrito: usa Math.min para no superar nunca el stock disponible
  const agregarAlCarrito = (producto, cantidad = 1) => {
    const stockDisponible = producto.stock ?? Infinity;
    if (stockDisponible <= 0) return;
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      return existe
        ? prev.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: Math.min(item.cantidad + cantidad, stockDisponible) }
              : item
          )
        : [...prev, { ...producto, cantidad: Math.min(cantidad, stockDisponible) }];
    });
  };
  // Aumentar cantidad: Math.min garantiza el tope máximo de stock en una sola línea
  const aumentarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock ?? Infinity) }
          : item
      )
    );
  };
  // Disminuir cantidad: Math.max garantiza el tope mínimo de 1 unidad en una sola línea
  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
          : item
      )
    );
  };
  // Eliminar producto por ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };
  // Vaciar carrito
  const vaciarCarrito = () => setCarrito([]);
  // Cálculos en tiempo real
  const totalItems = carrito.reduce((acum, item) => acum + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acum, item) => acum + (item.precio || 0) * item.cantidad, 0);
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