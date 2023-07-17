import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import PrendasList from './components/Prendas/PrendasList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'
import Error404 from './components/Error404/Error404'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './components/Home/Home'

function App() {
 
  return (

    <BrowserRouter>
      
          <Header/>
      
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/productos/detail/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='*' element={<Error404/>} />

          </Routes>

    </BrowserRouter>
   
  )
}

export default App
