import React, { Component, Fragment } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mines: 10,
      boardSize: 9,
      gameStarted: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  setBoardSize(size) {
    this.setState({
      boardSize: size
    });
  }

  handleClick(e) {
    this.setBoardSize(e.target.value);
  }

  render() {
    // Create gameStarted state to manage when timer should tick
    const { mines, boardSize, gameStarted } = this.state; 

    return (
      <Fragment>
        <Header mines={mines} handleClick={this.handleClick} game={gameStarted} />
        <Board mines={mines} boardSize={boardSize} />
      </Fragment>
    );
  }
}

export default App;