import React from 'react';
import './button.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  let classes = 'button ';
  classes += props.operation ? 'operation ' : '';
  classes += props.double ? 'double ' : '';
  classes += props.triple ? 'triple ' : '';

  return (
    <button 
      className={classes}
      onClick={event => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  )
}

