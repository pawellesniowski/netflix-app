import React from "react";
import {connect} from 'react-redux';
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Footer from "../../components/Footer/Footer";
import SortBar from "../../components/SortBar/SortBar";
import {fetchMovies, SortMovies } from './homePageActions';

class HomePage extends React.Component {
    componentDidMount() {
        const searchDetails = this.props.location.search;
        if(searchDetails) {
            this.props.fetchMovies(searchDetails);
        }
    }

    componentDidUpdate(prevProps) {
        const searchDetails = this.props.location.search;
        if(prevProps.location.search !== searchDetails) {
            this.props.fetchMovies(searchDetails)
        }
    }

    render() {
        const { movies, SortMovies, sortedBy } = this.props;
        const submitFilmSearch = ({searchBy, searchTerm}) => {
            this.props.history.push(`/search/movies?search=${searchTerm}&searchBy=${searchBy}`);
        };
        return (
            <React.Fragment>
                <SearchPanel onSubmit={submitFilmSearch}/>
                <SortBar moviesNumber={movies.length} sorting={SortMovies} sortedBy={sortedBy}/>
                <MoviesGrid movies={movies}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.homePage.movies,
        sortedBy: state.homePage.sortedBy,
    }
};

const mapDispatchToProps = {
    fetchMovies,
    SortMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
