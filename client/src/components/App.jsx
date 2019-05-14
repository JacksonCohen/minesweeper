import React, { Component, Fragment } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mines: 10,
      boardSize: 10
    }

    this.handleClick = this.handleClick.bind(this);
  }

  setBoardSize(size) {
    this.setState({
      boardSize: size
    });
  }

  handleClick(e) {
    this.setBoardSize(e.target.value)
  }

  render() {
    const { mines, boardSize } = this.state; 

    return (
      <Fragment>
        {/* <div>Rendering!</div> */}
        <Header mines={mines} handleClick={this.handleClick} />
        <Board mines={mines} boardSize={boardSize} />
      </Fragment>
    );
  }
}

export default App;