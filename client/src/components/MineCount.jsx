import React, { Fragment } from 'react';

const MineCount = (props) => {
  console.log(props.MineCount)
  return (
    <Fragment>
      <div className="mine-count">{props.mines}</div>
    </Fragment>
  );
}

export default MineCount;