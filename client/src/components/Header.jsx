import React, { Fragment } from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

const Header = (props) => {
  const pad = (str) => {
    str = str.toString();
    return str.length < 3 ? pad("0" + str, 3) : str;
  }

  return (
    <Fragment>
      <MineCount mines={pad(props.mines)} />
      <NewGameButton handleTimerClick={props.handleTimerClick} state={props.state} />
      <Timer time={props.time} />
    </Fragment>
  );
}

export default Header;