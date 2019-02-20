// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const FETCH = "FETCH";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const charData = () => dispatch =>{
    dispatch ({type: FETCH})
    axios 
    .get ('http://swapi.co/api/people/')
    .then (res => {
      dispatch ({
        type: SUCCESS,
        payload: res.data.results
      })
    })
    .catch (error => {
      dispatch({
      type: FAIL,
      payload:'The info requested has been hidden by the force'
    })
    });
  };