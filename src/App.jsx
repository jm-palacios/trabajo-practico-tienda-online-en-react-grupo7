import React from 'react'
import { Route, Routes } from 'react-router-dom'
//Importacion de Rutas
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import NotFound from './pages/NotFound'
import DetalleProductos from './pages/DetalleProductos'
import Nosotros from './pages/Nosotros'
//Importacion de componentes
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/productos/:id' element={<DetalleProductos />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
