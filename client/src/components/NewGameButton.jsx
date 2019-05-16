import React, { Fragment } from 'react';

const NewGameButton = (props) => {
  return (
    <Fragment>
      <button onClick={props.handleClick}>:)</button>
    </Fragment>
  );
}

export default NewGameButton;