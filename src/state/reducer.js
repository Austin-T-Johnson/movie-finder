import { combineReducers } from "redux";
import * as types from "./action-types";

const intialFormState = {
  movieTitle: "",
};

function form (state = intialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { movieTitle, value } = action.payload
      return {...state, [movieTitle]: value}
    }
    case types.RESET_FORM: {
      return {
        movieTitle: "",
      }
    }
    default:
      return state
  }
};

// const initialMovieState = {
//     title: '',
//     director: ''
// }
const initialMovieState = ""
function movie(state = initialMovieState, action) {
    switch (action.type) {
        case types.SHOW_MOVIE: {
            // const { title, director } = action.payload
            return state = action.payload
        }
        default:
        return state
    }
}

export default combineReducers({ form, movie })