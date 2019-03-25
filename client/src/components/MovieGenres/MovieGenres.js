import React from 'react';
import './MovieGenres.scss';

const MovieGenres = ({genres = []}) => {
  return (
    <div className="movie-release-day">
      {genres.map(gener => <span key={gener}> {gener} </span>)}
    </div>
  )
};

export default MovieGenres;
