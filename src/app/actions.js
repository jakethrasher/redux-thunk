//action creators
export const toggle = () => ({
  type: 'toggle'
});

export function getCharacter(){
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
};

//thunk
export const fetchACharacter = () =>{
  return (dispatch) => {
    dispatch({type:'fetchStart'});
    return getCharacter()
      .then(res => res.json())
      .then(data=>dispatch({type:'fetchSuccess', data:data}))
  }
}