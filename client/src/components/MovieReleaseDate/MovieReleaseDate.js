import React from 'react';
import './MovieReleaseDate.scss';

const MovieReleaseDate = ({release_date}) => (
  <span className="movie-release-date" data-cy="movie-release-date">
      {release_date.substring(0, 4)}
  </span>
);

export default MovieReleaseDate;
