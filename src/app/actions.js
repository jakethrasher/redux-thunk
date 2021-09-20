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
    return getCharacter()
      .then(res => res.json())
      .then(data=>dispatch({type:'fetch', data:data}))
  }
}