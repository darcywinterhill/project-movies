import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

/* import { MOVIE_URL } from '../reusables/urls' */
// import { DETAILS_URL } from '../reusables/urls'

export const MovieDetails = () => {

  const {id} = useParams();
  const [movieDetails, setMovieDetails] = useState([])

/*   const API_KEY = 'e90c1322becf61268c0c0fea570c7099'; */

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e90c1322becf61268c0c0fea570c7099&language=en-US&page=1`)
    .then((res) => res.json())
    .then((json) => setMovieDetails(json))
    .catch(err => console.error(err))
}, [id])
console.log(movieDetails)


  return (
    <article className='detail-page'>

        <Link to='/' className='back-button'>
            <i className="fas fa-chevron-circle-left"></i>
            <p>Movies</p>
        </Link>
        <div className='background' style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        <div className='summary'>
            <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title}></img>
            <div className='movie-details'>
                <h1>{movieDetails.title}<span className='rating'>{movieDetails.vote_average}/10</span></h1>
                <p>{movieDetails.overview}</p>
            </div>
        </div>
        </div>
    </article>

  )
}



// section className='moviedetails-background' style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>