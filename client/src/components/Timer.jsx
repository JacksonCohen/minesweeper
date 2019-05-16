import React, { Fragment } from 'react';

const Timer = (props) => {
  return (
    <Fragment>
      <div className="timer">
        {props.time}
      </div>
    </Fragment>
  );
}

export default Timer;