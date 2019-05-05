import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Footer from "../../components/Footer/Footer";
import SortBar from "../../components/SortBar/SortBar";
import Navigation from "../../components/Navigation/Navigation";
import { fetchFilm, SortFilms } from './detailsPageActions';

class DetailsPage extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        const filmId = this.props.match.params.id;
        if (prevProps.match.params.id !== filmId) {
            this.props.fetchFilm(filmId);
        }
    }

    render() {
        const {film, SortFilms, suggestedFilms, sortedBy} = this.props;
        return (
            <React.Fragment>
                <Navigation/>
                <MovieDetails selectedMovie={film}/>
                <SortBar moviesNumber={suggestedFilms.length} sorting={SortFilms} sortedBy={sortedBy}/>
                <MoviesGrid movies={suggestedFilms}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        film: state.detailsPage.film,
        suggestedFilms: state.detailsPage.suggestedFilms,
        sortedBy: state.detailsPage.sortedBy,
    }
}

const mapDispatchToProps = {
    fetchFilm,
    SortFilms,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));
