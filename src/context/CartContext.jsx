import { useState, useEffect } from 'react';

// Producto inicial de regalo por defecto
const productoRegalo = {
  id: 'regalo-posavasos',
  nombre: 'Posavasos Gamer "Tienda Gamer" 🎮',
  precio: 50,
  imagen: 'https://via.placeholder.com/150',
  stock: 5,
  cantidad: 1
};
// Custom Hook que encapsula la lógica usando solo useState y useEffect
export const useCarritoState = () => {
  // Inicialización con lectura de localStorage
  const [carrito, setCarrito] = useState(() => {
    try {
      const guardado = localStorage.getItem('carrito_tienda');
      if (guardado) {
        const parsed = JSON.parse(guardado);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return [productoRegalo];
    } catch (error) {
      console.error('Error al leer de localStorage:', error);
      return [productoRegalo];
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
  // Agregar producto respetando stock
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
  // Aumentar cantidad (tope alto de stock)
  const aumentarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock ?? Infinity) }
          : item
      )
    );
  };
  // Disminuir cantidad (tope bajo de 1 unidad)
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
  // Totales calculados en tiempo real
  const totalItems = carrito.reduce((acum, item) => acum + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acum, item) => acum + (item.precio || 0) * item.cantidad, 0);

  return {
    carrito,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    totalItems,
    totalPrecio
  };
};