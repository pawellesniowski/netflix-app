import React from 'react';
import MoviesGridItem from "../MoviesGridItem/MoviesGridItem";
import './MoviesGrid.scss';

const MoviesGrid = ({movies = []}) => {
  return (
    movies.length > 0 ? (
      <ul className="movies-grid" data-cy="movies-grid">
        {movies.map(movie => <MoviesGridItem key={movie.id} movie={movie}/>)}
      </ul>
    ) : (
      null
    )
  );
};

export default MoviesGrid;
