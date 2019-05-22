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
    this.incrementMineCount = this.incrementMineCount.bind(this);
    this.decrementMineCount = this.decrementMineCount.bind(this);
  }

  // setBoardSize(size) {
  //   this.setState({
  //     boardSize: size
  //   });
  // }

  pad (str) {
    let num = +str;
    str = str.toString();

    return str.length >= 3 ? str : num < 0 ? this.pad("-0" + Math.abs(str)) : this.pad("0" + str);
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

  incrementMineCount() {
    this.setState({
      mines: this.state.mines + 1
    });
  }

  decrementMineCount() {
    this.setState({
      mines: this.state.mines - 1
    });
  }

  render() {
    const { time, mines, boardSize, gameState } = this.state; 

    return (
      <div id="game">
        <div id="header-container">
          <Header mines={mines} handleClick={this.handleClick} handleTimerClick={this.handleTimerClick} state={gameState} time={time} pad={this.pad} />
        </div>
        <div id="squares-container">
          <Board mines={mines} boardSize={boardSize} handleSquareClick={this.handleSquareClick} increment={this.incrementMineCount} decrement={this.decrementMineCount} />
        </div>
      </div>
    );
  }
}

export default App;