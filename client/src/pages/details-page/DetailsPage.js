import React from 'react';
import { connect } from "react-redux";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Footer from "../../components/Footer/Footer";
import SortBar from "../../components/SortBar/SortBar";
import Navigation from "../../components/Navigation/Navigation";
import { fetchFilm } from './detailsPageActions';
import { withRouter } from 'react-router-dom'

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
        return (
            <React.Fragment>
                <Navigation/>
                <MovieDetails selectedMovie={this.props.film}/>
                <SortBar moviesNumber={this.props.suggestedFilms.length}/>
                <MoviesGrid movies={this.props.suggestedFilms}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        film: state.detailsPage.film,
        suggestedFilms: state.detailsPage.suggestedFilms,
    }
}

const mapDispatchToProps = {
    fetchFilm,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));
