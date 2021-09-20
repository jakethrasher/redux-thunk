import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { fetchACharacter } from '../app/actions';
import ListItem from './ListItem';
import themeSelector from '../app/selectors';
const mapStateToProps = (state, props) => {
  return ({
    theme: themeSelector(state),
    character: state.character.character,
  });
};

const mapDispatchToProps = (dispatch, props) => {
  return ({
    fetchCharacter: ()=> dispatch(fetchACharacter())
  });
};

const List = (props) => {
  const [fetched, setFetched] = useState(false);

  const handleFetchCharacter = async () =>{
    await props.fetchCharacter();
    setFetched(true);
  }
    return (
      <div style = {{
        backgroundColor: props.theme.backgroundColor, 
        color: props.theme.color,
        height: '100vh',
      }}>
        <Button text='Get Character' onClick={handleFetchCharacter}/>
        {fetched && <ListItem character={props.character}/>}
      </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(List);