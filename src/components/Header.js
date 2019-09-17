import React from "react";
import { connect } from "react-redux";
import { listMovies, updateSearch, updateFilter } from "../actions/index";

const Header = ({ listMovies, search, updateSearch, years, applyFilter }) => {
  return <React.Fragment>
    <button className="Button" onClick={listMovies}>
      List Movies
    </button>
    <div>
      <label htmlFor="filter">
        Filter
      </label>
      <select id="filter" className="Select" onChange={e => applyFilter(e.target.value)}>
        <option selected value=""> Select Year </option>
        {years.map(year => <option value={year}> {year} </option>)}
      </select>
    </div>

    <div>
      <label htmlFor="search">Search</label>
      <input className="Input" id="search" value={search} onChange={e => updateSearch(e.target.value)} />
    </div>
  </React.Fragment>
};

const yearsSelector = state => {
  return state.movies.reduce((years, { releaseYear }) => {
    return years.includes(releaseYear) ? years : [...years, releaseYear];
  }, []);
}

const mapStateToProps = (state) => ({
  search: state.search,
  years: yearsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  listMovies: () => dispatch(listMovies()),
  updateSearch: v => dispatch(updateSearch(v)),
  applyFilter: v => dispatch(updateFilter(v))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);