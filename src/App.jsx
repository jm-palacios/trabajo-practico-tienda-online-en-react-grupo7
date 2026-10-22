import React from 'react'
import { Route, Routes } from 'react-router-dom'
//Importacion de Rutas
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import DetalleProductos from './pages/DetalleProductos'
//Importacion de componentes
import Header from './components/Header'


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/productos/:id' element={<DetalleProductos />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
