import React, { Fragment } from 'react';
import Timer from './Timer';
import BombCount from './BombCount';
import NewGameButton from './NewGameButton';

const Header = (props) => {
  return (
    <Fragment>
      <BombCount />
      <NewGameButton />
      <Timer />
    </Fragment>
  );
}

export default Header;