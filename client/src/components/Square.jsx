import React, { Component } from 'react';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/six.png';
import seven from '../images/seven.png';
import eight from '../images/eight.png';
import mine from '../images/unclicked-mine.png';
import clickedMine from '../images/clicked-mine.png';

class Square extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.convertValue = this.convertValue.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  handleRightClick() {
    const square = document.getElementsByClassName(`square${this.props.count}`);
    const allSquares = document.getElementsByClassName('square');
    
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].addEventListener('contextmenu', (e) => {
        e.preventDefault();
        console.log(square[0])
        square[0].style.border = "4px solid #7B7B7B";
        return false;
      }, false);
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
    } else if (value === 'MINE') {
      return <img src={clickedMine} style={{width: "28px"}} />
    }
  }

  render() {
    const square = document.getElementsByClassName(`square${this.props.count}`);
    if (this.state.clicked) {
      square[0].style.border = "1px solid #7B7B7B";
    }

    return (
      <button className={`square square${this.props.count} unselectable`} onClick={() => { this.handleClick() }} onContextMenu={this.handleRightClick}>
        {this.state.clicked ? this.convertValue() : null}
      </button>
    );
  }
}

export default Square;