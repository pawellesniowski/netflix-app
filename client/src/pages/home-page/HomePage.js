import React from "react";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Footer from "../../components/Footer/Footer";
import SortBar from "../../components/SortBar/SortBar";

import {connect} from 'react-redux';
import {fetchMovies} from './homePageActions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { movies } = this.props;
        return (
            <React.Fragment>
                <SearchPanel/>
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
