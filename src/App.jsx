import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import DetalleProductos from "./pages/DetalleProductos";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal con el catálogo */}
        <Route path="/" element={<Productos />} />

        {/* Ruta dinámica para detalle */}
        <Route path="/producto/:id" element={<DetalleProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
