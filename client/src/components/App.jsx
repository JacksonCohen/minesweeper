import React, { Component, Fragment } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { boardSize } = this.state; 

    return (
      <Fragment>
        <div>Rendering!</div>
        <Header handleClick={this.handleClick} />
        <Board size={boardSize} />
      </Fragment>
    );
  }
}

export default App;