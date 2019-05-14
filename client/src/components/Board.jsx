import React, { Component, Fragment } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: []
    }
  }

  componentDidMount() {
    this.updateBoard(this.props.size);
  }

  updateBoard(size) {
    this.setState({
      board: Array(size).fill(Array(size).fill(null))
    });
  }

  placeMines() {
    // Based on current board size, generate unique coordinates on the board and set a bomb "B" on that space
    const mines = {};
    const boardSize = this.state.boardSize;    
    
    while (Object.keys(mines).length < boardSize) {
      const coords = [Math.ceil(Math.random() * boardSize), Math.ceil(Math.random() * boardSize)];
      mines[coords] = 'Watch out for the mines!';
    }
    
    return Object.keys(mines).map(key => key.split(',').map(val => +val));
  }

  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }
}

export default Board;