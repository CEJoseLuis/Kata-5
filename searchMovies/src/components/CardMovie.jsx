
const CardMovie = ({ Poster, Title, Year, ImdbID }) => {
  return (
    <article className='card'>
      <img className='card-img-top' src={Poster} alt={Title} />
      <div className='card-body text-dark text-center'>
        <h5 className='card-Title line-clamp'>{Title}</h5>
        <p>{Year}</p>
      </div>
    </article>
  )
}

export default CardMovie
