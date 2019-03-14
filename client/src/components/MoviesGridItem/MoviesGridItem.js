import React from 'react';
import './MoviesGridItem.scss';
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieReleaseDate from "../MovieReleaseDate/MovieReleaseDate";
import MovieGenres from "../MovieGenres/MovieGenres";

const MoviesGridItem = (props) => {
  const {poster_path, title, release_date, genres, id} = props.movie;
  return (
    <li className="movies-grid-item">
      <img className="movies-grid-item-image" src={poster_path}/>
      <div className="movies-grid-item-header">
        <MovieTitle title={title} />
        <MovieReleaseDate release_date={release_date} />
      </div>
      <MovieGenres genres={genres}/>
    </li>
  );
};

export default MoviesGridItem;
