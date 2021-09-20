import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { fetchACharacter } from '../app/actions';
import ListItem from './ListItem';
import themeSelector from '../app/selectors';

const mapStateToProps = (state, props) => {
  return ({
    theme: themeSelector(state),
  });
};

const mapDispatchToProps = (dispatch, props) => {
  return ({
    fetchCharacter: ()=> dispatch(fetchACharacter())
  });
};

const List = (props) => {
  const handleFetchCharacter = async () =>{
    await props.fetchCharacter();
  }
    return (
      <div style = {{
        backgroundColor: props.theme.backgroundColor, 
        color: props.theme.color,
        height: '100vh',
      }}>
        <Button text='Get Character' onClick={handleFetchCharacter}/>
        <ListItem />
      </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(List);