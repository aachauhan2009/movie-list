import React from 'react';
import { connect } from "react-redux";


const Movie = ({
  name,
  image,
  releaseYear,
}) => (
  <div className="Movie">
    <img className="Image" src={image} alt={name} />
    <h2>{name} ({releaseYear})</h2>
  </div>
);

class Movies extends React.Component {
  render() {
    return <div className="Movies">
      {
        this.props.movies.map(movie => <Movie {...movie} />)
      }
    </div>
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);