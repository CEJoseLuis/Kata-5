import { products } from '../data'
const Products = () => {
  return (
    <ul className='row'>
      {products.map(item =>
        <li className='col-lg-3' key={item.id}>
          <article className='card text-dark'>
            <img className='card-img-top' src={item.thumbnail} alt={item.title} height={300} />
            <div className='card-body'>
              <p className='card-tittle'>{item.title}</p>
            </div>
          </article>
        </li>
      )}
    </ul>
  )
}

export default Products
