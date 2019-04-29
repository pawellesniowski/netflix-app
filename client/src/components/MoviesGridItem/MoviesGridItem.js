import React from 'react';
import PropTypes from 'prop-types';
import './MoviesGridItem.scss';
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieReleaseDate from "../MovieReleaseDate/MovieReleaseDate";
import MovieGenres from "../MovieGenres/MovieGenres";
import {Link} from "react-router-dom";

const MoviesGridItem = ({movie}) => {
    const {poster_path, title, release_date, genres, id} = movie || {};
    return (
        <li data-movie-id={id} className="movies-grid-item" data-cy="movies-grid-item">
            <Link to={`/film/${movie.id}`} key={movie.id}>
                <img itemProp="image" className="movies-grid-item-image" src={poster_path}/>
            </Link>
            <div className="movies-grid-item-header">
                <MovieTitle title={title}/>
                <MovieReleaseDate release_date={release_date}/>
            </div>
            <MovieGenres genres={genres}/>
        </li>
    );
};

MoviesGridItem.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
        id: PropTypes.number,
    }),
};

export default MoviesGridItem;


