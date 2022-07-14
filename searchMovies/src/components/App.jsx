import { useRef, useState } from 'react'
// hooks
import useFetcher from '../hooks/useFetcher' // custom hook
// Components
import Loading from './Loading'
import Movies from './Movies'

// Componenete
function App () {
  const searchRef = useRef(null)// Es un objeto
  const [query, setQuery] = useState('made in abyss') // Con este setter se activa el Fetcher
  const { dataState: movies, loading } = useFetcher(query) // Se renombra data con el nombre movies

  // console.log(movies)
  /* const optional = {}
  console.log(optional?.name || 'No existe') */

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TRYCATCH es un if-else para promesas, si la promesa devuelve bien data
    // console.log(searchRef.current.value)// Se pasa el valor actual de searchRef a traves del Hook
    // console.log(e.target.buscador.value)// Es con JS puro
    /* const { data } = await getMovies(searchRef.current.value)
    console.log(data)
    if (data.Response === 'False') {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    } */
    setQuery(searchRef.current.value) // Como cambia el query se activa el useFetcher que no se puede ejecutar aqui dentor pero si afuera en la cabecera
    e.target.reset() // Borrar lo que se escribio -> searchRef.current.value = ''
  }
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            placeholder='Nombre de la pelicula...'
            className='form-control'
            name='buscador'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      <section className='py-4'>
        {loading ? <Loading /> : <Movies data={movies} />}
      </section>
    </section>
  )
}

export default App
