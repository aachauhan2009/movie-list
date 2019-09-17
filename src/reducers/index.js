import { combineReducers } from "redux";

const movies = (state = [], action) => {
    switch(action.type) {
        case "LIST_MOVIES": return [...state, ...action.payload];
        default: return state;
    }
}

export default combineReducers({
    movies
});
