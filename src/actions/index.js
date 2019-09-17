import movies from "../movies.json";

const listMovies = () => ({
  type: "LIST_MOVIES",
  payload: movies
})

const deleteM = movie => ({
  type: "DELETE_MOVIE",
  payload: movie
});

export {
  listMovies,
  deleteM
};