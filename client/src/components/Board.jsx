import React, { Component, Fragment } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: []
    }
  }

  componentDidMount() {
    this.updateBoard(this.props.size, this.placeMines());
  }

  updateBoard(size, callback) {
    let board = [];

    for (let i = 0; i < size; i++) {
      let innerArray = [];
      for (let j = 0; j < size; j++) {
        innerArray.push(null);
      }
      board.push(innerArray)
    }

    this.setState({
      board: board
    }, callback());
  }

  placeMines() {
    const minesObject = {};
    const boardSize = this.state.boardSize;    
    
    while (Object.keys(minesObject).length < boardSize) {
      const coords = [Math.ceil(Math.random() * boardSize), Math.ceil(Math.random() * boardSize)];
      minesObject[coords] = 'Watch out for the mines!';
    }
    
    const mines = Object.keys(minesObject).map(key => key.split(',').map(val => +val));

    for (let i = 0; i < mines.length; i++) {
      array[mines[i][0]][mines[i][1]] = 'Mine';
    }
  }

  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }
}

export default Board;