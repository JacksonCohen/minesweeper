import React from 'react';

const MineCount = (props) => {
  return (
    <div className="mine-count-container">
      <div className="mine-count">{props.mines}</div>
    </div>
  );
}

export default MineCount;