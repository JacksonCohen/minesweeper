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
    let count = 0;

    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        count++;
        row.push(this.renderSquare(i, j, count));
      }
      board.push(<div className="row">{[...row]}</div>);
    }
    return board;
  }
   
  handleClick() {

  }

  renderSquare(i, j, count) {
    return (
      <Square
      // Handle timer click, handle square click are changing state but this function is being called in render so it is infinitely rendering
        value={this.state.board[i][j]}
        count={count}
        // onClick={this.props.handleSquareClick()}
        // onClick={this.props.handleTimerClick()}
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

  checkNeighbors(e) {
    const { board } = this.state;
    let noNull = false;

    if (e.target.value === null) {
      while (!noNull) {
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
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
          }
        }
      }
    }
  }
  /*
  Is not adjacent to a mine, the square is blank and should behave as if the 8 adjacent squares were also clicked. For each of those squares, their neighboring squares continue to be revealed in each direction (i.e., this step is applied recursively to all neighboring squares) until the edge of the board is reached or until a square is reached that is adjacent to a mine, in which case the previous rule applies.
  */

  render() {
    return (
      <div id="board">
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board;