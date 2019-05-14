import React, { Fragment } from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

const Header = (props) => {
  return (
    <Fragment>
      <MineCount mines={props.mines} />
      <NewGameButton />
      <Timer />
    </Fragment>
  );
}

export default Header;