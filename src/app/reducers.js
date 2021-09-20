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

export const characterReducer = (state = {}, action) => {
  switch (action.type){
    case 'fetch': 
      return {
        ...state,
        character: action.data[0],
      }
    ;
    default: return state;
  }
}

export default combineReducers({theme: themeReducer, character: characterReducer});

