import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { MOVIE_URL } from '../reusables/urls'

export const MovieDetails = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`${MOVIE_URL}/movies/${id}`)
    .then((res) => res.json())
    .then((json) => {
        setMovie(json.results)
    })
    .catch(err => console.error(err))
}, [id])

  return (
    <article className='detail-page'>
{/*         <a className='back-button'>
            <i className="fas fa-chevron-circle-left"></i>
            <p>Movies</p>
        </a> */}

        {movie.map((details) => (
        <div className='summary' key ={details.title}>
            <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title}></img>
            <div>
                <h1>{details.title}<span className='rating'>{details.vote_average}/10</span></h1>
                <p>{details.overview}</p>
            </div>
        </div>
        ))}

    </article>

  )
}