// Estilos
import './styles/index.css'
// Librerias, para ya no cargar todo React y DOM se puede usar
import { StrictMode } from 'react' // import React from 'react'
import { createRoot } from 'react-dom/client' // import ReactDOM from 'react-dom/client'
// Componentes
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
