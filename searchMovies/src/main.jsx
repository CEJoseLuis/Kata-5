// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
// Librerias, para ya no cargar todo React y DOM se puede usar
import { StrictMode } from 'react' // import React from 'react'
import { createRoot } from 'react-dom/client' // import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Componentes
import App from './components/App'
import Paths from './routes'

// pd: borrar el StrictMode antes de desplegar
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
