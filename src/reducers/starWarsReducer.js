import /* we need our action types here*/ "../actions";
import {FETCH, SUCCESS, FAIL} from '../actions/index'

const initialState = {
  characters: [],
  fetch = false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {


    case SUCCESS:
    return {...state,fetch:false,characters:action.payload,error:""}

    case FAIL:
    return {...state, fetch:false,characters:[], error: action.payload}

    case FETCH:
    return Object.assign({},state,{fetch:true,characters:[],fail:""})

    default:

    return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
