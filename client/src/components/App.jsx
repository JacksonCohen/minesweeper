import React, { Component, Fragment } from 'react';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardSize: 10
    }
  }

  setBoardSize(size) {
    this.setState({
      boardSize: size
    });
  }

  render() {
    const { boardSize } = this.state; 

    return (
      <Fragment>
        <div>Rendering!</div>
        <Header />
        <Board size={boardSize} />
      </Fragment>
    );
  }
}

export default App;