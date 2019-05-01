import React from "react";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Footer from "../../components/Footer/Footer";
import SortBar from "../../components/SortBar/SortBar";

import {connect} from 'react-redux';
import {fetchMovies} from './homePageActions';

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
        const { movies } = this.props;
        const submitFilmSearch = ({searchBy, searchTerm}) => {
            this.props.history.push(`/search/movies?search=${searchTerm}&searchBy=${searchBy}`);
        };
        console.log("HomePage: this.props: ", this.props.location);

        return (
            <React.Fragment>
                <SearchPanel onSubmit={submitFilmSearch}/>
                <SortBar moviesNumber={movies.length}/>
                <MoviesGrid movies={movies}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.homePage.movies,
    }
};

const mapDispatchToProps = {
    fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
