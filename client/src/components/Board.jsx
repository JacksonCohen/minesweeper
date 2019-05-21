import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.updateBoard(this.props.boardSize);
  }

  renderBoard() {
    let { boardSize } = this.props;
    let board = [];

    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare(i, j));
      }
      board.push(<div className={`row`}>{[...row]}</div>);
    }
    return board;
  }
   
  handleClick() {

  }

  renderSquare(i, j) {
    return (
      <Square
        value={this.state.board[i][j]}
        onClick={this.handleClick(i)}
      />
    );
  }

  updateBoard(size) {
    let board = [];

    for (let i = 0; i < size; i++) {
      let innerArray = [];
      for (let j = 0; j < size; j++) {
        innerArray.push(null);
      }
      board.push(innerArray);
    }

    this.setState({ board }, () => { this.placeMines(), this.placeNumbers(), console.table(this.state.board) });
  }

  placeMines() {
    const minesObject = {};
    const { mines, boardSize } = this.props;
    const { board } = this.state; 
    
    while (Object.keys(minesObject).length < mines) {
      const coords = [
        Math.floor(Math.random() * boardSize), 
        Math.floor(Math.random() * boardSize)
      ];

      minesObject[coords] = 'Watch out for the mines!';
    }
    
    const minesArray = Object.keys(minesObject).map(key => key.split(',').map(val => +val));

    for (let i = 0; i < minesArray.length; i++) {
      board[minesArray[i][0]][minesArray[i][1]] = 'MINE';
    }

    this.setState({
      board: board
    });
  }

  placeNumbers() {
    const { board } = this.state;
    let count = 0;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        count = 0;
        if (board[i][j] === 'MINE') {
          continue;
        }
        if (board[i][j + 1] === 'MINE') {
          count++;
        }
        if (board[i][j - 1] === 'MINE') {
          count++;
        }
        if (board[i + 1]) {
          if (board[i + 1][j] === 'MINE') {
            count++;
          }
          if (board[i + 1][j - 1] === 'MINE') {
            count++;
          }
          if (board[i + 1][j + 1] === 'MINE') {
            count++;
          }
        }
        if (board[i - 1]) {
          if (board[i - 1][j] === 'MINE') {
            count++;
          }
          if (board[i - 1][j - 1] === 'MINE') {
            count++;
          }
          if (board[i - 1][j + 1] === 'MINE') {
            count++;
          }
        }
        if (count > 0) {
          board[i][j] = count;
        }
      }
    }
  }

  render() {
    return (
      <div id="board">
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board;