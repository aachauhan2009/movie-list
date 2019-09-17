import React from "react";
import { connect } from "react-redux";
import { listMovies } from "../actions/index";

const Header = ({ listMovies }) => {
  return <React.Fragment>
    <button className="Button" onClick={listMovies}>
      List Movies
    </button>
    <div>
      <label htmlFor="filter">
        Filter
      </label>
      <select id="filter" className="Select">
        <option selected disabled> Select Year </option>
        <option> 2004 </option>
      </select>
    </div>

    <div>
      <input className="Input" id="search" />
      <button className="Button">Search</button>
    </div>
  </React.Fragment>
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  listMovies: () => dispatch(listMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);