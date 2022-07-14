import axios from 'axios'

const apiKey = 'ea92314d'
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

// TAREA: Hacer que la funcion getMovies devulva el error, es decir hacer la condicional aqui
export const getMovies = async (query) => {
  return await axios.get(`${baseUrl}&s=${query}`) // varias
}
export const getMovie = async (id) => {
  return await axios.get(`${baseUrl}&i=${id}`)// una peli
}
