import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ selectedMovie }) => {
  const {title, release_date, poster_path, overview, runtime} = selectedMovie;
  return (
    <div className="movie-details" data-cy="movie-details">
      <div className="left-side-container">
        <img className="image" src={poster_path} alt="movie cover" data-cy="movie-details-poster"/>
      </div>
      <div className="right-side-container">
        <h2 className="title">{title}</h2>
        <h5 className="category">Oscar-winning Movies</h5>
        <span className="production-year">{release_date}</span>
        <span className="duration">{runtime ? runtime : 120} min</span>
        <p className="description">{overview}</p>
      </div>
    </div>
  )
};

export default MovieDetails;
