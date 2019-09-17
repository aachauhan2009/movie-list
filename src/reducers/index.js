import { combineReducers } from "redux";

const movies = (state = [], action) => {
    switch(action.type) {
        default: return state;
    }
}

export default combineReducers({
    movies
});
