import { combineReducers } from "redux";

const movies = (state = [], action) => {
    switch(action.type) {
        case "LIST_MOVIES": return action.payload;
        case "DELETE_MOVIE": return state.filter(movie => movie !== action.payload)
        default: return state;
    }
}

export default combineReducers({
    movies
});
