import React from 'react';

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick} >
      {props.clicked ? props.value : null}
    </button>
  );
}

export default Square;