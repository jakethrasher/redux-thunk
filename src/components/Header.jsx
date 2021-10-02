import React from 'react'
import { connect } from 'react-redux';
import Button from './Button';
import {toggle} from '../app/actions';
import themeSelector from '../app/selectors';

const mapStateToProps = (state, props) => {
  return ({
    theme: themeSelector(state),
  });
};

const mapDispatchToProps = (dispatch, props) => {
  return ({
    toggleTheme: () => dispatch(toggle())
  });
};

const Header = (props) => {
  console.log(props.theme)
  return(
      <div style={{color:props.theme.color, backgroundColor: props.theme.backgroundColor}}>
        <Button text='Toggle Theme' onClick={props.toggleTheme}/>
      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
