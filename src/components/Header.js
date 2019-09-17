import React from "react";
import { connect } from "react-redux";
import { listMovies, updateSearch } from "../actions/index";

const Header = ({ listMovies, search, updateSearch }) => {
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
      <label htmlFor="search">Search</label>
      <input className="Input" id="search" value={search} onChange={e => updateSearch(e.target.value)} />
    </div>
  </React.Fragment>
};

const mapStateToProps = (state) => ({
  search: state.search
});

const mapDispatchToProps = (dispatch) => ({
  listMovies: () => dispatch(listMovies()),
  updateSearch: v => dispatch(updateSearch(v))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);