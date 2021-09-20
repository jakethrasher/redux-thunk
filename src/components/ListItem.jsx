import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    character: state.character.character || {},
    fetching: state.character.fetching,
  })
};

const ListItem = (props) => {
  const { character: name, quote, image } = props.character;

  return (
    props.fetching ? 
      <div>loading...</div> 
      : 
      <div className='character'>
        <h3>{name}</h3>
        <img src={image} alt={name}/>
        <p>{quote}</p>
      </div>
  )
};

export default connect(mapStateToProps)(ListItem);
