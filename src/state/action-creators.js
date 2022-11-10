import * as types from "./action-types";
import axios from "axios";

const API_KEY=process.env.REACT_APP_API_KEY;
const axios = require("axios");

export const inputChange = ({ movieTitle }) => {
  return ({
    type: types.INPUT_CHANGE,
    payload: { movieTitle }
  })
};

export const resetForm = () => {
  return({
    type: types.RESET_FORM
  })
};

export const fetchMovie = (movieTitle) => {
   return function (dispatch) {
    const options = {
      method: 'GET',
      url: 'https://moviesdb5.p.rapidapi.com/om',
      params: {t: movieTitle },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
}