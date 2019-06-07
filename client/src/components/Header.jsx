import React, { Fragment } from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

const Header = (props) => {
  const { pad, time, mines, state, handleNewGameClick } = props;

  return (
    <Fragment>
      <MineCount mines={pad(mines)} />
      <NewGameButton handleNewGameClick={handleNewGameClick} state={state} />
      <Timer time={time} />
    </Fragment>
  );
}

export default Header;