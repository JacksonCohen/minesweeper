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
      gameState: 'alive',
      gameStarted: false
    }

    this.pad = this.pad.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.incrementMineCount = this.incrementMineCount.bind(this);
    this.decrementMineCount = this.decrementMineCount.bind(this);
  }

  pad (str) {
    let num = +str;
    str = str.toString();

    return str.length === 3 ? str : num < 0 ? this.pad("-0" + Math.abs(str)) : this.pad("0" + str);
  }

  stopTimer() {
    return clearInterval(this.timer);
  }

  handleTimerClick() {
    this.stopTimer();

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
  //   this.setState({
  //     boardSize: e.target.value
  //   });
  // }

  handleSquareClick(value) {
    if (value === 'MINE') {
      this.setState({
        gameState: 'lose'
      });
      this.stopTimer();
    } else {
      this.setState({
        gameState: 'clicked',
        gameStarted: true
      });
    }
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
    const { time, mines, boardSize, gameState, gameStarted } = this.state; 

    return (
      <div id="game">
        <div id="header-container">
          <Header mines={mines} handleClick={this.handleClick} state={gameState} time={time} pad={this.pad} />
        </div>
        <div id="squares-container">
          <Board mines={mines} boardSize={boardSize} gameStarted={gameStarted} handleTimerClick={this.handleTimerClick} handleSquareClick={this.handleSquareClick} increment={this.incrementMineCount} decrement={this.decrementMineCount} stopTimer={this.stopTimer} />
        </div>
      </div>
    );
  }
}

export default App;