import React from 'react';

const MovieTitle = ({title = ""}) => {
  return (
    <span className="movie-title" data-cy="movie-title">
      {title}
    </span>
  )
};

export default MovieTitle;
