import React, { Fragment } from 'react';
import win from '../images/minesweeper-win.png';
import lose from '../images/minesweeper-lose.png';
import alive from '../images/minesweeper-alive.png';
import surprise from '../images/minesweeper-surprised.png';

const NewGameButton = (props) => {
  const { state } = props;

  const button = (state) => {
    if (state === 'win') {
      return <img src={win} style={{width:"24px", position: "relative", right: "3px", top: "2px"}}/>;
    } else if (state === 'lose') {
      return <img src={lose} style={{width:"24px", position: "relative", right: "3px", top: "2px"}}/>;
    } else if (state === 'clicked') {
      return <img src={surprise} style={{width:"24px", position: "relative", right: "3px", top: "2px"}}/>;
    } else {
      return <img src={alive} style={{width:"24px", position: "relative", right: "3px", top: "2px"}}/>;
    }
  }

  return (
    <Fragment>
      <button className="new-game" onClick={props.handleTimerClick}>{button(state)}</button>
    </Fragment>
  );
}

export default NewGameButton;