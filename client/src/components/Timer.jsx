import React from 'react';

const Timer = (props) => {
  return (
    <div className="timer-container">
      <div className="timer unselectable">
        {props.time}
      </div>
    </div>
  );
}

export default Timer;