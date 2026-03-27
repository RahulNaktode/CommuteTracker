import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './view/Home'
import Login from './view/Login'
import Signup from './view/Signup'
import Contact from './view/Contact'
import MapLocator from './MapLocator'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/maplocator' element={<MapLocator />} />
  </Routes>
  </BrowserRouter>
)