import React, { Fragment } from 'react';

const NewGameButton = (props) => {
  return (
    <Fragment>
      <button className="new-game" onClick={props.handleClick}>:)</button>
    </Fragment>
  );
}

export default NewGameButton;