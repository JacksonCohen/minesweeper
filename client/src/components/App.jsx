import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mines: 10,
      boardSize: 9,
      numbers: 0,
      time: "000",
      gameState: "alive",
      gameStarted: false
    }

    this.pad = this.pad.bind(this);
    this.setNumCount = this.setNumCount.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.decrementNumCount = this.decrementNumCount.bind(this);
    this.incrementMineCount = this.incrementMineCount.bind(this);
    this.decrementMineCount = this.decrementMineCount.bind(this);
  }

  pad (str) {
    str = str.toString();
    let num = +str;

    return str.length === 3 ? str : num < 0 ? this.pad("-0" + Math.abs(str)) : this.pad("0" + str);
  }

  stopTimer() {
    return clearInterval(this.timer);
  }

  handleTimerClick() {
    const increment = () => {
      if (+this.state.time < 999) {
        this.setState({
          time: this.pad(+this.state.time + 1)
        });
      } else {
        this.stopTimer();
      }
    }
    
    this.stopTimer();
    this.timer = setInterval(increment, 1000);
    this.setState({
      time: "000"
    });
  }

  // handleClick(e) {
  //   this.setState({
  //     boardSize: e.target.value
  //   });
  // }

  handleSquareClick(value) {
    const { numbers } = this.state;

    if (value === "MINE") {
      this.setState({
        gameState: "lose",
        gameStarted: false
      });
      this.stopTimer();
    // } else if () {
    //   this.setState({
    //     gameState: "clicked"
    //   });
    // }
    } else if (numbers === 0) {
      this.setState({
        gameState: "win"
      });
    } else if (value === null) {
      this.setState({
        gameState: "alive",
        gameStarted: true
      });
    }
  }

  setNumCount(numCount) {
    this.setState({
      numbers: numCount
    });
  }

  decrementNumCount() {
    this.setState({
      numbers: this.state.numbers - 1
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
    const { time, mines, boardSize, gameState, gameStarted } = this.state; 

    return (
      <div id="game">
        <div id="header-container">
          <Header mines={mines} handleClick={this.handleClick} state={gameState} time={time} pad={this.pad} />
        </div>
        <div id="squares-container">
          <Board mines={mines} boardSize={boardSize} gameStarted={gameStarted} handleTimerClick={this.handleTimerClick} handleSquareClick={this.handleSquareClick} increment={this.incrementMineCount} decrement={this.decrementMineCount} stopTimer={this.stopTimer} setNumCount={this.setNumCount} decrementNumCount={this.decrementNumCount} />
        </div>
      </div>
    );
  }
}

export default App;