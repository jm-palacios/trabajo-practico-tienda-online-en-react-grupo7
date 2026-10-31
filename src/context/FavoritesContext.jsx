import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
  }
  return context;
};

export function FavoritesProvider({ children }) {
  // Inicializa leyendo desde localStorage si existe
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const guardados = localStorage.getItem('g7_favoritos');
      return guardados ? JSON.parse(guardados) : [];
    } catch (error) {
      console.error('Error al leer favoritos de localStorage:', error);
      return [];
    }
  });

  // Cada vez que cambia la lista de favoritos, actualiza localStorage
  useEffect(() => {
    try {
      localStorage.setItem('g7_favoritos', JSON.stringify(favoritos));
    } catch (error) {
      console.error('Error al guardar favoritos en localStorage:', error);
    }
  }, [favoritos]);

  const toggleFavorito = (producto) => {
    setFavoritos((prev) => {
      const existe = prev.some((item) => item.id === producto.id);
      if (existe) {
        return prev.filter((item) => item.id !== producto.id);
      } else {
        return [...prev, producto];
      }
    });
  };

  const esFavorito = (id) => favoritos.some((item) => item.id === id);

  const vaciarFavoritos = () => setFavoritos([]);

  return (
    <FavoritesContext.Provider
      value={{
        favoritos,
        toggleFavorito,
        esFavorito,
        vaciarFavoritos,
        totalFavoritos: favoritos.length
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}