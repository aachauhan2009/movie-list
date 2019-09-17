import movies from "../movies.json";

const listMovies = () => ({
  type: "LIST_MOVIES",
  payload: movies
})

const deleteM = movie => ({
  type: "DELETE_MOVIE",
  payload: movie
});

const updateSearch = keyword => ({
  type: "SEARCH_MOVIE",
  payload: keyword
});

const updateFilter = year => ({
  type: "FILTER_MOVIE",
  payload: year
});

export {
  listMovies,
  deleteM,
  updateSearch,
  updateFilter
};