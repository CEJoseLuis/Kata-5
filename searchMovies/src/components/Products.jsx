// Componenete link  y no Navlink porque no se usa la clase Active
import { Link } from 'react-router-dom'
import { products } from '../data'

const Products = () => {
  return (
    <ul className='row gy-4'>
      {products.map(item =>
        <li className='col-lg-3' key={item.id}>
          {/* Link enrutado para cada uno de los productos */}
          <Link to={`/portfolio/${item.id}`}>
            <article className='card text-dark'>
              <img className='card-img-top' src={item.thumbnail} alt={item.title} height={300} />
              <div className='card-body'>
                <p className='card-tittle'>{item.title}</p>
              </div>
            </article>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Products
