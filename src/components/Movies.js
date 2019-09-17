import React from 'react';
import { connect } from "react-redux";
import { deleteM } from "../actions/index";
import { stat } from 'fs';

const Movie = ({
  name,
  image,
  releaseYear,
  openMovie,
  deleteMovie,
}) => (
  <div className="Movie" onClick={openMovie}>
    <img className="Image" src={image} alt={name} />
    <h2>{name} ({releaseYear})</h2>
    <button className="Button" onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      deleteMovie()
    }}>Delete</button>
  </div>
);

const MovieModal = ({
  name,
  image,
  releaseYear,
  description,
  cast = [],
  genre = [],
  closeModal,
}) => (
  <div className="Overlay" onClick={closeModal}>
    <div className="MovieModal" onClick={e => {
      e.preventDefault();
      e.stopPropagation();
    }}>
      <img className="Image" src={image} alt={name} />
      <div className="MovieDetails">
        <h2>{name} ({releaseYear})</h2>
        <div>{description}</div>
        <div>
          Cast: {cast.map(actor => <span className="Item">{actor}</span>)}
        </div>
        <div>
          Genre: {genre.map(g => <span className="Item">{g}</span>)}
        </div>
      </div>
  </div>
  </div>
)

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null
    };
  }

  openMovie(selectedMovie) {
    this.setState({
      selectedMovie
    })
  }

  render() {
    const { selectedMovie } = this.state;
    return <div className="Movies">
      {
        this.props.movies.map(movie => <Movie {...movie} openMovie={() =>  this.openMovie(movie)} deleteMovie={() => this.props.deleteMovie(movie)} />)
      }
      {selectedMovie && <MovieModal {...selectedMovie} closeModal={() => this.setState({ selectedMovie: null })} />}
    </div>
  }
}

const moviesSelector = state => {
  const movies = state.movies;
  const search = state.search;
  const selectedYear = state.filter.year;
  return (search || selectedYear) ? movies.filter(({ name = "", releaseYear }) => (releaseYear == selectedYear && name.toLowerCase().includes(search.toLowerCase()))) : movies;
}

const mapStateToProps = (state) => ({
  movies: moviesSelector(state) 
});

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: movie =>  dispatch(deleteM(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);