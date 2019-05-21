import React from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

const Header = (props) => {
  return (
    <div id="header">
      <MineCount mines={props.pad(props.mines)} />
      <NewGameButton handleTimerClick={props.handleTimerClick} state={props.state} />
      <Timer time={props.time} />
    </div>
  );
}

export default Header;