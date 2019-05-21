import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mines: 10,
      boardSize: 9,
      time: '000',
      gameState: 'alive'
    }

    this.pad = this.pad.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  // setBoardSize(size) {
  //   this.setState({
  //     boardSize: size
  //   });
  // }

  pad (str) {
    str = str.toString();
    return str.length < 3 ? this.pad("0" + str, 3) : str;
  }

  handleTimerClick() {
    clearInterval(this.timer);

    const increment = () => {
      if (+this.state.time < 999) {
        this.setState({
          time: this.pad(+this.state.time + 1)
        });
      } else {
        clearInterval(this.timer);
      }
    }

    this.timer = setInterval(() => { increment() }, 1000);
    
    this.setState({
      time: '000'
    });
  }

  // handleClick(e) {
  //   this.setBoardSize(e.target.value);
  // }

  handleSquareClick(e) {
    this.setState({
      gameState: 'clicked'
    });
  }

  render() {
    // Create gameStarted state to manage when timer should tick
    const { time, mines, boardSize, gameState } = this.state; 

    return (
      <div id="game">
        <div id="header">
          <Header mines={mines} handleClick={this.handleClick} handleTimerClick={this.handleTimerClick} state={gameState} time={time} pad={this.pad} />
        </div>
        <div id="squares">
          <Board mines={mines} boardSize={boardSize} handleSquareClick={this.handleSquareClick} />
        </div>
      </div>
    );
  }
}

export default App;