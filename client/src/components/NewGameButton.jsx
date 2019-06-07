import React, { Fragment } from 'react';
import win from '../images/minesweeper-win.png';
import lose from '../images/minesweeper-lose.png';
import alive from '../images/minesweeper-alive.png';
import surprise from '../images/minesweeper-surprised.png';

const NewGameButton = (props) => {
  const { state } = props;

  const button = (state) => {
    if (state === 'win') {
      return <img className="smileys" src={win} />;
    } else if (state === 'lose') {
      return <img className="smileys" src={lose} />;
    } else if (state === 'clicked') {
      return <img className="smileys" src={surprise} />;
    } else {
      return <img className="smileys" src={alive} />;
    }
  }

  return (
    <Fragment>
      <button className="new-game unselectable" onClick={props.handleNewGameClick}>{button(state)}</button>
    </Fragment>
  );
}

export default NewGameButton;