import React from 'react';
import './MovieGenres.scss';

const MovieGenres = ({genres = []}) => {
  return (
    <div className="movie-genres">
      {genres.map(gener => <span key={gener} className="item"> {gener} </span>)}
    </div>
  )
};

export default MovieGenres;
