import { useParams } from 'react-router-dom'
import { products } from '../data'

const Product = () => {
  // Detecta el cambio en la URL y se queda con el nombre introducido
  const { productId } = useParams()

  // NOTA: Con fetching usar useFetcher y devolver la info

  // Busca la primera coincidencia
  const uniqueProduct = products.find(item => item.id === Number(productId))
  console.log(uniqueProduct)
  return (
    <article className='text-dark'>
      <img className='img-fluid' src={uniqueProduct.thumbnail} alt={uniqueProduct.title} height={300} />
      <div className='mt-4'>
        <p>{uniqueProduct.title}</p>
        <p>{uniqueProduct.description}</p>
      </div>
    </article>
  )
}

export default Product
