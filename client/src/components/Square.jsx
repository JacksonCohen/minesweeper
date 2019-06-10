import React, { Component } from 'react';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/six.png';
import seven from '../images/seven.png';
import eight from '../images/eight.png';
import flag from '../images/flag.png';
import clickedMine from '../images/clicked-mine.png';
import unclickedMine from '../images/unclicked-mine.png';

class Square extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clicked: false,
      flagged: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.convertValue = this.convertValue.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  checkNeighbors(value) {
    const { clicked } = this.state;
    const { count, boardSize } = this.props;
    const squares = document.getElementsByClassName("square");

    if (value === null) {
      //* right
      if (squares[count + 1] && this.checkRightEdge(count + 1) && !clicked) {
        console.log('clicked + 1', count + 1, clicked)
        squares[count + 1].click();
      }
      //* left
      if (squares[count - 1] && this.checkLeftEdge(count - 1) && !clicked) {
        console.log('clicked - 1', count - 1, clicked)
        squares[count - 1].click();
      }
      //* bottom left
      // if (squares[count + boardSize - 1] && !clicked && this.checkLeftEdge(count + boardSize - 1)) {
      //   squares[count + boardSize - 1].click();
      // }
      //* top right
      // if (squares[count - boardSize - 1] && !clicked && this.checkRightEdge(count - boardSize - 1)) {
      //   squares[count - boardSize - 1].click();
      // }
      //* bottom middle
      if (squares[count + boardSize] && !clicked) {
        console.log('clicked + 9', count + boardSize, clicked)
        squares[count + boardSize].click();
      }
      //* top middle
      if (squares[count - boardSize] && !clicked) {
        console.log('clicked - 9', count - boardSize, clicked)
        squares[count - boardSize].click();
      }
      //* bottom right
      // if (squares[count + boardSize + 1] && !clicked && this.checkRightEdge(count + boardSize + 1)) {
      //   squares[count + boardSize + 1].click();
      // }
      //* top left
      // if (squares[count - boardSize + 1] && !clicked && this.checkLeftEdge(count - boardSize + 1)) {
      //   squares[count - boardSize + 1].click();
      // }
    }
  }
  /*
  Is not adjacent to a mine, the square is blank and should behave as if the 8 adjacent squares were also clicked. For each of those squares, their neighboring squares continue to be revealed in each direction (i.e., this step is applied recursively to all neighboring squares) until the edge of the board is reached or until a square is reached that is adjacent to a mine, in which case the previous rule applies.
  */

  checkLeftEdge(index) {
    const { board } = this.props;

    if ((index + board.length) % board.length === board.length - 1) {
      return false;
    }
    return true;
  }

  checkRightEdge(index) {
    const { board } = this.props;

    if ((index + board.length) % board.length === 0) {
      return false;
    }
    return true;
  }


  handleClick() {
    const { state, board, value, gameStarted, handleTimerClick, handleSquareClick, decrementNumCount } = this.props;
    const squares = document.getElementsByClassName("square");
    
    // this.checkFirstClick();    //! FIX ME - ensure first click is on a null square

    if (state === "alive") {
      if (value !== "MINE" && value !== null) {
        decrementNumCount();
      }
  
      if (!this.state.flagged) {
        this.setState({
          clicked: true
        }, this.checkNeighbors(value));
      }
      
      if (gameStarted === false) {
        handleTimerClick();
      }
      
      handleSquareClick(value, () => {
        let count = 0;
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board.length; j++) {
            count++;
            if (board[i][j] === "MINE") {    //! FIX ME - add number counter for "win" logic
              // squares[count - 1].click(); // Leading to another infinite loop...
              // console.log('mine', count - 1)
            }
          }
        }
      });
    }
  }

  handleRightClick(e) {
    const { increment, decrement } = this.props;
    const { flagged, clicked } = this.state;

    if (!clicked) {
      if (flagged) {
        increment();
      } else {
        decrement();
      }
    }

    this.setState({
      flagged: !flagged
    });

    this.placeFlag();
    e.preventDefault();
  }

  placeFlag() {
    const { count } = this.props;
    const { flagged, clicked } = this.state;
    const square = document.getElementsByClassName(`square${count}`);
  
    // document.styleSheets[0].insertRule('.square:active { border-style: outset !important; }', 0);
    // document.styleSheets[0].cssRules[0].style.borderStyle = 'outset';    //! FIX ME - remove right click button animation

    if (!flagged && !clicked) {
      square[0].style.background = `url(${flag}) 3px 3px`;
      square[0].style.backgroundRepeat = "no-repeat";
      square[0].style.backgroundSize = "18px 18px";
    } else {
      // document.styleSheets[0].insertRule('.square:active { border-style: outset; }', 0);
      square[0].style.background = "none";
    }
  }

  checkFirstClick() {
    const { value, board, gameStarted, updateBoard } = this.props;

    if (!gameStarted && value !== null) {
      console.log('first click value', value)
      // updateBoard(board.length);
    }
  }

  convertValue() {
    const { value } = this.props;

    if (value === 1) {
      return <img className="tiles" src={one} style={{width: "14px"}} />
    } else if (value === 2) {
      return <img className="tiles" src={two} />
    } else if (value === 3) {
      return <img className="tiles" src={three} />
    } else if (value === 4) {
      return <img className="tiles" src={four} />
    } else if (value === 5) {
      return <img className="tiles" src={five} />
    } else if (value === 6) {
      return <img className="tiles" src={six} />
    } else if (value === 7) {
      return <img className="tiles" src={seven} />
    } else if (value === 8) {
      return <img className="tiles" src={eight} />
    } else if (value === "MINE") {
      return <img src={clickedMine} style={{width: "28px"}} />
    }
  }

  render() {
    const { count, value } = this.props;
    const { clicked } = this.state;
    const square = document.getElementsByClassName(`square${count}`);

    if (clicked) {
      square[0].style.border = "1px solid #7B7B7B";
    }

    return (
      <button className={`square square${count} unselectable`} onClick={() => { this.handleClick() }} onContextMenu={(e) => { this.handleRightClick(e) }}>
        {clicked ? this.convertValue() : null}
        <div className="hide">{value}</div>
        {/* {count} */}
      </button>
    );
  }
}

export default Square;