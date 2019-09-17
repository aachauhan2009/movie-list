import movies from "../movies.json";

const listMovies = () => ({
  type: "LIST_MOVIES",
  payload: movies
})

export {
  listMovies
};