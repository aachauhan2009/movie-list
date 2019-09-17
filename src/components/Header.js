import React from "react";
import { connect } from "react-redux";
import { listMovies } from "../actions/index";

const Header = ({ listMovies }) => {
  return <React.Fragment>
    <button onClick={listMovies}>
      List Movies
    </button>
  </React.Fragment>
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  listMovies: () => dispatch(listMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);