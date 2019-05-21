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
      gameState: 'alive'    }

    // this.handleClick = this.handleClick.bind(this);
    this.pad = this.pad.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
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

  render() {
    // Create gameStarted state to manage when timer should tick
    const { time, mines, boardSize, gameState } = this.state; 

    return (
      <div id="game">
        <Header mines={mines} handleClick={this.handleClick} handleTimerClick={this.handleTimerClick} state={gameState} time={time} pad={this.pad} />
        <Board mines={mines} boardSize={boardSize} />
      </div>
    );
  }
}

export default App;