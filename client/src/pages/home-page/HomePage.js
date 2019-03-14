import React from "react";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Footer from "../../components/Footer/Footer";
import SortBar from "../../components/SortBar/SortBar";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(response => response.json())
      .then(({data}) => this.setState({movies: data}));
  }

  render() {
    return (
      <React.Fragment>
        <SearchPanel/>
        <SortBar moviesNumber={this.state.movies.length}/>
        <MoviesGrid movies={this.state.movies}/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default HomePage;
