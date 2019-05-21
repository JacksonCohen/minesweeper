import React, { Component, Fragment } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mines: 10,
      time: '000',
      boardSize: 9,
      gameState: 'alive'    }

    // this.handleClick = this.handleClick.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
  }

  setBoardSize(size) {
    this.setState({
      boardSize: size
    });
  }

  handleTimerClick() {
    clearInterval(this.timer);

    const pad = (str) => {
      str = str.toString();
      return str.length < 3 ? pad("0" + str, 3) : str;
    }

    const increment = () => {
      if (+this.state.time < 999) {
        this.setState({
          time: pad(+this.state.time + 1)
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
      <Fragment>
        <Header mines={mines} handleClick={this.handleClick} handleTimerClick={this.handleTimerClick} state={gameState} time={time} />
        <Board mines={mines} boardSize={boardSize} />
      </Fragment>
    );
  }
}

export default App;