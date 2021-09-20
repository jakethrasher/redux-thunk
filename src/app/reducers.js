import { combineReducers } from "redux";

export const initialState = {
  darkMode:false
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type){
    case 'toggle': 
      return {
        ...state,
        darkMode:!state.darkMode,
      };
    default: return state;
  }
};

export const character = (state = {}, action) => {
  let status = {}
  switch (action.type){
    case 'fetchStart':
        status = {fetching: true};
        return {...state, ...status};
    case 'fetchSuccess': 
     status = {fetching: false};
     return {...state, character: action.data[0], ...status};
    ;
    default: return state;
  }
}

export default combineReducers({ theme: themeReducer, character });

