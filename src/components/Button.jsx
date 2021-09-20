import React from 'react'
import { connect } from 'react-redux'

const Button = ({text, onClick}) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
};

export default connect()(Button);