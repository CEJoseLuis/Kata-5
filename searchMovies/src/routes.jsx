import { Routes, Route } from 'react-router-dom' // Importar ruta de react
import App from './components/App'
import { Navbar } from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'
const Paths = () => {
  return (
    // https://getbootstrap.com/docs/5.1/components/navbar/
    // Routes envuelve route y route recibe props, la ruta principal (/) hace match con un componente
    <section className='container'>
      <Navbar />
      {/* Enrutador */}
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/about' element={<p>about</p>} />
        <Route path='/portfolio' element={<Products />} />
        {/* Este es dinámico, ruta, los : son el nombre del param */}
        <Route path='/portfolio/:productId' element={<Product />} />
        <Route path='/contact' element={<p>contact</p>} />
      </Routes>
    </section>
  )
}

export default Paths
