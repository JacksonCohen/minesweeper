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
      gameStarted: false,
      gamesPlayed: 1
    }

    this.pad = this.pad.bind(this);
    this.setNumCount = this.setNumCount.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.handleNewGameClick = this.handleNewGameClick.bind(this);
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
    clearInterval(this.timer);
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

  handleNewGameClick() {
    this.setState({
      gamesPlayed: this.state.gamesPlayed + 1,
      gameStarted: false,
      gameState: "alive",
      time: "000",
      mines: 10
    });
    this.stopTimer();
  }

  // handleClick(e) {
  //   let boardSize, mineCount;
    
  //   if (e.target.value === "Beginner") {
  //     boardSize = 9;
  //     mineCount = 10;
  //   } else if (e.target.value === "Intermediate") {
  //     boardSize = 16;
  //     mineCount = 40;
  //   } else {
  //     boardSize = 22;
  //     mineCount = 99;
  //   }

  //   this.setState({
  //     boardSize: boardSize,
  //     mines: mineCount
  //   });
  // }

  handleSquareClick(value, callback) {
    const { numbers } = this.state;
    const squares = document.getElementsByClassName("square");

    if (value === "MINE") {    //! FIX ME - add logic for detecting if clicking on flagged mine
      this.setState({
        gameState: "lose",
        gameStarted: false
      }, () => { callback() });
      this.stopTimer();
      for (let i = 0; i < squares.length; i++) {
        // if (squares[i].style.background !== "none") {
          // console.log(squares[i].style)
          squares[i].disabled = true;
        // }
      }
    // } else if () {
    //   this.setState({
    //     gameState: "clicked"
    //   });
    // }
    } else if (numbers === 0) {
      this.setState({
        gameState: "win"
      });
    } else {
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
    const { time, mines, boardSize, gameState, gameStarted, gamesPlayed } = this.state; 

    return (
      <div id="game">
        <div id="header-container">
          <Header 
            time={time} 
            mines={mines} 
            pad={this.pad}
            state={gameState} 
            handleClick={this.handleClick} 
            handleNewGameClick={this.handleNewGameClick} 
          />
        </div>
        <div id="squares-container">
          <Board 
            key={gamesPlayed}
            mines={mines} 
            state={gameState}
            boardSize={boardSize} 
            gameStarted={gameStarted} 
            stopTimer={this.stopTimer} 
            setNumCount={this.setNumCount} 
            increment={this.incrementMineCount} 
            decrement={this.decrementMineCount} 
            handleTimerClick={this.handleTimerClick} 
            handleSquareClick={this.handleSquareClick} 
            decrementNumCount={this.decrementNumCount} 
          />
        </div>
      </div>
    );
  }
}

export default App;