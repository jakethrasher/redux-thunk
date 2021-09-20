import React from 'react'
import { connect } from 'react-redux';

const ListItem = ({character}) => {
  const {character: name, quote, image} = character;
    return (
      <div className='character'>
        <h3>{name}</h3>
        <img src={image} alt={name}/>
        <p>{quote}</p>
      </div>
    )
};

export default connect()(ListItem);
