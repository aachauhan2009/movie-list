import { combineReducers } from "redux";

const search = (state = "", action) => {
    switch(action.type) {
        case "SEARCH_MOVIE": return action.payload;
        default: return state;
    }
}

const movies = (state = [], action) => {
    switch(action.type) {
        case "LIST_MOVIES": return action.payload;
        case "DELETE_MOVIE": return state.filter(movie => movie !== action.payload)
        default: return state;
    }
}

export default combineReducers({
    movies,
    search
});
