// Estos se puede hacer automaticos colocandose al final useState y apretar ctrl+barra espaciadora
import { useEffect, useState } from 'react'
import { getMovies } from '../utils/getMovies'

const useFetcher = (query = 'batman') => {
  const [dataState, setDataState] = useState([])// No se conoce el tipo de dato, ponerlo null por default
  // to do -> Esperar la carga de la data y capturar el error
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    // const {data: {Search}} = await getMovies(query) // Desestrucuturando data
    // setDataState(Search)
    const { data } = await getMovies(query)
    if (data.Response === 'False') {
      setDataState([])
    } else {
      setDataState(data.Search)
    }
    setLoading(false) // Ya no aparecera el spinner nunca
  }
  // Cambia el titulo la primera vez que carga el sitio Web o cuando hay un cambio en query
  useEffect(() => {
    getData()
  }, [query])
  return { dataState, loading }
}
export default useFetcher
