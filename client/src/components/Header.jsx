import React, { Component, Fragment } from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '000'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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

  render() {
    const pad = (str) => {
      str = str.toString();
      return str.length < 3 ? pad("0" + str, 3) : str;
    }

    return (
      <Fragment>
        <MineCount mines={pad(this.props.mines)} />
        <NewGameButton handleClick={this.handleClick} />
        <Timer time={this.state.time} />
      </Fragment>
    );
  }
}

export default Header;