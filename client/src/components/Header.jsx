import React, { Fragment } from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

const Header = (props) => {
  return (
    <Fragment>
      <MineCount mines={props.pad(props.mines)} />
      <NewGameButton state={props.state} />
      <Timer time={props.time} />
    </Fragment>
  );
}

export default Header;